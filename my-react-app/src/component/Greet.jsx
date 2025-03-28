import { useState } from "react";

export default function Greet() {
let [name, setName] = useState ("Somnath Kundu");
let toggle = true;
const update = () => {
    if(toggle) {
        setName('Akash Demo Name');  
        toggle = false;
    } 
    else {
        setName('pooja');
        toggle = true;
    }
}
  return (
    <div>
      <h1>Hello, (name)</h1>
      <button onClick={update}> Click </button>
    </div>
  )
}