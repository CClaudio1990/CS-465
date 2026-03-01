# CS-465: Full Stack Development

# Architecture

**Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).**

* The **Travlr Getaways** project utilized Angular architecture and Express for the frontend:
    
    * **Single-Page Application (Angular):** The admin website was created using Angular as the frontend. An SPA provides a dynamic and fluid experience for the end user by providing fast loading content given that there are not multiple page to render. Each "page" is just a component of the main page and is mostly handled at the browser level (Client-Side).

    * **Express:** For the customer facing UI, we used the express architecture with Handlebars Services (HBS) to render dynamic content. Much of the load is on the backend (Server-Side) using Express.

**Why did the backend use a NoSQL MongoDB database?**

* The reasons behind the use of a NoSQL database include: flexible schemas, horizontal scalability and development efficiency. MongoDB stores data in a format that is much like the JavaScript/TypeScript components in the application code. This means that development can be faster and the database can be scaled without the need for more expensive equipment. You can scale it through smaller, less expensive servers.

# Functionality

**How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?**
    
* JSON is a data format, not a programming language like JavaScript is. JSON ties the frontend and backend together by being the medium to store and transmit the data between layers. Specifically, JSON is like a universal language spoken by both the front and back ends. The frontend parses the JSON data coming from the backend when it recieves the data it requests.

**Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.**

* **Single Page Application (SPA):** During the creation of the SPA using Angular, there were several components that were very similar to one another and could be refactored, making the process more efficient.
    * The 'trip-card' and 'trip-listing' components were similar and I was able to refactor most of the former from the latter.
* **Node/Express:** Many of the Handlebar Services layout components were just trucated from original HTML files. This took hundreds of lines of code and condensed it into much less.
* **Summary:** With reusable and modular code, we can improve the scalability of applications and make the development process more effiecient as well as consistent.

# Testing

**Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.**

Testing the application was vital. Every major change made meant testing needed to be done to ensure it was working:

**Frontend:**

* The Express and Angular components were tested consistently by manually testing data changes/requests through Postman to ensure that the backend server recieves them. For the frontend admin site, testing was performed to ensure that adding and editing trips was based conditionally on Authentication through JWT.

**Backend:**

* Postman was primarily used to test that the frontend requests were reaching the database. From Postman, we could see errors and troubleshoot from there.

**Security:**

* testing the security layer was accomplished through both Postman and jwt.io to validate tokens. This ensured that invalid or expired tokens were rejected by the application when attempting to login.

**Methods, Endpoints, Security:**

* **Methods:** GET, POST, PUSH, PUT are the HTTP methods that define how the frontend interacts with the MongoDB Database.

* **API Endpoints:** API Endpoints ('/api/trips') are defined for data to be changed, viewed and created.

* **Authentication:** JWT authentication ensures that only admin users could access and manipulate trips.

# Reflection

**How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?**
