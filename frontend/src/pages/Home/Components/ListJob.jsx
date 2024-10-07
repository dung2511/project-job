import { Avatar, Box, Button, CircularProgress } from "@mui/material";
import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../../../firebase.config";
import { convertSalary } from "../../../components/utils";
import { queryCityById, timeAgo } from "../../../hooks/useFetchData";
const ListJob = () => {
  const [listJob, setListJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchDataRecruitment = async () => {
    try {
      const q = query(collection(firestore, "Posts"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setListJob(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const queryCityPost = async () => {
    try {
      if (listJob) {
        const cityPost = await Promise.all(
          listJob.map(async (recruitment) => {
            const cityName = await queryCityById(recruitment.workJob);
            return {
              ...recruitment,
              cityName,
            };
          })
        );
        setListJob(cityPost);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchDataRecruitment();
  }, []);
  useEffect(() => {
    queryCityPost();
  }, [listJob]);
  if (loading) {
    return (
      <Box className="flex items-center justify-center">
        <CircularProgress />
      </Box>
    );
  }
  return (
    <section className="list-job pt-5 bg-[#f3f5f7]">
      <div className="container">
        <h2 className="text-[#00b14f] text-[1.5rem] font-bold mb-5">
          Việc làm gần đây
        </h2>
        <div className="flex flex-wrap">
          {listJob &&
            listJob.map((item) => {
              return (
                <div
                  className="w-full md:w-1/2 lg:w-1/3 md:px-2 mb-4"
                  key={item.id}
                >
                  <Link
                    to={`/tuyen-dung/${item.slug}`}
                    className="block md:flex bg-white transition-all duration-500 border border-solid border-transparent hover:border-[#d3d5d9] hover:bg-[#f3f5f7] flex-wrap rounded-lg p-3 mb-4 relative"
                  >
                    <div className="flex-1 block mb-4 sm:flex md:mr-6 md:mb-0">
                      <Avatar
                        className="avatar w-full shrink-0 img-contain mb-2 sm:mb-0 sm:w-[7.5rem] !rounded"
                        alt={item.positionJob}
                        src={item.avatar}
                        sx={{ width: 78, height: 78, borderRadius: "8px" }}
                      />
                      <div className="w-full sm:w-5/6 sm:pl-4 ">
                        <div className="flex flex-col h-full">
                          <p className="name font-semibold line-clamp-2 text-[#212f3f] text-[0.875rem] mb-1">
                            {item.positionJob}
                          </p>
                          <p className="company text-[#212f3f] text-[0.75rem] mb-2 line-clamp-1">
                            {item.nameCompany}
                          </p>
                          <div className="flex flex-wrap mt-auto">
                            <div className="bg-[#e9eaec] rounded text-[#212f3f] px-2 py-1 mr-2 last:mr-0 text-[0.75rem] font-medium">
                              {convertSalary(item.minSalary)} -{" "}
                              {convertSalary(item.maxSalary)}
                            </div>
                            <div className="bg-[#e9eaec] rounded text-[#212f3f] px-2 py-1 mr-2 last:mr-0 text-[0.75rem] font-medium">
                              <span>{item.cityName}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ListJob;
