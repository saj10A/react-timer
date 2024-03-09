import React, { useEffect, useState } from 'react';
import "./style.css";
import Hello from './Hello';
import Timer from './Timer';
import TimeList from './TimeList';
import { TestContext } from './TestContext';

const App = () => {
  const [title, setTitle] = useState("Hello React!");
  const [isLight, setIsLight] = useState(false);
  const [timeArr, setTimeArr] = useState([]);

  useEffect(() => {
    console.log("useEffect");
  }, [isLight]);

  const handleSetIsLight = () => {
    setIsLight(!isLight);
  }

  return (
    <TestContext.Provider value={{
      timeArr,
      setTimeArr
    }}>
      <div className='main' style={{ backgroundColor: isLight ? "white" : "black" }}>
        <Hello title={title} />
        <Timer handleSetIsLight={handleSetIsLight} />
        <TimeList/>
      </div>
    </TestContext.Provider>
  )

}

export default App;
