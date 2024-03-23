import { useEffect, useState } from "react";
import { getJobs } from "../utils/localStorage";
import AppliedJobsCard from "../components/AppliedJobsCard";
import { IoIosArrowDown } from "react-icons/io";

const Applied = () => {
  const [filter, setFilter] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    const getSaved = getJobs();
    setAppliedJobs(getSaved);
    setFilter(getSaved);
  }, []);
  const handleFilter = (filter) => {
    if (filter === "all") {
      setFilter(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setFilter(remoteJobs);
    } else if (filter === "onsite") {
      const onSiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setFilter(onSiteJobs);
    }
  };
  return (
    <div>
      <div>
        <h3 className="text-2xl font-bold my-16 text-center">
          Applied Jobs: {appliedJobs.length}
        </h3>
        <div className="flex flex-col gap-6 my-16">
          <div className="flex justify-end lg:mb-10">
            <details className="dropdown">
              <summary className="m-1 btn">
                Filter By <IoIosArrowDown />
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li onClick={()=> handleFilter('all')}>
                  <a>All</a>
                </li>
                <li onClick={()=> handleFilter('remote')}>
                  <a>Remote</a>
                </li>
                <li onClick={()=> handleFilter('onsite')}>
                  <a>Onsite</a>
                </li>
              </ul>
            </details>
          </div>
          {filter.map((job) => (
            <AppliedJobsCard key={job.id} job={job}></AppliedJobsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applied;
