import { useState } from "react";
import * as C from "./App.styles"; 
import { Item } from "./types/Item";
import {ListItem} from "./components/ListItem"
import { AddArea } from "./components/AddArea"

const App=()=> {

  const [list, setList] = useState<Item[]>([

     {id:1, name: "Ler um livro", done:false},
     {id:2, name: "Arrumar a casa", done:true}

  ]);


   const handleAddTask =(taskname: string)=>{
    // making clone of the lis 

    let newlist = [...list]; 
    newlist.push({
      id:list.length +1,
      name:taskname,
      done: false
    })

    setList(newlist)

   }

  return (
  
      <C.Container>
        <C.Area>
          <C.header> Lista de Tarefa </C.header>

          <AddArea onEnter ={handleAddTask} />

          {list.map((item, indice)=>(

            <ListItem key={indice} item={item} />
          ))}

        </C.Area>
      </C.Container>
     
  )
}

export default App;
