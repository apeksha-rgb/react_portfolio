# My Portfolio Website

Welcome to my personal portfolio website! This website is built using **React** and **Tailwind CSS** to showcase my work and skills.

## Tech Stack
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Features
- Responsive design with mobile-first approach.
- Simple and clean interface to display portfolio projects and information.
- Hosted on **GitHub Pages** for easy access.

## Live Demo
You can view the live version of the website by visiting the following link:
[Live Demo](https://apeksha-rgb.github.io/react_portfolio/)

## How to Host on GitHub Pages

If you want to host your own React app on GitHub Pages, here’s a step-by-step guide:

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and log in to your account.
2. Click on the **+** icon at the top-right corner and select **New repository**.
3. Name your repository (e.g., `my-portfolio`), add a description (optional), and choose **Public**.
4. Click **Create repository**.

### Step 2: Set up Your React App

1. **Create a React app** (if you haven’t already):

   ```bash
   npx create-react-app my-portfolio
   cd my-portfolio

### Step 3: Install GitHub Pages Package

1. In your React app’s root directory, install the gh-pages package:
   ```bash
   npm install gh-pages --save-dev

### Step 4: Configure package.json
1. Open your package.json file and add the following two fields:
 - homepage: This specifies the URL where the app will be hosted.
   
  ```bash
  "homepage": "https://your-username.github.io/your-repository-name",
```
- scripts: Add the following deploy and predeploy scripts:
  ```bash
  "scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"}
  ```
 - Replace your-username with your GitHub username and your-repository-name with the name of the repository you created in Step 1.

### Step 5: Deploy Your App

1. In the root directory of your app, run the following command:
   ```bash
   npm run deploy
   ```
- This will create a build folder and push the contents to the gh-pages branch of your GitHub repository.
  
### Step 6: Enable GitHub Pages

1. Go to your GitHub repository.
2. Navigate to Settings > Pages (on the left sidebar).
3. Under the Source section, select the gh-pages branch and save.
4. Your site should now be live at https://your-username.github.io/your-repository-name.

### Step 7: Done!
Your React app is now hosted on GitHub Pages. You can visit the live demo and share it with others!

# Contributing
We welcome contributions to make this portfolio website even better! Here’s how you can contribute:

## How to Contribute:
1. Fork this repository by clicking on the Fork button in the top right corner of the page.

2. Clone your forked repository to your local machine:

  ```bash
  git clone https://github.com/your-username/your-repository-name.git
  ```
3. Create a new branch for your feature or bug fix:
  ```bash
  git checkout -b your-feature-branch
```
4. Make your changes, then stage and commit them:

  ```bash
  git add .
  git commit -m "Description of the changes"
```
5. Push your changes to your forked repository:

  ```bash
  git push origin your-feature-branch
  ```
6. Create a pull request to the main repository with a description of the changes you've made.

   Your contribution is much appreciated!
