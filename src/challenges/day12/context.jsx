import React from "react";
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'

const ImageContext = React.createContext({
    images:[]
});

const image_list = [
    {id:1,img:img1},{id:2,img:img2},{id:3,img:img3},{id:4,img:img4},{id:5,img:img5},{id:6,img:img6},
]


export const ImageProvider = ({children})=>{
    const [images,setImages] = React.useState(image_list)
    const [show,setShow] = React.useState(false);
    const [curr_image,setCurrImg] = React.useState(image_list[0]);
    const handleClose = ()=>{
        setShow(false)
    }
    const saveCurrImg = (data)=>{
        console.log(data)
        setCurrImg(data);
        setShow(true);

    }
   
    

    return <ImageContext.Provider value={{images,show,handleClose,saveCurrImg,curr_image}}>
        {children}
    </ImageContext.Provider>

}

export const UseImageContext = ()=>{
    const {images,show,handleClose,saveCurrImg,curr_image} = React.useContext(ImageContext);
    return {images,show,handleClose,saveCurrImg,curr_image}
}