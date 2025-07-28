import React, { useContext } from 'react';
import Task from './Task/Task';
import TaskContext from '../context/TaskContext';
import { FaClipboardList } from 'react-icons/fa';

function AllTask() {
    const { tasks } = useContext(TaskContext);

    return (
        <div>
            {
                tasks.length !== 0 ? (
                    tasks.slice().reverse().map((task, index) => (
                        <Task
                            key={tasks.length - 1 - index}
                            task={task}
                            id={tasks.length - 1 - index}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center py-10 text-blue-500">
                        <FaClipboardList className="text-5xl mb-4 text-blue-400 animate-bounce" />
                        <h1 className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">No Tasks Found</h1>
                        <p className="mt-2 text-sm">Add a new task to get started</p>
                    </div>
                )
            }
        </div>
    );
}

export default AllTask;
