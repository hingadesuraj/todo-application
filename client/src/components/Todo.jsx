import React from 'react'

const Todo = ({id,title,description,complete}) => {
  return (
    <>
   
    <div>
        {id}
        <br />
        {title}
        <br />
        {description}
        <br />
        Mark Is Done : {complete} 
 
    </div>
 
      
    </>
  )
}

export default Todo