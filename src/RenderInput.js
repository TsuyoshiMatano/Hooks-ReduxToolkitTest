import React from 'react'

const RenderInput = ({outputConsole}) => {
    const [input, setInput] = React.useState("");
    const outPutValue = () =>{
        if(input){
            outputConsole(input);
        }
    };
    const updateValue = (e) => {
        setInput(e.target.value);
    }
    return (
        <div>
            <input type="text" placeholder="Enter" value={input} onChange={updateValue}/>
            <button onClick={outPutValue}>Console</button>    
        </div>
    )
}

export default RenderInput
