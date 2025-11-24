# Tab Switcher Extension for Firefox

A simple browser extension that allows you to switch between tabs using keyboard shortcuts with arrow keys.

## Features

- Switch to previous tab: `Alt + Up Arrow`
- Switch to next tab: `Alt + Down Arrow`
- Circular navigation (wraps around from last to first tab)

## Installation

1. **Download the extension files**
   - Create a folder named `tab-switcher-extension`
   - Save `manifest.json` and `background.js` in this folder

2. **Load the extension in Zen Browser**
   - Open Zen Browser
   - Navigate to `about:debugging`
   - Click on "This Zen" in the sidebar
   - Click "Load Temporary Add-on..."
   - Select the `manifest.json` file from your folder

3. **Start using**
   - Press `Alt + Up Arrow` to go to the previous tab
   - Press `Alt + Down Arrow` to go to the next tab

## Files Structure

```
tab-switcher-extension/
├── manifest.json
└── background.js
```

## Customization

You can change the keyboard shortcuts by editing the `suggested_key` values in `manifest.json`:

- Replace `Ctrl` or `Alt` with `Shift`
- Change `Left`/`Right` to other keys
- Use combinations like `Alt+Shift+Left`

## Compatibility

This extension works on:
- **Zen Browser**
- **Firefox** (and Firefox-based browsers)
- Any browser supporting WebExtensions API and Manifest V2

## Requirements

- Zen Browser or Firefox
- Browser version supporting Manifest V2

## Notes

- The extension is loaded as a **temporary add-on**, which means it will be removed when you close the browser
- You'll need to reload it each time you restart your browser
- For permanent installation, you would need to sign and publish it on Firefox Add-ons (addons.mozilla.org) or use Firefox Developer Edition/Nightly with signing disabled