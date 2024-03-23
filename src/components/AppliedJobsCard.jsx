import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const AppliedJobsCard = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 border border-gray-200 shadow rounded-lg">
     <div className="flex items-center bg-[#F4F4F4] p-5 rounded-lg">
     <img className="w-[116px] h-[40px]" src={logo} alt="" />
     </div>
      <div className="flex flex-col gap-5 flex-1">
      <h3 className="text-2xl font-bold">{job_title}</h3>
      <h5>{company_name}</h5>
      <div className="flex gap-5">
        <div className="btn py-3 px-5 btn-accent btn-outline">
          {remote_or_onsite}
        </div>
        <div className="btn py-3 px-5 btn-accent btn-outline">{job_type}</div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
        <p className="flex items-center gap-2">
          <CiLocationOn /> {location}
        </p>
        <p className="flex items-center gap-2">
          <AiOutlineDollarCircle /> Salary : {salary}
        </p>
      </div>
      </div>
      <div className="flex items-center">
      <Link to={`/job/${id}`}>
        <button className="btn btn-primary w-fit">View Details</button>
      </Link>
      </div>
    </div>
  );
};

export default AppliedJobsCard;
