# Adding Authentication to React App

## We can't just use boolean from client to server as a authentication process
## The server needs to send something elese beyond yes or no

## We can do this with two methods

# 1. Server-side Session :
* Store unique identifier on server, send same identifier to the client
* Client sends identifier along with requests to protect the resources 
* This works when both client and server and tightly coupled 
* If frontend is uploaded on other server and backend on other the coupling is not that tight
* e.g. google maps, blog-book :)

# 2. Authentication Tokens
* Create (but not store ) "permission" token on server, send token to the client
* Client sends token along with requests to protected resources