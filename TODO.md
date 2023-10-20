<!-- Part 1: Dockerfile  -->

1. Run baseline application
2. Dockerize api server
3. Dockerize react client
4. Set up docker compose
5. Find public mongo image
6. Enable hot reloading by mounting in src

<!-- Part 2: Production -->

1. Break out separate docker compose files
2. Move DB to Atlas
3. Update client Dockerfile to build production version
4. Use Caddy to serve front end files
5. Parameterize connection strings
6. Split local and production configurations

<!-- Part 3: Deployment -->

1. Create Digital Ocean VM
2. Configure DNS
3. Configure network access in Atlas
4. Configure Caddy
5. Deploy
