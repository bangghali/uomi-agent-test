// Simple placeholder agent for Uomi with JSON read

const fs = require('fs');

function main() {
    try {
        const rawData = fs.readFileSync('agent.json', 'utf-8');
        const agent = JSON.parse(rawData);

        console.log("✅ JSON valid!");
        console.log("Author:", agent.author);
        console.log("Content:", agent.content);
        console.log("Hello from my first Uomi Agent!");
    } catch (err) {
        console.error("❌ Error reading or parsing agent.json:", err.message);
    }
}

// Run agent
main();
