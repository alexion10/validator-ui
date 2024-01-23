import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllJobs } from "./profile.reducer";

import Error from "../../components/GenericError";
import Spinner from "../../components/Spinner";
import JobCard from "./jobsCard";

export default function Profile() {
	const dispatch = useDispatch();
	const { loading, allJobs, isError } = useSelector((state) => state.profile);

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
		</main>
	);
}
