import React, { useState } from 'react';
import logo from './air-jordan-logo.png';
import {quickSearch, searchGiantBombCastByDate} from './gb_searcher'
import './App.css';
import DropdownForm from './components/DropDownForm';

function clickMe() {
  alert(quickSearch());
}

const options = ["2018-03", "2015-06", "2009-12"];


function App() {

  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(options[0]);
  const [countA, setCountA] = useState(0);

  let trialLink:string;

  const submit = () => {
    console.log(selected);
    const podcastList = searchGiantBombCastByDate(selected.split("-")[0],selected.split("-")[1])
    console.log(podcastList);
    console.log(podcastList[0][2])
    alert(podcastList[0][2]);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/*<select */}
        {/*  value={selected} */}
        {/*  onChange={(e) => setSelected(e.target.value)}>*/}
        {/*  {options.map((value) => (*/}
        {/*  <option value={value} key={value}>*/}
        {/*    {value}*/}
        {/*  </option>*/}
        {/*  ))}*/}
        {/*</select>*/}
        <input
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            type={"month"}
            name={"myInput"}
        >
        </input>
        <button
          onClick={() => {
          submit();
          setCountA(countA + 1);
          }}
        >
          Submit
        </button>
        <p>You selected {selected} </p>
        <p> {countA}</p>
        <p> {trialLink} </p>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
        <a
          className="App-link"
          href="https://open.spotify.com/episode/0WuCre5Lc3zw7TzZhkBbYa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Classic Giant Bombcast lister coming soon!
        </a>
        <button onClick={clickMe}>Button</button>
      </header>
    </div>
  );
}

export default App;
