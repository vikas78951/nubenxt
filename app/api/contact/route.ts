import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { contactData } from "@/lib/data/contact.data"

interface ContactRequestBody {
  name: string
  businessName: string
  email: string
  phone?: string
  service?: string
  projectDetails: string
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(req: Request) {
  try {
    const body: ContactRequestBody = await req.json()
    const { name, businessName, email, phone, service, projectDetails } = body

    // Server-side validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Name must be at least 2 characters." },
        { status: 400 }
      )
    }

    if (!businessName || !businessName.trim()) {
      return NextResponse.json(
        { success: false, error: "Business name is required." },
        { status: 400 }
      )
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      )
    }

    if (!projectDetails || projectDetails.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Project details must be at least 10 characters." },
        { status: 400 }
      )
    }

    const smtpUser = process.env.SMTP_USER || contactData.mail
    const smtpPass = process.env.SMTP_PASS

    if (!smtpPass) {
      console.warn(
        "⚠️ [Craftorus Contact API] SMTP_PASS is not set in environment variables. " +
        "Please add SMTP_USER and SMTP_PASS (Gmail 16-character App Password) to .env.local to enable live email delivery."
      )
      return NextResponse.json(
        {
          success: true,
          simulated: true,
          message: "Inquiry received. (SMTP credentials pending configuration in .env.local)",
        },
        { status: 200 }
      )
    }

    // Configure Nodemailer Transporter for Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const safeName = escapeHtml(name.trim())
    const safeBusiness = escapeHtml(businessName.trim())
    const safeEmail = escapeHtml(email.trim())
    const safePhone = phone ? escapeHtml(phone.trim()) : "Not provided"
    const safeService = service ? escapeHtml(service.trim()) : "General Inquiry"
    const safeDetails = escapeHtml(projectDetails.trim()).replace(/\n/g, "<br />")

    const timestampId = `${Date.now()}.${Math.random().toString(36).substring(2, 9)}`

    // 1. Notification Email to Admin (Craftorus Team)
    const adminMailOptions = {
      from: {
        name: "Craftorus Inquiries",
        address: smtpUser,
      },
      to: smtpUser,
      replyTo: `${safeName} <${email.trim()}>`,
      subject: `New Inquiry: ${name.trim()} - ${businessName.trim()} (${safeService})`,
      headers: {
        "X-Entity-Ref-ID": timestampId,
        "Auto-Submitted": "auto-generated",
      },
      text: `New Inquiry Received:

Name: ${name.trim()}
Business: ${businessName.trim()}
Email: ${email.trim()}
Phone: ${phone?.trim() || "Not provided"}
Service: ${service?.trim() || "General Inquiry"}

Project Details:
${projectDetails.trim()}

---
Craftorus Contact System
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 24px; }
            .card { max-width: 580px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 32px; box-sizing: border-box; }
            h2 { margin: 0 0 20px; font-size: 20px; color: #0f172a; border-bottom: 2px solid #16a34a; padding-bottom: 12px; }
            .item { margin-bottom: 14px; font-size: 15px; }
            .label { font-weight: 600; color: #64748b; width: 140px; display: inline-block; }
            .value { color: #0f172a; }
            .message-box { background: #f1f5f9; border-radius: 6px; padding: 16px; margin-top: 16px; font-size: 14px; color: #334155; line-height: 1.6; }
            .footer { margin-top: 28px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 16px; }
            .btn { display: inline-block; background-color: #16a34a; color: #ffffff !important; font-size: 14px; font-weight: 600; text-decoration: none; padding: 10px 20px; border-radius: 6px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="card">
            <h2>New Project Inquiry</h2>
            <div class="item"><span class="label">Name:</span> <span class="value"><strong>${safeName}</strong></span></div>
            <div class="item"><span class="label">Business:</span> <span class="value">${safeBusiness}</span></div>
            <div class="item"><span class="label">Email:</span> <span class="value"><a href="mailto:${safeEmail}" style="color: #16a34a; text-decoration: none;">${safeEmail}</a></span></div>
            <div class="item"><span class="label">Phone:</span> <span class="value">${safePhone}</span></div>
            <div class="item"><span class="label">Service:</span> <span class="value"><strong>${safeService}</strong></span></div>
            
            <div style="margin-top: 20px;">
              <span class="label" style="display: block; margin-bottom: 6px;">Project Details:</span>
              <div class="message-box">${safeDetails}</div>
            </div>

            <div style="margin-top: 24px;">
              <a href="mailto:${safeEmail}?subject=Re:%20Craftorus%20Inquiry%20-%20${encodeURIComponent(name.trim())}" class="btn">Reply via Email</a>
            </div>

            <div class="footer">
              Craftorus &bull; ${contactData.address}
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // 2. Simple, Clean Confirmation Email to Client
    const clientMailOptions = {
      from: {
        name: "Craftorus",
        address: smtpUser,
      },
      to: `${safeName} <${email.trim()}>`,
      replyTo: `Craftorus <${smtpUser}>`,
      subject: `Thank you for reaching out - Craftorus`,
      headers: {
        "X-Entity-Ref-ID": timestampId,
        "Auto-Submitted": "auto-generated",
        "X-Auto-Response-Suppress": "All",
        "Precedence": "bulk",
      },
      text: `Hi ${name.trim()},

Thank you for contacting Craftorus. We have received your inquiry regarding ${service?.trim() || "our services"}.

Our team is reviewing your requirements and will get back to you within 24 hours.

Your Submission Details:
- Business Name: ${businessName.trim()}
- Requested Service: ${service?.trim() || "General Inquiry"}
- Message:
${projectDetails.trim()}

Need quick assistance?
- WhatsApp: https://wa.me/${contactData.number}
- Phone: ${contactData.displayNumber}
- Email: ${contactData.mail}

Best regards,
Craftorus Team
${contactData.address}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 24px; }
            .card { max-width: 580px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 32px; box-sizing: border-box; }
            h2 { margin: 0 0 16px; font-size: 22px; color: #0f172a; }
            p { margin: 0 0 16px; font-size: 15px; color: #334155; line-height: 1.6; }
            .summary { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 18px; margin: 20px 0; font-size: 14px; }
            .summary-row { margin-bottom: 8px; }
            .summary-row:last-child { margin-bottom: 0; }
            .label { font-weight: 600; color: #64748b; }
            .btn { display: inline-block; background-color: #16a34a; color: #ffffff !important; font-size: 14px; font-weight: 600; text-decoration: none; padding: 10px 20px; border-radius: 6px; margin: 8px 0 16px; }
            .footer { margin-top: 28px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 16px; line-height: 1.5; }
          </style>
        </head>
        <body>
          <div class="card">
            <h2>Craftorus</h2>
            <p>Hi ${safeName},</p>
            <p>Thank you for reaching out to us. We have received your inquiry regarding <strong>${safeService}</strong>.</p>
            <p>Our team is reviewing your project details and will get back to you within <strong>24 hours</strong>.</p>
            
            <div class="summary">
              <div class="summary-row"><span class="label">Business:</span> ${safeBusiness}</div>
              <div class="summary-row"><span class="label">Service:</span> ${safeService}</div>
              <div class="summary-row" style="margin-top: 10px;"><span class="label">Your Message:</span><br /><span style="color: #475569; display: block; margin-top: 4px;">${safeDetails}</span></div>
            </div>

            <p style="font-size: 14px; margin-bottom: 8px;">Need immediate assistance or prefer a quick conversation?</p>
            <a href="https://wa.me/${contactData.number}" class="btn">Chat on WhatsApp</a>

            <p style="font-size: 13px; color: #64748b; margin-top: 12px;">
              Direct Phone: <a href="tel:${contactData.telNumber}" style="color: #16a34a; text-decoration: none;">${contactData.displayNumber}</a>
            </p>

            <div class="footer">
              <strong>Craftorus</strong> &bull; ${contactData.address}<br />
              Architectural technology and digital infrastructure constructed with precision.
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Send both emails concurrently
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions),
    ])

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully and confirmation sent.",
      },
      { status: 200 }
    )
  } catch (error: unknown) {
    console.error("❌ [Craftorus Contact API Error]:", error)
    const errMessage = error instanceof Error ? error.message : "Failed to process contact inquiry"
    return NextResponse.json(
      { success: false, error: errMessage },
      { status: 500 }
    )
  }
}
