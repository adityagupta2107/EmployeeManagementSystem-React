import React from 'react'
import Header from '../other/header'
import CreateTask from '../other/createtask'
import AllTask from '../other/alltask'
const admin = () => {
  return (
    <div className='h-screen w-full p-7'>
       <Header changeUser={props.changeUser} />
        <CreateTask />
         <AllTask />
    </div>
  )
}

export default admin
