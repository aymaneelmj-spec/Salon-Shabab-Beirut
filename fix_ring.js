const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/ring-offset-zinc-900/g, 'ring-offset-zinc-50');

fs.writeFileSync('src/App.tsx', code);
