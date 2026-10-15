# FastAPI – Interview Revision Notes

Goal: Remember the most important FastAPI concepts, their uses, and short interview-ready answers.

## 1. FastAPI Fundamentals

| Topic                | Short interview answer                                                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| What is FastAPI?     | A modern, high-performance Python framework for building APIs.                                                                                         |
| Why FastAPI?         | It provides automatic validation, high performance, async support, and interactive API documentation.                                                  |
| What is an API?      | An API allows two applications to communicate with each other.                                                                                         |
| What is REST API?    | An API architecture that uses HTTP methods to access and manipulate resources.                                                                         |
| What is an endpoint? | A specific URL where an API receives requests.                                                                                                         |
| What is Uvicorn?     | An ASGI server used to run FastAPI applications.                                                                                                       |
| What is ASGI?        | An interface that supports asynchronous communication between web servers and Python applications.                                                     |
| FastAPI vs Flask?    | FastAPI offers built-in validation, automatic API docs, and native async support, while Flask is a lightweight framework with fewer built-in features. |

## 2. HTTP Methods and Status Codes

HTTP methods

| Method | Purpose               | Example              |
| ------ | --------------------- | -------------------- |
| GET    | Retrieve data         | Get all users        |
| POST   | Create data           | Add a new user       |
| PUT    | Replace existing data | Update complete user |
| PATCH  | Partially update data | Update user email    |
| DELETE | Remove data           | Delete a user        |

Important HTTP status codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 204  | No Content            |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 422  | Validation Error      |
| 500  | Internal Server Error |

Interview question: What is the difference between PUT and PATCH?

- PUT replaces the complete resource.
- PATCH updates only selected fields.

## 3. Pydantic and Data Validation

What is Pydantic?

Pydantic is a Python library used to validate and serialize data using type hints.

Why use Pydantic in FastAPI?

- Validates incoming request data.
- Checks data types and required fields.
- Generates clear validation errors.
- Helps define request and response schemas.

Example:

```
from pydantic import BaseModelclass User(BaseModel):    name: str    age: int    email: str
```

FastAPI uses this model to validate the request body automatically.

Remember: Pydantic models define the expected data structure; they are not database models.

## 4. Path Parameters, Query Parameters, and Request Body

| Topic           | Purpose                        | Example           |
| --------------- | ------------------------------ | ----------------- |
| Path parameter  | Identifies a specific resource | `/users/10`       |
| Query parameter | Filters or modifies a request  | `/users?age=25`   |
| Request body    | Sends data to the server       | JSON data in POST |

Example:

```
from fastapi import FastAPIapp = FastAPI()@app.get("/users/{user_id}")def get_user(user_id: int, active: bool = True):    return {"id": user_id, "active": active}
```

Interview question: What is the difference between path and query parameters?

Path parameters identify a specific resource, while query parameters are generally used for filtering, sorting, searching, or pagination.

## 5. Routing and Response Handling

| Topic          | Short interview answer                                          |
| -------------- | --------------------------------------------------------------- |
| APIRouter      | Organizes endpoints into separate modules.                      |
| response_model | Validates and filters the output according to a defined schema. |
| HTTPException  | Raises HTTP errors with a status code and detail.               |
| JSON response  | Sends structured data in JSON format.                           |
| Tags           | Groups endpoints in API documentation.                          |

Example:

```
from fastapi import HTTPException@app.get("/users/{user_id}")def get_user(user_id: int):    if user_id != 1:        raise HTTPException(            status_code=404,            detail="User not found"        )    return {"id": 1, "name": "Vibha"}
```

Remember: Use `HTTPException` for expected API errors instead of returning error messages with a successful status code.

## 6. Async and Await

| Topic        | Short interview answer                                                     |
| ------------ | -------------------------------------------------------------------------- |
| async        | Defines an asynchronous function.                                          |
| await        | Waits for an asynchronous operation without blocking the event loop.       |
| Synchronous  | Executes operations sequentially and may block while waiting.              |
| Asynchronous | Allows other tasks to progress while waiting for supported I/O operations. |

Example:

```
@app.get("/data")async def get_data():    return {"message": "Hello"}
```

Interview question: Why use async in FastAPI?

Async helps handle concurrent I/O operations efficiently, especially when working with databases, external APIs, and network requests.

Important: Async does not automatically make CPU-intensive ML model predictions faster.

## 7. Dependency Injection

What is dependency injection?

Dependency injection allows FastAPI to provide reusable components or resources to endpoints.

Common uses:

- Database connections
- Authentication
- Shared validation logic
- Common services

Example:

```
from fastapi import Dependsdef get_message():    return "Hello"@app.get("/")def home(message: str = Depends(get_message)):    return {"message": message}
```

Interview answer: `Depends()` helps reuse logic, manage dependencies, and keep endpoints clean and maintainable.

## 8. Error Handling

| Concept           | Purpose                      |
| ----------------- | ---------------------------- |
| HTTPException     | Raises an HTTP error         |
| try-except        | Handles runtime exceptions   |
| Validation errors | Handle invalid input data    |
| Status codes      | Communicate request outcomes |

Example:

```
try:    result = 10 / 0except ZeroDivisionError:    raise HTTPException(        status_code=400,        detail="Invalid operation"    )
```

Interview question: How do you handle errors in FastAPI?

I use `HTTPException` for expected API errors and `try-except` blocks for handling runtime exceptions. For larger applications, I can also define custom exception handlers.

## 9. CORS

What is CORS?

Cross-Origin Resource Sharing is a browser security mechanism that controls whether a frontend from one origin can access resources from another origin.

Example: React running on `localhost:5173` calling FastAPI on `localhost:8000`.

```
from fastapi.middleware.cors import CORSMiddlewareapp.add_middleware(    CORSMiddleware,    allow_origins=["http://localhost:5173"],    allow_credentials=True,    allow_methods=["*"],    allow_headers=["*"],)
```

Interview answer: I configure CORS middleware in FastAPI to allow requests from trusted frontend origins.

## 10. Authentication and Security

| Topic            | Short interview answer                                                    |
| ---------------- | ------------------------------------------------------------------------- |
| Authentication   | Verifies who the user is.                                                 |
| Authorization    | Determines what the user can access.                                      |
| JWT              | A token format commonly used for stateless authentication.                |
| OAuth2           | An authorization framework that can also be used in authentication flows. |
| Password hashing | Securely stores password representations instead of plain-text passwords. |
| Bearer token     | A token sent in the HTTP Authorization header.                            |

Interview question: How does JWT authentication work?

1. The user logs in with credentials.
2. The backend verifies the credentials.
3. The backend generates a signed JWT.
4. The client sends the token with protected API requests.
5. The backend verifies the token and grants access according to permissions.

## 11. Automatic API Documentation

FastAPI automatically generates interactive API documentation.