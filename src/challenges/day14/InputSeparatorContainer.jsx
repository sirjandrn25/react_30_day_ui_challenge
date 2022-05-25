import React, { useEffect } from 'react'
import CrossIcon from './cross.png'

const bg_color_list = [
    '#D21212','#7E12D2','#1276D2','#7E12D2','#00ff00','#ffff00','#999966','#660066'
]
const randomColor = ()=>{
    const index = Math.floor(Math.random()*bg_color_list.length);
    console.log(bg_color_list[index])

    return bg_color_list[index]

    
}



const InputSeparatorContainer = () => {
    const [items,setItems] = React.useState([]);
    
    const [error,setError] = React.useState('');
    const [value,setValue] = React.useState('');
    useEffect(()=>{
        document.title = "input separator"
    },[]);
    // const [invalid,setInvalid] = React.useState(false);


    const saveItem = ()=>{
        let email_reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!email_reg.test(value)){
            setError('please valid email address is fill')
            
        }
        else{
            const color = randomColor()
            
            setItems([{content:value,color:`bg-[${color}]`},...items])
            setTimeout(()=>{
                setValue('');
                setError('')
            },100)
            
        }
        
        
       
        
    }


    const handleKeyPress = e=>{
       
        if (e.key ===',' || e.key===' ' || e.key.toLowerCase() === 'enter'){
        
            let input = e.target;
            
            let end = input.value.length
            
            input.setSelectionRange(end,end)
            saveItem()
        }
        
        
    }
    const removeEmptySpacesComma = stringVal => {
        const regex = /(\s|\,)/g
        return regex.test(stringVal);
      };
    
    const handleChange = e=>{
        
        const isValid = removeEmptySpacesComma(e.target.value)
        if(!isValid){
            setValue(e.target.value);
        }
        

    }
    const handleDelete = (index)=>{
        let temp_items = items;
        items.splice(index,1)
        setItems([...temp_items])
    }
  return (
    <div className='h-screen w-screen bg-[#5D5FEF] flex flex-row justify-center items-center'>
        <div className="w-[1090px] h-[646px] rounded-[17px] bg-[#A5A6F6] flex flex-col items-center justify-center">
            <p className='text-[#270343] text-[32px] font-bold mb-6'>Enter a list  seperated by comma or enter to add items to list</p>
            <div className="input_container mb-6">
                
                    <input type="text" name="email"  className='w-[634px] h-[60px] rounded-[8px] border-4 focus:ring-blue-500 focus:border-blue-500 focus:outline-none px-3 ' onKeyPress={handleKeyPress} onChange={handleChange} id="id_email"  value={value} placeholder='email address'  />
                    <button className="h-[60px] px-3 bg-[#1276D2] rounded-[8px] ml-[20px] text-[24px] text-white font-bold" onClick={saveItem}>Submit →</button>
                
                
            
            </div>
            {error?<p className='text-red-500 font-bold text-[20px] mb-4'>{error}</p>:''}
            <div className="flex flex-row justify-start max-w-[960px] flex-wrap" >
                {items.map((item,index)=>{
                    return (
                        <div className={`relative mb-4 ${item.color} mr-4 text-[20px] font-bold px-2 text-white rounded-[5px]`} key={index} >
                            
                            <span>{item.content} {item.color}</span>
                            <label onClick={e=>handleDelete(index)} className='bg-[#EF775D] cursor-pointer absolute overflow-hidden -top-2 -right-2  rounded-full'>
                                <img src={CrossIcon} alt="" className='h-full h-[18px] w-[18px] w-full object-cover' />
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
