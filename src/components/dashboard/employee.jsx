import React from 'react'
import Header from '../other/header'
import CreateTask from '../other/createtask'
import TaskList from '../tasklist/tasklist'

const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskList data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard