const fs = require('fs');
const path = require('path');

// 1. Load all includes
const includes = {};
const includesDir = path.join(__dirname, 'src', 'includes');
fs.readdirSync(includesDir).forEach(file => {
    const name = file.replace('.html', '');
    includes[name] = fs.readFileSync(path.join(includesDir, file), 'utf8');
});

// 2. Ensure docs/ and docs/css/ exist
const docsDir = path.join(__dirname, 'docs');
fs.mkdirSync(path.join(docsDir, 'css'), { recursive: true });
fs.mkdirSync(path.join(docsDir, 'images'), { recursive: true });

// 3. Build each page
const pagesDir = path.join(__dirname, 'src', 'pages');
fs.readdirSync(pagesDir).filter(f => f.endsWith('.html')).forEach(file => {
    let html = fs.readFileSync(path.join(pagesDir, file), 'utf8');
    html = html.replace(/\{\{include:([\w-]+)\}\}/g, (_, name) => includes[name] || `<!-- include "${name}" not found -->`);
    fs.writeFileSync(path.join(docsDir, file), html);
    console.log(`  Built: ${file}`);
});

// 4. Copy static assets
const cssDir = path.join(__dirname, 'src', 'css');
fs.readdirSync(cssDir).forEach(file => {
    fs.copyFileSync(path.join(cssDir, file), path.join(docsDir, 'css', file));
    console.log(`  Copied: css/${file}`);
});

// 5. Copy images
const imagesDir = path.join(__dirname, 'src', 'images');
if (fs.existsSync(imagesDir)) {
    fs.readdirSync(imagesDir).forEach(file => {
        fs.copyFileSync(path.join(imagesDir, file), path.join(docsDir, 'images', file));
        console.log(`  Copied: images/${file}`);
    });
}

// 6. Copy root static files (favicons, manifest, etc.)
const rootDir = path.join(__dirname, 'src', 'root');
if (fs.existsSync(rootDir)) {
    fs.readdirSync(rootDir).forEach(file => {
        fs.copyFileSync(path.join(rootDir, file), path.join(docsDir, file));
        console.log(`  Copied: ${file}`);
    });
}

console.log('\nDone!');
