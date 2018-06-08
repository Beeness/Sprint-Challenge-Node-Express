# Review Questions

## What is Node.js?
    It's a runtime environment which means we can run JS outside of the browser environment.

## What is Express?
    Express is a Node framework.  It's like a gatekeeper that gives us the ability to build.
## Mention two parts of Express that you learned about this week.
    `.get`, `.post`, `.delete`, `.put`, `.use` and `.listen` methods
## What is Middleware?
    Middleware are functions that have access to the req and res objects . It can execute any code, mae changes to req and res objects, end the req-res cycle and it can also call the next middleware function.
## What is a Resource?
    A Resourde the sourde that the information is coming from.  A representation of data that lives in a database.
## What can the API return to help clients know if a request was successful?
    An API can return a status code such as in the 200s to let the user know if a request was successful or perhaps a status code in the 400s to let the user know they've made an error.
## How can we partition our application into sub-applications?

## What is CORS and why do we need it?
    CORS is middleware that allows a request for a resource outside of the origin, basically cross-origin requests.