import React from "react";

type QATileProps = {
    title: string;
    children: React.ReactNode;
};

export default function QACard({ title, children }: QATileProps) {
    return (
        <article className="break-inside-avoid py-4">
            <h2 className="mb-3 text-[24px] font-bold">{title}</h2>
            {children}
        </article>
    );
}
