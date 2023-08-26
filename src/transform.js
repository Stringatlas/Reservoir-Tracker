import * as fs from "fs"
import data from "./data.json" assert { type: 'json' }

let updatedData = {};

for (const [key, value] of Object.entries(data)) {
    updatedData[key] = {}; // Initialize the object for each key

    for (const [symbol, name] of Object.entries(value)) {
        if (symbol === "Map") {
            updatedData[key]["Map"] = name;
        } else {
            updatedData[key]["Symbol"] = symbol;
            updatedData[key]["Name"] = name;
        }
    }
}

let filePath = "./output.json"

const jsonData = JSON.stringify(updatedData);

fs.writeFile(filePath, jsonData, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Data written to file successfully.');
    }
});




