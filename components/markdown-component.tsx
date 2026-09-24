// "use client";

// import { MDXProvider } from "@mdx-js/react";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// // import { pathHasPrefix } from "next/dist/shared/lib/router/utils/path-has-prefix";
// import fs from "node:fs/promises";
// import path from "node:path";

// // import Disclaimer from "~/components/Disclaimer";
// // import PdfEmbed from "~/components/PdfEmbed";

// const components = {
//     // PdfEmbed,
//     // Disclaimer,
// };

// const mdxFiles = import.meta.glob("../lib/md/*.md");

// type MarkdownPageProps = {
//     fileName: string;
// };

// export default async function MarkdownPage({ fileName }: MarkdownPageProps) {
//     const filePath = path.join(process.cwd(), "lib/md", fileName);
//     const markdown = await fs.readFile(filePath, "utf8");

//     const { "*": slug } = useParams();
//     const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(
//         null,
//     );
//     const [notFound, setNotFound] = useState(false);

//     useEffect(() => {
//         if (!slug) return;
//         setNotFound(false);
//         setMDXContent(null);

//         // const key = `../markdown/${slug}.mdx`;
//         const loader = mdxFiles[filePath];

//         if (!loader) {
//             setNotFound(true);
//             return;
//         }

//         loader()
//             .then((mod: any) => setMDXContent(() => mod.default))
//             .catch(() => setNotFound(true));
//     }, [slug]);

//     return (
//         <div>
//             <MDXProvider components={components}>
//                 {notFound && <h1>Not found</h1>}
//                 {MDXContent && <MDXContent />}
//             </MDXProvider>
//         </div>
//     );
// }
import fs from "node:fs/promises";
import path from "node:path";
import ReactMarkdown from "react-markdown";

const test = "# Hello\n\n## World\n\n---\n\nTest";

type MarkdownPageProps = {
    fileName: string;
};

export default async function MarkdownPage({ fileName }: MarkdownPageProps) {
    const filePath = path.join(process.cwd(), "lib/md", fileName);
    const markdown = await fs.readFile(filePath, "utf8");
    console.log(JSON.stringify(markdown.slice(0, 200)));

    console.log(markdown);
    console.log(JSON.stringify(markdown));
    console.log(markdown.includes("\n"));
    // return (
    //     <article>
    //         <ReactMarkdown>{markdown}</ReactMarkdown>
    //     </article>
    // );
    return (
        <article className="markdown bg-background-accent">
            <ReactMarkdown>{test}</ReactMarkdown>
        </article>
    );
}
