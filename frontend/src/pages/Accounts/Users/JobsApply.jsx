import React from "react";
import SidebarUser from "../../../components/layout/SidebarUser";

const JobsApply = () => {
  return (
    <section className="mt-4 bg-[#F0F0F3]">
      <div className="container">
        <div className="flex lg:-mx-2">
          <SidebarUser />
          <div className="w-full lg:w-3/4 lg:px-2">
            <p className="text-[var(--cl-text-main-2)] xl:text-2xl text-lg font-semibold flex items-center border-b-[1px] border-solid border-[#B9B9B9] h-20">
              Ứng viên
            </p>
            <div className="box mt-6">
              <p className="lg:text-[1.125rem] text-[0.875rem] font-semibold mb-2">
                Việc làm đã ứng tuyển
              </p>
              <p className="xl:text-[0.875rem] mb-4">
                Để nhận được gợi ý việc làm chính xác hơn, hãy tùy chỉnh cài đặt
                gợi ý việc làm.
              </p>
              <div className="table-cart">
                <div className="table-head hidden lg:flex flex-wrap border-b-[1px] last:border-b-[0] border-solid border-[#B9B9B9]">
                  <div className="lg:w-1/4 xl:py-4 py-2 font-semibold text-[#252525]">
                    Tên việc làm
                  </div>
                  <div className="lg:w-1/4 text-center xl:py-4 py-2 font-semibold text-[#252525]">
                    Hồ sơ ứng tuyển
                  </div>
                  <div className="lg:w-[15%]  text-center xl:py-4 py-2 font-semibold text-[#252525]">
                    Ngày nộp
                  </div>
                  <div className="lg:w-[15%]  text-center xl:py-4 py-2 font-semibold text-[#252525]">
                    Hạn nộp
                  </div>
                  <div className="lg:w-1/5  text-center xl:py-4 py-2 font-semibold text-[#252525]">
                    Trạng thái
                  </div>
                </div>
                <div className="table-body lg:flex flex-wrap border-b-[1px] last:border-b-[0] border-solid border-[#B9B9B9]">
                  <div className="lg:w-1/4 xl:py-4 py-2">
                    <p className="font-semibold text-[#252525]">
                      Legal Fresher (Japanese Speaking)
                    </p>
                    <p className="desc mt-1 xl:text-[0.875rem] text-[#888]">
                      Công ty Cổ phần SmartOSC
                    </p>
                  </div>
                  <div className="lg:w-1/4 xl:py-4 py-2">
                    <div className="flex lg:block justify-between gap-4">
                      <p className="font-semibold text-[#252525] shrink-0 block lg:hidden">
                        Hồ sơ ứng tuyển:
                      </p>
                      <p className="font-semibold text-[#252525] text-[0.875rem] lg:text-center">
                        Hồ sơ nộp nhanh
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-[15%] xl:py-4 py-2">
                    <div className="flex lg:block justify-between gap-4">
                      <p className="font-semibold text-[#252525] shrink-0 block lg:hidden">
                        Ngày nộp:
                      </p>
                      <p className="font-semibold text-[#252525] text-[0.875rem] lg:text-center">
                        26/06/2024
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-[15%] xl:py-4 py-2">
                    <div className="flex lg:block justify-between gap-4">
                      <p className="font-semibold text-[#252525] shrink-0 block lg:hidden">
                        Hạn nộp:
                      </p>
                      <p className="font-semibold text-[#252525] text-[0.875rem] lg:text-center">
                        25/12/2024
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-1/5 xl:py-4 py-2">
                    <div className="flex lg:block justify-between gap-4 text-center">
                      <p className="font-semibold text-[#252525] shrink-0 block lg:hidden">
                        Trạng thái:
                      </p>
                      <span className="status inline-block text-[0.75rem] py-1 px-2 bg-[#CEF4F2] rounded-3xl">
                        Nộp thành công
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsApply;
