import logo from './logo.svg';
import root from './index.js'
import './App.css';
import React, { useState } from 'react';
function App() {
  const [x, setX] = useState(0)
    return (
        <> 
            <div className='main'>
                <div className='center'>
                    <h1>{x}</h1>
                    <div className='btn_div'>
                        <button onClick={() => setX(x+1)}>Increment</button>
                        <button onClick={() => setX(x-1)}>Decrement</button>
                    </div>
                </div>
            </div> 
        </>
    );
}
export default App;
