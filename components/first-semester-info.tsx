"use client";

import Link from "next/link";

import { ExternalLinkIcon } from "../lib/svgs";

type InfoCardProps = {
  title: string;
  children: React.ReactNode;
};

function InfoCard({ title, children }: InfoCardProps) {
  return (
    <article className="rounded-lg bg-background-accent p-6">
      <h2 className="mb-3 text-xl font-semibold">{title}</h2>

      <div className="max-w-prose space-y-4 leading-7">{children}</div>
    </article>
  );
}

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <Link
      href={href}
      className="flex w-fit items-center gap-1 transition-transform hover:translate-x-1 hover:underline"
    >
      <ExternalLinkIcon size={14} strokeWidth={2.25} aria-hidden="true" />

      <span>{children}</span>
    </Link>
  );
}

type InfoTileProps = {
  title: string;
  children: React.ReactNode;
};

function InfoTile({ title, children }: InfoTileProps) {
  return (
    <article className="break-inside-avoid rounded bg-background-accent p-4">
      <h2 className="mb-3 text-[22px] font-bold">{title}</h2>
      {children}
    </article>
  );
}

const importantLinks = [
  {
    label: "ILU",
    href: "https://ilu.th-koeln.de",
  },
  {
    label: "PSSO",
    href: "http://psso.fh-koeln.de/qisserver/rds?state=user&type=0&application=QISPOS",
  },
  {
    label: "CAMS",
    href: "https://cams.th-koeln.de/",
  },
  {
    label: "Discord Server der Fachschaft",
    href: "https://discord.gg/e8kt89Qh9G",
  },
  {
    label: "Unsere Fachschaft auf Instagram",
    href: "https://www.instagram.com/fachschaftimp/",
  },
];

//TODO: Add lecture plan folder link
function ImportantLinks() {
  return (
    <InfoTile title="Wichtige Links">
      <div className="flex flex-col gap-2">
        {importantLinks.map((link) => (
          <ExternalLink key={link.href} href={link.href}>
            {link.label}
          </ExternalLink>
        ))}
      </div>
    </InfoTile>
  );
}
//TODO: Masterstudents section
function UniversityExperience() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <InfoCard title="Du warst schon einmal an einer Uni?">
        <p>
          Falls du schon einmal an einer Universität studiert hast, ist der
          größte Unterschied wahrscheinlich die Fächerwahl. Die ist hier
          deutlich simpler als an vielen Unis.
        </p>

        <p>
          Es gibt einen Stundenplan, den du grundsätzlich einfach befolgen
          kannst. Für Vorlesungen musst du dich nicht verbindlich anmelden und
          auch Seminare und Co. sind simpler gehalten.
        </p>
      </InfoCard>

      <InfoCard title="Du warst noch nie an einer Uni oder Hochschule?">
        <div className="space-y-6">
          {/* 1. Erstmal ankommen */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Erstmal keine Sorge</h3>

            <p>Dann keine Sorge. Wir erklären dir hier alles.</p>

            <p>
              Erstmal ist alles halb so wild. Du wurdest wahrscheinlich mit
              tausenden Informationen überschüttet und hast trotzdem das Gefühl,
              nicht richtig mitzukommen. Das ist am Anfang ganz normal und gar
              nicht schlimm.
            </p>

            <p>
              Aber du kannst dich erstmal entspannen. Bei Fragen kannst du dich
              jederzeit an uns oder auch Professoren und weitere Dozenten
              wenden.
            </p>
          </div>

          {/* 2. Veranstaltungen */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              Veranstaltungen und Vorlesungen
            </h3>

            <p>
              Zunächst einmal Vorlesungen und so. Man muss sich nicht für
              Veranstaltungen verbindlich anmelden.
            </p>

            <p>
              Vorlesungen kann man immer besuchen und auch Übungen und Seminare
              sind zwar manchmal pro Termin teilnehmerbegrenzt, aber es gibt
              genug Gruppen, sodass alle teilnehmen können.
            </p>

            <p>
              Falls es mal Probleme gibt, lässt sich auch fast alles mit den
              Professoren direkt klären. Alles weitere zu möglichen Ausnahmen
              erfahrt ihr in den entsprechenden Semestern, wenn ihr eh schon
              etwas erfahrener seid.
            </p>
          </div>

          {/* 3. ILU und PSSO */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              ILU, PSSO und Prüfungsanmeldung
            </h3>

            <p>
              Wir empfehlen aber grundsätzlich, den Vorlesungen auf ILU
              beizutreten. Das ist keine direkte Anmeldung zum Kurs, aber dort
              könnt ihr Vorlesungsmaterialien etc. finden.
            </p>

            <p>
              Dort tragt ihr euch auch in die Teilnehmerlisten für Übungen ein.
              Die verbindliche Anmeldung zu Prüfungsleistungen findet in PSSO
              statt.
            </p>

            <p>
              Da müsst ihr euch aber auch erstmal wenig Gedanken machen. Wie das
              funktioniert, wird euch noch in einer dedizierten Veranstaltung
              vom Prüfungsausschuss erklärt.
            </p>
          </div>

          {/* 4. Prüfungen */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Prüfungsleistungen</h3>

            <p>
              Nur zur Klarheit: Es gibt semesterbegleitende Prüfungen und
              "normale" Prüfungen.
            </p>

            <p>
              Semesterbegleitende Prüfungen sind meistens Arbeitsblätter oder
              Fachgespräche und gelten in manchen Fächern als Voraussetzung für
              die Teilnahme an einer Prüfung.
            </p>

            <p>
              Dafür habt ihr noch genug Zeit, um euch anzumelden, und es eilt
              erstmal nicht. Ihr könnt erstmal die Veranstaltung über
              Prüfungsangelegenheiten abwarten.
            </p>
          </div>
        </div>
      </InfoCard>
    </section>
  );
}

function WhyIMP() {
  return (
    <InfoTile title="Warum IMP?">
      <p>
        IMP steht für Institut für Medien und Phototechnik. Das ist eine Art
        Überbleibsel aus vorigen Studiengängen, aus denen Medientechnologie
        entstanden ist.
      </p>
    </InfoTile>
  );
}

function SemesterDates() {
  return (
    <InfoTile title="Termine im Semester">
      <p>
        Termine im Semester findest du{" "}
        <Link
          className="text-accent hover:underline"
          href="https://ilu.th-koeln.de/ilias.php?baseClass=ilrepositorygui&cmdNode=z1:o0&cmdClass=ilObjFileGUI&cmd=sendfile&ref_id=871850"
        >
          hier
        </Link>
        .
      </p>

      <p>
        Den <span className="font-semibold">vorläufigen</span> Prüfungsplan
        findest du{" "}
        <Link
          className="text-accent hover:underline"
          href="https://ilu.th-koeln.de/ilias.php?baseClass=ilrepositorygui&cmdNode=z1:o0&cmdClass=ilObjFileGUI&cmd=sendfile&ref_id=882639"
        >
          hier
        </Link>
        .
      </p>
    </InfoTile>
  );
}

function OpeningHours() {
  return (
    <InfoTile title="Öffnungszeiten">
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Hauptgebäude</h3>

          <dl className="mt-1 space-y-1">
            <div className="flex justify-between gap-4">
              <dt>Mo–Fr</dt>
              <dd>6:30–22:00 Uhr</dd>
            </div>

            <div className="flex justify-between gap-4">
              <dt>Sa</dt>
              <dd>07:00–19:00 Uhr</dd>
            </div>
          </dl>
        </div>

        <div>
          <h3 className="font-semibold">Bibliothek</h3>

          <dl className="mt-1 space-y-1">
            <div className="flex justify-between gap-4">
              <dt>Mo–Fr</dt>
              <dd>09:00–21:30 Uhr</dd>
            </div>

            <div className="flex justify-between gap-4">
              <dt>Sa</dt>
              <dd>10:00–18:30 Uhr</dd>
            </div>
          </dl>
        </div>
      </div>
    </InfoTile>
  );
}

function AdditionalInformation() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <ImportantLinks />
      <WhyIMP />
      <SemesterDates />
      <OpeningHours />
    </section>
  );
}

export default function FirstSemesterInfo() {
  return (
    <div className="space-y-8">
      <UniversityExperience />
      <AdditionalInformation />
    </div>
  );
}
