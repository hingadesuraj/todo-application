import React from 'react'

const Todo = ({id,title,description,complete}) => {
  return (
    <>
    <div>
        {id}
        {title}
        {description}
        Mark Is Done : {complete} 
    </div>
    </>
  )
}

export default Todo