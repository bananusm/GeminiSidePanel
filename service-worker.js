function initiate () {
    console.log("loading gemini side panel")

    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));
    
};

initiate();