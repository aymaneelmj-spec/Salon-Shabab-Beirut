import fs from 'fs';
const path = 'src/App.tsx';
let data = fs.readFileSync(path, 'utf8');

data = data.replace(/bg-zinc-950/g, 'bg-zinc-50');
data = data.replace(/from-zinc-950/g, 'from-zinc-50');
data = data.replace(/via-zinc-950/g, 'via-zinc-50');
data = data.replace(/bg-zinc-900/g, 'bg-white');
data = data.replace(/bg-zinc-800/g, 'bg-zinc-100');
data = data.replace(/text-zinc-400/g, 'text-zinc-600');
data = data.replace(/text-zinc-300/g, 'text-zinc-700');
data = data.replace(/text-white/g, 'text-zinc-900');
data = data.replace(/text-zinc-100/g, 'text-zinc-900');
data = data.replace(/text-zinc-200/g, 'text-zinc-800');
data = data.replace(/border-zinc-900/g, 'border-zinc-200');
data = data.replace(/border-zinc-800/g, 'border-zinc-200');
data = data.replace(/border-zinc-700/g, 'border-zinc-300');

// Fix buttons text to keep white
data = data.replace(/bg-amber-600 hover:bg-amber-500 text-zinc-900/g, 'bg-amber-600 hover:bg-amber-500 text-white');

// Fix tracking in hero section
data = data.replace(/uppercase tracking-wider transition-all/g, "uppercase transition-all ${isRTL ? 'tracking-normal' : 'tracking-wider'}");

fs.writeFileSync(path, data);
