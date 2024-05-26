# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

# Project Brief
- In this challenge, I ventured into the realm of state management by constructing a Redux-inspired store to manage the state of a simple Tally App. My primary goal was to manage the app's state changes efficiently, focusing on core functionalities like incrementing, decrementing, and resetting a counter. Instead of rendering changes on the UI, I had to subscribe to state updates and log them to the console, highlighting the power of state management in applications.

# Project Overview
## User Stories (Gherkin Syntax)
Your challenge will encompass the following scenarios, tested through your store's implementation:

### SCENARIO 1: Initial State Verification
```
GIVEN no interactions have been performed yet
WHEN the “getState” method is run
AND the result is logged to the console
AND the browser console is open
THEN the state should show a count of 0
```

### SCENARIO 2: Incrementing the Counter
```
GIVEN no interactions have been performed yet
WHEN an “ADD” action is dispatched
AND another “ADD” action is dispatched
AND the browser console is open
THEN the state should show a count of 2
```

### SCENARIO 3: Decrementing the Counter
```
GIVEN the current count in the state is 2
WHEN a “SUBTRACT” action is dispatched
AND the browser console is open
THEN the state should display a count of 1
```

### SCENARIO 4: Resetting the Counter
```
GIVEN the current count in the state is 1
WHEN a “RESET” action is dispatched
AND the browser console is open
THEN the state should display a count of 0
```

# Elements Included 
- A Global Store - a Redux-inspired store that holds the state of the tally counter. 
- State Management Functions:
  - **getState**: Returns the current state.
  - **dispatch**: Takes an action (e.g., ADD, SUBTRACT, RESET) and updates the state accordingly.
  - **subscribe**: Accepts a function that gets called whenever the state changes. This function should log the new state to the console.
- No UI Rendering
- Functional Programming Principles

# Reflections 
## Areas of Mastery
- I did not have an area that I mastered and this was due to the complexity of the project, I was not able to decipher everything enough to the point of mastery.  

## Challenges faced
- one of the main challenges I faced throughout this project was trying to build a store and working on that, I was able to eventually figure it out by using the same file to build everything because using quokka when importing was an impossibility unless I engaged with QuokkaPro.  

## Areas of Improvement
- I would like to greatly improve the way in which I research and gather data related to solving a problem that I'm facing, having great research skills plays a great role in the learning process. 

# How to run my code
1. Clone this repository.
2. Open a terminal in the project directory.
3. Run node scripts.js to start the application or run Quokka.
4. Observe the output in the terminal.

# Overall Learning Experience
My overall experience throughout this project was one of great confusion, I was not able to immediately grasp the brief and tackle the project, I was however able to gain strides in progress once I enlisted the help of my peers and there was more clarity in the project and this led to its completion. I learnt new things and I'm eager to implement them at a later stage of my coding journey. 