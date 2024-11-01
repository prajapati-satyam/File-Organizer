

---

# File Organizer Script

This Node.js script organizes files in the **Downloads** folder by creating subfolders based on file extensions (e.g., `.jpg`, `.png`, `.jpeg`, `.pdf`) and moving files into their corresponding folders. If a folder for a specific file type doesn't exist, the script will create it.

## Features

- Organizes files by extension (`jpg`, `png`, `jpeg`, `pdf`).
- Automatically creates folders if they don’t already exist.
- Moves files into respective folders to help declutter your Downloads folder.
- Provides custom error handling with setup guidance.

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your system.
- **Correct Username**: Verify that the `username` variable in the script matches your system username.
- **Update `package.json`**: Add `"type": "module"` to your `package.json` file if you’re using ES6 `import` statements.

## Setup Guide

### Step 1: Install Node.js

Download and install Node.js from [here](https://nodejs.org/en/download).

### Step 2: Find and Set Your Username

Your username is required to set the correct path for your Downloads folder. Follow these steps:

1. **Find Your Username on Windows**:
   - Open **File Explorer** and navigate to `C:\Users`.
   - Your username will appear as a folder name inside `C:\Users`. It’s usually the name you see on the login screen or start menu.
   
2. **Update the Username in the Script**:
   - Open the script file and locate this line:
     ```javascript
     let username = 'YourUsername';
     ```
   - Replace `'YourUsername'` with your actual username.

### Step 3: Manually Set the Path (Optional)

If you’d like to manually set a custom path instead of relying on the `username` variable, you can directly specify the path. Here’s how:

```javascript
let basepath = 'C:\\Path\\To\\Your\\Downloads';
```

Replace `C:\\Path\\To\\Your\\Downloads` with the path you want to organize.

### Step 4: Modify `package.json` for ES6 Modules

Open your `package.json` file and add `"type": "module"` to enable ES6 module syntax. Here’s an example of what your `package.json` file should look like:

```json
{
  "name": "file-organizer",
  "version": "1.0.0",
  "description": "A script to organize files in the Downloads folder by file type.",
  "main": "script.js",
  "type": "module",
  "scripts": {
    "start": "node script.js"
  },
  "author": "Your Name",
  "license": "MIT"
}
```

If you don't have a `package.json` file, create one with `npm init -y`, then add the `"type": "module"` line.

### Step 5: Initialize the Project

If this is a new project, initialize it in the terminal:

```bash
npm init -y
```

## Running the Script

1. **Execute the Script**  
   Run the script using Node.js:
   ```bash
   node script.js
   ```
   **Note**: Replace `script.js` with the actual filename.

2. **Output Messages**  
   - `made`: Folder created and file moved.
   - `exist`: Folder already exists, file moved.

## Troubleshooting

### Common Issues

If you encounter errors such as:
- `User not found`
- `Node.js not installed`
- `npm project not initialized`

#### Solutions:
1. **Install Node.js**: [Download here](https://nodejs.org/en/download).
2. **Verify Username**: Ensure the `username` variable matches your system username.
3. **Set `"type": "module"`**: Update your `package.json` as shown above.
4. **Run Again**: After making corrections, re-run the script.

## Example

Before running the script:

```
Downloads
├── image1.jpg
├── document.pdf
└── image2.png
```

After running the script:

```
Downloads
├── jpg
│   └── image1.jpg
├── pdf
│   └── document.pdf
└── png
    └── image2.png
```

## Contact Information

If you have questions or encounter issues, feel free to reach out directly:

- **WhatsApp**: [Message me](https://wa.me/918511477882) or contact me at +91 8511477882.
- **Email**: satyamprajapati1979@gmail.com

---

## License

This project is licensed under the MIT License.