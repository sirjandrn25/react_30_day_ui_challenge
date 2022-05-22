import React from 'react'
import CrossIcon from './cross.png'




const InputSeparatorContainer = () => {
    const [items,setItems] = React.useState([]);
    
    // const [error,setError] = React.useState('');
    const [value,setValue] = React.useState('');
    // const [invalid,setInvalid] = React.useState(false);


    const saveItem = ()=>{
        // if(value.split('').indexOf('@')===-1 || value.split('').indexOf('.')===-1){
        //     setError('please valid email address is fill')
            
        // }
        // else{
        //     setItems([value,...items])
        //     setValue('')
        //     setError('')
            
        // }
        setItems([value,...items])
        setTimeout(()=>{
            setValue('')
        },100)

        
        
    }

    // const checkInvalidKey = ()=>{

    //     // if(curr_key === ',' || curr_key === ' ' || curr_key.toLowerCase() === 'enter') return true 
    //     if(curr_key === ' ') return true
    //     return false
    // }

    const handleKeyPress = e=>{
        
        if (e.key ===',' || e.key===' ' || e.key.toLowerCase() === 'enter'){
            // setInvalid(true)
            saveItem()
        }
        // }else{
        //     setInvalid(false);
        // }
        
        
    }
    const handleChange = e=>{
        // console.log(invalid)
        // if(!invalid){
        //     setValue(e.target.value);
    
        // }
        setValue(e.target.value);
    }

    const handleDelete = (index)=>{
        let temp_items = items;
        items.splice(index,1)
        setItems([...temp_items])
    }
    
  return (
    <div className='main_container'>
        <div className="wrapper">
            <p className='header'>Enter a list  seperated by comma or enter to add items to list</p>
            <div className="input_container">
                <input type="email" name="email" className='input_control' onKeyPress={handleKeyPress} id="id_email" onChange={handleChange} value={value} placeholder='enter your text'  />
                <button className="btn_submit" onClick={saveItem}>Submit →</button>
            
            </div>
            {/* {error?<p className='text_danger'>{error}</p>:''} */}
            <div className="input_items" >
                {items.map((item,index)=>{
                    return (
                        <div className='item' key={index} >
                            <span>{item}</span>
                            <label onClick={e=>handleDelete(index)} className='icon_label'>
                                <img src={CrossIcon} alt="" />
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>

      
    </div>
  )
}

export default InputSeparatorContainer
