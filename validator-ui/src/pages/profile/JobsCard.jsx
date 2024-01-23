import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { profileActions } from "../../redux/profile.reducer";

export default function JobCard({ job }) {
	const dispatch = useDispatch();

	function handleModalData() {
		dispatch(profileActions.setModalJob(job));
	}

	return (
		<article className="border-2 border-slate-400 max-w-2xl m-2 p-2 w-1/4 h-70">
			<div className="flex flex-row flex-wrap ">
				{job?.deleted && <DeletedJob />}
				{job?.edited && <EditedJob />}
			</div>
			<div className="flex flex-row justify-between my-3 mx-2">
				<div>
					<h5>{job?.job_title}</h5>
					<p>
						<span>logo</span> company
					</p>
				</div>
				<button
					onClick={handleModalData}
					className="border-2 border-slate-200 rounded"
				>
					edit
				</button>
			</div>
			<div className="mx-2">
				<p>
					<span>svg</span> {job?.city.map((i) => i).join(", ")}
				</p>
				<p>
					<span>svg</span> {job?.country.map((i) => i).join(", ")}
				</p>
				<p>
					<span>svg</span>{" "}
					{job?.remote.length > 0 ? job?.remote : "No job type"}
				</p>
			</div>
			<div className="w-full bg-stone-900 text-white px-2 flex justify-center">
				<Link to={job.job_link} target="_blank">
					Vezi postul
				</Link>
			</div>
		</article>
	);
}

const DeletedJob = () => (
	<p className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
		This job was deleted
	</p>
);
const EditedJob = () => (
	<p className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
		This job was edited
	</p>
);
