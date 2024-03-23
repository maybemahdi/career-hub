import { NavLink } from "react-router-dom";
import user from "../assets/images/user.png";
import acc from "../assets/icons/accounts.png";
import JobCard from "../components/JobCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [jobLength, setJobLength] = useState(4);
  const handleAllJobs = () => {
    setJobLength(jobs.length);
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("jobs.json");
      const data = await res.json();
      setJobs(data);
    };
    fetchData();
  }, []);
  return (
    <main>
      <section className="text-black bg-cover bg-center py-20 my-5">
        <div className="flex gap-8 flex-col lg:flex-row justify-center items-center">
          <div className="basis-[60%] text-center lg:text-left">
            <div className="">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">One Step</h1>
              <h2 className="text-5xl lg:text-6xl font-bold text-gradient mb-6">
                Closure To Your
              </h2>
              <h2 className="text-5xl lg:text-6xl text-[#5b68be] font-bold text-gradient mb-6">
                Dream Job
              </h2>
              <div className="rounded-lg">
                <div className="relative flex flex-col items-center w-full lg:w-[52%]">
                  <p>
                    Explore thousands of job opportunities with all the
                    information you need. Its your future. Come find it. Manage
                    all your job application from start to finish.
                  </p>
                </div>
                <NavLink
                  href="#_"
                  className="my-6 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  data-rounded="rounded-md"
                  data-primary="blue-600"
                  data-primary-reset="{}"
                >
                  Get Started
                </NavLink>
              </div>
            </div>
          </div>
          <div className="basis-[40%] flex flex-col items-center justify-center w-full">
            <img className="w-full h-full" src={user} alt="" />
          </div>
        </div>
      </section>
      <section className="my-16">
        <div className="flex my-10 flex-col items-center justify-center gap-4">
          <h3 className="text-4xl font-bold">Job Category List</h3>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="flex flex-col lg:flex-row my-5 items-center justify-center gap-5">
          <div className="p-5 w-full flex flex-col gap-3 border border-purple-500 rounded">
            <img className="w-fit" src={acc} alt="" />
            <h3>Account & Finance</h3>
            <p>300 Jobs Available</p>
          </div>
          <div className="p-5 w-full flex flex-col gap-3 border border-purple-500 rounded">
            <img className="w-fit" src={acc} alt="" />
            <h3>Creative Design</h3>
            <p>200 Jobs Available</p>
          </div>
          <div className="p-5 w-full flex flex-col gap-3 border border-purple-500 rounded">
            <img className="w-fit" src={acc} alt="" />
            <h3>Marketing & Sales</h3>
            <p>400 Jobs Available</p>
          </div>
          <div className="p-5 w-full flex flex-col gap-3 border border-purple-500 rounded">
            <img className="w-fit" src={acc} alt="" />
            <h3>Engineering Job</h3>
            <p>500 Jobs Available</p>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <div className="flex my-10 flex-col items-center justify-center gap-4">
          <h3 className="text-4xl font-bold">Featured Jobs</h3>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {jobs.slice(0, jobLength).map((job) => (
            <JobCard key={job.id} job={job}></JobCard>
          ))}
        </div>
        <button
          onClick={handleAllJobs}
          className={`flex btn my-8 btn-primary w-fit mx-auto items-center justify-center ${
            jobLength === jobs.length && "hidden"
          }`}
        >
          See All Jobs
        </button>
      </section>
    </main>
  );
};

export default Home;
