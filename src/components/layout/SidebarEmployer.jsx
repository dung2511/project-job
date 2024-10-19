import React from "react";
import { NavLink } from "react-router-dom";

const SidebarEmployer = () => {
  return (
    <ul className="nav-menu p-2 border border-solid border-[#EBEBEB] rounded-[10px]">
      <li className="mb-2 last:mb-0">
        <NavLink
          to={"/thong-tin-tai-khoan-nha-tuyen-dung"}
          className="flex items-center pl-2 py-2 text-gray-700 rounded-md hover:bg-gray-200"
        >
          <svg
            className="mr-2"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              rx="20"
              ry="20"
            ></rect>
            <rect
              width="176"
              height="176"
              x="288"
              y="48"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              rx="20"
              ry="20"
            ></rect>
            <rect
              width="176"
              height="176"
              x="48"
              y="288"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              rx="20"
              ry="20"
            ></rect>
            <rect
              width="176"
              height="176"
              x="288"
              y="288"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              rx="20"
              ry="20"
            ></rect>
          </svg>
          <span className="font-medium">Thông tin tài khoản</span>
        </NavLink>
      </li>
      <li className="mb-2 last:mb-0">
        <NavLink
          to={"/danh-sach-tin-dang"}
          className="flex items-center pl-2 py-2 text-gray-700 rounded-md hover:bg-gray-200 "
        >
          <svg
            className="mr-2 shrink-0"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
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
              strokeLinejoin="round"
              strokeWidth="32"
              rx="16"
              ry="16"
              transform="rotate(180 256 208)"
            ></rect>
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M64 384h384M96 432h320"
            ></path>
            <circle
              cx="256"
              cy="208"
              r="80"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            ></circle>
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80m368 176a80 80 0 00-80 80M32 256a80 80 0 0180 80"
            ></path>
          </svg>
          <span className="font-medium">Quản lý tin đăng</span>
        </NavLink>
        <ul className="nav-menu mt-2 ">
          <li className="mb-2 last:mb-0">
            <NavLink
              href={"/dang-tin"}
              className="flex items-center pl-2 py-2 text-gray-700 rounded-md hover:bg-gray-200"
            >
              <span className="font-medium">Đăng tin</span>
            </NavLink>
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
            strokeWidth="0"
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
              strokeLinejoin="round"
              strokeWidth="32"
              rx="16"
              ry="16"
              transform="rotate(180 256 208)"
            ></rect>
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M64 384h384M96 432h320"
            ></path>
            <circle
              cx="256"
              cy="208"
              r="80"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            ></circle>
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
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
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80-80-80m-192 80h256"
            ></path>
          </svg>
          <span className="font-medium">Đăng xuất</span>
        </a>
      </li>
    </ul>
  );
};

export default SidebarEmployer;
