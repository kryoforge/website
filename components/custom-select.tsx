"use client"

import { Check, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface Option {
  label: string
  value: string
}

interface CustomSelectProps {
  id?: string
  name: string
  label?: string
  placeholder?: string
  options: readonly string[] | string[] | Option[]
  defaultValue?: string
  value?: string
  onChange?: (val: string) => void
  error?: string
  className?: string
}

export function CustomSelect({
  id,
  name,
  placeholder = "Choose a research specialization",
  options,
  defaultValue = "",
  value: controlledValue,
  onChange,
  error,
  className,
}: CustomSelectProps) {
  const normalizedOptions: Option[] = options.map((opt) =>
    typeof opt === "string" ? { label: opt, value: opt } : opt,
  )

  const [internalValue, setInternalValue] = useState<string>(
    controlledValue ?? defaultValue ?? "",
  )
  const [open, setOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const selectedValue = controlledValue !== undefined ? controlledValue : internalValue
  const selectedIndex = normalizedOptions.findIndex((opt) => opt.value === selectedValue)
  const selectedOption = selectedIndex >= 0 ? normalizedOptions[selectedIndex] : undefined

  useEffect(() => {
    if (controlledValue !== undefined) {
      setInternalValue(controlledValue)
    }
  }, [controlledValue])

  useEffect(() => {
    if (open) {
      setFocusedIndex(selectedIndex >= 0 ? selectedIndex : 0)
    }
  }, [open, selectedIndex])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("touchstart", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [open])

  function handleSelect(val: string) {
    if (controlledValue === undefined) {
      setInternalValue(val)
    }
    onChange?.(val)
    setOpen(false)
    buttonRef.current?.focus()
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        setOpen(true)
      }
      return
    }

    switch (e.key) {
      case "Escape":
        e.preventDefault()
        setOpen(false)
        buttonRef.current?.focus()
        break
      case "ArrowDown":
        e.preventDefault()
        setFocusedIndex((prev) => (prev + 1) % normalizedOptions.length)
        break
      case "ArrowUp":
        e.preventDefault()
        setFocusedIndex((prev) => (prev - 1 + normalizedOptions.length) % normalizedOptions.length)
        break
      case "Enter":
      case " ":
        e.preventDefault()
        if (focusedIndex >= 0 && focusedIndex < normalizedOptions.length) {
          handleSelect(normalizedOptions[focusedIndex].value)
        }
        break
      case "Tab":
        setOpen(false)
        break
    }
  }

  return (
    <div ref={containerRef} className={cn("relative w-full min-w-0 max-w-full", className)}>
      <input type="hidden" name={name} value={selectedValue} />

      <button
        ref={buttonRef}
        id={id}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={`${name}-options`}
        aria-activedescendant={open && focusedIndex >= 0 ? `${name}-opt-${focusedIndex}` : undefined}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex w-full min-w-0 max-w-full cursor-pointer items-center justify-between rounded-2xl border border-input bg-white/70 px-4 py-3 text-left text-sm sm:text-base shadow-inner outline-none transition-all duration-200 dark:bg-white/5 overflow-hidden",
          "focus:border-ring focus:ring-4 focus:ring-ring/20",
          open && "border-ring ring-4 ring-ring/20 shadow-lg",
          error && "border-destructive ring-destructive/20",
        )}
      >
        <span
          className={cn(
            "truncate min-w-0 flex-1 pr-2 text-left",
            !selectedOption && "text-muted-foreground/75",
          )}
          title={selectedOption ? selectedOption.label : placeholder}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          aria-hidden="true"
          className="shrink-0 text-muted-foreground"
        >
          <ChevronDown className="size-5" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={`${name}-options`}
            role="listbox"
            tabIndex={-1}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-50 max-h-60 w-full min-w-0 max-w-full overflow-y-auto rounded-2xl p-1.5 bg-white/95 dark:bg-[#15113d]/95 backdrop-blur-xl border border-slate-200 dark:border-white/20 shadow-2xl [scrollbar-width:thin]"
          >
            <ul className="space-y-1">
              {normalizedOptions.map((opt, idx) => {
                const isSelected = opt.value === selectedValue
                const isFocused = idx === focusedIndex

                return (
                  <li
                    key={opt.value}
                    id={`${name}-opt-${idx}`}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(opt.value)}
                    onMouseEnter={() => setFocusedIndex(idx)}
                    className={cn(
                      "flex cursor-pointer items-center justify-between rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-150 min-w-0 w-full",
                      isSelected
                        ? "bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white shadow-md font-bold"
                        : isFocused
                          ? "bg-slate-100 dark:bg-white/10 text-slate-950 dark:text-white"
                          : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10",
                    )}
                  >
                    <span className="leading-snug break-words min-w-0 flex-1 pr-2 text-left">
                      {opt.label}
                    </span>
                    {isSelected && (
                      <Check aria-hidden="true" className="size-4 shrink-0 stroke-[2.5]" />
                    )}
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
