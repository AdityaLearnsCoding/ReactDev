import { useState } from 'react';
const Solution3G3H = (props) => {
    const [ inputText, setInputText ] = useState('')
    const handleTextUpdate = (event) => {
        setInputText(event.target.value)
    }
    const resetText = () => {   
        setInputText('')
    }
    const showExample = () => {
        setInputText('Aditya')
    }
    return (
        <>
            <input onChange={handleTextUpdate} value={ inputText } placeholder='Enter some text...'></input>
            <button onClick={ resetText }>Reset</button>
            <button onClick={ showExample }>Example</button>
            <p>Hello { inputText }</p>
        </>
    )
}
export default Solution3G3H;