import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clixked "+ text);
        let newtext=text.toUpperCase();

        setText(newtext)
    }
    const handlelowClick=()=>{
      console.log("lowercase was clixked "+ text);
      let newtext=text.toLowerCase();

      setText(newtext)
  }
    const handleUpChange =(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const [text , setText]= useState('enter text here');
    // text="new text"; wrong way to change the state
    // setText("new text"); correct way to change the state
  return (<>
    <div className='container' style={{color:props.mode==='light'?'black':'white' }} >
      <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleUpChange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='light'?'black':'white'}} id="my-box" rows="7"></textarea>
</div>
<button className='btnprimary mx-2 text-light bg-primary' onClick={handlelowClick}>convert to lower case </button>
<button className='btnprimary  mx-2  text-light bg-primary' onClick={handleUpClick}>convert to upper case </button>
    </div>
    <div className='container' style={{color:props.mode==='light'?'black':'white' }}>
          <h1>Your text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <h1>Preview</h1>
          <p>{text}</p>
    </div>
    </>
  )
}
