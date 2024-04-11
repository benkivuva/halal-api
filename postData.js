const axios = require('axios');
const fs = require('fs').promises;

const apiUrl = 'http://localhost:5000/api/data';
const dataFilePath = 'MOCK_DATA.json';

// async function deleteAllData() {
//     try {
//         // Fetch existing data from the API
//         const { data: existingData } = await axios.get(apiUrl);

//         // Delete each item from the API
//         for (const item of existingData) {
//             await axios.delete(`${apiUrl}/${item.id}`);
//             console.log(`Deleted item with ID ${item.id}`);
//         }

//         console.log('All existing data deleted.');
//     } catch (error) {
//         console.error('Error deleting existing data:', error.message);
//     }
// }

async function postData() {
    try {
        // Delete all existing data first
        await deleteAllData();

        // Read the new restaurant data from the JSON file
        const rawData = await fs.readFile(dataFilePath);
        const restaurants = JSON.parse(rawData);

        // Post each new restaurant to the API
        for (const restaurant of restaurants) {
            const response = await axios.post(apiUrl, restaurant);
            console.log(`Posted: ${restaurant.restaurant_name}`);
        }

        console.log('New data posted successfully.');
    } catch (error) {
        console.error('Error posting new data:', error.message);
    }
}

postData();