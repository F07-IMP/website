"use client";

import MDSearchTree from "./md-search-tree";
import type { FileTreeNode } from "../../app/q-a/page";

export default function MDPageClient({ tree }: { tree: FileTreeNode[] }) {
    function handleEntryClick(node: FileTreeNode) {
        console.log("Selected", node.name);
    }

    return <MDSearchTree tree={tree} onEntryClick={handleEntryClick} />;
}
