const fs = require('fs');

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
    
    // Replace all instances of amount: 0.x with amount: 0 to trigger animations instantly
    content = content.replace(/amount:\s*0\.[0-9]+/g, "amount: 0");
    
    fs.writeFileSync(file, content);
});

console.log("Updated amount to 0 in " + files.length + " files.");
