import * as C from "./styles"; 
import { Item } from "../../types/Item";
import { useState } from "react";

type Props ={
    item: Item
}

export const ListItem =({item}:Props) => {

    const [ischecked, setIschecked]=useState(item.done)

    return(

        <C.Container done={ischecked}>

          <input type="checkbox" checked={ischecked}
          onChange={e => setIschecked(e.target.checked)}/>
          <label>{item.name}</label>
        
        </C.Container>
    );
}