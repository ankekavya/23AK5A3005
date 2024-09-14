const fs = require('fs');

function readAndReverseCharacters(filePath, numChars) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        // Check if the file has enough characters
        if (data.length < numChars) {
            console.log(`The file contains fewer than ${numChars} characters.`);
            numChars = data.length; // Adjust numChars to the file length
        }

        // Get the first 'numChars' characters
        const characters = data.slice(0, numChars);

        // Reverse the characters
        const reversed = characters.split('').reverse().join('');

        // Display the reversed characters
        console.log('Reversed characters:', reversed);
    });
}

// Create file and then read from it
const createFile = () => {
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

    fs.writeFile('sample.txt', content, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }
        console.log('File created successfully with the content.');

        // Read and reverse characters after file is created
        const n = 50; // Number of characters to read from the start of the file
        readAndReverseCharacters('sample.txt', n);
    });
};

// Execute the function to create the file and then read from it
createFile();
