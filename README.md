# SLT Usage Meter Extend - Edge Extension

## Overview
This Edge browser extension enhances the user experience on the [My SLT Broadband Usage webpage](https://myslt.slt.lk/). The extension provides additional insights such as:

- **Current Usage Rate:** Monitor your real-time data consumption rate.
- **Forecast Usage Rate:** Estimate future usage based on current trends.
- **Data Need or Loss Information:** Get projections on whether you’ll have excess data or run out before the end of the billing cycle.

With this extension, users can better manage their broadband usage and avoid unexpected data shortages or wastage.

---

## Features

1. **Real-Time Usage Monitoring**  
   Displays your current data usage rate.

2. **Forecasting**  
   Predicts your data usage trends and provides a forecast for the rest of the billing cycle.

3. **Data Need/Loss Calculation**  
   Calculates how much data you might need to balance your usage or how much surplus you might have at the end of the cycle.

---

## Installation

### Prerequisites
- Microsoft Edge browser installed on your device.

### Steps
1. Clone this repository or download the zip file.
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```
2. Open Edge and navigate to `edge://extensions/`.
3. Enable **Developer Mode** (toggle at the bottom-left corner).
4. Click **Load unpacked** and select the folder containing the extension files (`content.js` and `manifest.json`).

Your extension will now be installed and active.

---

## Usage
1. Navigate to the [My SLT Broadband Usage webpage](https://myslt.slt.lk/).
2. The extension will automatically display additional information, including:
   - Current usage rate.
   - Forecasted usage rate.
   - Data need/loss projection.

---

## File Structure

```
.
├── content.js           # Main JavaScript file for the extension logic
└── manifest.json       # Metadata for the browser extension
```

---

## Technologies Used
- **JavaScript** for extension logic.
- **Edge Extension API** for browser integration.

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

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact
For questions or feedback, feel free to reach out:
- GitHub: [your-username](https://github.com/your-username)
- Email: [your-email@example.com](mailto:your-email@example.com)

---

Thank you for using the My SLT Broadband Usage Edge Extension!

