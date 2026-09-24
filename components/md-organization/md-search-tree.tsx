"use client";

import { useState } from "react";
import { MDSearchTreeEntry } from "../../types/md-search-tree-entry";
import fs from "node:fs/promises";
import path from "node:path";
import { FileTreeNode } from "@/app/q-a/page";
import { ChildProcess } from "node:child_process";

type MDSearchTreeProps = {
    tree: FileTreeNode[];
};

export default function MDSearchTree({ tree }: MDSearchTreeProps) {
    return (
        <div className="w-fit bg-background-accent px-2 py-2 rounded">
            {tree.map((child) => (
                <TreeNode key={child.name} node={child} />
            ))}
        </div>
    );
}

function TreeNode({ node }: { node: FileTreeNode }) {
    return (
        <div className="ml-4">
            <p>{node.name}</p>

            {node.children.map((child) => (
                <TreeNode key={child.name} node={child} />
            ))}
        </div>
    );
}
