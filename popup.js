document.getElementById('goToPage').addEventListener('click', () => {
    chrome.tabs.create({ url: "https://myslt.slt.lk/boardBand/summary" });
});
