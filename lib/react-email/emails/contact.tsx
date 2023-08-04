import {Body, Container, Head, Html, Section, Text} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
    senderName: string;
    senderEmail: string;
    subject: string;
    message: string;
}

const ContactedEmail = ({senderName, senderEmail, subject, message}: ContactEmailProps) => (
    <Html>
        <Head/>
        <Body style={main}>
            <Container>
                <Section>
                    <Text style={heading}>New Contact Request</Text>
                    <Text style={paragraph}>
                        You have received a new contact request from:
                    </Text>
                    <Text style={details}>
                        Name: {senderName}
                    </Text>
                    <Text style={details}>
                        Email: {senderEmail}
                    </Text>
                    <Text style={details}>
                        Subject: {subject}
                    </Text>
                    <Text style={details}>
                        Message: {message}
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default ContactedEmail;

const main = {
    fontFamily:
        "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif",
    margin: "0",
    padding: "0",
    background: "#f7fafc",
    lineHeight: "1.4",
    color: "#718096",
    width: "100%",
    height: "100%",
};

const heading = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2d3748",
    textAlign: "center" as const,
    margin: "20px 0",
};

const paragraph = {
    fontSize: "16px",
    color: "#4a5568",
    textAlign: "left" as const,
    marginBottom: "10px",
};

const details = {
    fontSize: "16px",
    color: "#2d3748",
    textAlign: "left" as const,
    marginBottom: "8px",
};