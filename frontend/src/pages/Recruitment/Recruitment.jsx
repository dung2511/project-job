import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { queryCityById } from "../../hooks/useFetchData";
import SearchBar from "./SearchBar";
import JobCard from "./JobCard";
import { firestore } from "../../firebase.config";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
const Recruitment = () => {
  const [jobs, setJobs] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const fetchJobs = async () => {
    const jobsRef = query(collection(firestore, "Posts"));
    let q = query(jobsRef, orderBy("timeCreated", "desc"));
    if (searchParams.size > 0) {
      if (searchParams.get("name") !== "") {
        q = query(q, where("positionJob", "==", searchParams.get("name")));
      }
      if (searchParams.get("type") !== "") {
        q = query(q, where("careerJob", "==", searchParams.get("type")));
      }
      if (searchParams.get("city") !== "") {
        q = query(q, where("workJob", "==", searchParams.get("city")));
      }
      if (searchParams.get("level") !== "") {
        q = query(q, where("levelJob", "==", searchParams.get("level")));
      }
    }
    const req = await getDocs(q);
    const data = req.docs.map((job) => ({
      id: job.id,
      ...job.data(),
    }));
    setJobs(data);
  };

  const fetchJobsCustom = async (jobCriteria) => {
    console.log(jobCriteria);
    const conditions = [];
    if (jobCriteria.type !== "") {
      conditions.push(where("careerJob", "==", jobCriteria.type));
    }
    if (jobCriteria.city !== "") {
      conditions.push(where("workJob", "==", jobCriteria.city));
    }
    if (jobCriteria.level !== "") {
      conditions.push(where("levelJob", "==", jobCriteria.level));
    }
    const tempJobs = [];
    const jobsRef = query(collection(firestore, "Posts"), ...conditions);
    const req = await getDocs(jobsRef);
    const data = req.docs.map((job) => ({
      ...job.data(),
      id: job.id,
      timeCreated: job.data().timeCreated.toDate(),
    }));
    setJobs(data);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      <div className="py-6 bg-[#f3f5f7]">
        <div className="container">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full lg:w-3/4 px-2">
              <div className="flex items-center justify-between head">
                <div className="head-title-all leading-[1.3] border-l-[5px] border-solid border-[#DD6B4D] pl-4 font-bold 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
                  <span className="text-[var(--cl-blue)]">
                    Tìm thấy
                    <span className="count-post text-[var(--cl-orange)] px-2">
                      {jobs.length}
                    </span>
                    việc làm
                  </span>
                </div>
                <div className="show-filter__job lg:hidden inline-flex items-center justify-center w-10 h-10 rounded bg-[#E1E1E1] text-[#000] cursor-pointer">
                  <span
                    className="w-6 h-6 bg-no-repeat bg-contain icon"
                    style={{
                      backgroundImage: "url(theme/frontend/images/filter.png)",
                    }}
                  ></span>
                </div>
              </div>
              <div className="list-job mt-4">
                {jobs.map((item) => {
                  return <JobCard key={item.id} {...item} />;
                })}

                <div className="pagination" pagination-filter="">
                  <strong>1</strong>
                  <Link to="https://joblaw.vn/tuyen-dung?page=2" data-page="2">
                    2
                  </Link>
                  <Link to="https://joblaw.vn/tuyen-dung?page=3" data-page="3">
                    3
                  </Link>
                  <Link to="https://joblaw.vn/tuyen-dung?page=4" data-page="4">
                    4
                  </Link>

                  <span style={{ pointerEvents: "none" }}> ... </span>
                  <Link
                    to="https://joblaw.vn/tuyen-dung?page=78"
                    data-page="78"
                  >
                    78
                  </Link>
                  <Link to="https://joblaw.vn/tuyen-dung?page=2" data-page="2">
                    <i
                      className="fa-solid fa-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="over-lay-sidebar fixed lg:hidden w-full h-full z-50 block top-0 right-[-100%] bg-[rgba(0,0,0,.6)] transition-all duration-300"></div>
        <span className="show-sidebar-post lg:hidden flex items-center justify-center w-10 h-10 rounded-tl-lg rounded-bl-lg bg-white shadow-[0_4px_10px_rgba(0,0,0,.3)] text-[var(--cl-text-main)] fixed top-[20%] right-0 z-10">
          <i className="fa-solid fa-filter"></i>
        </span>
      </div>
    </>
  );
};

export default Recruitment;
