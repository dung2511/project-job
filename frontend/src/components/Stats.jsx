import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../firebase.config";

const urlBgAchievementHome = "https://firebasestorage.googleapis.com/v0/b/website-job-21a07.appspot.com/o/Images%2Fbg_achievement_home.png?alt=media&token=2c13214b-204a-48f3-bda8-7b81770adee9";
const Stats = () => {
  const [dataStat, setDataStat] = useState([]);
  const fetchDataStat = async () => {
    try {
      const dataQuery = query(collection(firestore, "stats"));
      if (!dataQuery.empty) {
        const data = onSnapshot(dataQuery, (querySnapshot) => {
          setDataStat(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDataStat();
  }, []);
  return (
    <div
      className="section-stat xl:py-12 xl:pb-8 pb-2 py-6 bg-repeat"
      style={{
        backgroundImage: `url(${urlBgAchievementHome})`,
      }}
    >
      <div className="container">
        <div className="flex flex-wrap -mx-2">
          {dataStat &&
            dataStat.map((item, index) => {
              return (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 lg:px-6 lg:border-r-[1px] border-solid border-white last:border-r-[0px] mb-4">
                  <div className="item-statis">
                    <div className="flex items-center justify-center mb-2">
                      <span className="icon w-10 h-10 img_full img-h-full img-contain shrink-0 mr-2">
                        <img
                          src={item.imageUrl}
                          alt="icon"
                          className="brightness-[100]"
                        />
                      </span>
                      <span className="count font-bold text-white 2xl:text-[2.5rem] text-[1.875rem]">
                        {item.number}
                      </span>
                    </div>
                    <p className="title text-center uppercase font-bold text-white xl:text-[1.125rem] text-[1rem] mb-2">
                      {item.name}
                    </p>
                    <div className="short_content text-center text-white xl:text-[0.875rem]">
                      {item.content}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
