# 2115000849

# Top Products Microservice and Frontend

This project consists of two parts: a backend microservice and a frontend web application. The microservice aggregates product data from multiple e-commerce APIs, while the frontend displays the top N products with filtering and sorting options.

## Description

### Backend

The backend microservice is built using the MERN stack (MongoDB, Express.js, React, Node.js). It fetches and caches product data from five different e-commerce companies, providing endpoints to retrieve the top N products within a specified category and price range.

#### Features

- Fetches product data from multiple e-commerce APIs.
- Caches product data in MongoDB to minimize API calls and reduce costs.
- Provides endpoints to retrieve top N products with pagination, filtering, and sorting.
- Allows retrieving detailed information for a specific product.

### Frontend

The frontend application is developed using React and Material UI for styling. It displays the top N products fetched from the backend, allowing users to filter and sort products based on various criteria.

#### Features

- Responsive design using Material UI.
- Displays top N products with pagination.
- Allows filtering by category, company, rating, price range, and availability.
- Supports sorting by price, rating, and discount.
- Provides detailed product information on a separate page.

## Usage

### Backend

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/top-products-microservice.git
    cd top-products-microservice
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add the following:
    ```env
    MONGODB_URI=mongodb://localhost:27017/top-products
    PORT=3000
    ```

4. **Start the server**:
    ```bash
    npm run dev
    ```

### Frontend

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/top-products-frontend.git
    cd top-products-frontend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

4. **Access the application**:
    Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

### Backend

- **GET** `/categories/:categoryname/products` - Retrieve top N products with optional filters and sorting.
- **GET** `/categories/:categoryname/products/:productid` - Retrieve detailed information for a specific product.

### Frontend

- **Home Page** - Displays top N products with filters and sorting options.
- **Product Page** - Displays detailed information for a selected product.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose, Axios
- **Frontend**: React, Material UI, Axios, React Router DOM

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Material UI for the frontend components.
- Unsplash for random product images.
