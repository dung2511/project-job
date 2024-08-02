import {
  collection,
  documentId,
  onSnapshot,
  orderBy,
  query,
  startAt,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../../../firebase.config";

const CreatePost = () => {
  const [listCity, setListCity] = useState(null);
  const [level, setLevel] = useState(null);
  const [career, setCareer] = useState(null);
  const [experience, setExperience] = useState(null);
  const [workType, setWorkType] = useState(null);
  const fetchDataCity = async () => {
    try {
      const q = query(collection(firestore, "cities"));
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setListCity(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fectchDataLevel = async () => {
    try {
      const q = query(collection(firestore, "levels"));
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setLevel(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDataCareer = async () => {
    try {
      const q = query(collection(firestore, "career_categories"));
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setCareer(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDataExperience = async () => {
    try {
      const q = query(
        collection(firestore, "experiences"),
        orderBy("id"),
        startAt(0)
      );
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setExperience(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDataWorkType = async () => {
    try {
      const q = query(
        collection(firestore, "working_types"),
        orderBy("id"),
        startAt(0)
      );
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setWorkType(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDataCity();
    fectchDataLevel();
    fetchDataCareer();
    fetchDataExperience();
    fetchDataWorkType();
  });
  return (
    <section className="make-news-recruit xl:py-10 py-6">
      <div className="container">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full lg:w-[22%] px-2 mb-4 lg:mb-0">
            <ul className="nav-menu p-2 border border-solid border-[#EBEBEB] rounded-[10px]">
              <li className="mb-2 last:mb-0">
                <a
                  href="https://joblaw.vn/thong-tin-tai-khoan-ntd"
                  className="flex items-center pl-2 py-2 text-gray-700 rounded-md hover:bg-gray-200 "
                >
                  <svg
                    className="mr-2"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="22"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="176"
                      height="176"
                      x="48"
                      y="48"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      rx="20"
                      ry="20"
                    ></rect>
                    <rect
                      width="176"
                      height="176"
                      x="288"
                      y="48"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      rx="20"
                      ry="20"
                    ></rect>
                    <rect
                      width="176"
                      height="176"
                      x="48"
                      y="288"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      rx="20"
                      ry="20"
                    ></rect>
                    <rect
                      width="176"
                      height="176"
                      x="288"
                      y="288"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      rx="20"
                      ry="20"
                    ></rect>
                  </svg>
                  <span className="font-medium">Thông tin tài khoản</span>
                </a>
              </li>
              <li className="mb-2 last:mb-0">
                <a
                  href="https://joblaw.vn/danh-sach-tin-da-dang"
                  className="flex items-center pl-2 py-2 text-gray-700 rounded-md hover:bg-gray-200 active  "
                >
                  <svg
                    className="mr-2 shrink-0"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="22"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="448"
                      height="256"
                      x="32"
                      y="80"
                      fill="none"
                      stroke-linejoin="round"
                      stroke-width="32"
                      rx="16"
                      ry="16"
                      transform="rotate(180 256 208)"
                    ></rect>
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M64 384h384M96 432h320"
                    ></path>
                    <circle
                      cx="256"
                      cy="208"
                      r="80"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80m368 176a80 80 0 00-80 80M32 256a80 80 0 0180 80"
                    ></path>
                  </svg>
                  <span className="font-medium">Quản lý tin đăng</span>
                </a>
                <ul className="nav-menu mt-2 open" style={{ display: "block" }}>
                  <li className="mb-2 last:mb-0">
                    <a
                      href="https://joblaw.vn/dang-tin-tuyen-dung"
                      className="flex items-center pl-2 py-2 text-gray-700 rounded-md hover:bg-gray-200"
                    >
                      <span className="font-medium">Đăng tin</span>
                    </a>
                  </li>
                  <li className="mb-2 last:mb-0">
                    <a
                      href="https://joblaw.vn/danh-sach-tin-da-dang"
                      className="flex items-center pl-2 py-2 text-gray-700 rounded-md hover:bg-gray-200"
                    >
                      <span className="font-medium">Danh sách tin đăng</span>
                    </a>
                  </li>
                  <li className="mb-2 last:mb-0">
                    <a
                      href="https://joblaw.vn/quan-ly-ung-vien"
                      className="flex items-center pl-2 py-2 text-gray-700 rounded-md hover:bg-gray-200"
                    >
                      <span className="font-medium">Danh sách ứng viên</span>
                    </a>
                  </li>
                </ul>
                <span className="btn-dropdown-menu">
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </span>
              </li>
              <li className="mb-2 last:mb-0">
                <a
                  href="https://joblaw.vn/quan-ly-dich-vu/all"
                  className="flex items-center pl-2 py-2 text-gray-700 rounded-md hover:bg-gray-200 "
                >
                  <svg
                    className="mr-2 shrink-0"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="22"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="448"
                      height="256"
                      x="32"
                      y="80"
                      fill="none"
                      stroke-linejoin="round"
                      stroke-width="32"
                      rx="16"
                      ry="16"
                      transform="rotate(180 256 208)"
                    ></rect>
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M64 384h384M96 432h320"
                    ></path>
                    <circle
                      cx="256"
                      cy="208"
                      r="80"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    ></circle>
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80m368 176a80 80 0 00-80 80M32 256a80 80 0 0180 80"
                    ></path>
                  </svg>
                  <span className="font-medium">Quản lý dịch vụ</span>
                </a>
                <ul className="nav-menu mt-2 ">
                  <li className="mb-2 last:mb-0">
                    <a
                      href="https://joblaw.vn/quan-ly-dich-vu/use"
                      className="flex items-center pl-2 py-2 text-gray-700 rounded-md hover:bg-gray-200"
                    >
                      <span className="font-medium">Dịch vụ đang dùng</span>
                    </a>
                  </li>
                  <li className="mb-2 last:mb-0">
                    <a
                      href="https://joblaw.vn/quan-ly-dich-vu/expired"
                      className="flex items-center pl-2 py-2 text-gray-700 rounded-md hover:bg-gray-200"
                    >
                      <span className="font-medium">Dịch vụ hết hạn</span>
                    </a>
                  </li>
                  <li className="mb-2 last:mb-0">
                    <a
                      href="https://joblaw.vn/dich-vu-cua-chung-toi"
                      className="flex items-center pl-2 py-2 text-gray-700 rounded-md hover:bg-gray-200"
                    >
                      <span className="font-medium">Gói dịch vụ</span>
                    </a>
                  </li>
                </ul>
                <span className="btn-dropdown-menu">
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </span>
              </li>
              <li className="mb-2 last:mb-0">
                <a
                  href="https://joblaw.vn/dang-xuat"
                  className="flex items-center pl-2 py-2 text-gray-700 rounded-md hover:bg-gray-200"
                >
                  <svg
                    className="mr-2 shrink-0 text-red-500"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="22"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80-80-80m-192 80h256"
                    ></path>
                  </svg>
                  <span className="font-medium">Đăng xuất</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-[78%] px-2">
            <div className="head-title-all leading-[1.3] mb-4 border-l-[5px] border-solid border-[#DD6B4D] pl-4 font-bold 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
              <span className="text-[var(--cl-blue)]">Đăng tin tuyển dụng</span>
            </div>
            <form>
              <div className="form-post-new">
                <p className="title flex items-center xl:text-[1.5rem] text-[1.25rem] mb-6">
                  <span className="icon rounded-full text-[1rem] w-[2.5rem] h-[2.5rem] bg-[#DD6B4D] text-white inline-flex items-center justify-center shrink-0 mr-2">
                    <i className="fa-solid fa-suitcase"></i>
                  </span>
                  Mô tả công việc
                </p>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Chức danh <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Nhập chức danh công việc"
                    className="form-control border-solid border p-3 rounded w-full border-[#ebebeb]"
                  />
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Cấp bậc <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <select
                    className="form-control border-solid border p-3 rounded w-full border-[#ebebeb]"
                    defaultValue={"Chọn"}
                  >
                    <option value={"Chọn"} disabled={true}>
                      Chọn
                    </option>
                    {level &&
                      level.map((item, index) => {
                        return (
                          <option value={item.name} key={index}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Ngành nghề <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <select
                    className="form-control border-solid border p-3 rounded w-full border-[#ebebeb]"
                    defaultValue={"Chọn"}
                  >
                    <option value={"Chọn"} disabled={true}>
                      Chọn
                    </option>
                    {career &&
                      career.map((item, index) => {
                        return (
                          <option value={item.name} key={index}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Nơi làm việc<span className="text-[#DD6B4D]">*</span>
                  </p>
                  <select
                    className="form-control border-solid border p-3 rounded w-full border-[#ebebeb]"
                    defaultValue={"Chọn Thành phố"}
                  >
                    <option value={"Chọn Thành phố"} disabled={true}>
                      Chọn Thành phố
                    </option>
                    {listCity &&
                      listCity.map((item, index) => {
                        return (
                          <option value={item.name} key={index}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Kinh nghiệm làm việc{" "}
                    <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <select
                    className="form-control border-solid border p-3 rounded w-full border-[#ebebeb]"
                    defaultValue={"Kinh nghiệm"}
                  >
                    <option value={"Kinh nghiệm"} disabled={true}>
                      Kinh nghiệm
                    </option>
                    {experience &&
                      experience.map((item, index) => {
                        return (
                          <option value={item.name} key={index}>
                            {item.name}{" "}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Mức lương<span className="text-[#DD6B4D]">*</span>
                  </p>
                  <div className="import-wage flex flex-wrap">
                    <div className="flex items-center">
                      <span style={{ marginRight: "5px" }}>Từ: </span>
                      <input
                        type="text"
                        className="form-control w-full sm:w-auto rounded border border-solid p-3 border-[#A8A8A8] min-w-[178px] 2xl:mr-[54px] xl:mr-6 sm:mr-4"
                        placeholder="Lương tối thiểu"
                      />
                    </div>
                    <div className="flex items-center">
                      <span style={{ marginRight: "5px" }}>Đến: </span>
                      <input
                        type="text"
                        className="form-control w-full sm:w-auto rounded border border-solid p-3 border-[#A8A8A8] min-w-[178px] 2xl:mr-[54px] xl:mr-6 sm:mr-4"
                        placeholder="Lương tối đa"
                      />
                    </div>
                    <select
                      className="form-control mb-2 rounded border border-solid p-3 border-[#A8A8A8] min-w-[109px] 2xl:mr-[54px] xl:mr-6 mr-4"
                      defaultValue={"VNĐ"}
                    >
                      <option value={"VNĐ"}>VNĐ</option>
                      <option value={"USD"}>USD</option>
                    </select>
                    <div className="flex items-center mb-2">
                      <label className="form-status__all block relative">
                        <input type="checkbox" value="1" className="hidden" />
                        <span className="button"></span>
                      </label>
                      <span className="text text-[#000] ml-2 lg:text-[0.875rem]">
                        Thỏa thuận
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Mô tả công việc <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <textarea
                    className="form-control w-full border-[#A8A8A8] border border-solid p-3 rounded bg-[#FCFCFC] h-[125px] editor"
                    placeholder="Thông tin cho vị trí công việc yêu cầu, trách nhiệm mà ứng viên có thể đảm nhận khi làm việc ở công ty"
                  ></textarea>
                  <p className="sub text-[.75rem] text-[#7d7d7d]">
                    (Bạn có thể nhập tối đa 5.000 ký tự)
                  </p>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Yêu cầu ứng viên <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <textarea
                    className="form-control w-full border-[#A8A8A8] border border-solid p-3 rounded bg-[#FCFCFC] h-[125px] editor"
                    placeholder="Nhập mô tả công việc"
                    s
                  ></textarea>
                  <p className="sub text-[.75rem] text-[#7d7d7d]">
                    (Bạn có thể nhập tối đa 5.000 ký tự)
                  </p>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">Quyền lợi</p>
                  <textarea
                    placeholder="Nhập quyền lợi"
                    className="form-control w-full border-[#A8A8A8] border border-solid p-3 rounded bg-[#FCFCFC] h-[125px] editor"
                  ></textarea>

                  <p className="sub text-[.75rem] text-[#7d7d7d]">
                    (Bạn có thể nhập tối đa 5.000 ký tự)
                  </p>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Thời gian làm việc
                  </p>
                  <textarea
                    placeholder="Nhập thời gian làm việc"
                    className="form-control w-full border-[#A8A8A8] border border-solid p-3 rounded bg-[#FCFCFC] h-[125px] editor"
                  ></textarea>

                  <p className="sub text-[.75rem] text-[#7d7d7d]">
                    (Bạn có thể nhập tối đa 5.000 ký tự)
                  </p>
                </div>
                 <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Ngày đăng
                    <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <input
                    type="date"
                    placeholder="DD-MM-YYYY"
                    className="form-control w-full border border-solid p-3 rounded border-[#ebebeb]"
                  />
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Ngày hết hạn
                    <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <input
                    type="date"
                    placeholder="DD-MM-YYYY"
                    className="form-control w-full border border-solid p-3 rounded border-[#ebebeb]"
                  />
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Số lượng cần tuyển <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <input
                    type="text"
                    className="form-control w-full rounded border border-solid p-3 border-[#ebebeb]"
                    placeholder="Vui lòng nhập"
                  />
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Hình thức làm việc <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <select
                    className="form-control rounded w-full border border-solid p-3 border-[#ebebeb]"
                    defaultValue={"Chọn"}
                  >
                    <option value={"Chọn"} disabled={true}>
                      Chọn
                    </option>

                    {workType &&
                      workType.map((item) => {
                        return (
                          <option value={item.id} key={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
              <div className="line bg-[#E1E1E1] 2xl:my-10 my-6 h-[1px]"></div>
              <div className="form-button text-center">
                <div className="container">
                  <button
                    type="submit"
                    className="btn py-[10px] px-[50px] rounded font-medium bg-[#DD6B4D] text-white hover:bg-[#ff8768] hover:text-white"
                  >
                    Đăng tin
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
