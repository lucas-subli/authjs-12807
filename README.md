### Dependencies

* Have node 20+ installed
* Have pnpm installed
* Run

```
pnpm install
```

### Setting up local database

* Run

```
pnpm dlx wrangler d1 execute auth-js-12807 --local --file 'db/v0001_up.sql'
```

This will create an SQLite database in the `.wrangler/state/v3/d1/miniflare-******/` folder.

This DB will be used to store user data.


### Setting up environment variables

* Copy the `.env.example` file to `.env` and fill in the values.

### Running the project

* Run

```
pnpm start
```