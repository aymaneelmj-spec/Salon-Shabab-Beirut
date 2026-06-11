const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/ring-offset-zinc-900/g, 'ring-offset-zinc-50');
code = code.replace(/hover:bg-amber-500 transition-colors/g, 'hover:bg-amber-500 hover:text-white transition-colors');

fs.writeFileSync('src/App.tsx', code);
