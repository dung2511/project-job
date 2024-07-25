import React, { useEffect } from "react";
import LogoPage from "../../assets/images/logo-page-authenticate.png";
import FormLoginUser from "./FormLoginUser";
import FormLoginEmployer from "./FormLoginEmployer";
import Stats from "../../components/Stats";
import { auth } from "../../firebase.config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user == null) return;
      toast.success("Bạn đã đăng nhập rồi !!", {
        position: "top-right",
      });
      navigate("/");
    });

    return () => unsubscribe();
  }, [navigate]);
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
            <span className="text-[#1C4B82]">Đăng nhập</span>
            <span className="text-[#000]">với tư cách là?</span>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0 lg:pr-5">
              <div className="box-employer-login h-full rounded-t-xl overflow-hidden lg:opacity-[.6] hover:opacity-100 transition-all duration-300 hover:shadow-[0px_4px_10px_rgba(0,0,0,.3)] border-[.5px] border-solid border-[#A8A8A8]">
                <div className="head p-4 text-center text-white font-bold uppercase 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] bg-[#1C4B82]">
                  Nhà tuyển dụng
                </div>
                <FormLoginEmployer />
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-2 lg:pl-5">
              <div className="box-employer-login h-full rounded-t-xl overflow-hidden lg:opacity-[.6] hover:opacity-100 transition-all duration-300 hover:shadow-[0px_4px_10px_rgba(0,0,0,.3)] border-[.5px] border-solid border-[#A8A8A8]">
                <div className="head p-4 text-center text-white font-bold uppercase 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] bg-[#DD6B4D]">
                  Ứng viên
                </div>
                <FormLoginUser />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Stats />
      <div
        id="forgotPassword"
        modal=""
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full d-none"
      >
        <div className="relative  w-full max-w-[34rem] h-full md:h-auto mx-auto">
          <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-[0.625rem] right-[0.625rem] z-10 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              button_close_modal=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M1 1L19 19M19 1L1 19"
                  stroke="#454545"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <h3 className="title-modal lg:text-[1.625rem] md:text-[1.225rem] text-[1.1rem] lg:pt-[2.5rem] md:pt-[2rem] pt-[1.5rem] font-semibold text-gray-900 dark:text-white text-center mb-1">
              Quên mật khẩu
            </h3>
            <div className="desc text-[#454545] text-center lg:mb-[1.875rem] md:mb-[1.575rem] mb-[1.25rem] px-4">
              Mật khẩu mới sẽ được hệ thống của chúng tôi gửi về Email hoặc Số
              điện thoại mà bạn đã đăng ký.
            </div>
            <div className="p-6 pt-0 space-y-6">
              <form
                action="https://joblaw.vn/quen-mat-khau"
                method="POST"
                className="frm form-validate"
              >
                <label
                  htmlFor="#username_forgot_password"
                  className="block text-[#252525] mb-2"
                >
                  Địa chỉ email đăng ký *
                </label>
                <input
                  type="text"
                  placeholder="Nhập..."
                  name="email"
                  id="username_forgot_password"
                  className="placeholder-[#888888] border-[1px] border-[#EBEBEB] rounded overflow-hidden w-full h-[3rem] md:px-4 px-3 mb-[1.25rem] md:text-base text-sm"
                />
                <button
                  type="submit"
                  className="overflow-hidden px-[0.625rem] py-[0.825rem] text-white w-full transition-all duration-300 bg-[#1C4B82] hover:bg-[#1d8dc5] rounded-xl mt-4"
                >
                  Lấy lại mật khẩu
                </button>
              </form>
              <div className="text-center lg:mt-[1.875rem] md:mt-[1.25rem] mt-[1rem] text-[#454545]">
                <span>Bạn chưa có tài khoản?</span>
                <a
                  href="https://joblaw.vn/dang-ky"
                  title="Đăng ký ngay"
                  className="text-[#1C4B82]  font-semibold inline-block"
                >
                  Đăng ký ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
