# Elisa Mordenti - Personal Website

A modern, responsive personal website built with Node.js and Express, featuring a beautiful landing page and multiple sections.

## Features

- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Beautiful UI**: Clean, professional design with smooth animations
- **Multiple Pages**: Home, About, and Contact pages
- **Contact Form**: Functional contact form with validation and Node.js backend
- **Modern Technologies**: Built with Node.js, Express, HTML5, CSS3, and vanilla JavaScript

## Pages

### Home Page (`/`)
- Hero section with introduction
- Feature highlights
- Call-to-action section

### About Page (`/about`)
- Personal information and background
- Skills and expertise
- Interests and hobbies

### Contact Page (`/contact`)
- Contact form
- Alternative contact methods
- Social media links

## Installation & Setup

1. **Clone the repository** (if applicable)
2. **Install Node.js dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   # Development mode (auto-restart on changes)
   npm run dev
   
   # Production mode
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Project Structure

```
Personal_website/
├── server.js             # Main Node.js Express server
├── package.json          # Node.js dependencies and scripts
├── .gitignore            # Git ignore file
├── README.md             # This file
├── templates/            # HTML templates
│   ├── base.html        # Base template with navigation
│   ├── index.html       # Home page
│   ├── about.html       # About page
│   └── contact.html     # Contact page
└── static/              # Static assets
    ├── css/
    │   └── style.css    # Main stylesheet
    └── js/
        └── script.js    # JavaScript functionality
```

## Customization

### Personal Information
- Update the name "Elisa Mordenti" throughout the templates
- Modify the hero description and personal details
- Update contact information and social media links

### Styling
- Modify `static/css/style.css` to change colors, fonts, and layout
- The website uses CSS custom properties for easy color customization
- Responsive breakpoints are defined for mobile, tablet, and desktop

### Content
- Edit the HTML templates to update text content
- Add or remove sections as needed
- Customize the feature cards and skills

## Technologies Used

- **Backend**: Node.js with Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Font Awesome 6
- **Fonts**: Inter (Google Fonts)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

To deploy this website:

1. **Production Server**: Use a production WSGI server like Gunicorn
2. **Static Hosting**: Deploy to services like Netlify, Vercel, or GitHub Pages
3. **Cloud Platforms**: Deploy to Heroku, AWS, or Google Cloud Platform

## Contributing

This is a personal website template. Feel free to fork and customize for your own use.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please reach out through the contact form on the website.
