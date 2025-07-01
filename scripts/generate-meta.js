#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../content');
const metaFile = path.join(contentDir, '_meta.ts');

// Read existing _meta.ts and preserve everything except date folders
function readExistingMeta() {
  if (!fs.existsSync(metaFile)) {
    return 'export default {\n};\n';
  }
  
  const content = fs.readFileSync(metaFile, 'utf8');
  
  // Remove existing date folder entries (6-digit numbers)
  const withoutDateFolders = content.replace(
    /^\s*"?\d{6}"?\s*:\s*\{\},?\s*$/gm, 
    ''
  ).replace(
    /^\s*\/\/.*date.*folders.*$/gmi, 
    ''
  ).replace(
    /\n\s*\n\s*\n/g, 
    '\n\n'
  );
  
  return withoutDateFolders;
}

// Get all date folders (6-digit format: YYYYMM)
function getDateFolders() {
  const items = fs.readdirSync(contentDir, { withFileTypes: true });
  
  return items
    .filter(item => item.isDirectory())
    .map(item => item.name)
    .filter(name => /^\d{6}$/.test(name)) // Match YYYYMM format
    .sort((a, b) => b.localeCompare(a)); // Sort descending (newest first)
}

// Generate the new _meta.ts content by inserting date folders
function generateMeta() {
  const existingContent = readExistingMeta();
  const dateFolders = getDateFolders();
  
  if (dateFolders.length === 0) {
    return existingContent; // No date folders to add
  }
  
  // Find where to insert date folders (after the opening brace)
  const lines = existingContent.split('\n');
  const insertIndex = lines.findIndex(line => line.includes('export default {')) + 1;
  
  // Build date folders section
  const dateFoldersSection = [
    '  // Date folders (auto-generated in descending order)',
    ...dateFolders.map(folder => `  "${folder}": {},`),
    ''
  ];
  
  // Insert date folders at the beginning of the object
  lines.splice(insertIndex, 0, ...dateFoldersSection);
  
  return lines.join('\n');
}

// Main execution
try {
  const newContent = generateMeta();
  fs.writeFileSync(metaFile, newContent, 'utf8');
  console.log('✅ Generated _meta.ts with date folders in descending order:');
  
  const dateFolders = getDateFolders();
  dateFolders.forEach(folder => console.log(`   📅 ${folder}`));
  
} catch (error) {
  console.error('❌ Error generating _meta.ts:', error.message);
  process.exit(1);
}
