import React, {useEffect, useState} from 'react';
import CreateTask from '../Modal/CreateTask'
import Card from '../Task/Card'
import Draggable from 'react-draggable';
// import './Professional.css';

const Work = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }


    return (
        <>
            <div className = "header text-center">
                <h3>Professional Work List</h3>
                <button className = "btn btn-primary" onClick = {() => setModal(true)} >ADD TASK</button>
            </div>
            <div className = "task-container container5" >
                <div> <h2> Initial </h2> 
                {
             taskList && taskList.map((obj , index) => [
            <Draggable>
            <div>
                <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> 
            </div>    
            </Draggable>
            ])}

                </div>
                
                {/* <div className='progress'> <h2> Progess </h2> </div> */}
                <div className='completed'> <h2> Progress </h2> </div>
            
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>
    );
};

export default Work;
// const Work = () => {
    

    


//     return (
//         <>
//             <div className='header'>
//                 <h3>Task Manager</h3>
//                 <input type='text' placeholder='Write the task'/>
//                 <button className='addbtn btn btn-primary'>Add Task</button>
//             </div>

            
//         </>
//     );
// };

// export default Work;