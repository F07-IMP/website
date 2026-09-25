import fs from "node:fs/promises";
import path from "node:path";
import MDSearchTreeContainer from "../../components/md-organization/md-search-tree-container";

export type FileTreeNode = {
    name: string;
    type: "directory" | "file";
    children: FileTreeNode[];
};

export async function readFileTree(directory: string): Promise<FileTreeNode[]> {
    const entries = await fs.readdir(directory, {
        withFileTypes: true,
    });

    return Promise.all(
        entries
            .filter(
                (entry) => entry.isDirectory() || entry.name.endsWith(".md"),
            )
            .map(async (entry) => {
                const entryPath = path.join(directory, entry.name);
                if (entry.isDirectory()) {
                    return {
                        name: entry.name,
                        type: "directory" as const,
                        children: await readFileTree(entryPath),
                    };
                }
                return {
                    name: entry.name,
                    type: "file" as const,
                    children: [],
                };
            }),
    );
}

export default async function page() {
    // TODO: Get md files from contents/md/*/*.md
    const directory = path.join(process.cwd(), "contents/md/");
    const tree = await readFileTree(directory);

    // TODO: generate org structure
    // TODO: Load content in MarkdownComponent
    // TODO: Load clicked Component
    return (
        <div className="fixed left-4 top-1/2 -translate-y-1/2">
            <MDSearchTreeContainer tree={tree} />
        </div>
    );
}

function handleEntryClick(node: FileTreeNode) {
    console.log("Selected: ", node.name);
}
