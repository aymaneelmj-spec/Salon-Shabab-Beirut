import fs from 'fs';
const path = 'src/App.tsx';
let data = fs.readFileSync(path, 'utf8');

// Colors
data = data.replace(/\bbg-zinc-50\b/g, 'bg-zinc-50 dark:bg-zinc-950');
data = data.replace(/\bfrom-zinc-50\b/g, 'from-zinc-50 dark:from-zinc-950');
data = data.replace(/\bvia-zinc-50\b/g, 'via-zinc-50 dark:via-zinc-950');
data = data.replace(/\bbg-white\b/g, 'bg-white dark:bg-zinc-900');
data = data.replace(/\bbg-zinc-100\b/g, 'bg-zinc-100 dark:bg-zinc-800');
data = data.replace(/\btext-zinc-600\b/g, 'text-zinc-600 dark:text-zinc-400');
data = data.replace(/\btext-zinc-700\b/g, 'text-zinc-700 dark:text-zinc-300');
data = data.replace(/\btext-zinc-900\b/g, 'text-zinc-900 dark:text-white');
data = data.replace(/\btext-zinc-800\b/g, 'text-zinc-800 dark:text-zinc-200');
data = data.replace(/\bborder-zinc-200\b/g, 'border-zinc-200 dark:border-zinc-800');
data = data.replace(/\bborder-zinc-300\b/g, 'border-zinc-300 dark:border-zinc-700');
data = data.replace(/\bring-offset-zinc-50\b/g, 'ring-offset-zinc-50 dark:ring-offset-zinc-950');

// Fix buttons that became text-zinc-900 dark:text-white dark:text-white
data = data.replace(/text-white dark:text-white/g, 'text-white'); 
// Just in case I messed up earlier.

fs.writeFileSync(path, data);
