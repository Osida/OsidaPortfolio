import {NextRequest, NextResponse} from "next/server";
import {Resend} from "resend";
import {ContactedEmail} from "@/lib/react-email/emails";
import {FormDataType} from "@/app/contact/page";

const resend = new Resend(process.env.RESEND_API_KEY);
const businessEmail = "osida.richards@gmail.com" || process.env.NEXT_PUBLIC_BUSINESS_EMAIL as string;

export async function POST(req: NextRequest) {
    const {sender, email, subject, message} = await req.json() as FormDataType;

    try {
        const data = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: [businessEmail],
            subject: subject,
            react: ContactedEmail({senderName: sender, senderEmail: email, subject, message}),
        });

        return NextResponse.json({data}, {status: 200});
    } catch (error) {
        return NextResponse.json({error: error}, {status: 500});
    }
}