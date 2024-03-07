import React,{ useState } from 'react'
//STATE CONCEPT , useState hooks concept
 //Hooks helps to use the features of class without creating the class. it helps to create a state variable .
export default function TextForm(props) {

  const handleUpClick=()=>{
  //  console.log("Uppercase was clicked" + text);
    //setText("you have clicked on handleUpChange");
    let newText=text.toUpperCase();
    setText(newText);
  }
  //event object
  const handleOnChange=(event)=>{
    //console.log("on change");
    setText(event.target.value)
   
  }
    // Declare a new state variable, which we'll call "text" and set the default value "enter txt here".
    //and want to update thn we have to call function "setText"
    //Destructuring makes it easy to extract only what is needed...array destructuring are powerful features that allow developers to extract data from arrays or objects into distinct variables
 const [text, setText] = useState('Enter text here');
//  setText("dgngfngyhnjhg");  correct way to chnge 
//text="new text"   error will arise directly assigning the value is not allowed. Use function "setText"
  return (

    //
    <div>
    
  <div className="form-group">
    <h2 >{props.heading} </h2>
    {/* without onChange fun i cannot able to write anything in the textbox. */}
    <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea> 
  </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}
