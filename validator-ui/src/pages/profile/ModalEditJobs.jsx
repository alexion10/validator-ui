import React, { useState } from "react";

export default function EditJobs({ job, setModal }) {
  const [jobInfo, setJobInfo] = useState(job);
  const closeModal = () => setModal(false);

  const handleChange = (e) => {
    setJobInfo({ ...jobInfo, [e.target.id]: e.target.value });
  };

  return (
    <React.Fragment>
      {/* <!-- Main modal --> */}
      <div
        id="default-modal"
        className="top-0 left-0  h-full w-full fixed bg-gray-400 bg-opacity-70"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full m-auto h-full flex justify-center items-center">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={closeModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              {Object.entries(job).map(([key, val]) => {
                if (
                  key === "edited" ||
                  key === "deleted" ||
                  key === "published"
                )
                  return null;
                return (
                  <div className="flex flex-wrap" key={key}>
                    <p>{key}</p>
                    <input
                      type="text"
                      name={key}
                      id={key}
                      defaultValue={val}
                      onChange={handleChange}
                      className="mx-2 px-1 border-2"
                    />
                  </div>
                );
              })}
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                id="test"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
