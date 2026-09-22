"use client";

import Link from "next/link";
import { ExternalLinkIcon } from "../lib/svgs";

export default function FirstSemesterInfo() {
    return (
        <div className="space-y-8">
            <section className="grid gap-6 lg:grid-cols-2">
                <article className="rounded-lg bg-background-accent p-6">
                    <h2 className="mb-3 text-xl font-semibold">
                        Du warst schon einmal an einer Uni?
                    </h2>
                    <div className="max-w-prose space-y-4 leading-7">
                        <p>
                            Falls du schon einmal an einer Universität studiert
                            hast, ist der größte Unterschied wahrscheinlich die
                            Fächerwahl. Die ist hier deutlich simpler als an
                            vielen Unis. Es gibt einen Studenplan, den du
                            grundsätzlich einfach befolgen kannst. Für
                            Vorlesungen musst du dich nicht verbindend anmelden
                            und auch Seminare und Co. sind simpler gehalten.
                        </p>
                    </div>
                </article>
                <article className="rounded-lg bg-background-accent p-6">
                    <h2 className="mb-3 text-xl font-semibold">
                        Du warst noch nie an einer Uni oder Hochschule?
                    </h2>
                    <div className="max-w-prose space-y-4 leading-7">
                        <p>Dann keine Sorge. Wir erklären dir hier alles.</p>
                        <p>
                            Erstmal ist alles halb so wild. Du wurdest
                            wahrscheinlich mit tausenden Information
                            überschüttet und hast trotzdem das Gefühl, nicht
                            richtig mitzukommen. Das ist am Anfang ganz normal
                            und gar nicht schlimm. Aber du kannst dich erstmal
                            entspannen, bei Fragen kannst du dich jederzeit an
                            uns oder auch Professoren und weitere Dozenten
                            wenden.
                        </p>
                        <p>
                            Zunächst einmal Vorlesungen und so. Man muss sich
                            nicht für Veranstaltungen verbindlich anmelden.
                            Vorlesungen kann man immer besuchen und auch Übungen
                            und Seminare sind zwar manchmal pro Termin
                            Teilnehmerbegrenzt, aber es gibt genug Gruppen,
                            sodass alle teilnehmen können. Falls es mal Probleme
                            gibt lässt sich auch fast alles mit den Professoren
                            direkt klären. Alles weitere zu möglichen Ausnamhen
                            erfahrt ihr in den entsprechenden Semestern, wenn
                            ihr eh schon etwas erfahrener seid.
                        </p>
                        <p>
                            Wir empfehlen aber grundsätzlich den Vorlesungen auf
                            ILU beizutreten. Das ist keine direkte Anmeldung zum
                            Kurs, aber da könnt ihr Vorlesungsmaterialien etc
                            finden und dort tragt ihr euch in die
                            Teilnehmerlisten für Übungen ein. Die Verbindliche
                            Anmeldung zu Prüfungsleistungen findet in PSSO
                            statt. Da müsst ihr euch aber auch erstmal wenig
                            Gedanken machen, wie das funktioniert wird euch noch
                            in einer dedizierten Veranstaltung vom
                            Prüfungsausschuss erklärt. Nur zur Klarheit: Es gibt
                            Semesterbegleitende Prüfungen und "normale"
                            Prüfungen. Semesterbegleitende Prüfunen sind
                            meistens Arbeitsblätter oder Fachgespräche und
                            gelten in manchen Fächern als Vorraussetzunf für die
                            Teilnahme an einer Prüfung. Dafür habt ihr noch
                            genug Zeit um euch anzumelden und es eilt erstmal
                            nicht. Ihr könnt erstmal die Veranstaltung über
                            Prüfungsangelegenheiten abwarten.
                        </p>
                    </div>
                </article>
            </section>
            <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="mb-6 break-inside-avoid rounded bg-background-accent p-4">
                    <h2 className="text-[22px] font-bold">Wichtige Links</h2>
                    <div className="flex flex-col gap-2">
                        <Link
                            href="https://ilu.th-koeln.de"
                            className="flex w-fit items-center gap-1 transition-transform hover:translate-x-1 hover:underline"
                        >
                            <ExternalLinkIcon
                                size={14}
                                strokeWidth={2.25}
                                aria-hidden="true"
                            />
                            <span>ILU</span>
                        </Link>

                        <Link
                            href="http://psso.fh-koeln.de/qisserver/rds?state=user&type=0&application=QISPOS"
                            className="flex w-fit items-center gap-1 transition-transform hover:translate-x-1 hover:underline"
                        >
                            <ExternalLinkIcon
                                size={14}
                                strokeWidth={2.25}
                                aria-hidden="true"
                            />
                            <span>PSSO</span>
                        </Link>

                        <Link
                            href="https://cams.th-koeln.de/"
                            className="flex w-fit items-center gap-1 transition-transform hover:translate-x-1 hover:underline"
                        >
                            <ExternalLinkIcon
                                size={14}
                                strokeWidth={2.25}
                                aria-hidden="true"
                            />
                            <span>CAMS</span>
                        </Link>

                        <Link
                            href="https://discord.gg/e8kt89Qh9G"
                            className="flex w-fit items-center gap-1 transition-transform hover:translate-x-1 hover:underline"
                        >
                            <ExternalLinkIcon
                                size={14}
                                strokeWidth={2.25}
                                aria-hidden="true"
                            />
                            <span>Discord Server der Fachschaft</span>
                        </Link>

                        <Link
                            href="https://www.instagram.com/fachschaftimp/"
                            className="flex w-fit items-center gap-1 transition-transform hover:translate-x-1 hover:underline"
                        >
                            <ExternalLinkIcon
                                size={14}
                                strokeWidth={2.25}
                                aria-hidden="true"
                            />
                            <span>Unsere Fachschaft auf Instagram</span>
                        </Link>
                    </div>
                </div>

                <div className="mb-6 break-inside-avoid rounded bg-background-accent p-4">
                    <h1 className="text-[22px] font-bold">Warum IMP?</h1>
                    IMP steht für Institut für Medien und Phototechnik. Das ist
                    eine Art Überbleibsel aus vorigen Studiengängen, aus denen
                    Medientechnologie entstanden ist.
                </div>
                <div className="mb-6 break-inside-avoid rounded bg-background-accent p-4">
                    <h1 className="text-[22px] font-bold">
                        Termine im Semester
                    </h1>
                    Termine im Semester findest du{" "}
                    <Link
                        className="text-accent hover:underline"
                        href="https://ilu.th-koeln.de/ilias.php?baseClass=ilrepositorygui&cmdNode=z1:o0&cmdClass=ilObjFileGUI&cmd=sendfile&ref_id=871850"
                    >
                        hier
                    </Link>
                    <p />
                    Den <span>vorläufigen</span> Prüfungsplan findest du{" "}
                    <Link
                        className="text-accent hover:underline"
                        href="https://ilu.th-koeln.de/ilias.php?baseClass=ilrepositorygui&cmdNode=z1:o0&cmdClass=ilObjFileGUI&cmd=sendfile&ref_id=882639"
                    >
                        hier
                    </Link>
                </div>
                <div className="mb-6 break-inside-avoid rounded bg-background-accent p-4">
                    <h1 className="text-[22px] font-bold">Öffnungszeiten</h1>
                    <span className="text-[16px] font-semibold">
                        Hauptgebäude:
                    </span>
                    <p />
                    Mo-Fr: 6:30 Uhr - 22:00 Uhr <p />
                    Sa: 07:00 - 19:00 Uhr <p />
                    <span className="text-[16px] font-semibold">
                        Bibliothek:
                    </span>
                    <p />
                    Mo-Fr: 09:00 - 21:30 Uhr <p />
                    Sa: 10:00 - 18:30 Uhr
                </div>
            </section>
        </div>
    );
}
