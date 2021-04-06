# Rubberduck 
## A playful tool for software developers feeling stuck
### (refactored from [the original JavaScript](https://github.com/kellydinneen/rubberduck) into TypeScript)
#### Turing School of Software Design - Mod3 Niche Audience Project

### Contributors
**Kelly Dinneen** : [github profile](https://github.com/kellydinneen)

### Instructors: 
**Leta Keana** : [github profile](https://github.com/letakeane)

**Scott Ertmer** : [github profile](https://github.com/sertmer)

### Technologies
**Build**: React, React Router, Express.js (for [unstuck API](https://github.com/kellydinneen/unstuck-api))

**Testing**: Cypress

## Table of Contents
1. [Introduction](#introduction)
3. [Instructions](#setup-instructions)
4. [How-To](#using-rubberduck)
5. [Learning Goals](#learning-goals)
6. [Challenges](#challenges)
7. [Wins](#wins)
8. [Future Plans](#plans-for-future-iterations)

## Introduction
The duck in this app will be your rubberduck when you don't have friends around. The duck evaluates a user's survey results to prescribe a personalized affirmation from the [Affirmations API](https://github.com/annthurium/affirmations), a piece of advice from the [Advice Slip API](https://api.adviceslip.com/), or an R&R or problem solving strategy from the [unstuck API](https://github.com/kellydinneen/unstuck-api) (which was built specifically for the Rubberduck app).

## Setup Instructions
To run the project locally:
- `git clone` this repo
- `cd` into the repo
- run `npm install`
- You're good to go!

*note: the unstuck API is deployed on Heroku, so there is no need to clone it down


### Testing

We used Cypress.js to implement end-to-end-tests of the user flow. To run these tests, `cd` into the project repository and install Cypress by typing `npm i -D cypress` on the command line and adding 
```
"scripts": {
    "cypress:open": "cypress open"
  }
  ```
 to your `package.json` file.

 Then run `npm run cypress:open`

 Cypress.js should open a window with a list of test files. Click on a file name to run the tests in that file.
 Note that the Cypress tests are built to run locally, so you must follow the instructions for setting up the project locally in order for the tests to pass.

[Back to Top of Page](#table-of-contents)

---

## Using Rubberduck
The app is very simple! If a user is feeling stuck, they can click "yes" on the home page to begin the form.
At any time, they can click "Go Home" at the top of the page to return home.

### Filling out the form
The duck asks users number of questions about the problem they are facing, their workload/energy level, and their emotional state. It also provides space for users to vent about and re-articulate their problem in the hopes of encouraging them to clarify their thoughts. Fill out every item in the form (clicking *next* after each question or set of questions). Then, click submit. If any necessary questions are not answered, the user is asked to go back and finish.

### Viewing the Prescription
Upon clicking submit, a user will be shown a recommendation from the duck, consisting of a title, a description, and a resource link.

### Submitting Problem Solving Strategies
Users can also submit their own strategies by clicking the "Submit A Strategy" button in the header. They are asked to enter a title, a description, and a link before clicking submit. At the moment, these submissions are not immediately integrated into the duck's advice repetoire because the process for labeling advice items is still quite clumsy and cannot be relied upon to automatically accept and categorize user submissions. In future iterations, there will be a direct pipeline between submitted strategies and what the duck recommends.

[Back to Top of Page](#table-of-contents)

---
### Learning Goals
The goal of this project was to practice producing and testing a polished but simple app using an existing API, React, React Router, and Cypress. Due to the nature of this app's concept, it ultimately made sense to produce a custom API using Express.js for solutions related to problem solving techniques. 

### Challenges
The time crunch on this project was the greatest challenge, especially in combination with the complicated demands of the project content and the ambitious ideas that inspired the project. In the end it took much more time than anticipated simply to process user inputs into endpoints and create data for problem solving and R&R strategies. This was time not spent on styling/functional complexity.

### Wins
Because of the logic involved in intepreting the form, this project turned out to be an unexpected exercise in vanilla javascript. I also came away from the proejct with many ideas for future iterations, and an appreciation for iteration in general: for beginning a project by producing a bare minimum MVP. Finally, I am proud to have used 3 APIs (one custom built) in a project with such a short timeline.

### Plans for Future Iterations
- **Complete Postgressql database to store more robust collection of problem solving strategies:** There was not time in the timeframe of this first iteration to connect a Postgressql database, but the next step is making that link and continuing to build up the database with an assortment of problem solving strategies and resources.
- **Richer relationships between user inputs and advice selection:** There is potential to get much more specific about the duck's recommendations, both by tagging data in the unstuck API more robustly, and by fetching some solution objects specifically rather than randomly selecting from a filtered array.
- **User Authentication and "Visit" History Functionality:** The rubberduck could be used not only to recommend solutions, but to keep track of past struggles and solution attempts. By implementing a user login, the rubberduck could store users' past visits so that a user coul view how they'd described/dealt with  problems in the past.
- **Collection of user feedback:** The rubberduck's recommendations could quickly improve it the app were to moniter user reactions about the advice they recieve relative to their survey answers. This could be an opportunity to apply some novice python skills to a machine learning model.
- **Enhanced Interactivity with Duck:** Eventually, the duck should be made into a more vivid character on the site, with animations and increased, personalized dialogue with the user.

[Back to Top of Page](#table-of-contents)

