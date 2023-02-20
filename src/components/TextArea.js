import React, { useState } from 'react'
// import math from 'math'
export default function TextArea(props) {
    const [text, setText] = useState("enter here");
    const [count, setCount] = useState(2);
    // const [props.design, setprops.design] = useState({
    //     color: "black",
    //     background: "white"
    // });
    // const[mode, setMode] = useState('light');
    // let islight = true;
    // let props.design = {
    //     color: "black",
    //     background: "white"
    // }

    // setText('hello');
    // console.log(text);
    return (
        <div  className='container'>
            <h1 >{props.heading}</h1>
            <div className="form-floating" >
                <textarea className="form-control my-2" placeholder="Leave a comment here" value={text} onChange={handleOnChange} id="floatingTextarea2" style={{ height: "100px" }}></textarea>
            </div>
            <button className={`btn btn-${props.colorMode} my-2 mx-2`}  onClick={upperCase}>convert to upper case</button>
            <button className={`btn btn-${props.colorMode} my-2 mx-2`} onClick={lowerCase}>convert to lower case</button>
            <button className={`btn btn-${props.colorMode} my-2 mx-2`} onClick={clearText}>Clear text</button>
            <button className={`btn btn-${props.colorMode} my-2 mx-2`} onClick={random}>generate random number</button>

        {console.log(props.colorMode)}

            {/* <button className='btn btn-primary my-2 mx-2' id='props.designChange' onClick={props.changeMode}>change to {props.mode==='dark'?'light':'dark'} mode</button> */}

            {/*  <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>  */}



            <h3 id='charCount'>Total character count - {text.length} and total word count - { count}</h3>

        </div>
    )

    // function changeMode() {
    //     if (props.design.color === "black") {
    //         setprops.design({
    //             color: "white",
    //             background: "black"
    //         });
    //         setMode('light');
    //         // console.log(props.design);

    //     }
    //     else {
    //         setprops.design({
    //             color: "black",
    //             background: "white"
    //         });
    //         setMode('dark')
    //         // console.log(props.design);
    //     }
    // }

    function random() {
        setText(`${Math.random()}`)
    }
    function clearText() {
        setText('');
    }

    function handleOnChange(event) {
        setText(event.target.value);
        console.log(text);
        if(text===""){
            setCount(0);
        }
        else{
            let c = 0;
            for(let i in text.split(' ')){
                if(i!==" "){
                    c++;
                }
            }
            setCount(c);
        }
        // console.log(text.length);
        // let a = document.getElementById('charCount');
        // a.innerText= `Total character count - ${text.length +1}`;
        // let arr = text.split(' ');
        // for(let i of arr){
        //     console.log(i)
        // }
        // setCount(0);
        // let c = 0
        // for(let i of text.split(' ')){
        //     if(i !== ' '){
        //         c++;
        //         setCount(c);
        //     }
        // }
        // console.log(event)
        // console.log(text.split(' ') +" "+ count);
    }

    function upperCase() {
        let newText = text.toUpperCase();
        setText(newText);
        console.log('to upper case');
    }

    function lowerCase() {
        let newText = text.toLowerCase();
        setText(newText);
    }
}

