import toast from "react-hot-toast";
export const getJobs = () => {
  let jobs = [];
  const savedJobs = localStorage.getItem("jobs");
  if (savedJobs) {
    jobs = JSON.parse(savedJobs);
  }
  return jobs;
};

export const saveJob = (job) => {
  let jobs = getJobs();
  const isExist = jobs.find((j) => j.id === job.id);
  if (isExist) {
    return toast.error("Already Applied");
  }
  jobs.push(job);
  localStorage.setItem("jobs", JSON.stringify(jobs));
  toast.success("Applied Successfully");
};
