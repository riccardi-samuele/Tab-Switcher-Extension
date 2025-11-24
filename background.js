browser.commands.onCommand.addListener((command) => {
  if (command === "switch-to-previous-tab") {
    switchToPreviousTab();
  } else if (command === "switch-to-next-tab") {
    switchToNextTab();
  }
});

async function switchToPreviousTab() {
  try {
    const tabs = await browser.tabs.query({ currentWindow: true });
    const currentTab = tabs.find(tab => tab.active);
    
    if (!currentTab) return;
    
    const currentIndex = tabs.indexOf(currentTab);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
    
    await browser.tabs.update(tabs[previousIndex].id, { active: true });
  } catch (error) {
    console.error("Error switching tab:", error);
  }
}

async function switchToNextTab() {
  try {
    const tabs = await browser.tabs.query({ currentWindow: true });
    const currentTab = tabs.find(tab => tab.active);
    
    if (!currentTab) return;
    
    const currentIndex = tabs.indexOf(currentTab);
    const nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
    
    await browser.tabs.update(tabs[nextIndex].id, { active: true });
  } catch (error) {
    console.error("Error switching tab:", error);
  }
}