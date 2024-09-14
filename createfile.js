const fs = require('fs');

// Content to be written to the file
const content = `Line 1: Hello World
Line 2: This is a test
Line 3: Node.js file operations
Line 4: Reading characters
Line 5: From the file
Line 6: And displaying them
Line 7: In reverse order
Line 8: Using JavaScript
Line 9: File system module
Line 10: Node.js example`;

// Write the content to 'sample.txt'
fs.writeFile('sample.txt', content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to the file:', err);
        return;
    }
    console.log('File created successfully with the content.');
});
