import { useState, KeyboardEvent } from "react";
import * as C from "./styles"

type Props ={

    onEnter: (taskname: string)=> void 
}

export const AddArea = ({onEnter}: Props) => {

    const [inputext, setInputext]= useState("");

    const handlekeyup =(e: KeyboardEvent)=>{

        if (e.code === "Enter" && inputext !== "") {

            onEnter(inputext)
            setInputext("")

        }

    }

  return (

    <C.Container>

        <div className="image">+</div>
        <input type="text" placeholder="Adicione uma tarefa"
        value={inputext}
        onChange={e=>setInputext(e.target.value)}
        onKeyUp={handlekeyup}
        />

    </C.Container>
    
  ); 
}


