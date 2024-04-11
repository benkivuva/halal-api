import sqlite3
import json

# Connect to the SQLite database
conn = sqlite3.connect('halal.db')
cursor = conn.cursor()

# Read the JSON file
with open('MOCK_DATA.json') as f:
    data = json.load(f)

# Insert data into the database
for row in data:
    cursor.execute("INSERT INTO restaurants (restaurant_name, city, state, zipcode, phone_number, rating) VALUES (?, ?, ?, ?, ?, ?)", 
                   (row['restaurant_name'], row['city'], row['state'], row['zipcode'], row['phone_number'], row['rating']))

# Commit changes and close connection
conn.commit()
conn.close()

print("Data imported successfully.")