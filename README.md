# U.S. Driver's License Generator and Validator

This web application allows users to generate and validate U.S. driver's licenses using customizable inputs. It also supports generating PDF417 barcodes for the licenses and provides functionalities to download the barcode as an SVG file. The application includes animations, a dark/light mode switch, and state-specific license validation.

## Features

- **Generate U.S. Driver's License Numbers**: Based on user input and selected state.
- **Validate License Numbers**: Ensures the generated license number conforms to state-specific formats.
- **PDF417 Barcode Generation**: Encodes license data into a PDF417 barcode.
- **Download Barcode**: Save the barcode as an SVG file.
- **Light/Dark Mode Toggle**: Switch between light and dark themes for better user experience.
- **Responsive UI/UX**: Smooth interactions and animations for a sleek interface.

## Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/PaPaGuyCodes/US-DL-Validator-Generator.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd US-DL-Validator-Generator
    ```

3. **Open `index.html`**: The project is ready to use. Open `index.html` in a web browser to view the application.

## Dependencies

- **PDF417.js**: A library for generating PDF417 barcodes.
    - CDN: `https://cdn.jsdelivr.net/npm/pdf417-js@1.1.0/pdf417.min.js`

## Usage

1. **Select State**: Choose a U.S. state from the dropdown list.
2. **Enter Personal Information**: Input your first name, last name, and date of birth.
3. **Generate License**: Click the "Generate License" button to create a license number and its corresponding PDF417 barcode.
4. **Validate License**: Click the "Validate License" button to check if the license number is valid according to the selected state's format.
5. **Download Barcode**: Click the "Download Barcode" button to save the barcode as an SVG file.
6. **Toggle Theme**: Use the theme toggle button to switch between light and dark modes.

## Author

[PaPaGuyCodes](https://github.com/PaPaGuyCodes)
