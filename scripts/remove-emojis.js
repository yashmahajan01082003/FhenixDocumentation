// Script to remove emojis from all content .tsx files
const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'content');

function removeEmojis(text) {
    // Remove common emojis used in the project
    return text
        .replace(/[\u{1F300}-\u{1F9FF}]/gu, '')
        .replace(/[\u{2600}-\u{26FF}]/gu, '')
        .replace(/[\u{2700}-\u{27BF}]/gu, '')
        .replace(/[\u{FE00}-\u{FE0F}]/gu, '')
        .replace(/[\u{200D}]/gu, '')
        .replace(/[\u{20E3}]/gu, '')
        .replace(/[\u{E0020}-\u{E007F}]/gu, '')
        .replace(/\u{2B50}/gu, '')
        .replace(/\u{2728}/gu, '')
        .replace(/\u{2705}/gu, '')
        .replace(/\u{274C}/gu, '')
        .replace(/\u{2934}/gu, '')
        .replace(/\u{2935}/gu, '')
        .replace(/\u{00AE}/gu, '')
        .replace(/\u{203C}/gu, '')
        .replace(/\u{2049}/gu, '')
        .replace(/\u{2122}/gu, '')
        .replace(/\u{2139}/gu, '')
        .replace(/\u{2194}-\u{2199}/gu, '')
        .replace(/\u{21A9}-\u{21AA}/gu, '')
        .replace(/\u{231A}-\u{231B}/gu, '')
        .replace(/\u{2328}/gu, '')
        .replace(/\u{23CF}/gu, '')
        .replace(/\u{23E9}-\u{23F3}/gu, '')
        .replace(/\u{23F8}-\u{23FA}/gu, '')
        .replace(/\u{25AA}-\u{25AB}/gu, '')
        .replace(/\u{25B6}/gu, '')
        .replace(/\u{25C0}/gu, '')
        .replace(/\u{25FB}-\u{25FE}/gu, '')
        // Remove sequences like "emoji " at start of titles
        .replace(/^(\s*)([\u{1F000}-\u{1FFFF}][\u{FE00}-\u{FE0F}]?\s*)/gmu, '$1')
        // Clean up double spaces left after emoji removal
        .replace(/  +/g, ' ')
        // Clean up leading space after quote
        .replace(/" /g, '"')
        .trim();
}

function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const cleaned = removeEmojis(content);
    if (content !== cleaned) {
        fs.writeFileSync(filePath, cleaned, 'utf8');
        console.log('Cleaned:', path.relative(contentDir, filePath));
    }
}

function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walkDir(fullPath);
        } else if (entry.name.endsWith('.tsx')) {
            processFile(fullPath);
        }
    }
}

walkDir(contentDir);
console.log('Done!');
