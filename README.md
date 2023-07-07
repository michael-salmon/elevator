## Core Algorithm
let stops = [currentFloor, ...floorsToVisit];
    let curFloor = currentFloor;
    const time = floorsToVisit.reduce((acc, cur) => {
        let stop = acc + Math.abs(curFloor - cur);
        curFloor = cur;

    return stop;
}, 0);

setFloorsVisited(stops.join(', '));
setTime(time * elevatorSpeed);

## Assumptions
Maximum number of floors is 32.

## Features Unimplemented
Editable Controls like speed and number of floors, however speed was mentioned to be a constant.
Project is not an executable and requires running `npm start`.
Alternative mode for elevator that function like irl elevators.

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm test`
### `npm run build`
### `npm run eject`