import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentFloor, setCurrentFloor] = useState(12);
  const [elevatorSpeed, setElevatorSpeed] = useState(10);
  const [floorsToVisit, setFloorsToVisit] = useState([]);
  const [floorsVisited, setFloorsVisited] = useState('');
  const [numberOfFloors, setNumberOfFloors] = useState(32);
  const [time, setTime] = useState(0);

  const onElevatorButton = (floor) => {
    setFloorsToVisit(cur => [...cur, floor]);
  };

  const onGo = () => {
    let stops = [currentFloor, ...floorsToVisit];

    let curFloor = currentFloor;
    const time = floorsToVisit.reduce((acc, cur) => {
      let stop = acc + Math.abs(curFloor - cur);
      curFloor = cur;

      return stop;
    }, 0);

    setCurrentFloor(curFloor);
    setFloorsToVisit([]);
    setFloorsVisited(stops.join(', '));
    setTime(time * elevatorSpeed);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          Current Floor: {currentFloor} | Floors: {numberOfFloors} | Speed: {elevatorSpeed}
        </h1>
        <h2>Floors in Queue: {floorsToVisit.length ? floorsToVisit.join(', ') : 'None'}</h2>
        <button disabled={!floorsToVisit.length} onClick={onGo}>GO</button>
        <p>
          {
            [...Array(numberOfFloors)].map((_, i) => (
              <button key={i}
                className='elevator-button'
                disabled={currentFloor === i+1 || floorsToVisit.includes(i+1)}
                onClick={() => onElevatorButton(i + 1)} >
                  {i + 1}
              </button>
            ))
          }
        </p>
        <h2>Trip Time: {time} | Floors Visited: {floorsVisited ? floorsVisited : 'None'}</h2>
      </header>
    </div>
  );
}

export default App;
