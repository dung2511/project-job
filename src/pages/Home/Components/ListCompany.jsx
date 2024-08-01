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
    <div className="outstanding_company xl:py-10 py-6">
      <div className="container">
        <div className="head-title-all leading-[1.3] xl:mb-10 mb-4 border-l-[5px] border-solid border-[#DD6B4D] pl-4 font-bold 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
          <span className="text-[var(--cl-blue)]">Nhà tuyển dụng</span>
          <span className="text-[var(--cl-orange)]"> nổi bật</span>
        </div>
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
              slidesPerView: 2.5,
              spaceBetween: 16,
              loop: true,
              centeredSlides: true,
            },
          }}
          modules={[Pagination]}
          className="slide-company py-4 xl:pt-20"
        >
          {listDataCompany &&
            listDataCompany.map((item, index) => {
              return (
                <SwiperSlide>
                  <div className="item-company h-full flex flex-col transition-all duration-500">
                    <Link
                      to="cong-ty-co-phan-thuc-pham-tnt"
                      title={item.nameCompany}
                      className="img block c-img img-contain rounded-xl overflow-hidden pt-[40%]"
                    >
                      <img
                        loading="lazy"
                        src={item.imageCompany}
                        alt={item.nameCompany}
                        title={item.nameCompany}
                        className="img-fluid"
                      />
                    </Link>
                    <div className="content rounded-lg relative z-[1] mt-[-70px] flex items-center xl:mx-6 mx-4 flex-1 xl:py-6 xl:px-8 p-4 bg-white shadow-[0px_4px_25px_0px_rgba(0,0,0,.15)]">
                      <div className="logo lg:w-[62px] lg:h-[62px] w-10 h-10 shrink-0 img_full img-h-full img-contain xl:mr-10 mr-4">
                        <img
                          loading="lazy"
                          src={item.imageCompany}
                          alt={item.nameCompany}
                          title={item.nameCompany}
                          className="img-fluid"
                        />
                      </div>
                      <div className="content">
                        <h3>
                          <Link
                            to="cong-ty-co-phan-thuc-pham-tnt"
                            title={item.nameCompany}
                            className="title line-camp-2 font-bold text-[#000] mb-3 uppercase"
                          >
                            {item.nameCompany}
                          </Link>
                        </h3>
                        <div className="subtitle lg:text-[0.875rem] text-[#000] mb-1"></div>
                        <div className="text-right hidden">
                          <Link
                            to="#"
                            title={item.nameCompany}
                            className="link text-[0.75rem] text-[#DD6B4D]"
                          >
                            6 vị trí đăng ứng tuyển
                            <i className="fa-solid fa-angle-right ml-4"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
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
