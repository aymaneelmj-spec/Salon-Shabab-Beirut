const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/bg-amber-600 text-zinc-900/g, 'bg-amber-600 text-white');
code = code.replace(/bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-zinc-900/g, 'bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white');
code = code.replace(/w-14 h-14 bg-amber-600 hover:bg-amber-500 text-zinc-900/g, 'w-14 h-14 bg-amber-600 hover:bg-amber-500 text-white');

fs.writeFileSync('src/App.tsx', code);
