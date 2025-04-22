# Gemini Side Panel

Gemini Side Panel is a Chrome extension that provides quick access to the Gemini app in a side panel. It includes a simple options page and a service worker to manage the extension's behavior.

## Features

- Opens the Gemini app in a Chrome side panel.
- Customizable options page (currently under development).
- Includes a service worker to handle background tasks.
- Supports light and dark themes with adaptive styling.

## File Structure

### Key Files

- **manifest.json**: Defines the extension's metadata and permissions.
- **options.html**: Options page for the extension.
- **options.js**: JavaScript for handling interactions on the options page.
- **service-worker.js**: Background script to manage the side panel behavior.
- **sidepanel.html**: HTML for the side panel displaying the Gemini app.
- **style.css**: Styles for the side panel and options page.

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top-right corner.
4. Click "Load unpacked" and select the project folder.

## Usage

- Press `Alt+G` (default shortcut) to open the Gemini side panel.
- The side panel displays the Gemini app in an iframe.
- The options page is accessible via the extension's settings.

## Permissions

This extension requires the following permissions:

- `declarativeNetRequest`: To manage network requests.
- `sidePanel`: To display content in the Chrome side panel.
- `storage`: To store user preferences.

## Development

### Scripts

- **options.js**: its a template, there is no options to put yet
- **service-worker.js**: Initializes the side panel behavior and logs messages to the console.

### Styling

The project uses a responsive design with support for light and dark themes. Styles are defined in `style.css`.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Credits

- Developed by Matt Baran.