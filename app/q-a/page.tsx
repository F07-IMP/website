import QACard from "../../components/q-a-card";
import MarkdownPage from "../../components/markdown-component";
import Link from "next/link";

export default function page() {
    return (
        <div className="mx-auto max-w-4xl space-y-6 px-4 py-8">
            <h1 className="text-[28px] font-bold">Questions & Answers</h1>
            <p>
                Hier werden einige der wichtigsten Fragen zum Studium
                beantwortet. Wenn du das Studium an der TH Köln neu beginnst
                lohnt sich auch ein Blick auf unsere{" "}
                <Link className="underline" href="/first-semester">
                    Erstsemester-Information
                </Link>
                .
            </p>
            <section className="divide-y divide-accent/30">
                <QACard title="Medientechnologie?">
                    Medientechnologie ist ein Ingenieurstudiengang, der sich den
                    vielfältigen technischen Aspekten der Medienwelt widmet. Er
                    wird von der Fakultät für Informations-, Medien- und
                    Elektrotechnik angeboten. Der Bachelorstudiengang
                    Medientechnologie ist für eine Regelstudienzeit von sieben
                    Semestern ausgelegt und schließt mit dem Bachelor of Science
                    (B. Sc.) ab.
                </QACard>
                <QACard title="Was sollte ich mitbringen?">
                    Zugangsvoraussetzung ist die Fachhochschulreife oder das
                    Abitur. Bei der Medientechnologie geht es um Verfahren,
                    Algorithmen und Geräte zur Produktion, Speicherung,
                    Übertragung und Wiedergabe medialer Inhalte, sowie um
                    Medienproduktionsprozesse und -systeme. Dabei interessiert
                    uns, wie diese aufgebaut sind und wie sie funktionieren,
                    aber vor allem, wie wir selbst neue Technologien entwickeln
                    können. Sie sollten deshalb ein Interesse an technischen und
                    naturwissenschaftlichen Fragestellungen mitbringen.
                </QACard>
                <QACard title="Aufbau des Studiums">
                    Mit dem Grundstudium wird über die ersten drei Semester in
                    den Grundlagenfächern zunächst eine solide
                    ingenieurwissenschaftliche Basis vermittelt. Das
                    Hauptstudium bietet anschließend die Möglichkeit, sich für
                    eine spätere Berufswahl schon während des Studiums
                    auszurichten. Hierzu stehen sieben Vertiefungsgebiete zur
                    Verfügung, aus denen vier auszuwählen sind. Um die einzelnen
                    Vertiefungsgebiete untereinander zu vernetzen, ist das
                    sechste Semester als ausgeprägtes Projektsemester
                    strukturiert. Hier werden in den einzelnen
                    Vertiefungsgebieten praxisnahe Projekte durchgeführt, bei
                    denen die Kenntnisse und Fertigkeiten aus den einzelnen
                    Gebieten wieder interdisziplinär kombiniert werden. Im
                    siebten Semester ist ein Fachpraktikum zu absolvieren und
                    die Bachelorarbeit anzufertigen. Mehr zum Masterstudium
                    Medientechnologie gibt es{" "}
                    <Link
                        className="underline"
                        href="https://www.th-koeln.de/studium/medientechnologie-master_1126.php"
                    >
                        hier
                    </Link>
                    .
                </QACard>
                <QACard title="Campus ID">
                    Die campusID ist dein persönlicher Hochschul-Account. Sie
                    besteht aus Benutzername und Passwort und ermöglicht dir die
                    Anmeldung an verschiedenen Systemen, die dir als
                    Hochschulmitglied zur Verfügung gestellt werden. Dazu
                    gehören zum Beispiel dein E-Mail-Postfach der Hochschule,
                    der Zugang zum Hochschulnetz via VPN oder das Prüfungs- und
                    Studierendenservice Online (PSSO).
                    <p className="text-[18px] font-semibold leading-16">
                        Wo bekomme ich meine campusID?
                    </p>
                    Die campusID wird bei der Immatrikulation automatisch
                    zugeteilt. Meistens wird sie dir deshalb in einem Brief
                    schon vor dem Studium mitgeteilt. Falls das nicht erfolgt
                    ist, oder du ihn verloren hast, findest du hier Hilfe.
                    <p className="text-[18px] font-semibold leading-16">
                        Wo benutze ich die campusID ?
                    </p>
                    Du benutzt die campusID hauptsächlich beim LogIn von
                    TH-Webseiten oder Diensten. Wie z.B. das PSSO, ILIAS, S-Mail
                    order sogar dem RechnerPool.
                </QACard>
                <QACard title="MultiCa">
                    Bei der „Multifunktionalen Chipkarte der TH Köln“, der
                    MultiCa, handelt es sich um den Studierendenausweis. Du
                    bekommst Sie zu deiner Immatrikulation. Die Multica hilft
                    dir hauptsächlich dabei, zu beweisen, dass du Student bist.
                    Bei weiteren Fragen solltest du{" "}
                    <Link
                        className="underline"
                        href="https://www.th-koeln.de/studium/studierendenausweis-multica_361.php"
                    >
                        hier
                    </Link>{" "}
                    mal nachgucken.
                </QACard>
                <QACard title="PSSO">
                    PSSO ist ein Serviceangebot der Studierendenverwaltung der
                    TH Köln. Es handelt sich um ein System von
                    Selbstbedienungsfunktionen im Bereich der Studien- und
                    Prüfungsangelegenheiten. PSSO bietet mehrere Funktionen,
                    durch die tagesaktuelle Informationen oder Änderungen online
                    durchführbar sind. Um einen Notenspiegel zu erhalten, ist es
                    nicht mehr nötig sein zum Studierendenservicebüro zu gehen –
                    er kann von zu Hause ausgedruckt werden. Auch Prüfungsan-
                    und Abmeldungen, sowie Adress-, Telefon- und
                    E-Mail-Änderungen sind online durchzuführen.
                    <p>
                        <span className="text-[20px] font-semibold leading-20">
                            Die PSSO besteht aus folgenden Modulen:
                        </span>
                    </p>
                    <p>
                        <span className="text-[18px] font-semibold leading-10">
                            1. Studierendenservice
                        </span>
                    </p>
                    Im Studierendenservice werden Adressen und Kontaktdaten
                    aktualisiert und Studien- und BAföG-Bescheinigungen können
                    an jedem Rechner ausgedruckt werden. Die Bescheinigungen
                    können von Behörden etc. verifiziert werden.
                    <p>
                        <span className="text-[18px] font-semibold leading-10">
                            2. Prüfungsservice (für Studierende)
                        </span>
                    </p>
                    Hierdurch können Studierende (siehe Ausnahmen) ihre
                    Notenspiegel ausdrucken und so jederzeit sehen, ob
                    Prüfungsergebnisse vorliegen. Prüfungsan-/abmeldungen werden
                    online durchgeführt. Des Weiteren können Sie sich
                    informieren, ob sie zu Prüfungen angemeldet sind.
                    <p>
                        <span className="text-[18px] font-semibold leading-10">
                            Für wen gilt dieses Angebot?
                        </span>
                    </p>
                    Der Prüfungsservice kann bereits von fast allen Studierenden
                    genutzt werden (siehe Ausnahmen), der Studierendenservice
                    steht allen Studierenden zur Verfügung.
                    Austausch-Studierende können den Prüfungsservice derzeit nur
                    für die Fakultäten 04 und 05 nutzen. Mehr Infos zum PSSO
                    findest du{" "}
                    <Link
                        className="underline"
                        href="https://www.th-koeln.de/studium/pruefungs--und-studierendenservice-online-psso_5332.php"
                    >
                        hier
                    </Link>
                    .
                </QACard>
                <QACard title="S-Mail">
                    Mit deinem Hochschulaccount steht dir auch eine persönliche
                    E-Mail-Adresse zur Verfügung.Diese hat in den meisten Fällen
                    den folgenden Aufbau:
                    <div className="flex justify-center leading-16">
                        <p className="w-fit font-semibold bg-background-accent px-4 rounded">
                            vorname.nachname@smail.th-koeln.de
                        </p>
                    </div>
                    An diese E-Mail-Adresse versendet die TH Köln wichtige
                    Informationen zu deinem Studium. Es ist daher sehr wichtig,
                    dass Du deine E-Mails regelmäßig abrufst. Wir empfehlen eine
                    Weiterleitung einzurichten. Mehr Infos zur S-Mail gibt es{" "}
                    <Link
                        className="underline"
                        href="https://www.th-koeln.de/hochschule/e-mail_25805.php"
                    >
                        hier
                    </Link>
                    .
                </QACard>
            </section>
        </div>
    );
}
