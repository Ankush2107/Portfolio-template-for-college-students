# 🎓 Modern College Student Portfolio Template
### Designed for Students & Undergrads with *No Prior Job Experience*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Zero Build Steps](https://img.shields.io/badge/Build%20Steps-Zero%20(Static)-success)](#)
[![Deploy Ready](https://img.shields.io/badge/Deploy-GitHub%20Pages%20%7C%20Vercel%20%7C%20Netlify-purple)](#)

A modern, responsive, and aesthetic portfolio template crafted specifically for university and college students who are applying for their **first software engineering internships, co-ops, research positions, or entry-level roles**.

---

## 🌟 Why This Template is Different

Most developer portfolio templates assume you have years of corporate experience, client testimonials, and full-time job titles. **This template flips the narrative to highlight what college students excel at**:

1. **🎓 Education & Core Coursework Front-and-Center**: Proves your solid understanding of Computer Science fundamentals (DSA, Operating Systems, Database Systems, Computer Networks, OOP).
2. **🚀 Practical Proof-of-Work Projects**: Formatted with *"Problem Solved"*, engineering highlights, and live links to demonstrate self-driven capability.
3. **👥 Campus Leadership & Involvements**: Replaces corporate jobs with Student Club Leadership (GDSC, ACM, Coding Clubs), Teaching Assistant / Peer Tutoring roles, and Hackathon organizing.
4. **🏆 Honors, Hackathons & Coding Stats**: Showcases Dean's List, LeetCode / competitive programming metrics, and verified certifications (AWS, Meta, Coursera).
5. **🛠️ Built-in Live Visual Customizer**: You can preview edits in real time right in your browser and export your updated config with one click!

---

## 🚀 Quick Start (In 30 Seconds)

1. **Open `index.html`** in any modern web browser (Google Chrome, Edge, Safari, Firefox).
   *No terminal commands or `npm install` required!*
2. **Explore the live preview** of the portfolio.
3. Switch between **Dark Mode** and **Light Mode** using the sun/moon icon at the top right.

---

## ✏️ How to Customize Your Data (Choose Either Method)

### Method 1: The Live Visual Customizer (Easiest & Fastest!)
1. Open `index.html` in your browser.
2. Click the floating **"✨ Customize Profile"** pill in the bottom-left corner.
3. Edit your name, university, degree, GPA, graduation year, email, and coursework tags directly in the drawer.
4. Watch the entire page update live as you type!
5. Click **"Download data.js"** and replace the existing file inside `Portfolio/js/data.js`.
6. Done! Your portfolio is customized.

---

### Method 2: Direct Editing via Code Editor (VS Code)
All student details live in **a single, well-commented file**: [`js/data.js`](file:///c:/Users/ankus/OneDrive/Desktop/Portfolio/js/data.js).

Open `js/data.js` and modify the fields:

```javascript
const portfolioData = {
  personal: {
    name: "Your Name",
    university: "Your University / College",
    degree: "B.S. in Computer Science",
    graduationYear: "Class of 2026",
    currentYear: "Junior (3rd Year Undergrad)",
    location: "City, State / Remote",
    resumeUrl: "assets/resume/your-resume.pdf",
    email: "your.name@university.edu",
    ...
  },
  // Add your coursework:
  education: [
    {
      institution: "Your University",
      gpa: "3.8 / 4.0",
      relevantCoursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Web Development"
      ]
    }
  ],
  // Add your projects:
  projects: [ ... ],
  // Add your campus clubs:
  campusInvolvement: [ ... ]
};
```

---

## 📁 File Structure

```
Portfolio/
├── index.html                 # Main website template
├── README.md                  # Instructions and tips
├── css/
│   └── style.css              # Custom styling, animations, ambient glow & glassmorphism
├── js/
│   ├── data.js                # 🌟 Central configuration file (EDIT THIS!)
│   ├── app.js                 # Dynamic DOM renderer, project filters & theme logic
│   └── customizer.js          # Interactive visual editor & data.js exporter
└── assets/
    ├── images/                # Avatar and project mockups
    │   ├── avatar.svg         # Default developer avatar (replace with your photo!)
    │   ├── project-studysync.svg
    │   ├── project-campusmart.svg
    │   ├── project-algovision.svg
    │   ├── project-nutrisnap.svg
    │   └── project-shell.svg
    └── resume/
        ├── sample-resume.html # Built-in preview resume
        └── (Place your your-resume.pdf here!)
```

---

## 📸 Adding Your Own Photo & Resume

1. **Add Your Profile Photo**:
   - Save your photo (e.g. `my-photo.jpg` or `my-photo.png`) inside the `assets/images/` folder.
   - In `js/data.js`, set:
     ```javascript
     avatar: "assets/images/my-photo.jpg",
     ```

2. **Add Your Resume**:
   - Export your resume as a PDF (e.g. `resume.pdf`) and save it in `assets/resume/`.
   - In `js/data.js`, set:
     ```javascript
     resumeUrl: "assets/resume/resume.pdf",
     ```

---

## 🌐 Deploying to the Web for FREE in 2 Minutes

### Option A: GitHub Pages (Recommended for Students)
1. Initialize git and push this folder to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial student portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment**, select **Source: Deploy from a branch**.
   - Choose Branch: `main` and Folder: `/ (root)`, then click **Save**.
3. Your portfolio is now live at: `https://<your-username>.github.io/<your-repo-name>/`!

### Option B: Netlify or Vercel (Drag-and-Drop)
1. Go to [Netlify Drop](https://app.netlify.com/drop) or [Vercel](https://vercel.com).
2. Drag and drop the `Portfolio` folder.
3. Your site is instantly live with a free custom URL and SSL certificate!

---

## 💡 Top 5 Tips for College Students with No Work Experience

1. **Highlight Problem Statements in Projects**: Recruiters care *why* you built something. Instead of saying *"Built a website with React"*, say: *"Engineered a student marketplace gated behind institutional .edu verification to eliminate ticket scams on campus."*
2. **List Specific Coursework**: When applying to backend roles, highlight *Database Systems*, *Operating Systems*, and *Computer Networks*. For frontend roles, highlight *Human-Computer Interaction* and *Web Development*.
3. **Show Teamwork**: If you haven't worked at a company, your involvement in **Google Developer Student Clubs (GDSC)**, hackathon teams, and tutoring proves you can communicate and collaborate.
4. **Keep GitHub Repos Clean**: Ensure each project listed in your portfolio has a `README.md` with a screenshot, setup instructions, and tech stack breakdown.
5. **Include Verifiable Metrics**: If you solved 200+ LeetCode problems, participated in ICPC, or maintained a 3.8+ GPA, feature it proudly!

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE). Feel free to customize and use it for your own portfolio!
