import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { firestore } from "../../../firebase.config";
const ListCompany = () => {
  const [listDataCompany, setListDataCompany] = useState(null);
  const fetchDataCompany = async () => {
    try {
      const q = query(collection(firestore, "Employers"));
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setListDataCompany(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDataCompany();
  }, []);
  return (
    <div className="outstanding_company py-6">
      <div className="container">
        <h2 className="text-[#00b14f] text-[1.5rem] font-bold mb-5">
          Top Công ty hàng đầu
        </h2>
        <Swiper
          pagination={{ clickable: true }}
          slidesPerView={3}
          spaceBetween={1.2}
          watchSlidesProgress={true}
          speed={600}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            992: {
              slidesPerView: 2.5,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="slide-company"
        >
          {listDataCompany &&
            listDataCompany.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="item-company h-full min-h-[11.5rem] items-center p-4 rounded-[0.75rem] border border-solid border-[#dee0e2] flex flex-col transition-all duration-500 hover:border-[#33c172] hover:shadow-[0_10px_30px_rgba(14,166,59,.2)]">
                    <label className="bg-[#243a76] rounded-[3px] text-white text-[0.75rem] font-semibold mr-auto min-h-[25px] py-1 pl-1.5 pr-5 relative uppercase top-company__label">
                      fast500
                    </label>
                    <img
                      loading="lazy"
                      src={item.imageCompany}
                      alt={item.nameCompany}
                      title={item.nameCompany}
                      className="img-fluid object-contain w-[6rem] h-[6rem]"
                    />
                    <h3 className="text-[0.875rem] line-camp-2 font-bold text-center text-[#000] mt-2 leading-5 uppercase">
                      {item.nameCompany}
                    </h3>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default ListCompany;
