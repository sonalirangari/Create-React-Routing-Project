import React from 'react';
import Hello from './sayHello';
import Tweet from './Tweet';

function App(){

  return(
    // <div>
    //   <h1>This is the App Component</h1>
    //   <Hello />
    // </div>

    <div className='app'>
      {/* <h1>Hello React</h1> */}
      <Tweet name='Sonali R' massage='I am from Nagpur' />
      <Tweet name='Armaan M' massage='I am from Mumbai'/>
      <Tweet name='Nikil G' massage='I am from Pune'/>
      <Tweet name='Amaal D' massage='I am from Mumbai'/>
    </div>
    
  )
  
 }
export default App;