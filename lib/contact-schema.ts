import { z } from "zod"

export const researchProjectTypes = [
  "NS-3 Network & Protocol Simulation (C++)",
  "Cyber-Security / Threat & Attack Modeling",
  "Deep Learning / Spiking Neural Networks (SNN)",
  "Quantum Computing / VQE Algorithm Benchmark",
  "Simulation Debugging & 300 DPI Python Plotting",
  "Base Paper Implementation (IEEE / Elsevier / Springer)",
  "Custom Novel Algorithm + Comparative Benchmark Suite",
  "Reviewer Revisions / Parameter Tweaks",
  "Other Research Workflow",
] as const

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name or research handle (at least 2 characters).")
    .max(80, "Name must be 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .max(160, "Email must be 160 characters or fewer.")
    .pipe(z.email("Please enter a valid academic or professional email address.")),
  projectType: z.enum(researchProjectTypes, {
    error: "Please select a research specialization or project tier.",
  }),
  paperTitle: z.string().trim().max(180).optional(),
  message: z
    .string()
    .trim()
    .min(20, "Please share key details regarding your base paper, topology, or target metrics (at least 20 characters).")
    .max(3000, "Message must be 3000 characters or fewer."),
})

export type ContactInput = z.infer<typeof contactSchema>
export type ContactField = keyof ContactInput
