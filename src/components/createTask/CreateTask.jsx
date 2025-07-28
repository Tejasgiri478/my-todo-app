import React, { useState } from 'react';
import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import TokenContext from '../../context/TokenContext';
import axios from "../../Axios/axios.js"
import Swal from 'sweetalert2'
import "./createTask.css"
import { FaPlus } from 'react-icons/fa';

function CreateTask() {
    const { dispatch } = useContext(TaskContext)
    const {userToken} = useContext(TokenContext)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("others")

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/task/addTask",
                {
                    title,
                    description,
                    category
                },
                {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                }
            );

            // Force a refresh of all tasks to ensure UI is in sync with backend
            const allTasksResponse = await axios.get('/task/getTask', {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });

            dispatch({
                type: "SET_TASK",
                payload: allTasksResponse.data
            });

            setTitle("");
            setDescription("");
            setCategory("others");

            Swal.fire({
                title: 'Success!',
                text: 'Your task has been added successfully',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#4F46E5',
                customClass: {
                    popup: "rounded-xl border-t-4 border-blue-500 shadow-2xl",
                    confirmButton: "px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg"
                }
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Error while adding task',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#EF4444',
                customClass: {
                    popup: "rounded-xl border-t-4 border-red-500 shadow-2xl",
                    confirmButton: "px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium hover:from-red-600 hover:to-orange-600 transition-all duration-300 hover:shadow-lg"
                }
            });
        }
    }

    return (
        <div className="w-full bg-white rounded-lg shadow-md p-6 border border-purple-200 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Add New Task</h2>
            <form onSubmit={handleAdd}>
                <div className="mb-4">
                    <label htmlFor="title" className="block mb-2 font-medium text-blue-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        className='bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-all'
                        placeholder="Enter task title"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2 font-medium text-purple-700">Description</label>
                    <textarea
                        rows={5}
                        name="description"
                        id="description"
                        value={description}
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ resize: "none" }}
                        className='bg-purple-50 border border-purple-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3 transition-all'
                        placeholder="Enter task description"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="category" className="block mb-2 font-medium text-teal-700">Category</label>
                    <select
                        name="category"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className='bg-teal-50 border border-teal-300 text-teal-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3 transition-all'
                    >
                        <option value="personal">Personal</option>
                        <option value="work">Work</option>
                        <option value="shopping">Shopping</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <div className='flex justify-center'>
                    <button
                        type='submit'
                        className='flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white px-6 py-3 hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105'
                    >
                        <FaPlus className="text-yellow-300" />
                        <span>Add</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateTask;
