This is a Recipe Management API built with Node.js, Express, and MongoDB. The API allows users to register, log in, and manage recipes. Recipes can be created, read, updated, and deleted (CRUD), and images can be uploaded either locally or via Cloudinary. Each recipe has fields such as title, ingredients, instructions, cuisineType, and author, and is associated with a user account.


Features
User authentication using JWT.
CRUD operations for recipes.
Each recipe is linked to an authenticated user.
Recipes can be categorized by cuisineType.

Error Handling
The API uses standard HTTP status codes to indicate the success or failure of API calls:

200 OK: The request was successful.
201 Created: A new resource was successfully created.
400 Bad Request: There was an issue with the request (e.g., missing required fields).
401 Unauthorized: The user is not authenticated.
403 Forbidden: The user is not authorized to perform the action.
404 Not Found: The resource could not be found.
500 Internal Server Error: A server error occurred.

