import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase.config";
import Select from "react-select";
const BannerHome = () => {
  const [dataCareerCategory, setDataCareerCategory] = useState([]);

  const fetchDataCareerCategory = async () => {
    try {
      const q = query(collection(firestore, "career_categories"));
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setDataCareerCategory(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchDataCareerCategory();
  }, []);
  return (
    <div className="section-banner__home xl:pt-16 xl:pb-[160px] py-10 bg-no-repeat bg-cover bg-right">
      <div className="container">
        <h2 className="title text-center text-white font-bold 2xl:text-[2.5rem] xl:text-[1.87rem] text-[1.25rem] xl:mb-4 mb-2">
          Một bước đến thành công
        </h2>
        <div className="short_content text-center text-white xl:mb-10 mb-2">
          Tiếp cận thông tin tuyển dụng việc làm pháp luật mỗi ngày từ hàng ngàn
          doanh nghiệp uy tín tại Việt Nam
        </div>
        <form
          action="https://joblaw.vn/tuyen-dung"
          method="GET"
          className="form-search rounded-lg bg-white shadow-[0px_4px_25px_0px_rgba(0,0,0,.2)] px-2 py-2"
        >
          <div className="flex flex-wrap items-center -mx-2">
            <div className="w-full lg:w-auto flex-1 px-2 flex flex-wrap">
              <div className="w-full md:w-1/2 px-3 lg:px-6 lg:last:pr-0 lg:py-0">
                <div className="relative flex items-center px-2 border-soli border-[1px] border-[#6b7280] lg:border-none rounded-md mb-3 lg:mb-0">
                  <button type="submit" className="">
                    <span className="inline-block bg-contain w-6 h-6 bg-no-repeat bg-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_7_1017)">
                          <path
                            d="M9.94794 19.3103C12.0931 19.3104 14.1769 18.5947 15.8693 17.2765L22.254 23.6613C22.731 24.1219 23.491 24.1087 23.9517 23.6317C24.401 23.1665 24.401 22.4289 23.9517 21.9636L17.5669 15.5789C20.8378 11.3683 20.0761 5.30344 15.8656 2.03253C11.655 -1.23837 5.59018 -0.476692 2.31928 3.73385C-0.95163 7.94439 -0.189949 14.0093 4.02059 17.2802C5.71572 18.5971 7.80138 19.3114 9.94794 19.3103ZM4.81784 4.52741C7.65115 1.69405 12.2448 1.694 15.0782 4.5273C17.9116 7.36061 17.9116 11.9543 15.0783 14.7877C12.245 17.621 7.6513 17.6211 4.81795 14.7878C4.81789 14.7877 4.81789 14.7877 4.81784 14.7877C1.98454 11.975 1.96784 7.39805 4.7805 4.56474C4.79293 4.55226 4.80536 4.53984 4.81784 4.52741Z"
                            fill="#707070"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_7_1017">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(0.288696)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </button>
                  <input
                    type="text"
                    className="p-4 w-full border-none"
                    name="s"
                    placeholder="Vị trí ứng tuyển"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-2 lg:last:pr-0 lg:py-0">
                <div className="relative flex items-center px-2  border-solid  border-[1px] border-[#6b7280] lg:border-none rounded-md mb-3 lg:mb-0">
                  <span className="inline-block bg-contain w-6 h-6 bg-no-repeat bg-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <select
                    className="p-4 w-full text-[var(--cl-sub-title)] bg-white border-none text-sm"
                    name="career"
                  >
                    <option defaultValue disabled>
                      Ngành nghề
                    </option>
                    {dataCareerCategory &&
                      dataCareerCategory.map((item) => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-2 lg:px-6 lg:last:pr-0 lg:py-0">
                <div className="relative flex items-center px-2  border-solid  border-[1px] border-[#6b7280] lg:border-none rounded-md mb-3 lg:mb-0">
                  <span
                    className="inline-block w-6 h-6 bg-contain bg-no-repeat bg-center shrink-0"
                    style={{
                      backgroundImage:
                        "url(../theme/frontend/images/icon-city.svg)",
                    }}
                  ></span>
                  <select
                    className="p-4 w-full text-[var(--cl-sub-title)] bg-white js-select-2"
                    name="province"
                  ></select>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-auto px-2 text-center lg:text-right">
              <button
                type="submit"
                className="btn inline-flex py-4 px-6 rounded bg-[#DD6B4D] hover:bg-[#ff8768] text-white font-bold"
              >
                Tìm kiếm
              </button>
            </div>
          </div>
        </form>
        <div className="propose flex xl:mt-6 mt-4">
          <p className="title text-white font-bold shrink-0 lg:mr-8 mr-4 pt-2">
            Đề xuất:
          </p>
          <ul className="flex flex-wrap ">
            {dataCareerCategory &&
              dataCareerCategory.map((item, index) => {
                return (
                  <li className="mr-4 mb-2" key={index}>
                    <Link
                      to={item.slug}
                      title={item.name}
                      className="block bg-white py-2 px-4 rounded text-[#000] hover:bg-[#DD6B4D] hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
