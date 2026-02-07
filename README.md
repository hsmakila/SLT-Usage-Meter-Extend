# SLT Usage Meter Extend - Browser Extension

## Overview
This browser extension enhances the user experience on the [My SLT Broadband Usage webpage](https://myslt.slt.lk/). The extension intelligently analyzes your package usage and validity period to provide smart daily allowance calculations:

- **Smart Daily Allowance:** Automatically calculates how much data you can safely use per day.
- **Remaining Data Tracking:** See exactly how much data is left in your package.
- **Days Countdown:** Know how many days remain until your package expires.
- **Real-Time Updates:** Forecasts update automatically as you navigate the MySLT portal.

With this extension, users can make informed decisions about their daily usage and avoid running out of data before the package renewal date.

---

## Features

1. **Intelligent Daily Allowance Calculator**  
   Calculates your safe daily usage based on remaining data and package validity period.

2. **Package Status at a Glance**  
   Displays remaining data (in GB) and days left in your billing cycle.

3. **Automatic Calculations**  
   Dynamically updates forecasts based on your current usage and package details.

4. **Seamless Integration**  
   Information appears directly on the MySLT website without disrupting your browsing experience.

5. **Quick Portal Access**  
   One-click access to your SLT usage dashboard from the extension popup.

---

## Installation

### Prerequisites
- A modern web browser (Microsoft Edge, Chrome, or any Chromium-based browser) installed on your device.

### Steps
1. Clone this repository or download the zip file.
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```
2. Open your browser and navigate to the extensions page:
   - **Edge:** `edge://extensions/`
   - **Chrome:** `chrome://extensions/`
3. Enable **Developer Mode** (toggle in the top-right or bottom-left corner).
4. Click **Load unpacked** and select the folder containing the extension files.

Your extension will now be installed and active.

---

## Usage
1. Navigate to the [My SLT Broadband Usage webpage](https://myslt.slt.lk/).
2. The extension will automatically display additional information for each package, including:
   - Remaining data in GB
   - Days remaining until package expiry
   - Daily allowance (GB/day) based on your remaining quota
3. Click the extension icon in your browser toolbar for quick access to the MySLT portal.

---

## File Structure

```
.
├── content.js           # Main JavaScript file for the extension logic
├── manifest.json       # Metadata for the browser extension
├── popup.html          # Extension popup interface
└── popup.js            # Popup functionality for quick portal access
```

---

## Technologies Used
- **JavaScript** for extension logic and DOM manipulation.
- **Manifest V3** for modern browser extension development.
- **Chrome Extension API** (compatible with Edge and other Chromium-based browsers).

---

## Contributing
1. Fork the repository.
2. Create a new branch for your feature/fix.
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push the branch.
   ```bash
   git commit -m "Description of changes"
   git push origin feature-name
   ```
4. Open a pull request.

---

## How It Works
The extension automatically:
1. Detects your package usage data on the MySLT portal
2. Parses your remaining data and package expiry date
3. Calculates the number of days until expiry
4. Divides your remaining data by the days left to show your daily allowance
5. Updates the display dynamically as the page loads or changes

---

Thank you for using the SLT Usage Meter Extend Extension!

