## Prerequisitces 

0. Node >= `v12`(this may or may not cause issues, but the codebase was created with `v12`, so it's best to use `nvm` and make sure you're on the same version).
1. `nodemon` for running the API and watching files for changes (it's not included as a dep, as it was installed globally when this codebase was created).
2. You need your own API key from [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction), as each is personal and there isn't one included in this repo

## Running the codebase

0. Clone this repo
1. As one is not included for security, create a `.env` file with two variables as follows...

```
MOVIE_API_BASE_URL=https://api.themoviedb.org/3
MOVIE_API_KEY=<THE_MOVIE_DB_API_KEY_YOU_CREATED>
```
2. Install dependencies with `yarn` or `npm`
3. `yarn run dev` will bundle things up and watch using `nodemon` (See: prereq #1)
4. You can test for a response using Postman by creating a `GET` request that calls `localhost:8080/movies` (You should get back an array of popular movies...)
