import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllJobs } from "../../redux/profile.reducer";

import Error from "../../components/GenericError";
import Spinner from "../../components/Spinner";
import JobCard from "./JobsCard";
import EditModal from "./ModalEditJobs";

export default function Profile() {
	const dispatch = useDispatch();
	const { loading, allJobs, isError, editModalJob } = useSelector(
		(state) => state.profile
	);

	useEffect(() => {
		dispatch(getAllJobs("veeam"));
	}, []);

	if (loading) return <Spinner />;

	if (isError) return <Error />;

	return (
		<main className="flex w-auto justify-center">
			<div className="flex justify-center flex-wrap max-w-7xl ">
				{allJobs?.map((job, index) => (
					<JobCard key={index} job={job} />
				))}
			</div>
			<EditModal job={editModalJob} />
		</main>
	);
}
