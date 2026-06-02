"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";

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
                toggleSidebar={() => setSidebarOpen(prev => !prev)}
            />

            {children}
        </>
    );
}