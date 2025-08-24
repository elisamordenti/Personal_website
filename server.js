const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the static directory
app.use('/static', express.static(path.join(__dirname, 'static')));

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
function createCompletePage(content) {
    const baseTemplate = readHtmlContent('base.html');
    return baseTemplate.replace('<!-- Content will be loaded here -->', content);
}

// Serve HTML files from templates directory
app.get('/', (req, res) => {
    const content = readHtmlContent('index.html');
    const completePage = createCompletePage(content);
    res.send(completePage);
});

app.get('/about', (req, res) => {
    const content = readHtmlContent('about.html');
    const completePage = createCompletePage(content);
    res.send(completePage);
});

app.get('/contact', (req, res) => {
    const content = readHtmlContent('contact.html');
    const completePage = createCompletePage(content);
    res.send(completePage);
});

// Handle contact form submission
app.post('/contact', express.json(), (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Simple validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please fill in all required fields' });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Please enter a valid email address' });
    }
    
    // In a real app, you'd send this to a database or email service
    console.log('Contact form submission:', { name, email, subject, message });
    
    res.json({ success: true, message: 'Thank you for your message! I\'ll get back to you soon.' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Elisa Mordenti's website is running on http://localhost:${PORT}`);
    console.log(`📱 Open your browser and navigate to the URL above`);
    console.log(`🔄 Server will automatically restart when you make changes (dev mode)`);
});
