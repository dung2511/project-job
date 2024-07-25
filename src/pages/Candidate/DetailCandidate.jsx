import React from "react";

const DetailCandidate = () => {
  return (
    <>
      <section className="py-6 candidate-info xl:pb-20 lg:py-10">
        <div className="container">
          <p className="xl:text-[1.5rem] lg:text-[1.25rem] text-[1rem] font-semibold text-[#252525]">
            Chi tiết ứng viên
          </p>
          <div className="sm:flex justify-between xl:mt-8 mt-4 py-4 border-t border-b border-[#EBEBEB] items-end">
            <div className="flex items-center gap-4 info text-[14px]">
              <span className="cir-avata img-ava xl:w-[6.25rem] xl:h-[6.25rem] w-[4rem] h-[4rem] rounded-full overflow-hidden">
                <img
                  loading="lazy"
                  src="uploads/2024/03anh-dai-dien/1669238824479.jpg"
                  data-src="uploads/2024/03anh-dai-dien/1669238824479.jpg"
                  title="Nguyễn Phúc Anh"
                  alt="Nguyễn Phúc Anh"
                  className="img-fluid"
                />
              </span>
              <div>
                <div className="font-semibold text-[#252525] text-base flex items-center">
                  <span className="inline-block mr-4 name">Nguyễn Phúc Anh</span>
                </div>
                <p className="mt-1"></p>
                <p className="mt-1">
                  Thời gian cập nhật:
                  <span className="time-update">06/03/2024</span>
                </p>
                <div className="flex gap-2 mt-1">
                  <a
                    href="javascript:void(0)"
                    title="Lưu hồ sơ"
                    favourite-user="6"
                    className="heart hover:text-[#D90909] active"
                  >
                    <i className="fa-regular fa-heart"></i>
                  </a>
                  <a
                    href="javascript:void(0)"
                    onclick="window.print()"
                    title="In"
                    className="print"
                  >
                    <i className="fa-solid fa-print"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-[#ebebeb] pb-4">
            <p className="lg:text-[1.125rem] text-[1rem] font-semibold text-[#252525] md:py-4 py-2">
              Thông tin cá nhân
            </p>
            <div className="grid grid-cols-1 gap-4 py-4 lg:grid-cols-3 sm:grid-cols-2 text-[14px]">
              <div className="col-span-1">
                <h4 className="font-semibold text-[#252525] text-base mb-1">
                  Email
                </h4>
                <span>phucanhnguyen190501@gmail.com</span>
              </div>
              <div className="col-span-1 ">
                <h4 className="font-semibold text-[#252525] text-base mb-1">
                  Số điện thoại
                </h4>
                <span>0913354201</span>
              </div>
              <div className="col-span-1 ">
                <h4 className="font-semibold text-[#252525] text-base mb-1">
                  Tỉnh/Thành phố
                </h4>
                <span>Hà Nội</span>
              </div>
              <div className="col-span-1 ">
                <h4 className="font-semibold text-[#252525] text-base mb-1">
                  Ngày sinh
                </h4>
                <span>19-05-2001</span>
              </div>
              <div className="col-span-1 ">
                <h4 className="font-semibold text-[#252525] text-base mb-1">
                  Tình trạng hôn nhân
                </h4>
                <span>Độc thân</span>
              </div>
              <div className="col-span-1 ">
                <h4 className="font-semibold text-[#252525] text-base mb-1">
                  Địa chỉ
                </h4>
                <span>50 Hoàng Sâm, Nghĩa Đô, Cầu Giấy</span>
              </div>
            </div>
          </div>
          <p className="lg:text-[1.125rem] text-[1rem] font-semibold text-[#252525] md:pt-4 pt-2 ">
            Thông tin chung
          </p>
          <div className="grid grid-cols-1 gap-4 py-4 lg:grid-cols-3 sm:grid-cols-2 text-[14px]">
            <div className="col-span-1">
              <h4 className="font-semibold text-[#252525] text-base mb-1">
                Vị trí mong muốn
              </h4>
              <span></span>
            </div>
            <div className="col-span-1 ">
              <h4 className="font-semibold text-[#252525] text-base mb-1">
                Cấp bậc hiện tại
              </h4>
              <span>Đang cập nhật...</span>
            </div>
            <div className="col-span-1 ">
              <h4 className="font-semibold text-[#252525] text-base mb-1">
                Cấp bậc mong muốn
              </h4>

              <span>Thực tập</span>
            </div>
            <div className="col-span-1 ">
              <h4 className="font-semibold text-[#252525] text-base mb-1">
                Mức lương mong muốn
              </h4>
              <span>7 triệu</span>
            </div>
            <div className="col-span-1 ">
              <h4 className="font-semibold text-[#252525] text-base mb-1">
                Trình độ học vấn
              </h4>
              <span>Đang cập nhật...</span>
            </div>
            <div className="col-span-1 ">
              <h4 className="font-semibold text-[#252525] text-base mb-1">
                Số năm kinh nghiệm
              </h4>
              <span>Không có kinh nghiệm</span>
            </div>
            <div className="col-span-1 ">
              <h4 className="font-semibold text-[#252525] text-base mb-1">
                Kỹ năng mềm/kỹ năng cứng
              </h4>
              <span>làm việc độc lập</span>
            </div>
            <div className="col-span-1 ">
              <h4 className="font-semibold text-[#252525] text-base mb-1">
                Trường/Trung tâm đào tạo
              </h4>
              <span> - - </span>
            </div>
            <div className="col-span-1 ">
              <h4 className="font-semibold text-[#252525] text-base mb-1">
                Địa điểm làm việc
              </h4>
              <span>Hà Nội</span>
            </div>
          </div>
        </div>
      </section>
      <div
        id="viewed-profile"
        modal=""
        tabindex="-1"
        aria-hidden="true"
        className="fixed h-modal left-0 md:h-full md:inset-0 overflow-x-hidden overflow-y-auto right-0 top-0 w-full z-50"
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <h3 className="title-modal lg:text-[1.425rem] md:text-[1.225rem] text-[1.1rem] lg:pt-[2.5rem] md:pt-[2rem] pt-[1.5rem] font-semibold text-gray-900 dark:text-white text-center mb-1">
              Bạn muốn dùng 5đ để xem thông tin hồ sơ
            </h3>
            <div className="pt-0 space-y-6">
              <form
                action="https://joblaw.vn/xem-lien-he-ho-so"
                method="POST"
                className="frm form-validate"
                absolute=""
                data-success="NOTIFICATION.toastrMessageReload"
                accept-charset="utf8"
              >
                <input type="hidden" name="id" value="1" />
                <button
                  type="submit"
                  className="rounded-[0.3125rem] overflow-hidden px-[0.625rem] py-[0.825rem] bg-gradient-to-r from-[#F44336] to-[#C62828] text-white w-full btn-red btn mt-4"
                >
                  Xác nhận
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCandidate;
