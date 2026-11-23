# Separated Canva Code website files

## Project structure

- `index.html` — page structure and metadata
- `css/styles.css` — all styles extracted from the original Canva Code HTML
- `js/script.js` — main inline JavaScript extracted from the original Canva Code HTML
- `assets/` — place downloaded images, logos, and other local assets here

## Run locally

Open this folder in Visual Studio Code. For the best local preview, install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.

## Important notes

1. Canva's private bootstrap and editor SDK script references were removed because they are Canva-hosted runtime/editor dependencies, not standalone website files.
2. The Lucide icon library and Google Fonts remain loaded through their external CDN links in `index.html`.
3. The original code references Canva-hosted `_assets/...` paths. Those files were not included in the pasted HTML source. Download the corresponding assets from Canva if possible, place them in `assets/`, and update the relevant references in `index.html` or `css/styles.css`.
4. The original page branding/content currently says **Academy of Advanced General Dentistry (AAGD)**. It has not been renamed or rewritten.
5. This is a file separation, not a full rebuild. Test the page in a browser and review any missing images, links, and interactions before deployment.
6. The original code contains theme switching and responsive layout rules; these were preserved in the extracted CSS and JavaScript.
