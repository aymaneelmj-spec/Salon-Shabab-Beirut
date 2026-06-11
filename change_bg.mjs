import fs from 'fs';
const path = 'src/App.tsx';
let data = fs.readFileSync(path, 'utf8');

// Replace the global background colors for the light theme with a warm/calm yellow-white
data = data.replace(/bg-zinc-50/g, 'bg-[#FCFBF7]');
data = data.replace(/from-zinc-50/g, 'from-[#FCFBF7]');
data = data.replace(/via-zinc-50/g, 'via-[#FCFBF7]');

// Slightly warm up pure white cards to blend better
data = data.replace(/bg-white/g, 'bg-[#FFFEFC]');

fs.writeFileSync(path, data);
console.log('Colors replaced successfully.')
