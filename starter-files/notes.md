#### Outline of my steps

1) Setup a MongoDB database
    * Used mLab for this
        * MongoDB deployments &rarr; `Create New`
            * Cloud Provider: AWS
            * Plan Type: Sandbox (Free)
            * AWS Reagion: US-East 1
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

2) Environment variables (`variables.env`)
    * Building our app on a framework called Express
        * Minimalist, does not do a whole lot by itself, so we have to choose which parts of the Node.js ecosystem we want (pretty typical of for Node)
    * Environmental variables are where we store our sensitive and private information (passwords, API tokens, etc.)
        * SHOULD NEVER GO INTO GIT REPO