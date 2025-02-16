import React,{useState} from 'react'

function TodoInput(props) {
    const[inputText, setInputtext]=useState('');
    const handleEnterkey=(e)=>{
        if(e.keyCode===13){
            props.addList(inputText) 
            setInputtext("")
        }
      }
  return (
      <div className="input-container">
        <input type="text" className='input-box-todo' placeholder='Today Task' value={inputText} onChange={(e)=>{setInputtext(e.target.value)}}
        onKeyDown={handleEnterkey}/>
        <button className='add-btn' onClick={()=>{
            // pass the input data to app.js Component using props 
            props.addList(inputText) 
            // After clicking of add button the input text area clear using this
            setInputtext("")
            }
        } ><span><i className="fa-solid fa-plus"></i></span></button>
      </div>
    
  )
}

export default TodoInput
