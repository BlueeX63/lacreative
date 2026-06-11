const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('c:/FullProgrammingMaterial/MERN/la-creative-marketing/components');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace once: true with once: false
    content = content.replace(/once:\s*true/g, "once: false");
    
    // Lower amount thresholds so they don't disappear while still in view
    content = content.replace(/amount:\s*0\.[2-9]/g, "amount: 0.1");
    content = content.replace(/amount:\s*1/g, "amount: 0.1");
    
    // Remove negative margins that cause premature exit
    content = content.replace(/margin:\s*"-[0-9]+px"/g, 'margin: "0px"');
    
    fs.writeFileSync(file, content);
});

console.log("Replaced scroll animation configs in " + files.length + " files.");
