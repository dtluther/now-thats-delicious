## Outline of My Steps

### Setup
1) Setup a MongoDB database
    * Make sure you have MongoDB installed
    * Used mLab for this
        * MongoDB deployments &rarr; `Create New`
            * Cloud Provider: AWS
            * Plan Type: Sandbox (Free)
            * AWS Region: US-East 1
    * `variables.env` file to sync DB
        * Replace the `DATABASE` string with the string provided by mLab:
            * Should follow form: `mongodb://user:pass@host.com:port/database`
                * Mine was: `mongodb://<dbuser>:<dbpassword>@ds131697.mlab.com:31697/damn-son-whered-you-find-that`
    * Add username and password for the database (not offered via every site, but mLab has this automatically)
        * Click `Users` tab &rarr; `Add Database User`
        * In `variables.env`, in the `DATABASE` string, replace `<dbuser>` with the database username and `<dbpasspassword>` with the password
    * Use GUI to test username and password for db
        * Used MongoDB Compass at https://www.mongodb.com/products/compass
        * Copy `DATABASE` string to input into MongoDB Compass
            * Should recognize you have it copied into your clipboard and auto-upload
            * If it loads a database page, the database is live and the username and password are working
    * NOTE: Can manually create the DB via command line with MongoDB (if no internet conneection)

2) Starter files and environment variables (`variables.env`)
    * `variables.env`
        * Certain info should never go into our Git repo, so we can store it in a file like `variables.env`. Sensitive indo stored in here often includes:
            * API tokens
            * Server info
        * SHOULD NEVER GO INTO GIT REPO
        * Generally, where we store sensitive info, including:
    * `app.js`
        * Imported libraries explained:
            * (TBD)
        * Building our app on a framework called Express
            * Minimalist, does not do a whole lot by itself, so we have to choose which parts of the Node.js ecosystem we want (pretty typical of for Node)
    * `start.js`
        * Imports the `mongoose` library, which is our interface for MongoDB
        * Imports our environmental variables from `variables.env`
        * Connects to the DB and watches for errors
        * Starts the app!
            * Test with `npm start` in the terminal
                * `package.json` has scripts explaining what commands like `npm start` do
                    * `nodemon`: a package that monitors files &ndash; anytime a file is changed, it will kill itself and restart the whole server again
                    * `webpack -w`: this will watch frontend files and compile JavaScript into bundle

### Core Concepts
1) Routing
    * In `/routes/index.js` import Express, then grab the router from express:
        ```
        const router = express.Router()
        ```
    * Import routes into the `app.js` file:
        ```
        const routes = require('./routes/index');
        ```
        Then instruct the app to use the routes file anytime we go to `/`anything:
        ```
        app.use('/', routes);
        ```
    * How `router.get` works:
        ```
        router.get('/', (req, res) => {
            console.log('Hey!!!')
            res.send('Hey! It works!');
            // const dillon = { name: 'Dillon', age: 100 }
            // res.json( name: 'Dillon', age: 100 );
            // res.json(req.query)
        });        
        ```
        * Pass in the url, then a callback that takes the request and response (and a `next`, which will be addressed in middleware)
            * `request`: object full of info coming in from the user
            * `response`: object full of methods/info going back to the user
        * Anytime we `console.log` in the router, it shows up in the terminal
        * `res.send` sends a response back to the client
        * `res.json` sends a JSON response to the client
            * Commented out because we can't send data to the browser twice
        * `req.query` is an object full of all the query string parameters (the portion of the URL after the `?`)
            * The reason we can access these query parameters is because of the following middleware in `app.js`:
                * `app.use(bodyParser.json());`
                * `app.use(bodyParser.urlencoded({ extended: true }));`
                    * Before the routes are even hit, Express is going to check the URL if anyone has posted any data (from a form element, for instance). Things after the `?` will be included in `req.query`.
        * `req.params` is an object that has all the variables in a route
            ```
            router.get('/reverse/:name', (req, res) => {
                const reverse = 
                res.send(req.params.name)
            })
            ```
            * Text following a colon in a route (`:name`, in this case) is a variable, that we can access through `req.params`
                * More in depth examples shown in the `routes/index.js` file
        * `req.body` for posted params, more on that later
* In summary, `req` has the information, `res` has all the methods for sending data back to the client
    * Lots more in Express docs: http://expressjs.com/en/4x/api.html