import React from "react";

const CandidateManagement = () => {
  return (
    <section className="py-6 xl:pb-20 xl:py-10">
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
                <ul className="nav-menu mt-2 open" style="display: block;">
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
              <span className="text-[var(--cl-blue)]">
                Quản lý hồ sơ đăng tuyển
              </span>
            </div>
            <div className="nav-link__candidate flex items-center mb-6">
              <a
                href="https://joblaw.vn/danh-sach-tin-da-dang"
                title="Quản lý đăng tuyển"
                className="link inline-flex mr-4 last:mr-0 items-center py-2 px-3 rounded-lg text-[#7d7d7d] border border-solid border-[#1C4B82] hover:bg-[#DD6B4D] hover:text-white hover:border-[#DD6B4D] "
              >
                Quản lý đăng tuyển <i className="fa-regular fa-file-lines ml-2"></i>
              </a>
              <a
                href="https://joblaw.vn/quan-ly-ung-vien"
                title="Quản lý hồ sơ ứng viên"
                className="link inline-flex mr-4 last:mr-0 items-center py-2 px-3 rounded-lg text-[#7d7d7d] border border-solid border-[#1C4B82] hover:bg-[#DD6B4D] hover:text-white hover:border-[#DD6B4D] active"
              >
                Quản lý hồ sơ ứng viên <i className="fa-regular fa-user ml-2"></i>
              </a>
              <a
                href="https://joblaw.vn/dang-tin-tuyen-dung"
                title="Đăng tin"
                className="link inline-flex mr-4 last:mr-0 items-center py-2 px-3 rounded-lg text-[#7d7d7d] border border-solid border-[#1C4B82] hover:bg-[#DD6B4D] hover:text-white hover:border-[#DD6B4D] "
              >
                Đăng tin <i className="fa-regular fa-file-lines ml-2"></i>
              </a>
            </div>
            <form
              action="https://joblaw.vn/quan-ly-ung-vien"
              method="GET"
              className="form-fil flex items-center mb-6"
            >
              <p className="title shrink-0 inline-flex items-center mr-4 text-[#454545]">
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                >
                  <path
                    d="M15.5827 2.625H1.41602L7.08268 9.32583V13.9583L9.91602 15.375V9.32583L15.5827 2.625Z"
                    stroke="#454545"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                Bộ lọc
              </p>
              <div className="flex-1">
                <div className="flex -mx-2 flex-wrap">
                  <div className="w-full md:w-3/5 px-2 mb-4 md:mb-0">
                    <select
                      className="form-control p-2 rounded w-full border border-solid border-[#EBEBEB]"
                      name="post"
                    >
                      <option value="" selected="">
                        Tất cả tin đăng
                      </option>
                      <option value="3107">Intern</option>
                    </select>
                  </div>
                  <div className="w-full md:w-2/5 px-2 mb-4 md:mb-0">
                    <select
                      className="form-control p-2 rounded w-full border border-solid border-[#EBEBEB]"
                      name="time"
                    >
                      <option selected="" value="">
                        Tất cả thời gian nộp
                      </option>
                      <option value="week">Tuần này</option>
                      <option value="month">Tháng này</option>
                      <option value="last-month">Tháng trước</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
            <div className="flex flex-wrap items-center">
              <p id="text-check" className="mr-auto text shrink-0 text-check">
                Bạn đã chọn 0 hồ sơ
              </p>
              <a
                href="javascript:void(0)"
                delete-candidate=""
                ids=""
                title="Xóa"
                className="btn mr-4 lg:px-4 p-2 lg:min-w-[100px] text-[#1C4B82] border border-solid border-[#1C4B82] rounded hover:bg-[#DD6B4D] hover:text-white hover:border-[#DD6B4D]"
              >
                Xóa
              </a>
              <a
                href="javascript:void(0)"
                data-modal="send-mail"
                title="Gửi email"
                className="btn lg:px-4 p-2 btn-orange rounded"
              >
                Gửi email
              </a>
            </div>
            <div className="mt-4 table-file">
              <table className="table w-full">
                <thead className="hidden lg:table-header-group">
                  <tr>
                    <td className="xl:py-4 py-2 px-2 font-semibold text-[#252525] text-base">
                      Tên hồ sơ
                    </td>
                    <td className="xl:py-4 py-2 px-2 font-semibold text-center text-[#252525] text-base">
                      Vị trí ứng tuyển
                    </td>
                    <td className="xl:py-4 py-2 px-2 font-semibold text-center text-[#252525] text-base">
                      Thời gian nộp
                    </td>
                    <td className="xl:py-4 py-2 px-2 font-semibold text-center text-[#252525] text-base">
                      Loại hồ sơ
                    </td>
                    <td className="xl:py-4 py-2 px-2 font-semibold text-center text-[#252525] text-base">
                      Trạng thái tuyển dụng
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t-[1px] border-solid border-[#ebebeb] text-[14px]">
                    <td className="float-left w-full px-2 py-2 xl:py-4 lg:float-none lg:w-auto">
                      <div className="flex gap-4">
                        <input
                          type="checkbox"
                          checkbox-candidate=""
                          name="candidate"
                          value="8"
                          className="w-[1.1625rem] max-h-[1.1625rem] appearance-auto"
                        />
                        <div className="block">
                          <p className="font-semibold text-[#252525]">
                            <a
                              href="https://joblaw.vn/chi-tiet-ung-vien/kythuat5211/17"
                              title="Nguyễn Văn T"
                            >
                              Nguyễn Văn T
                            </a>
                            (...)
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="float-left w-full px-2 py-2 xl:py-4 lg:float-none lg:w-auto">
                      <div className="flex justify-between gap-3 lg:block">
                        <span className="title shrink-0 block lg:hidden font-semibold text-[#252525]">
                          Vị trí ứng tuyển:
                        </span>
                        <p className="text-center uppercase">Intern</p>
                      </div>
                    </td>
                    <td className="float-left w-full px-2 py-2 xl:py-4 lg:float-none lg:w-auto">
                      <div className="flex justify-between gap-3 lg:block">
                        <span className="title shrink-0 block lg:hidden font-semibold text-[#252525]">
                          Thời gian nộp:
                        </span>
                        <p className="text-center">27/06/2024</p>
                      </div>
                    </td>
                    <td className="float-left w-full px-2 py-2 xl:py-4 lg:float-none lg:w-auto">
                      <div className="flex justify-between gap-3 lg:block">
                        <span className="title shrink-0 block lg:hidden font-semibold text-[#252525]">
                          Loại hồ sơ:
                        </span>
                        <p className="text-center">Hồ sơ trực tuyến</p>
                      </div>
                    </td>
                    <td className="float-left w-full px-2 py-2 xl:py-4 lg:float-none lg:w-auto">
                      <div className="flex justify-between gap-3 lg:block">
                        <span className="title shrink-0 block lg:hidden font-semibold text-[#252525]">
                          Trạng thái tuyển dụng:
                        </span>
                        <select
                          className="text-[0.875rem] max-w-[300px]"
                          change-status="8"
                          name="status"
                        >
                          <option value="0" selected="">
                            Hồ sơ chờ duyệt
                          </option>
                          <option value="1">Hồ sơ đã liên hệ</option>
                          <option value="2">Hồ sơ đã test</option>
                          <option value="3">Hồ sơ đã phỏng vấn</option>
                          <option value="4">Hồ sơ trúng tuyển</option>
                          <option value="5">Hồ sơ không trúng tuyển</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateManagement;
