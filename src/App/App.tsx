import { useEffect, useState } from 'react';
import './App.css'
import Button from './components/ui/Button/Button.tsx'

function App() {

  const [counter, setCounter] = useState(-1);  

  useEffect(() => {
    console.log('dans le useEffect : ', counter);
    return () => {
      //fonction demontage
    };

  }, [counter]);
  
  useEffect(() => {setCounter(0)}, []);

  return ( 
    <div>
      <b>GUTEN TAG !!!</b>
      <div>counter{counter}</div> 
      <Button 
        children="prout" 
        function={ console.log('YOLO !!!!!!!') } />
      <Button />
      <Button color="green" />
      <Button color="green" onButtonClick={()=>{
        setCounter(counter -1);
        console.log(counter -1);

      }}>-1</Button>
      <Button color="green" onButtonClick={()=>{
        setCounter(counter +1);
        console.log(counter +1);
      }}>+2</Button>
      <Button onButtonClick= {() =>console.log("click")} />  
    </div>
  );
}

export default App
