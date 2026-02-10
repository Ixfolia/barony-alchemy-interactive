# Barony Alchemy Calculator

An interactive web-based calculator for Barony game potion combinations.

## Features

- Interactive potion combination calculator
- Visual interface with game-accurate icons
- Based on the [steam community Barony potion spreadsheet](https://steamcommunity.com/sharedfiles/filedetails/?id=3012918426)

## How to Use

1. Select a **Base** potion from the left column
2. Select a **Secondary** potion from the right column  
3. View the resulting potion in the result area

## Special Rules

- **Water + Any Ingredient = Dilute** (Duplicates the secondary ingredient)
- **Secondary + Secondary = Sickness** (Creates a skull potion)
- **Demon + Any Ingredient = Random** (Creates a random result)

## Deployment

### Web Version

Deployed via Github Pages

### Desktop Application (Electron)

You can build this calculator as a standalone desktop application for offline use.

#### Prerequisites

1. Install Node.js from [https://nodejs.org/](https://nodejs.org/) (LTS version recommended)
2. Open Command Prompt or PowerShell in this directory

#### Build Steps

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Test the app (development):**

   ```bash
   npm start
   ```

3. **Build Windows executable:**

   ```bash
   npm run build-win
   ```

4. **Find your executable:**

   - The built `.exe` file will be in the `dist` folder
   - Look for `Barony Alchemy Calculator Setup X.X.X.exe`

#### Optional: Add Custom Icon

- Add an `icon.ico` file to this directory
- Recommended size: 256x256 pixels
- The builder will automatically use it if present

#### Troubleshooting

- If build fails, try: `npm install --force`
- For antivirus warnings: These are common for Electron apps
- The app works completely offline once built

## Technologies Used

- HTML5
- CSS3 with custom properties
- Vanilla JavaScript
- VT323 font (retro gaming aesthetic)

## Assets

All potion icons are sourced from the official Barony game assets.
