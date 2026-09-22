"use client";

import FirstSemesterInfo from "../../components/first-semester-info";

export default function page() {
    return (
        <div>
            <h1 className="text-[22px] font-bold">Neu hier?</h1>
            <h2 className="text-[18px] font-semibold">
                Keine Sorge, wir nicht. Also, was ist zum Studienstart an der TH
                nützlich zu wissen?
            </h2>
            <FirstSemesterInfo />
        </div>
    );
}
