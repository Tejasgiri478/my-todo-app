import moment from "moment"
function CompletedTask({task}) {
    return ( 
        <div className='bg-gradient-to-r from-green-100 to-teal-100 py-4 rounded-lg shadow-md flex items-center justify-center gap-2 mb-3 border border-green-300 hover:shadow-lg transition-shadow duration-300 transform hover:scale-[1.01]'>
            <div className="task-info text-green-800 text-sm w-10/12">
                <h4 className="task-title text-lg capitalize font-medium">{task.title}</h4>
                <p className="task-description">{task.description}</p>
                <div className='italic text-teal-600'>
                    {
                        task?.createdAt ? (
                            <p>{moment(task.createdAt).fromNow()}</p>
                        ) : (
                            <p>just now</p>
                        )
                    }
                </div>
            </div>
        </div>
     );
}

export default CompletedTask;