import fs from "node:fs";
import path from "node:path";

const titleCaseExceptions = new Set(["a", "an", "and", "as", "at", "but", "by", "for", "from", "in", "nor", "of", "on", "or", "the", "to", "via", "with"]);

function capitalize(word: string): string {
	return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function parseName(name: string): string {
	const words = name
		.replace(/\.[^.]+$/, "")
		.replace(/-/g, " ")
		.trim()
		.split(/\s+/);

	return words
		.map((word, index) => {
			const lowerCased = word.toLowerCase();
			const isFirstOrLast = index === 0 || index === words.length - 1;

			return !isFirstOrLast && titleCaseExceptions.has(lowerCased) ? lowerCased : capitalize(word);
		})
		.join(" ");
}

type ContentFile = {
	type: "file";
	level: number;
	name: string;
	path: string;
};

type ContentDirectory = {
	type: "directory";
	level: number;
	name: string;
	path: string;
	items: ContentNode[];
};

type ContentNode = ContentFile | ContentDirectory;

export type ContentTree = ContentNode[];

function parseDirectory(directoryPath: string, level: number): ContentNode[] {
	const items: ContentNode[] = [];

	const entries = fs.readdirSync(directoryPath, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));

	for (const entry of entries) {
		const entryPath = path.join(directoryPath, entry.name);

		if (entry.isDirectory()) {
			items.push({
				type: "directory",
				level,
				name: parseName(entry.name),
				path: entryPath,
				items: parseDirectory(entryPath, level + 1),
			});
		} else if (entry.isFile()) {
			items.push({
				type: "file",
				level,
				name: parseName(entry.name),
				path: entryPath,
			});
		}
	}

	return items;
}

export function parseContentDir(contentDir: string): ContentNode[] {
	return parseDirectory(contentDir, 0);
}

export function generateNavigation() {
	console.log("Generating navigation...");
	const contentDir = path.join(process.cwd(), "markdown");
	const navigation = parseContentDir(contentDir);

	fs.writeFileSync(path.join(process.cwd(), "/lib/docs/navigation.json"), JSON.stringify(navigation, null, 2));
	console.log("Navigation generated successfully");
}
