import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { FaSquarePhone } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { saveJob } from "../utils/localStorage";

const JobDetail = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const selectedJob =
    Array.isArray(jobs) && jobs.find((job) => job.id === parseInt(id));
  const {
    job_title,
    contact_information,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = selectedJob;
  const handleApply = (job) => {
    saveJob(job);
  };
  return (
    <div>
      <div>
        <h3 className="text-2xl font-bold my-16 text-center">Job Details</h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 justify-center my-10">
        <div className="basis-[70%] flex flex-col gap-6">
          <h5 className="text-lg font-semibold">
            Job Description:{" "}
            <span className="text-base text-[#757575] font-medium">
              {job_description}
            </span>
          </h5>
          <h5 className="text-lg font-semibold">
            Job Responsibility:{" "}
            <span className="text-base text-[#757575] font-medium">
              {job_responsibility}
            </span>
          </h5>
          <div className="flex flex-col gap-3">
            <h5 className="text-lg font-semibold">Educational Requirements:</h5>
            <p>
              {" "}
              <span className="text-base text-[#757575] font-medium">
                {educational_requirements}
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-lg font-semibold">Experience:</h5>
            <p>
              {" "}
              <span className="text-base text-[#757575] font-medium">
                {experiences}
              </span>
            </p>
          </div>
        </div>
        <div className="basis-[30%]">
          <div className="p-6 rounded-md bg-[#7E90FE1A]">
            <h4 className="mb-3 font-bold">Job Details</h4>
            <hr />
            <div className="flex flex-col gap-3 my-2">
              <p className="flex items-center gap-2">
                <AiOutlineDollarCircle /> Salary : {salary} per month
              </p>
              <p className="flex items-center gap-2">
                <BiTask /> Job Title : {job_title}
              </p>
            </div>
            <h4 className="mt-6 mb-3 font-bold">Contact Information</h4>
            <hr />
            <div className="flex flex-col gap-3 my-2">
              <p className="flex items-center gap-2">
                <FaSquarePhone /> Phone : {contact_information.phone}{" "}
              </p>
              <p className="flex items-center gap-2">
                <MdMarkEmailUnread /> Email : {contact_information.email}
              </p>
              <p className="flex items-center gap-2">
                <IoLocationOutline /> Address :{" "}
                {contact_information.address.split(",")[1]}
              </p>
            </div>
            <button
              onClick={() => handleApply(selectedJob)}
              className="btn btn-accent mt-4 w-full px-4 py-3"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
