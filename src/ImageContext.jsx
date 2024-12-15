import { createContext, useContext, useState } from "react";

const ImageContext  = createContext()

export const ImageProvider = ({ children })=>{
    const [imageUrl, setImageUrl] = useState('')

    return (
        <ImageContext.Provider value={{imageUrl,setImageUrl}}>
            {children}
        </ImageContext.Provider>
    )
}

export const useImage = () => useContext(ImageContext);