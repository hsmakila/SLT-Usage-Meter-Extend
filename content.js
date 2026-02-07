// Function to search and log elements
function searchAndLogElements() {
    // Search for all divs with class "used-of"
    const usedOfDivs = document.querySelectorAll('div.used-of');
    
    // Search for all p with classes "text-center" and "blue"
    const textCenterBluePs = document.querySelectorAll('p.text-center.blue');
    
    if (textCenterBluePs.length > 0) {
        textCenterBluePs.forEach((p, index) => {
            // Create unique ID for each p element
            const customDivId = `slt-custom-div-${index}`;
            
            // Calculate forecast usage
            let forecastText = 'Unable to calculate forecast';
            
            // Try to find the corresponding div.used-of (assuming they are paired)
            if (usedOfDivs[index]) {
                const usedOfText = usedOfDivs[index].textContent.trim();
                const validTillText = p.textContent.trim();
                
                // Parse usage data (e.g., "39.0 GB USED OF 100.0 GB")
                const usageMatch = usedOfText.match(/([\d.]+)\s*GB\s*USED\s*OF\s*([\d.]+)\s*GB/i);
                
                // Parse valid till date (e.g., "(Valid Till : 16-Feb )")
                const dateMatch = validTillText.match(/(\d{1,2})-([A-Za-z]{3})/);
                
                if (usageMatch && dateMatch) {
                    const usedGB = parseFloat(usageMatch[1]);
                    const totalGB = parseFloat(usageMatch[2]);
                    const remainingGB = totalGB - usedGB;
                    
                    // Parse the valid till date
                    const day = parseInt(dateMatch[1]);
                    const monthStr = dateMatch[2];
                    const currentDate = new Date();
                    const currentYear = currentDate.getFullYear();
                    
                    // Convert month string to number
                    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
                    const month = months.indexOf(monthStr.toLowerCase());
                    
                    if (month !== -1) {
                        const validTillDate = new Date(currentYear, month, day);
                        
                        // If the date is in the past (earlier this year), it's probably next year
                        if (validTillDate < currentDate) {
                            validTillDate.setFullYear(currentYear + 1);
                        }
                        
                        // Calculate days remaining
                        const timeDiff = validTillDate - currentDate;
                        const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
                        
                        if (daysRemaining > 0) {
                            const dailyRate = remainingGB / daysRemaining;
                            forecastText = `Remaining\n${remainingGB.toFixed(2)} GB for ${daysRemaining} days\n${dailyRate.toFixed(2)} GB/day`;
                        } else {
                            forecastText = 'Package has expired or expires today!';
                        }
                    }
                }
            }
            
            // Check if custom div already exists
            let existingDiv = document.getElementById(customDivId);
            if (!existingDiv) {
                // Create new div with forecast only if it doesn't exist
                const newDiv = document.createElement('div');
                newDiv.id = customDivId;
                newDiv.style.whiteSpace = 'pre-line';
                // newDiv.style.fontFamily = 'Arial, sans-serif';
                newDiv.style.fontSize = '20px';
                newDiv.style.color = '#ffffff';
                // newDiv.style.fontWeight = 'bold';
                newDiv.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                
                // Create title with logo
                const titleDiv = document.createElement('div');
                titleDiv.style.display = 'flex';
                titleDiv.style.alignItems = 'center';
                titleDiv.style.marginBottom = '10px';
                
                // Create forecast content
                const forecastContent = document.createElement('div');
                forecastContent.textContent = forecastText;
                
                newDiv.appendChild(titleDiv);
                newDiv.appendChild(forecastContent);
                
                // Insert the new div right after the p element
                p.parentNode.insertBefore(newDiv, p.nextSibling);
            }
        });
    }
}

// Run initially
searchAndLogElements();

// Create a MutationObserver to watch for DOM changes
const observer = new MutationObserver(function(mutations) {
    // Check if any nodes were added (but not our custom divs)
    let nodesAdded = false;
    mutations.forEach(mutation => {
        if (mutation.addedNodes.length > 0) {
            // Check if the added nodes are NOT our custom divs
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && !node.id.startsWith('slt-custom-div-')) {
                    nodesAdded = true;
                }
            });
        }
    });
    
    if (nodesAdded) {
        searchAndLogElements();
    }
});

// Start observing the document body for changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});

