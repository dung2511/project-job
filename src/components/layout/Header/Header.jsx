import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth, firestore } from "../../../firebase.config";
import ImageLogo from "../../ImageLogo";
import { doc, getDoc } from "firebase/firestore";
import MenuHeader from "./MenuHeader";
const Header = () => {
  const navigate = useNavigate();
  const urlImageUserDefault =
    "https://firebasestorage.googleapis.com/v0/b/website-job-21a07.appspot.com/o/Images%2Fuser_profile_default.png?alt=media&token=e0db52f4-0be5-42a2-a1be-c40da07929c1";
  const [userDetail, setUserDetail] = useState(null);
  const [employerDetail, setEmployerDetail] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user == null) return;
      const docSnapUser = await getDoc(doc(firestore, "Users", user.uid));
      const docSnapEmployer = await getDoc(
        doc(firestore, "Employers", user.uid)
      );
      if (docSnapUser.exists()) {
        setUserDetail(docSnapUser.data());
      } else if (docSnapEmployer.exists()) {
        setEmployerDetail(docSnapEmployer.data());
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      const height = header.offsetHeight;
      setHeaderHeight(height);
      document.body.style.paddingTop = `${height}px`;
      header.classList.add("fixed");
    }
  }, []);
  async function handleLogout() {
    try {
      await auth.signOut();
      setUserDetail(null);
      setEmployerDetail(null);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <header ref={headerRef} className="header bg-[var(--cl-blue)] xl:py-0 py-2">
      <div className="2xl:px-10 xl:py-0 px-5 py-4 flex items-center !max-w-[1920px] mx-auto">
        <span className="show-menu-mobile text-white block xl:hidden text-[20px] mr-4">
          <i className="fa-solid fa-bars"></i>
        </span>
        <Link
          to={"/"}
          title="JobLaw TUYỂN DỤNG VIỆC LÀM PHÁP LUẬT"
          className="h-logo max-w-[125px] lg:max-w-[135px] shrink-0 xl:mr-2"
        >
          <ImageLogo />
        </Link>
        <div className="menu flex-1 xl:flex items-center justify-end">
          <Link
            to={"/"}
            title="JobLaw TUYỂN DỤNG VIỆC LÀM PHÁP LUẬT"
            className="logo-mobile block xl:hidden max-w-[176px] mx-auto my-4"
          >
            <ImageLogo />
          </Link>
          <MenuHeader />
          {userDetail != null ? (
            <div className="relative items-center hidden gap-1 cursor-pointer xl:flex h-user">
              <Link
                className="lg:w-12 lg:h-12 w-10 h-10 overflow-hidden rounded-full ava shrink-0 img-h-full img_full img-cover border-[1px] border-[#ebebeb]"
                to={"/thong-tin-tai-khoan"}
                title={userDetail?.name}
              >
                <img
                  src={
                    userDetail.avatar ? userDetail.avatar : urlImageUserDefault
                  }
                  title={userDetail.fullName}
                  alt={userDetail.fullName}
                />
              </Link>
              <Link
                to={"/thong-tin-tai-khoan"}
                title={userDetail?.fullName}
                className="name-user hidden text-white ml-2 lg:block font-semibold"
              >
                {userDetail?.fullName}
              </Link>
              <i className="fa-solid fa-angle-down text-white ml-2"></i>

              <div className="hidden overflow-hidden rounded user-content lg:block">
                <div className="box bg-[#fff] relative">
                  <Link
                    className="link block border-b-[1px] border-solid border-[#ebebeb] py-2 px-6"
                    to={"/thong-tin-tai-khoan"}
                    title="Thông tin tài khoản"
                  >
                    Thông tin tài khoản
                  </Link>

                  <Link
                    className="link block border-b-[1px] border-solid border-[#ebebeb] py-2 px-6"
                    to={"/viec-lam-da-luu"}
                    title="Việc làm đã lưu"
                  >
                    Việc làm đã lưu
                  </Link>
                  <Link
                    className="link block border-b-[1px] border-solid border-[#ebebeb] py-2 px-6"
                    to={"/viec-lam-ung-tuyen"}
                    title="Việc làm đã ứng tuyển"
                  >
                    Việc làm đã ứng tuyển
                  </Link>
                  <Link
                    className="link block border-b-[1px] border-solid border-[#ebebeb] py-2 px-6"
                    onClick={handleLogout}
                    title="Đăng xuất"
                  >
                    Đăng xuất
                  </Link>
                </div>
              </div>
            </div>
          ) : employerDetail != null ? (
            <div className="relative items-center hidden gap-1 cursor-pointer xl:flex h-user">
              <Link
                className="lg:w-12 lg:h-12 w-10 h-10 overflow-hidden rounded-full ava shrink-0 img-h-full img_full img-cover border-[1px] border-[#ebebeb]"
                to={"/thong-tin-tai-khoan-nha-tuyen-dung"}
                title={employerDetail.fullName}
              >
                <img
                  src={
                    employerDetail.avatar
                      ? employerDetail.avatar
                      : urlImageUserDefault
                  }
                  title={employerDetail.fullName}
                  alt={employerDetail.fullName}
                />
              </Link>
              <Link
                to={"/thong-tin-tai-khoan-nha-tuyen-dung"}
                title={employerDetail.fullName}
                className="name-user hidden text-white ml-2 lg:block font-semibold"
              >
                {employerDetail.fullName}
              </Link>
              <i className="fa-solid fa-angle-down text-white ml-2"></i>

              <div className="hidden overflow-hidden rounded user-content lg:block">
                <div className="box bg-[#fff] relative">
                  <Link
                    className="link block border-b-[1px] border-solid border-[#ebebeb] py-2 px-6"
                    to={"/thong-tin-tai-khoan-nha-tuyen-dung"}
                    title="Thông tin tài khoản nhà tuyển dụng"
                  >
                    Thông tin tài khoản
                  </Link>
                  <Link
                    className="link block border-b-[1px] border-solid border-[#ebebeb] py-2 px-6"
                    to={"/danh-sach-tin-dang"}
                    title="Danh sách tin đăng"
                  >
                    Danh sách tin đăng
                  </Link>
                  <Link
                    className="link block border-b-[1px] border-solid border-[#ebebeb] py-2 px-6"
                    to={"/dang-tin"}
                    title="Đăng tin"
                  >
                    Đăng tin
                  </Link>
                  <div
                    className="link block border-b-[1px] border-solid border-[#ebebeb] py-2 px-6"
                    title="Đăng xuất"
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="box-actions flex flex-wrap">
                <NavLink
                  to={"/dang-ky"}
                  title="Đăng ký"
                  className="btn text-white py-4 px-6 bg-transparent hover:text-white rounded-[1rem] hover:bg-[var(--cl-orange)] transition-all duration-300 border border-solid border-white hover:border-[var(--cl-orange)] mr-4 last:mr-0 xl:min-w-[132px] text-center"
                >
                  Đăng ký
                </NavLink>
                <NavLink
                  to={"/dang-nhap"}
                  title="Đăng nhập"
                  className="btn text-white py-4 px-6 bg-transparent hover:text-white rounded-[1rem]  hover:bg-[var(--cl-orange)] transition-all duration-300 border border-solid border-white hover:border-[var(--cl-orange)] mr-4 last:mr-0 xl:min-w-[132px] text-center"
                >
                  Đăng nhập
                </NavLink>
              </div>
            </>
          )}
        </div>
        <div className="box-actions flex xl:hidden flex-1 justify-end flex-wrap">
          {userDetail ? (
            <div className="relative items-center hidden gap-1 cursor-pointer xl:flex h-user">
              <Link
                className="lg:w-12 lg:h-12 w-10 h-10 overflow-hidden rounded-full ava shrink-0 img-h-full img_full img-cover border-[1px] border-[#ebebeb]"
                to={"/thong-tin-tai-khoan"}
                title={userDetail?.name}
              >
                <img
                  src={
                    userDetail.avatar ? userDetail.avatar : urlImageUserDefault
                  }
                  title={userDetail.fullName}
                  alt={userDetail.fullName}
                />
              </Link>
              <Link
                to={"/thong-tin-tai-khoan"}
                title={userDetail?.name}
                className="name-user hidden text-white ml-2 lg:block font-semibold"
              >
                {userDetail?.name}
              </Link>
              <i className="fa-solid fa-angle-down text-white ml-2"></i>

              <div className="hidden overflow-hidden rounded user-content lg:block">
                <div className="box bg-[#fff] relative">
                  <Link
                    className="link block border-b-[1px] border-solid border-[#ebebeb] py-2 px-6"
                    to={"/thong-tin-tai-khoan"}
                    title="Thông tin tài khoản"
                  >
                    Thông tin tài khoản
                  </Link>

                  <Link
                    className="link block border-b-[1px] border-solid border-[#ebebeb] py-2 px-6"
                    to={"/viec-lam-da-luu"}
                    title="Việc làm đã lưu"
                  >
                    Việc làm đã lưu
                  </Link>
                  <Link
                    className="link block border-b-[1px] border-solid border-[#ebebeb] py-2 px-6"
                    to={"/viec-lam-ung-tuyen"}
                    title="Việc làm đã ứng tuyển"
                  >
                    Việc làm đã ứng tuyển
                  </Link>
                  <Link
                    className="link block border-b-[1px] border-solid border-[#ebebeb] py-2 px-6"
                    onClick={handleLogout}
                    title="Đăng xuất"
                  >
                    Đăng xuất
                  </Link>
                </div>
              </div>
            </div>
          ) : employerDetail ? (
            <div className="relative items-center hidden gap-1 cursor-pointer xl:flex h-user">
              <Link
                className="lg:w-12 lg:h-12 w-10 h-10 overflow-hidden rounded-full ava shrink-0 img-h-full img_full img-cover border-[1px] border-[#ebebeb]"
                to={"/thong-tin-tai-khoan-nha-tuyen-dung"}
                title={employerDetail.fullName}
              >
                <img
                  src={
                    employerDetail.avatar
                      ? employerDetail.avatar
                      : urlImageUserDefault
                  }
                  title={employerDetail.fullName}
                  alt={employerDetail.fullName}
                />
              </Link>
              <Link
                to={"/thong-tin-tai-khoan-nha-tuyen-dung"}
                title={employerDetail.fullName}
                className="name-user hidden text-white ml-2 lg:block font-semibold"
              >
                {employerDetail.fullName}
              </Link>
              <i className="fa-solid fa-angle-down text-white ml-2"></i>

              <div className="hidden overflow-hidden rounded user-content lg:block">
                <div className="box bg-[#fff] relative">
                  <Link
                    className="link block border-b-[1px] border-solid border-[#ebebeb] py-2 px-6"
                    to={"/thong-tin-tai-khoan-nha-tuyen-dung"}
                    title="Thông tin tài khoản nhà tuyển dụng"
                  >
                    Thông tin tài khoản
                  </Link>
                  <Link
                    className="link block border-b-[1px] border-solid border-[#ebebeb] py-2 px-6"
                    to={"/danh-sach-tin-dang"}
                    title="Danh sách tin đăng"
                  >
                    Danh sách tin đăng
                  </Link>
                  <Link
                    className="link block border-b-[1px] border-solid border-[#ebebeb] py-2 px-6"
                    to={"/dang-tin"}
                    title="Đăng tin"
                  >
                    Đăng tin
                  </Link>
                  <div
                    className="link block border-b-[1px] border-solid border-[#ebebeb] py-2 px-6"
                    title="Đăng xuất"
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Link
                to={"/dang-nhap"}
                title="Đăng nhập"
                className="btn text-white hover:text-[var(--cl-text-main)] hover:bg-white transition-all duration-500 bg-[var(--cl-bg-main)] mb-2 lg:mb-0 mr-2 last:mr-0 border-solid border-[var(--border-main)] border"
              >
                Đăng nhập
              </Link>
              <Link
                to={"/dang-ky"}
                title="Đăng ký"
                className="btn text-white hover:text-[var(--cl-text-main)] hover:bg-white transition-all duration-500 bg-[var(--cl-bg-main)] mb-2 lg:mb-0 mr-2 last:mr-0 border-solid border-[var(--border-main)] border"
              >
                Đăng ký
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center xl:hidden ml-auto"></div>
      </div>
      <div className="over-lay fixed block xl:hidden top-0 right-[-100%] w-full h-full z-50 bg-[rgba(0,0,0,.5)] transition-all duration-300"></div>
    </header>
  );
};

export default Header;
