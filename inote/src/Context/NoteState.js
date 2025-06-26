import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const person = {
        name:"Moon Khan",
        mobile: '8948184933',
        address: 'Deoria, Salempur 274509'
    }
    const [state, setstate] = useState(person)


    const update = () =>{
        setTimeout(() => {
            setstate({
                name:"Rahim Khan",
                mobile: '9554380931',
                 address: 'Deoria, Salempur , Balepur Kala 274509'
            })
        }, 2000);
        
    }
    // eslint-disable-next-line
    

    return (
          <NoteContext value={{state, update}}>
            {props.children}
          </NoteContext>
    )

}


export default NoteState;