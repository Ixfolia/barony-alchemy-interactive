# Barony Alchemy Calculator - Electron Version

## Building the Executable

### Prerequisites

1. Install Node.js from [https://nodejs.org/](https://nodejs.org/) (LTS version recommended)
2. Open Command Prompt or PowerShell in this directory

### Installation & Build Steps

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

4. **Exe file location:**

   - The built `.exe` file will be in folders `dist` > `win-unpacked`
   - Look for `Barony Alchemy Calculator Setup X.X.X.exe`

### Optional: Add Custom Icon

- Add an `icon.ico` file to this directory
- Recommended size: 256x256 pixels
- The builder will automatically use it if present

### Distribution

- The installer created in `dist` can be distributed to users
- No additional software required to run the installed application

### Troubleshooting

- If build fails, try: `npm install --force`
- For antivirus warnings: These are common for Electron apps
- The app works completely offline once built
