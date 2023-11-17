import React,{useState} from 'react'
import { ImAppleinc } from "react-icons/im";
function Heeder() {
  const [texts,setTexts]=useState([
    {name1:"BY"},
    {name1:"ABDUL"},
    {name1:"HADI"}
  ]);
const[index,setIndex]=useState(0)
  function high(){
    const newindex=(index+1)%texts.length
  setIndex(newindex);
}
    return(
      <div>
        <ImAppleinc onClick={high}>Change></ImAppleinc>
        <span>{texts[index].name1}</span>
       
      </div>
  )
    }  
export default Heeder
