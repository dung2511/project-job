import React from "react";
import SidebarUser from "../../../components/layout/SidebarUser";

const ChangePassword = () => {
  return (
    <section className="mt-4 bg-[#F0F0F3]">
      <div className="container">
        <div className="flex lg:-mx-2">
          <SidebarUser />
          <div className="w-full lg:w-2/3 lg:px-2">
            <p className="text-[var(--cl-text-main-2)] xl:text-2xl text-lg font-semibold flex items-center border-b-[1px] border-solid border-[#B9B9B9] h-20">
              Ứng viên
            </p>
            <form className="form form-validate" method="POST">
              <p className="xl:text-[1.125rem] text-[0.875rem font-semibold text-[#252525] mt-6">
                Đổi mật khẩu
              </p>
              <div className="text-[#252525] lg:mt-8 mt-4">
                <div className="name w-full mb-4">
                  <p className=" pb-2">Mật khẩu hiện tại</p>
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu cũ"
                    name="old_password"
                    className="outline-none border-none w-full lg:w-1/2 rounded-md bg-white p-4 xl:placeholder:text-[0.875rem] placeholder:text-[0.75rem] text-[#B9B9B9]"
                  />
                </div>
                <div className="name w-full mb-4">
                  <p className=" pb-2">Mật khẩu mới</p>
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu mới"
                    name="password"
                    rules="required"
                    className="outline-none border-none w-full lg:w-1/2 rounded-md bg-white p-4 xl:placeholder:text-[0.875rem] placeholder:text-[0.75rem] text-[#B9B9B9]"
                  />
                </div>
                <div className="name w-full mb-4">
                  <p className=" pb-2">Nhập lại mật khẩu mới</p>
                  <input
                    type="password"
                    placeholder="Nhập lại mật khẩu mới"
                    name="password_confirmation"
                    className="outline-none border-none w-full lg:w-1/2 rounded-md bg-white p-4 xl:placeholder:text-[0.875rem] placeholder:text-[0.75rem] text-[#B9B9B9]"
                  />
                </div>
              </div>
              <div className="btn-btn w-full flex md:gap-4 gap-2 font-medium mt-4">
                <button
                  type="submit"
                  className="text-white max-w-[210px] text-center w-full py-3 bg-[var(--cl-bg-main)] rounded-md border border-solid border-[var(--border-main)] hover:text-[var(--cl-text-main)] hover:bg-white transition-all duration-500"
                >
                  Đổi mật khẩu
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
