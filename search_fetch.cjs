const fs = require('fs');
const path = require('path');

function searchNodeModules(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            searchNodeModules(fullPath);
        } else if (file.endsWith('.js') || file.endsWith('.ts')) {
            try {
                const content = fs.readFileSync(fullPath, 'utf8');
                if (content.includes('window.fetch = ')) {
                    console.log('Found in:', fullPath);
                }
            } catch(e) {}
        }
    }
}

searchNodeModules('/app/applet/node_modules');
