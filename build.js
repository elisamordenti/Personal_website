const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

// Create static directory in public
const staticDir = path.join(publicDir, 'static');
if (!fs.existsSync(staticDir)) {
    fs.mkdirSync(staticDir);
}

// Copy static assets
function copyStaticAssets() {
    const sourceStatic = path.join(__dirname, 'static');
    const targetStatic = path.join(publicDir, 'static');
    
    // Copy CSS
    const cssDir = path.join(targetStatic, 'css');
    if (!fs.existsSync(cssDir)) {
        fs.mkdirSync(cssDir);
    }
    fs.copyFileSync(
        path.join(sourceStatic, 'css', 'style.css'),
        path.join(cssDir, 'style.css')
    );
    
    // Copy JS
    const jsDir = path.join(targetStatic, 'js');
    if (!fs.existsSync(jsDir)) {
        fs.mkdirSync(jsDir);
    }
    fs.copyFileSync(
        path.join(sourceStatic, 'js', 'script.js'),
        path.join(jsDir, 'script.js')
    );
}

// Function to read HTML content
function readHtmlContent(filename) {
    try {
        return fs.readFileSync(path.join(__dirname, 'templates', filename), 'utf8');
    } catch (error) {
        console.error(`Error reading ${filename}:`, error);
        return '';
    }
}

// Function to create complete HTML page
function createCompletePage(content, title = 'Elisa Mordenti - Personal Website') {
    const baseTemplate = readHtmlContent('base.html');
    return baseTemplate
        .replace('<!-- Content will be loaded here -->', content)
        .replace('<title>Elisa Mordenti - Personal Website</title>', `<title>${title}</title>`);
}

// Build static HTML files
function buildStaticFiles() {
    console.log('🚀 Building static files for Vercel deployment...');
    
    // Build index.html
    const indexContent = readHtmlContent('index.html');
    const indexHtml = createCompletePage(indexContent, 'Elisa Mordenti - Welcome');
    fs.writeFileSync(path.join(publicDir, 'index.html'), indexHtml);
    console.log('✅ Built index.html');
    
    // Build about.html
    const aboutContent = readHtmlContent('about.html');
    const aboutHtml = createCompletePage(aboutContent, 'About - Elisa Mordenti');
    fs.writeFileSync(path.join(publicDir, 'about.html'), aboutHtml);
    console.log('✅ Built about.html');
    
    // Build contact.html
    const contactContent = readHtmlContent('contact.html');
    const contactHtml = createCompletePage(contactContent, 'Contact - Elisa Mordenti');
    fs.writeFileSync(path.join(publicDir, 'contact.html'), contactHtml);
    console.log('✅ Built contact.html');
    
    console.log('🎉 Static build completed! Files are in the "public" directory.');
    console.log('📁 You can now deploy to Vercel using: vercel --prod');
}

// Run the build
try {
    copyStaticAssets();
    buildStaticFiles();
} catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
}
