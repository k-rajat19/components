// import './App.css';

import Card from "./Card";
import Comp from "./Comp";
import Form from "./Form";

let style={
 height:'100vh' ,
 background:'black'
}

function App() {
  return (
      <div style={style}>
        <Card/>    
        <Comp/>  
        <Form/>
     
      </div>
  );
}

export default App;
