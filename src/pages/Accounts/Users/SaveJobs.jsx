import React, { useEffect, useState } from "react";
import SidebarUser from "../../../components/layout/SidebarUser";
import { auth, firestore } from "../../../firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SaveJobs = () => {
  return (
    <section className="mt-4 bg-[#F0F0F3]">
      <div className="container">
        <div className="flex lg:-mx-2">
          <SidebarUser />
          <div className="w-full lg:w-2/3 lg:px-2">
            <p className="text-[var(--cl-text-main-2)] xl:text-2xl text-lg font-semibold flex items-center border-b-[1px] border-solid border-[#B9B9B9] h-20">
              Ứng viên
            </p>
            <div className="profile-online mt-6 first:mt-0">
              <p className="text-[1.125rem] font-semibold text-[#252525] pb-2">
                Việc làm đã lưu
              </p>
              <span className="xl:text-[0.875rem] text-[0.75rem]">
                Để nhận được gợi ý việc làm chính xác hơn, hãy tùy chỉnh cài đặt
                gợi ý việc làm.
              </span>
              <div className="list-suggestions mt-4 flex flex-wrap lg:-mx-2">
                <div className="w-full md:w-1/2 md:px-2 mb-4">
                  <div className="suggestions_item relative h-full border-[1px] border-solid bg-white border-[#ebebeb] hover:border-[#1C4B82] transition-all duration-700 xl:p-4 p-2 mb-4 last:mb-0 rounded-[5px]">
                    <div className="main-content flex">
                      <div className="image shrink-0 w-16 h-16 mr-8">
                        <a
                          href="legal-fresher-japanese-speaking-2825"
                          title="Legal Fresher (Japanese Speaking)"
                          className="block img img__ aspect-w-1 aspect-h-1 img-contain"
                        >
                          <img
                            loading="lazy"
                            src="../../../theme/frontend/images/cong-ty-co-phan-smartosc-61d50e76c4aec-3.png"
                            title="Legal Fresher (Japanese Speaking)"
                            alt="Legal Fresher (Japanese Speaking)"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <h3>
                          <a
                            href="legal-fresher-japanese-speaking-2825"
                            title="Legal Fresher (Japanese Speaking)"
                            className="title font-semibold xl:text-[1.125rem] text-[0.875rem] line-clamp-2"
                          >
                            Legal Fresher (Japanese Speaking)
                          </a>
                        </h3>

                        <p className="text text-[#888] mt-2">
                          Công ty Cổ phần SmartOSC
                        </p>
                      </div>
                    </div>
                    <div className="button-action flex justify-between mt-2">
                      <ul className="info-job text-[0.75rem] mt-2">
                        <li className="inline-block bg-[#F0F0F0] text-[var(--cl-text-main-2)] rounded-sm py-0.5 px-2.5 mr-2 last:mr-0">
                          3M - 5M
                        </li>
                        <li className="inline-block bg-[#F0F0F0] text-[var(--cl-text-main-2)] rounded-sm py-0.5 px-2.5 mr-2 last:mr-0">
                          <span className="address comma">Nam Định</span>
                        </li>
                      </ul>
                      <a
                        href="javascript:void(0)"
                        favourite-post="2825"
                        title="Yêu thích"
                        className="btn-favourite text-[#D90909] hover:text-[#ebebeb] active"
                      >
                        <i className="fa-regular fa-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaveJobs;
