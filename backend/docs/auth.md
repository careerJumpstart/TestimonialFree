To run the project.

1. Create a `.env` file and add the variables from twitter chat or message me privately to get the variables
2. run `npm install or yarn install` to install missing dependancies

#### How it works

1. Access the `auth/` inside the `src/` folder
2. The `auth` folder contains 3 main files 
    1. `auth.controller.ts` for handling all the request related to the google auth
    2. `auth.service.ts` for handling all the logic related to the google auth
    3. `google.strategy.ts` to keep all passport strategy for google auth

