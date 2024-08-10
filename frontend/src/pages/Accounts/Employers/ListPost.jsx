import React from "react";
import SidebarEmployer from "../../../components/layout/SidebarEmployer";

const ListPost = () => {
  
  return (
    <section className="py-6 xl:py-10 posting-list">
      <div className="container">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full lg:w-[22%] px-2 mb-4 lg:mb-0">
            <SidebarEmployer />
          </div>
          <div className="w-full lg:w-[78%] px-2">
            <div className="head-title-all mb-4 leading-[1.3] border-l-[5px] border-solid border-[#DD6B4D] pl-4 font-bold 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
              <span className="text-[var(--cl-blue)]">Danh sách tin đăng</span>
            </div>
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
                        <span className="text lg:text-[0.875rem]">
                          27/06/2024
                        </span>
                      </div>
                    </td>
                    <td className="float-left w-full py-2 xl:py-4 lg:float-none lg:w-auto">
                      <div className="flex justify-between gap-4 text-left lg:block lg:text-center">
                        <span className="title font-semibold text-[#252525] block lg:hidden">
                          Thời hạn nộp:
                        </span>
                        <span className="text lg:text-[0.875rem]">
                          30/06/2024
                        </span>
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
