## Getting Started

1.  **intialising the source app.**

    run `npm install` then run `npm run start`

    run `docker-compose up` to initialise the mongodb instance

2.  **slug defintion.**

    I have defined the slug as the category-title with no characters. e.g. hotel-lauberge-del-mar

3.  **calling endpoints.**

    to ingest hotels you can send a POST request to `http://localhost:3000/places-to-stay/ingest`

    to find a specific hotel you can send a GET request to `http://localhost:3000/places-to-stay/{slug}`

4. **running the test**

    run `npm run test` 

