// import './App.css';

import Card from "./Card";
import Comp from "./Comp";

let style={
 height:'100vh' ,
 background:'black'
}

function App() {
  return (
      <div style={style}>
        <Card/>    
        <Comp/>       
     
      </div>
  );
}

export default App;
