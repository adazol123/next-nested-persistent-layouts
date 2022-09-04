import React from "react";

export default function PropsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            Props Layout
            {children}
        </div>
    )
}