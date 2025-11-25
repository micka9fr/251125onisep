import './App.css'
import Button from './components/ui/Button/Button.tsx'

function App() {
  return ( 
    <div>
      <b>GUTEN TAG !!!</b> 
      <Button 
        children="prout" 
        function={ console.log('YOLO !!!!!!!') } />
      <Button />
      <Button color="green" />
      <Button color="green" onButtonClick={()=>{
        console.log("-1");
      }}>-1</Button>
      <Button color="green" onButtonClick={()=>{
        console.log("+2");
      }}>+2</Button>
      <Button onButtonClick= {() =>console.log("click")} />  
    </div>
  );
}

export default App
