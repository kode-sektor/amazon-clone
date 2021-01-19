# amazon-clone

***

This project aims to create a carbon-copy of the e-Commerce colossus : Amazon. The project aims to replicate all available features, behaviours and functions. A siamese look-and-feel is also bound to the scope of this project. In other words, a user that lands on this website will so 'feel at home', thinking he's on the true Amazon store.

***

Code will follow best practices; technology stack used will be the MERN -- where 'M' stands for MongoDB (not *MySQL(i)*). 

Some of the pages created will be home page, account, addon item conditions, cart, archive order, buy-again-reorder, buy-it-again, cancel-order, change-shipping-speed, delivery, amazon prime, order, package-arrival-failure, periodic-purchase-setup, place-order, problem-with-order, product-detail, rate-you-transaction, seller-feedback, image-rollover, carousels, robust recommendation algorithm, track-late-arrival, view-edit-order, best sellers and lots more...

*** 

Multiple login options facilitated by Firebase will be taken advantage of. Local Storage will come in handy in storing transitory and / or small pieces of data like cart information, user details and token. Redux will be used to robustly handle state. Largely, the project will run on functional components. An extremely neat admin dashboard will be created for the administrator to communicate with the database. It will the alert the shop owner of finished and almost finished inventory. It will enable him to be able to add, remove, update and delete products, pages and handle orders. Any transaction will have a mail instantly sent to user to boost user confidence. Different stages of the product delivery will as well have the shopper notified.

*** 

Safety is also considered. All passwords are hashed before saving them. Manipulation of product price through nefarious means will be of no consequence as the prices of product coming from the front end will be compared with the original price from the database before an order is created.

Processing of payments will be engineered to work with both Stripe and Paypal. Their APIs makes this possible. 