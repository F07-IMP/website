"use client";

import { useState } from "react";
import { MDSearchTreeEntry } from "../../types/md-search-tree-entry";
import fs from "node:fs/promises";
import path from "node:path";
import { FileTreeNode } from "@/app/q-a/page";
import { ChildProcess } from "node:child_process";

type MDSearchTreeProps = {
    tree: FileTreeNode[];
    onEntryClick: (node: FileTreeNode) => void;
};

export default function MDSearchTree({
    tree,
    onEntryClick,
}: MDSearchTreeProps) {
    return (
        <div className="w-fit bg-background-accent px-2 py-2 rounded">
            {tree.map((child) => (
                <TreeNode
                    key={child.name}
                    node={child}
                    onEntryClick={onEntryClick}
                />
            ))}
        </div>
    );
}

function TreeNode({
    node,
    onEntryClick,
}: {
    node: FileTreeNode;
    onEntryClick: (node: FileTreeNode) => void;
}) {
    return (
        <div className="ml-4">
            <button type="button" onClick={() => onEntryClick(node)}>
                {node.name}
            </button>

            {node.children.map((child) => (
                <TreeNode
                    key={child.name}
                    node={child}
                    onEntryClick={onEntryClick}
                />
            ))}
        </div>
    );
}
