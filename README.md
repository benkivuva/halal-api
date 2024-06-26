# Halal Restaurants Directory API

Welcome to the Halal Restaurants Directory API! This API provides endpoints to help users locate halal restaurants based on various criteria such as city, state, and rating.

## Getting Started

To get started with the Halal Restaurants Directory API, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/benkivuva/halal-api
   ```

2. Install dependencies using npm:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. The server will start running on the specified port (default is 10000).

## Endpoints

### Get All Restaurants
```
GET /api/data
```
Retrieve a list of all halal restaurants.

### Get Restaurants by City
```
GET /api/data?city=<city>
```
Retrieve a list of halal restaurants in a specific city.

### Get Restaurants by State
```
GET /api/data?state=<state>
```
Retrieve a list of halal restaurants in a specific state.

### Get Restaurants by Rating
```
GET /api/data?rating=<rating>
```
Retrieve a list of halal restaurants with a specific rating.

### Add a New Restaurant
```
POST /api/data
```
Add a new halal restaurant to the directory.

### Update a Restaurant
```
PUT /api/data/:id
```
Update an existing halal restaurant in the directory.

### Delete a Restaurant
```
DELETE /api/data/:id
```
Delete an existing halal restaurant from the directory.

## Contributing

Contributions are welcome! If you'd like to contribute to the development of this API, please follow these guidelines:
- Fork the repository
- Create a new branch for your feature or bug fix
- Make your changes and test them thoroughly
- Submit a pull request detailing your changes

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
