import {
  collection,
  onSnapshot,
  orderBy,
  query,
  startAt,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../../../firebase.config";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const SuperiorTool = () => {
  const urlBgSuperiorTool =
    "https://firebasestorage.googleapis.com/v0/b/website-job-21a07.appspot.com/o/career_categories%2Fsuperior-tool-bg.png?alt=media&token=179b30e4-531d-4006-886b-84f0ad28de45";
  const [listSuperiorTool, setListSuperiorTool] = useState(null);
  const fetchListSuperiorTool = async () => {
    try {
      const q = query(
        collection(firestore, "SuperiorTool"),
        orderBy("id"),
        startAt(0)
      );
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setListSuperiorTool(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchListSuperiorTool();
  }, [listSuperiorTool]);
  return (
    <section className="py-12 bg-[#f3f5f7]">
      <div className="container">
        <h2 className="text-[#00b14f] text-[2.5rem] font-semibold text-center">
          Công cụ vượt trội!
        </h2>
        <div
          class="superior-tool__content grid items-center bg-center bg-no-repeat bg-[length:340px_387px] gap-[5%_35%] grid-cols-[repeat(2,2fr)] justify-between py-[3.25rem]"
          style={{ backgroundImage: `url(${urlBgSuperiorTool})` }}
        >
          <div class="content__session">
            {listSuperiorTool?.slice(0, 3).map((item) => {
              return (
                <Link
                  key={item.id}
                  to={"/tien-ich/" + item.slug}
                  className="flex items-center w-fit p-4 mt-8 gap-3 shadow-[0_7px_16px_rgba(0,0,0,.03)] bg-white rounded-[0.625rem]"
                >
                  <div class=" w-12 h-12">
                    <img class="lazy w-full" alt="" src={item.icon} />
                  </div>
                  <div class="title">
                    <h3>{item.name}</h3>
                    <span className="text-[#00b14f] text-[0.75rem] font-normal">
                      Khám phá ngay
                      <ArrowForwardIcon
                        sx={{
                          color: "#00b14f",
                          fontSize: "1.125rem",
                          marginLeft: "0.25rem",
                        }}
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div class="content__session">
            {listSuperiorTool?.slice(3, 6).map((item) => {
              return (
                <Link
                  key={item.id}
                  to={"/tien-ich/" + item.slug}
                  className="flex items-center ml-auto w-fit p-4 mt-8 gap-3 shadow-[0_7px_16px_rgba(0,0,0,.03)] bg-white rounded-[0.625rem]"
                >
                  <div class=" w-12 h-12">
                    <img class="lazy w-full" alt="" src={item.icon} />
                  </div>
                  <div class="title">
                    <h3>{item.name}</h3>
                    <span>
                      Khám phá ngay
                      <ArrowForwardIcon
                        sx={{
                          color: "#00b14f",
                          fontSize: "1.125rem",
                          marginLeft: "0.25rem",
                        }}
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperiorTool;
