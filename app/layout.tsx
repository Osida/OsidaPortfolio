import "../styles/globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import React from "react";
import Nav from "@/components/client/nav/Nav";
import Banner from "@/components/client/banner/Banner";
import {ThemeProvider} from "@/context/ThemeProvider";
import {QueryProvider} from "@/lib";
import {ToastContainer} from "react-toastify";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Osida Richards 🤯",
    description: "Generated by create next app",
};

export default function RootLayout({children}: { children: React.ReactNode }) {

    return (
        <html lang="en" data-theme="dark">
        <body className={`${inter.className} bg-primary text-fontColor theme-transition`}>
        <div className="relative min-h-screen mx-auto overflow-x-hidden">
            <QueryProvider>
                <ThemeProvider>
                    <Nav/>
                    <Banner title={"Osida Richards"}/>
                    {children}
                </ThemeProvider>
            </QueryProvider>
        </div>
        </body>
        </html>
    );
}
