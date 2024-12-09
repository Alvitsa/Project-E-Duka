eDuka E-commerce Application

Welcome to eDuka, a modern and user-friendly e-commerce application designed to make online shopping seamless and enjoyable. This application is a single-page React application powered by a JSON server backend to manage product data and user interactions efficiently. Whether you're searching for specific items, browsing categories, or managing your shopping cart, eDuka offers a smooth and intuitive experience.

Project Description

The eDuka application is a fully functional e-commerce platform with the following features:
•	Frontend: Built with React, ensuring a responsive and dynamic user interface.
•	Backend: Utilizes a JSON server to handle API requests for fetching and persisting product data.
•	Styling: Custom CSS is used to deliver a visually appealing and consistent design.
•	Core Focus: Providing a seamless shopping experience with efficient navigation, filtering, and cart management.

Minimum Viable Product (MVP)

The application includes the following key features:
1.	Product Filtering System:
o	Users can filter products based on categories, price range, or search keywords.
o	Enables quick and targeted product discovery.
2.	Shopping Cart Management:
o	Users can add products to the cart, update item quantities, and remove items.
o	Dynamic calculation of the total price ensures transparency during checkout.
3.	Persisting Product Data via JSON-Server:
o	All product data is fetched and managed through a JSON server.
o	Includes functionality for adding new products and updating stock levels after purchases.

User Stories

1.	Browsing and Searching:
   
o	As a user, I want to browse products by category or search for specific items so I can easily find what I’m looking for.

3.	Cart Management:
   
o	As a user, I want to add products to my cart, update the quantity of items, and remove items so I can manage my purchase list before checkout.

5.	Product Details:
   
o	As a user, I want to view a detailed product page with descriptions, reviews, and price information so I can make an informed purchase decision.
How to Run the Application

Pre-requisites

1.	Ensure Node.js is installed on your system.
2.	Install npm (Node Package Manager).
   
Steps

 Clone this repository:

        git clone https://github.com/yourusername/project-e-duka.git

Navigate to the project folder:

       cd e-duka

Install dependencies:

         npm install

Start the JSON server:

           json-server --watch db.json --port 5000

Start the React development server:

          npm start

Access the application in your browser at:

       http://localhost:3000

Features in Detail
Product Filtering System
•	Search bar for keyword-based filtering.
•	Category and price range filters for more refined searches.

Shopping Cart
•	Add, update, or remove items dynamically.
•	Automatically calculates total cost and adjusts based on cart contents.
Product Details
•	Each product page includes:
o	Name, description, price, and reviews.

Technologies Used
•	Frontend: React
•	Backend: JSON Server
•	Styling: Custom CSS
•	API Communication: RESTful API

Contributing
We welcome contributions! If you'd like to contribute, please follow these steps:
1.	Fork the repository.
2.	Create a new branch for your feature or bug fix:

           git checkout -b feature-name

License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For questions or feedback, feel free to contact us at support@eduka.com.
Happy shopping with eDuka! 😊
