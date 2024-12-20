# Allenhurst Cleaners v2

This web application integrates with the Google Maps API Platform to provide detailed business information, including address, phone number, and hours of operation. Built with React and Material UI, it offers a responsive and visually appealing user interface. Embedded with Google Analytics for user interaction statistics. This project also includes features like environment variable management for secure API key handling and duel deployment with both GitHub Pages and Netlify.

### Version History Below :

## Table of Contents

- [1.0.0 - 2024-12-20](#100---2024-12-20)
- [0.9.0 - 2024-10-01](#090---2024-10-01)
- [0.8.0 - 2024-10-01](#080---2024-10-01)
- [0.7.0 - 2024-09-27](#070---2024-09-27)
- [Netlify Deployment Testing](#netlify-deployment-testing---updated-deploys-from-netlify-branch)
- [0.6.0 - 2024-09-27](#060---2024-09-27)
- [0.5.0 - 2024-09-25](#050---2024-09-25)
- [0.4.0 - 2024-09-23](#040---2024-09-23)
- [0.3.0 - 2024-09-12](#030---2024-09-12)
- [0.2.0 - 2024-09-11](#020---2024-09-11)
- [0.1.0 - 2024-09-10](#010---2024-09-10)

## ChangeLog

### [1.0.0] - 2024-12-20

- `Pull Request` : Google Cloud Platform Console Trial Period Ended
  - Update Readme
  - Refactor Home page to replace Gmap component with FreeGmap and remove unused state management
  - Refactored Services with add ServiceDetails constant
  - Add AboutTileDetails constant and refactor About page to use it
  - Refactor Contact page to streamline layout and add contact details and hours of operation constants
  - Add FreeGmap component with geolocation and map controls functionality
  - Refactor SidePanel for mobile responsiveness and improve layout
  - Hid Reviews and Sandbox routes for development mode only
  - "Archived" Gmaps & more that require payment.
  - Implement responsive theme mode based on user system preference
  - Version Bump

---

- Update Readmes

---

### [0.9.0] - 2024-10-01

- `Pull Request` : Updated how Google Analytics Tag is Embeded
  - Include Google Analytics Integration into Repo Readme
  - Refactor Gmap component to conditionally log warnings and markers based on display prop
  - Refactored Components, Contexts, Hooks, and Pages for Google Analytics Integration
  - Refactor Google Analytics integration and removed old integration (Gtag)
  - Add Ganalytics utility module for Google Analytics integration
  - Deleted ServiceSquare component
  - Add react-ga4 package to dependencies
  - Version Bump

---

### [0.8.0] - 2024-10-01

- `Pull Request` : Created GmapEmbededToolBar, Tile, ContactForm components & Update UI
  - Update Repo Readme
  - Refactor GmapEmbededToolBar component to improve its mobile responsiveness
  - Refactor About page to use Box component for displaying service details
  - Refactor Tile component to add scroll animation on mobile devices
  - Refactor About page to use Tile component for displaying service details
  - Refactor Services page to add list and panel view for displaying service details
  - Testing new Tile(s) component
  - Created Tile component to add modal functionality for displaying service details and styles
  - Refactor ImportImages.js to update image import path for carousel images
  - Created ContactForm component to add contact form functionality on Contact page
  - Refactor Contact Page to use directions map as default, and update default search query
  - Refactor Contact Page to add geolocation functionality and improve map loading
  - Refactor GmapEmbededToolBar.js to add map type switch in directions mode
  - Refactor GmapEmbeded.js to use directions API for default map type
  - Refactor Greviews component to add "Write a Review" button and fix formatting
  - Refactor Home page to remove unused code and improve readability, Added GH Deployment comment in App.js
  - Refactored Contact Page to use Google Maps Embeded API Map and Custom Toolbar
  - Refactor Routes, NavMenu, and SidePanel components to add Sandbox page in development mode
  - Created GmapEmbededToolBar component to add toolbar functionality for map controls and search bar
  - Refactor GmapEmbeded component to support different modes, map types, search queries, origins, destinations, widths, and heights
  - Refactor Gdetails and Gmap components for mobile responsiveness
  - Refactor Header component to include a link to the homepage
  - Refactor typography variant in About, Reviews, and Services pages
  - Version Bump

---

### [0.7.0] - 2024-09-27

- `Pull Request` : Add more images to carousel slide deck and create GmapEmbeded component
  - Version Bump
  - Created GmapEmbeded, uses Google Maps Embeded API (Free)
  - Added more images to carousel slide deck

---

### [Netlify Deployment Testing] - (Updated) deploys from `netlify` branch.

- Tests were pushed to Master branch directly (No `Pull Request`)
  - Re-added GH-pages base url and homepage `// Previously Removed for Netlify hosting on master branch`
  - Add Netlify deploy status badge to README.md
  - Refactor App.js: remove basename from Router component
  - Update ESLint configuration to warn about unused variables
  - Update ESLint configuration to set no-unused-vars to warn
  - Refactor netlify.toml: add build command and publish directory
  - Refactor package.json: remove homepage field
  - netlify.toml
  - Testing Netlify Deployment
  - Added Screenshots to Readme

---

### [0.6.0] - 2024-10-27

- `Pull Request` : Updated Theme on App.js, Updated Images for Carousel
  - Updated Readme ChangeLog
  - Updated Theme on App.js
  - Updated Images for Carousel
  - Version Bump

---

### [0.5.0] - 2024-09-25

- `Pull Request` : Refactor UI layout and components, add Reviews page
  - Add Repository Readme
  - Removed excess logging
  - Refactor App.css to remove unused CSS files
  - Refactor Gdetails component to improve rendering of opening hours
  - Refactor About and Home pages UI layout and content
  - Refactor ServiceSquare component to update hover effect
  - Added Reviews page and Greviews component
  - Refactor GoogleMaps components and update UI layout
  - Refactor ServiceSquare component, Services and About pages
  - Refactor ThemeSwitcher button text to toggle between light and dark mode
  - Version Bump
- Update Meta Description in `index.html`

---

### [0.4.0] - 2024-09-23

- `Pull Request` : Comprehensive UI Refactor and Dependency Updates
  - Misc refactor for UI
  - Update Readme ChangeLog
  - Refactor SidePanel component to use MUI Components and SidePanelContext hook
  - Refactor Footer component to use MUI Components and add author link
  - Remove unused code
  - Refactor ThemeSwitcher to use MUI Button component and ThemeContext hook
  - Refactor entire project to use MUI Components
  - Add dependencies for @emotion/react, @emotion/styled, @mui/icons-material, and @mui/material
  - Refactor CSS files and remove unused styles
  - Update Readme ChangeLog
  - Refactor Gdetails to use usePlaceDetails hook, updated Gmap with place marker
  - Refactor Contact and Home pages, add usePlaceDetails hook
  - Refactor Gmap.css and Gmap.js, and remove ErrorBoundary.js
  - Refactor Gmap to use newly added @react-google-maps/api dependency
  - Update Readme ChangeLog
  - WIP Refactor Gmap, added useGoogleMapsApi hook
  - Refactor Header and SidePanel components, Add useIsMobile hook for responsive design
  - Refactor ThemeSwitcher component and ImportImages utility
  - Add ServiceSquare component to About page
  - Split up App.CSS styles per respective components & pages
  - Update package version to 0.4.0 in package-lock

---

### [0.3.0] - 2024-09-12

- Update package version to 0.3.0 in package-lock
- `Pull Request` : Refactor Allenhurst Cleaners website
  - Refactor CSS and add Google Maps component
  - Update Readme to include PR #3's commit message
  - Version Bump & Readme
  - Refactor package dependencies and add image import utility for carousel on home page
  - Refactor About, Contact, and Services pages
  - Refactor App.js, Routes.js, and components: wrapped in fragments
    - Remove Sidebar component from App.js
    - Remove ul element and replace it with NavMenu component in Sidebar.js
  - Refactor index.js and add Google Tag loading utility, update ignore .env(s)
  - Refactor meta tags and manifest.json for Allenhurst Cleaners

---

### [0.2.0] - 2024-09-11

- `Pull Request` : Refactor Header, Sidebar, and Footer components and add ThemeSwitcher
  - Refactor SidePanel and Sidebar components, add ThemeSwitcher
  - Refactor styles to use CSS variables for colors
  - Refactor footer component and add tooltip for author information
  - Refactor Header and SidePanel components
  - Refactored Header with collapsible SidePanel
  - Version Bump
  - Update readme

---

### [0.1.0] - 2024-09-10

- Fixed routes on deployed gh page
- basename
- `Pull Request` : Refactor project structure and add basic layout components
  - Basic structure with a navigation header, collapsible sidebar, dynamic content area, footer, react-router-dom
  - Refactored project and added folder structure
  - Gutted default app js + css
- Install gh-pages package for deployment
- npx create-react-app optio-blue
