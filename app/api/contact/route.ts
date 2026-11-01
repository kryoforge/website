import { NextResponse } from "next/server"
import { contactSchema } from "@/lib/contact-schema"
import { brand } from "@/lib/data/profile"
import { renderResearchLeadEmail } from "@/lib/email-templates"

export async function POST(request: Request) {
  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: "The request body was not valid JSON." },
      { status: 400 },
    )
  }

  const result = contactSchema.safeParse(payload)
  if (!result.success) {
    const fieldErrors: Record<string, string> = {}
    for (const issue of result.error.issues) {
      const key = String(issue.path[0] ?? "form")
      if (!fieldErrors[key]) fieldErrors[key] = issue.message
    }
    return NextResponse.json({ ok: false, fieldErrors }, { status: 422 })
  }

  const { name, email, projectType, paperTitle, message } = result.data

  // Resend API Option
  if (process.env.RESEND_API_KEY) {
    try {
      const fromEmail = process.env.RESEND_FROM_EMAIL || "KryoForge Research Studio <onboarding@resend.dev>"
      const leadHtml = renderResearchLeadEmail({ name, email, projectType, paperTitle, message })

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [brand.email],
          reply_to: email,
          subject: `New Research Implementation Request: ${name} (${projectType})`,
          html: leadHtml,
          text: `New Research Inquiry from ${name} (${email})\nSpecialization: ${projectType}\nBase Paper: ${paperTitle || "N/A"}\n\nMessage:\n${message}`,
        }),
      })

      if (resendRes.ok) {
        return NextResponse.json({ ok: true, delivered: true, provider: "resend" })
      }
    } catch {
      // Fall through
    }
  }

  // Web3Forms API Option
  const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
  if (web3FormsKey) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name,
          email,
          from_name: name,
          subject: `New Research Model Request: ${name} (${projectType})`,
          message: `Specialization: ${projectType}\nPaper Ref: ${paperTitle || "N/A"}\n\n${message}`,
        }),
      })
      const data = await res.json().catch(() => null)
      if (res.ok && data?.success) {
        return NextResponse.json({ ok: true, delivered: true, provider: "web3forms" })
      }
    } catch {
      // Fall through
    }
  }

  return NextResponse.json({ ok: true, delivered: false })
}
