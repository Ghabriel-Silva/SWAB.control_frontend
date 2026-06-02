"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export function PrivateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <>
            <Sidebar open={sidebarOpen} />
            <Header
                sidebarOpen={sidebarOpen}
                toggleSidebar={() =>
                    setSidebarOpen(prev => !prev)
                }
            />

            {children}
        </>
    );
}