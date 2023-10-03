<!-- ? VITE TO NPX 1.0 -->

1. save file in git
2. delete folder vite in repo
3. set new npx for repo and paste files from git

# setting-env

<!-- ? axios connect api -->

init 1 file config to setup env for axios by:
`{  
 import axios from 'axios';

        const server = axios.create({
            baseURL: `http://localhost:${URL_API}`,
            withCredentials: true,
        });

        export default server;

}`
