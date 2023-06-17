import React, { useState } from 'react';
import useList from '../../hooks/useList';

const TaskList = () => {
    const [list, setList, push, remove, clear, isEmpty, sort, invert] = useList([]);
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        push(newTask);
        setNewTask('');
    }

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    return (
        <div>
            <h1>Task List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newTask} onChange={handleInputChange} placeholder='New task' />
                <button type="submit">Add task</button>
            </form>
            {
                isEmpty() ?
                    <p>No tasks</p>
                    :
                    <ul>
                        {
                            list.map((task, index) =>
                                <li key={index}>
                                    <input type="checkbox" onClick={() => remove(index)} checked={false} />
                                    {task}
                                </li>)
                        }
                    </ul>
            }
            {!isEmpty() && (
                <div>
                    <button onClick={()=>clear()}>Clear</button>
                    <button onClick={()=>sort()}>Sort</button>
                    <button onClick={()=>invert()}>Invert</button>
                </div>
            )}
        </div>
    )
}

export default TaskList;
