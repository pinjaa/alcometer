import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [weight, setweight] = useState(0);
  const [bottles, setbottles] = useState(1);
  const [time, settime] = useState(1);
  const [gender, setgender] = useState("male");
  const [level, setlevel] = useState(0);

  function calculate(e) {
    e.preventDefault();
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    grams = grams - (burning * time);
    let result = 0;

    if(gender == "male") {
      result = grams / (weight * 0.7);
      

    } else  {
      result = grams / (weight * 0.6);
      
    } if (result < 0) {
      result = 0;
    }
    setlevel(result);
   
  }


  return (
    <div>
      <form onSubmit={calculate}>
      <h1>Calculating alcohol blood level</h1>
        <div>
          <label>Weight</label>
          <input 
          type="number" 
          value={weight} 
          onChange={e => setweight(e.target.value)}
          />
        </div>
        <div>
          <label>Bottles</label>
          <select
          value={bottles} 
          onChange={e => setbottles(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label>Time</label>
          <select
          value={time} 
          onChange={e => settime(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <label>Male  <input type='radio' name='gender' value="male" onChange={e => setgender(e.target.value)}/></label>
          <label>Female  <input type='radio' name='gender' value="female" onChange={e => setgender(e.target.value)}/></label>
        </div>
        <label>Blood alcohol level:</label>
        <output>{level.toFixed(2)}</output>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
