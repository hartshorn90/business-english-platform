# Business English Learning Platform - Landing Page

A beautiful, responsive "Coming Soon" landing page for a business English learning platform. This page collects email sign-ups from both students and teachers and integrates with Google Sheets for data collection.

## Features

- ✨ Modern, clean design with playful blob animations
- 📱 Fully responsive (desktop, tablet, mobile)
- 🎨 Custom branding colors (#5294e3)
- 📧 Email collection form with validation
- 📊 Google Sheets integration for data storage
- 🎯 Separate benefits sections for students and teachers
- ⚡ Fast loading and optimized performance
- 🚀 Ready to deploy on GitHub Pages

## File Structure

```
landing-page/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with animations
├── script.js           # Form handling and Google Sheets integration
├── mobile-mockup.png   # Mobile app mockup image
└── README.md           # This file
```

## Setup Instructions

### 1. Local Testing

1. Open `index.html` in your web browser
2. The form will work in demo mode (data logged to console)

### 2. Google Sheets Integration

To connect the form to Google Sheets:

#### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Waitlist Sign-ups" (or any name you prefer)
4. Add these column headers in the first row:
   - A1: `First Name`
   - B1: `Last Name`
   - C1: `Email`
   - D1: `User Type`
   - E1: `Timestamp`

#### Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.firstName,
      data.lastName,
      data.email,
      data.userType,
      data.timestamp
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (disk icon)
5. Click **Deploy** → **New deployment**
6. Click the gear icon ⚙️ next to "Select type"
7. Choose **Web app**
8. Configure:
   - **Description**: "Waitlist Form Handler"
   - **Execute as**: Me
   - **Who has access**: Anyone
9. Click **Deploy**
10. **Copy the Web App URL** (it looks like: `https://script.google.com/macros/s/...`)
11. Click **Authorize access** and grant permissions

#### Step 3: Update the Landing Page

1. Open `script.js`
2. Find this line:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Replace `YOUR_GOOGLE_SCRIPT_URL_HERE` with your Web App URL
4. Save the file

### 3. Deploy to GitHub Pages

#### Option A: Using GitHub Web Interface

1. Create a new repository on GitHub
2. Name it (e.g., `business-english-landing`)
3. Upload all files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `mobile-mockup.png`
4. Go to **Settings** → **Pages**
5. Under **Source**, select **main** branch
6. Click **Save**
7. Your site will be live at: `https://yourusername.github.io/repository-name/`

#### Option B: Using Git Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Landing page"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/repository-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings.

### 4. Custom Domain (Optional)

1. In your repository, go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Click **Save**
4. Add a CNAME record in your domain's DNS settings pointing to `yourusername.github.io`

## Customization

### Change Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --primary-blue: #5294e3;        /* Main brand color */
    --primary-blue-dark: #3a7bc8;   /* Hover state */
    --light-blue: #e8f4f8;          /* Background gradient */
}
```

### Update Content

Edit the text in `index.html`:
- Main heading
- Subheading
- Problem/solution descriptions
- Benefits lists
- Footer text

### Change Images

Replace `mobile-mockup.png` with your own image (recommended size: 600x1200px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized CSS with minimal dependencies
- Lightweight JavaScript
- Web fonts loaded asynchronously
- Images optimized for web

## Testing

Before deploying, test:
1. ✅ Form validation (try submitting empty fields)
2. ✅ Email format validation
3. ✅ Responsive design (resize browser window)
4. ✅ Google Sheets integration (submit test data)
5. ✅ Mobile device testing

## Troubleshooting

### Form submissions not appearing in Google Sheets

1. Check that the Google Apps Script URL is correct in `script.js`
2. Verify the script is deployed as a **Web app** with access set to **Anyone**
3. Check the browser console for errors (F12 → Console tab)
4. Make sure the Google Sheet column headers match exactly

### Page not loading on GitHub Pages

1. Wait 5-10 minutes after enabling GitHub Pages
2. Check that `index.html` is in the root directory
3. Verify the repository is public (or you have GitHub Pro for private pages)
4. Clear your browser cache

### Images not showing

1. Ensure `mobile-mockup.png` is in the same directory as `index.html`
2. Check file name capitalization (case-sensitive on some servers)
3. Verify the image file uploaded correctly to GitHub

## License

This project is free to use for your business English learning platform.

## Support

For questions or issues, please check the troubleshooting section above or review the code comments in each file.

---

**Built with ❤️ for connecting students with industry-experienced English teachers**

