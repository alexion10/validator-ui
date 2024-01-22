import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "./profile.reducer";
import Spinner from "./spinner";
import JobCard from "./jobsCard";

export default function Profile() {
  const dispatch = useDispatch();
  const { loading, allJobs, isSucces } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getAllJobs("veeam"));
  }, []);

  return (
    <section id="profile" className="flex w-auto justify-center">
      {loading && <Spinner />}
      <div className="flex justify-center flex-wrap max-w-7xl ">
        {isSucces && allJobs?.map((job, index) => <JobCard key={index} job={job} />)}
      </div>
    </section>
  );
}
