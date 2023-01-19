import Student from "./Student"
import { Fragment } from "react";

export default function App(){

  const data=[
    {
      id:'e1',
      name: 'Prajwal'
    },
    {
      id:'e2',
      name:'Roshini'
    }
  ]
  return(
    <Fragment>
      {
        data.map((item,i)=>(
          <Student key={i} id={item.id} name={item.name}/>
        ))
      }
    </Fragment>
  )
}