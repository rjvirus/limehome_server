# limehome_server
If any issues persisting please pull the latest code. Thank you :)

This REST API has been implmented using Google Firestore Database and Express which could be deployed as a serverless function as well with some tweaks. In order to swiftly run the program locally follow the instructions below:

1. Go to this link: https://drive.google.com/file/d/10ZDsd43aCiS0aazKblYIG0BoegwE7mf-/view?usp=sharing
and download the json file.
2. create a file named 'config.json' in the folder 'functions' and copy the contents of the downloaded file to it.
3. This file consists of permissions and keys to access firestore database.
4. Run 'npm install' in 'functions' folder.
5. "npm run serve" to run the function locally


Three endpoints available to the same route '/api/favourites' with difference in request method :-

1. PUT method to add favourited item/property to the database.
2. DELETE method to remove item/property from favourites.
3. GET method to fetch all favourites item.


Manually tested all the APIs using Postman App. 

