

export default function JobCard({job}){
    const DeletedJob = () => <p className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">This job was deleted</p>; 
    const EditedJob = () =>  <p className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">This job was edited</p>;
    return (
        <div className="border-2 border-slate-400 max-w-xl m-2 p-2 w-1/5 h-70">
            <div className="flex flex-row xs:flex-wrap"> 
                {job?.deleted ? <DeletedJob /> : ''}
                {job?.edited ? <EditedJob /> : ''}
            </div>
            <div className="flex flex-row justify-between my-3 mx-2">
                <div>
                    <p>title</p>
                    <p><span>logo</span> company</p>
                </div>
                <button>edit</button>
            </div>
            <div>
                <p><span>svg</span> Location</p>
                <p><span>svg</span> Location</p>
                <p><span>svg</span> Location</p>
            </div>
            <button className="w-full bg-stone-900 text-white px-2">Vezi postul</button>
        </div>
    )
}