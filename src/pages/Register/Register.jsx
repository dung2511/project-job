import React from "react";
import FormRegisterEmployer from "./FormRegisterEmployer";
import FormRegisterUser from "./FormRegisterUser";
import LogoPage from "../../assets/images/logo-page-authenticate.png";
import Stats from "../../components/Stats";
const Register = () => {
  return (
    <>
      <section className="section-login 2xl:py-20 xl:py-14 py-6">
        <div className="container">
          <div className="flex justify-center logo mb-6">
            <img
              loading="auto"
              src={LogoPage}
              alt="Logo"
              title="Logo"
              className="img-fluid"
            />
          </div>
          <div className="title-login font-bold text-center 2xl:text-[2.5rem] lg:text-[1.875rem] text-[1.25rem] mb-6">
            <span className="text-[#1C4B82]">Đăng ký</span>
            <span className="text-[#000]">với tư cách là?</span>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0 lg:pr-5">
              <div className="box-employer-login h-full rounded-t-xl overflow-hidden lg:opacity-[.6] hover:opacity-100 transition-all duration-300 hover:shadow-[0px_4px_10px_rgba(0,0,0,.3)] border-[.5px] border-solid border-[#A8A8A8]">
                <div className="head p-4 text-center text-white font-bold uppercase 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] bg-[#1C4B82]">
                  Nhà tuyển dụng
                </div>
                <FormRegisterEmployer />
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-2 lg:pl-5">
              <div className="box-employer-login h-full rounded-t-xl overflow-hidden lg:opacity-[.6] hover:opacity-100 transition-all duration-300 hover:shadow-[0px_4px_10px_rgba(0,0,0,.3)] border-[.5px] border-solid border-[#A8A8A8]">
                <div className="head p-4 text-center text-white font-bold uppercase 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] bg-[#DD6B4D]">
                  Ứng viên
                </div>
                <FormRegisterUser />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Stats />
    </>
  );
};
export default Register;
