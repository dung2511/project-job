import React from "react";

const ListPost = () => {
  return (
    <section className="py-6 xl:py-10 posting-list">
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
            <div className="head-title-all mb-4 leading-[1.3] border-l-[5px] border-solid border-[#DD6B4D] pl-4 font-bold 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
              <span className="text-[var(--cl-blue)]">Danh sách tin đăng</span>
            </div>
            <div className="nav-link__candidate flex items-center mb-6">
              <a
                href="https://joblaw.vn/danh-sach-tin-da-dang"
                title="Quản lý đăng tuyển"
                className="link inline-flex mr-4 last:mr-0 items-center py-2 px-3 rounded-lg text-[#7d7d7d] border border-solid border-[#1C4B82] hover:bg-[#DD6B4D] hover:text-white hover:border-[#DD6B4D] active"
              >
                Quản lý đăng tuyển <i className="fa-regular fa-file-lines ml-2"></i>
              </a>
              <a
                href="https://joblaw.vn/quan-ly-ung-vien"
                title="Quản lý hồ sơ ứng viên"
                className="link inline-flex mr-4 last:mr-0 items-center py-2 px-3 rounded-lg text-[#7d7d7d] border border-solid border-[#1C4B82] hover:bg-[#DD6B4D] hover:text-white hover:border-[#DD6B4D] "
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
            <div className="nav-link__records flex lg:flex-wrap flex-nowrap whitespace-nowrap lg:whitespace-normal overflow-x-auto lg:overflow-x-hidden border-b-[1px] border-solid border-[#A8A8A8] mb-4">
              <a
                href="https://joblaw.vn/danh-sach-tin-da-dang"
                title=""
                className="link p-2 text-[#7D7D7D] border-b-[2px] border-solid border-transparent font-medium mr-4 active"
              >
                Tất cả tin đăng
              </a>
              <a
                href="https://joblaw.vn/danh-sach-tin-da-dang?act=1"
                title=""
                className="link p-2 text-[#7D7D7D] border-b-[2px] border-solid border-transparent font-medium mr-4 "
              >
                Tin đang hiển thị
              </a>
              <a
                href="https://joblaw.vn/danh-sach-tin-da-dang?act=0"
                title=""
                className="link p-2 text-[#7D7D7D] border-b-[2px] border-solid border-transparent font-medium mr-4 "
              >
                Tin đã ẩn
              </a>
            </div>
            <form
              action="https://joblaw.vn/danh-sach-tin-da-dang"
              method="GET"
              className="sm:flex flex-wrap justify-end mb-6"
              filter=""
            >
              <input type="hidden" name="act" value="" />
              <p className="title flex items-center shrink-0 mr-4 h-fit sm:pt-2 mb-4 sm:mb-0">
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
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <select
                    className="form-control w-full border-[#EBEBEB] rounded min-w-[300px]"
                    name="created_at"
                    filter-change=""
                  >
                    <option value="" selected="">
                      Tất cả thời gian
                    </option>
                    <option value="one-week">Tuần này</option>
                    <option value="month">Tháng này</option>
                    <option value="last-month">Tháng trước</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="table-file my-service">
              <table className="w-full table-list">
                <thead className="hidden lg:table-header-group">
                  <tr>
                    <td className="xl:py-4 py-2 font-semibold text-[#252525]">
                      Tên công việc
                    </td>
                    <td className="xl:py-4 py-2 font-semibold text-[#252525] text-center">
                      Ngày đăng
                    </td>
                    <td className="xl:py-4 py-2 font-semibold text-[#252525] text-center">
                      Thời hạn nộp
                    </td>
                    <td className="xl:py-4 py-2 font-semibold text-[#252525] text-center">
                      Lượt nộp
                    </td>
                    <td className="xl:py-4 py-2 font-semibold text-[#252525] text-center">
                      Lượt xem
                    </td>
                    <td className="xl:py-4 py-2 font-semibold text-[#252525] text-center">
                      Tình trạng tin
                    </td>
                    <td className="xl:py-4 py-2 font-semibold text-[#252525] text-center">
                      Khác
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t-[1px] border-solid border-[#ebebeb] first:border-t-[0px] lg:first:border-t-[1px] relative">
                    <td className="float-left w-full py-2 xl:py-4 lg:float-none lg:w-auto">
                      <div className="flex justify-between gap-4 pr-12 lg:block lg:pr-0">
                        <span className="title font-semibold text-[#252525] block lg:hidden">
                          Tên công việc:
                        </span>
                        <span className="text lg:text-[0.875rem]">
                          <a
                            href="intern-nguyen-van-c"
                            title="Intern"
                            className="name"
                          >
                            Intern
                          </a>
                        </span>
                      </div>
                    </td>
                    <td className="float-left w-full py-2 xl:py-4 lg:float-none lg:w-auto">
                      <div className="flex justify-between gap-4 text-left lg:block lg:text-center ">
                        <span className="title font-semibold text-[#252525] block lg:hidden">
                          Ngày đăng:
                        </span>
                        <span className="text lg:text-[0.875rem]">27/06/2024</span>
                      </div>
                    </td>
                    <td className="float-left w-full py-2 xl:py-4 lg:float-none lg:w-auto">
                      <div className="flex justify-between gap-4 text-left lg:block lg:text-center">
                        <span className="title font-semibold text-[#252525] block lg:hidden">
                          Thời hạn nộp:
                        </span>
                        <span className="text lg:text-[0.875rem]">30/06/2024</span>
                      </div>
                    </td>
                    <td className="float-left w-full py-2 xl:py-4 lg:float-none lg:w-auto">
                      <div className="flex justify-between gap-4 text-left lg:block lg:text-center">
                        <span className="title font-semibold text-[#252525] block lg:hidden">
                          Lượt nộp:
                        </span>
                        <span className="text lg:text-[0.875rem]">0</span>
                      </div>
                    </td>
                    <td className="float-left w-full py-2 xl:py-4 lg:float-none lg:w-auto">
                      <div className="flex justify-between gap-4 text-left lg:block lg:text-center">
                        <span className="title font-semibold text-[#252525] block lg:hidden">
                          Lượt xem:
                        </span>
                        <span className="text lg:text-[0.875rem]"></span>
                      </div>
                    </td>
                    <td className="float-left w-full py-2 xl:py-4 lg:float-none lg:w-auto">
                      <div className="flex justify-between gap-4 text-left lg:block lg:text-center">
                        <span className="title font-semibold text-[#252525] block lg:hidden">
                          Tình trạng tin:
                        </span>
                        <span className="text lg:text-[0.875rem]">
                          <strong className="is_show">Đang hoạt động</strong>
                        </span>
                      </div>
                    </td>

                    <td className="float-left w-full py-2 text-center xl:py-4 lg:float-none lg:w-auto">
                      <div
                        className="btn-action show-action cursor-pointer absolute top-0 right-0 lg:relative w-6 h-6 mx-auto rounded-full flex items-center justify-center bg-[#f5f5f5]"
                        data-action=""
                      >
                        <i className="fa-solid fa-ellipsis"></i>
                        <div className="text-[14px] list-action absolute whitespace-nowrap hidden right-7 lg:right-auto lg:left-[calc(100%_+_15px)] z-[1] top-0 bg-white shadow-[0_4px_10px_rgba(0,0,0,.3)] p-0 text-center">
                          <a
                            href="https://joblaw.vn/xem-lai-tin/3107"
                            title="Xem lại"
                            className="block p-2 border-b-[1px] border-b-[#ebebeb]"
                          >
                            Xem lại
                          </a>
                          <a
                            href="https://joblaw.vn/sua-tin-tuyen-dung/3107"
                            title="Chỉnh sửa"
                            className="block p-2 border-b-[1px] border-b-[#ebebeb]"
                          >
                            Chỉnh sửa
                          </a>
                          <a
                            href="https://joblaw.vn/sao-chep-tin/3107"
                            title="Sao chép"
                            className="block p-2 border-b-[1px] border-b-[#ebebeb]"
                          >
                            Sao chép
                          </a>
                          <a
                            href="https://joblaw.vn/xoa-tin/3107"
                            title="Xóa tin"
                            className="block p-2 border-b-[1px] border-b-[#ebebeb]"
                          >
                            Xóa tin
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListPost;
