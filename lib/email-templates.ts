export interface ResearchLeadEmailData {
  name: string
  email: string
  projectType: string
  paperTitle?: string
  message: string
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kryoforge.vercel.app"

export function renderResearchLeadEmail(data: ResearchLeadEmailData): string {
  const name = escapeHtml(data.name)
  const email = escapeHtml(data.email)
  const projectType = escapeHtml(data.projectType)
  const paperTitle = data.paperTitle ? escapeHtml(data.paperTitle) : "Not specified"
  const message = escapeHtml(data.message)
  const replySubject = encodeURIComponent(`Re: Research Consultation [${data.projectType}] — KryoForge`)

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Research Implementation Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0c0a24; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #efedff;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0c0a24; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #17143a; border-radius: 20px; overflow: hidden; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 16px 40px rgba(0,0,0,0.5);">
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #38bdf8 0%, #a855f7 50%, #f43f5e 100%);"></td>
          </tr>
          <tr>
            <td style="padding: 28px 32px; border-bottom: 1px solid rgba(255,255,255,0.1);">
              <span style="font-size: 18px; font-weight: 800; color: #ffffff; letter-spacing: -0.3px;">
                Kryo<span style="color: #9a86ff;">Forge</span> Research Studio
              </span>
              <span style="display: block; font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.8px; margin-top: 4px;">
                Computational Research & Simulation
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px;">
              <h1 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 800; color: #ffffff;">
                New Paper / Simulation Request
              </h1>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: rgba(255,255,255,0.04); border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #94a3b8; text-transform: uppercase;">Researcher</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 14px; font-weight: 700; color: #ffffff;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #94a3b8; text-transform: uppercase;">Email</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 14px; font-weight: 600;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #94a3b8; text-transform: uppercase;">Discipline</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 13px; font-weight: 700; color: #c084fc;">${projectType}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 12px; color: #94a3b8; text-transform: uppercase;">Base Paper Ref</td>
                  <td style="padding: 12px 16px; font-size: 13px; color: #ffffff;">${paperTitle}</td>
                </tr>
              </table>
              <div style="background-color: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 18px; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; margin-bottom: 24px;">${message}</div>
              <div style="text-align: center;">
                <a href="mailto:${email}?subject=${replySubject}" style="display: inline-block; padding: 12px 28px; background: linear-gradient(135deg, #38bdf8 0%, #a855f7 50%, #f43f5e 100%); color: #ffffff; text-decoration: none; font-size: 13.5px; font-weight: 700; border-radius: 9999px;">
                  Reply to Researcher &rarr;
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px 32px; background-color: rgba(0,0,0,0.2); border-top: 1px solid rgba(255,255,255,0.08); text-align: center; font-size: 11px; color: #94a3b8;">
              Dispatched via <a href="${siteUrl}" style="color: #9a86ff; text-decoration: none;">KryoForge Research Portal</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}
