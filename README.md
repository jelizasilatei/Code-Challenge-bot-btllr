## React Code Challenge

# Bot Battlr App
Welcome to Bot Battlr, the one and only spot in the known universe where you can custom build your own Bot Army! This is our app:

### Author - Jeliza Silatei

## Instructions
For this project, you’ll be building out a React application that displays a list of available bots, among other features. Try your best to find the right places to insert code into the established code base.

Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.

## Setup

* clone this repository to your local environment and open with vscode

* Run npm install in your terminal.

* Run npx json-server --watch db.json --port 3000. This will run your backend on port 3000.

* In a new terminal, run npm start. This will run your React app on port 3001.
* Make sure to open http://localhost:3000/bots in the browser to verify that your backend is working before you proceed!

- The base URL for your backend is: http://localhost:3000

## What You Already Have
- BotPage is the highest component below App, and serves as the main container for all of the pieces of the page.

- BotCollection and YourBotArmy are container components, which are children of BotPage. BotCollection is where all the bots will be displayed, while YourBotArmy (the green portion on the top of the screen) will only display the bots that have been selected by the user.

- BotCard and BotSpecs are presentational components that have been provided for you that will render out information about an individual bot formatted for a list view and for a full view, respectively. They are pre-styled, and it is your responsibility to get the data into them.

* All of the code to style the page has been written for you, meaning that you should be adding to the code rather than editing it; however, if your finished product has some styling issues, don't worry too much about it.

## Core Deliverables
As a user, I should be able to:

1. See profiles of all bots rendered in BotCollection.
2. Add an individual bot to my army by clicking on it. The selected bot should render in the YourBotArmy component. The bot can be enlisted only once. The bot does not disappear from the BotCollection.
3. Release a bot from my army by clicking on it. The bot disappears from the YourBotArmy component.
4. Discharge a bot from their service forever, by clicking the red button marked "x", which would delete the bot both from the backend and from the YourBotArmy on the frontend.
5. Endpoints for Core Deliverables
6. DELETE /bots/:id

#### Example Response:

### Advanced Deliverables
- These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

As a user, I should be able to:

* Choose if I want to enlist a bot into my army or just see their data. Clicking on the card should instead display a show view (BotSpecs) for that bot, which should replace BotsCollection. BotSpecs should have two buttons: one to go back to the list view and another to enlist that bot.



## License
MIT.
