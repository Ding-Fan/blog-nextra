#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, "../content");
const metaFile = path.join(contentDir, "_meta.ts");

// Read existing _meta.ts and preserve everything except date folders
function readExistingMeta() {
  if (!fs.existsSync(metaFile)) {
    return "export default {\n};\n";
  }

  const content = fs.readFileSync(metaFile, "utf8");

  // Remove existing date folder entries (z + 6-digit numbers)
  const withoutDateFolders = content
    .replace(/^\s*"?z\d{6}"?\s*:\s*\{[^}]*\},?\s*$/gm, "")
    .replace(/^\s*\/\/.*date.*folders.*$/gim, "")
    .replace(/\n\s*\n\s*\n/g, "\n\n");

  return withoutDateFolders;
}

// Get all date folders (z + 6-digit format: zYYYYMM)
function getDateFolders() {
  const items = fs.readdirSync(contentDir, { withFileTypes: true });

  return items
    .filter((item) => item.isDirectory())
    .map((item) => item.name)
    .filter((name) => /^z\d{6}$/.test(name)) // Match z + YYYYMM format
    .sort((a, b) => b.localeCompare(a)); // Sort descending (newest first)
}

// Generate the new _meta.ts content by inserting date folders
function generateMeta() {
  const existingContent = readExistingMeta();
  const dateFolders = getDateFolders();

  if (dateFolders.length === 0) {
    console.log("ℹ️ No z-prefixed date folders found");
    return existingContent; // No date folders to add
  }

  // Find where to insert date folders (after the index entry)
  const lines = existingContent.split("\n");
  let insertIndex = -1;

  // Look for the index entry and insert after it
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("index:")) {
      insertIndex = i + 1;
      break;
    }
  }

  // If index not found, fall back to after the opening brace
  if (insertIndex === -1) {
    insertIndex =
      lines.findIndex((line) => line.includes("export default {")) + 1;
  }

  // Build date folders section with custom titles
  const dateFoldersSection = [
    "",
    "  // Date folders (auto-generated in descending order)",
    ...dateFolders.map((folder) => {
      // Extract YYYYMM from zYYYYMM and format as YYYY-MM
      const dateStr = folder.substring(1); // Remove 'z' prefix
      const year = dateStr.substring(0, 4);
      const month = dateStr.substring(4, 6);
      return `  "${folder}": { title: "${year}-${month}" },`;
    }),
    "",
  ];

  // Insert date folders after the index entry
  lines.splice(insertIndex, 0, ...dateFoldersSection);

  return lines.join("\n");
}

// Main execution
try {
  const newContent = generateMeta();
  fs.writeFileSync(metaFile, newContent, "utf8");
  console.log("✅ Generated _meta.ts with date folders in descending order:");

  const dateFolders = getDateFolders();
  dateFolders.forEach((folder) => {
    const dateStr = folder.substring(1);
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    console.log(`   📅 ${folder} → ${year}-${month}`);
  });
} catch (error) {
  console.error("❌ Error generating _meta.ts:", error.message);
  process.exit(1);
}
