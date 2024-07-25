import React from "react";

const DetailRecruitment = () => {
  return (
    <section className="py-6 xl:py-10 section-job__detail">
      <div className="container">
        <div className="flex flex-wrap items-center mb-6 -mx-2">
          <div className="w-full px-2 mb-4 lg:w-3/4 lg:mb-0">
            <div className="job-info bg-[#FAFAFA] rounded-lg xl:p-6 p-4">
              <div className="items-center block md:flex">
                <div className="logo-company w-full md:w-[150px] shrink-0 md:mr-4 mb-4 md:mb-0">
                  <div className="image c-img pt-[100%]">
                    <img
                      loading="lazy"
                      src="../theme/frontend/images/logo-viet-3.png"
                      alt="Luật sư， Chuyên viên luật"
                      title="Luật sư， Chuyên viên luật"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="flex-1 content">
                  <h3 className="title font-semibold text-[#000] 2xl:text-[1.5rem] text-[1.25rem] mb-1">
                    Luật sư， Chuyên viên luật
                  </h3>
                  <p className="text-[0.875rem] text-[#7d7d7d] uppercase mb-2">
                    Công ty Luật TNHH Minh Tín
                  </p>
                  <div className="flex flex-wrap -mx-2 lg:justify-between ">
                    <div className="w-full px-2 sm:w-1/2 lg:w-1/3">
                      <p className="text-[0.875rem] font-medium text-[#000] flex items-center mb-3">
                        <span
                          className="w-4 h-4 mr-2 bg-no-repeat bg-contain icon shrink-0"
                          style="background-image: url(../theme/frontend/images/dollar-sign.png);"
                        ></span>
                        Mức lương: 8M - 13M
                      </p>
                      <p className="text-[0.875rem] font-medium text-[#000] flex items-center mb-3">
                        <span
                          className="w-4 h-4 mr-2 bg-no-repeat bg-contain icon shrink-0"
                          style="background-image: url(../theme/frontend/images/file-text.png);"
                        ></span>
                        Kinh nghiệm: 3 năm
                      </p>
                      <p className="text-[0.875rem] font-medium text-[#000] flex items-center mb-3">
                        <span
                          className="w-4 h-4 mr-2 bg-no-repeat bg-contain icon shrink-0"
                          style="background-image: url(../theme/frontend/images/user_.png);"
                        ></span>
                        Vị trí: Phó giám đốc
                      </p>

                      <p className="text-[0.875rem] font-medium text-[#000] flex items-center mb-3">
                        <span
                          className="w-4 h-4 mr-2 bg-no-repeat bg-contain icon shrink-0"
                          style="background-image: url(../theme/frontend/images/map-pin.png);"
                        ></span>
                        Nơi làm việc: Bình Phước
                      </p>
                    </div>
                    <div className="w-full px-2 sm:w-1/2 lg:w-1/3">
                      <p className="text-[0.875rem] font-medium text-[#000] flex items-center mb-3">
                        <span
                          className="w-4 h-4 mr-2 bg-no-repeat bg-contain icon shrink-0"
                          style="background-image: url(../theme/frontend/images/clock_.png);"
                        ></span>
                        Hạn nộp:
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-2 lg:w-1/4">
            <a
              href="javascript:void(0)"
              title="Hủy nộp đơn"
              className="readmore mb-4 flex items-center justify-center xl:py-4 px-6 py-2 rounded text-[0.875rem] text-white bg-[#DD6B4D] hover:bg-[#ff8768] hover:text-white"
            >
              <i className="mr-2 fa-regular fa-paper-plane"></i>
              Hủy nộp đơn
            </a>
            <a
              href="https://joblaw.vn/dang-nhap"
              title="Lưu việc làm"
              className="save-news flex items-center justify-center xl:py-4 px-6 py-2 rounded text-[0.875rem] border border-solid border-[#1C4B82] text-[#1C4B82] bg-white hover:bg-[#1C4B82] hover:text-white"
            >
              <i className="mr-2 fa-regular fa-heart"></i>
              <span>Lưu tin</span>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 mb-4 lg:w-3/4 lg:mb-0">
            <div className="info-detail bg-[#FAFAFA] rounded-lg xl:p-6 p-4 mb-6">
              <div className="flex mb-6 nav-tab-job">
                <button
                  className=" tablinks flex-auto font-medium text-[#7d7d7d] 2xl:text-[1.125rem] hover:text-[#DD6B4D] p-2 text-center border-b-[3px] lg:border-b-[5px] relative z-[1] border-solid border-transparent active"
                  data-electronic="tab-job-1"
                  data-target="tab-job"
                >
                  Mô tả công việc
                </button>
                <button
                  className="tablinks flex-auto font-medium text-[#7d7d7d] 2xl:text-[1.125rem] hover:text-[#DD6B4D] p-2 text-center border-b-[3px] lg:border-b-[5px] relative z-[1] border-solid border-transparent "
                  data-electronic="tab-job-2"
                  data-target="tab-job"
                >
                  Giới thiệu về công ty
                </button>
                <button
                  className="tablinks flex-auto font-medium text-[#7d7d7d] 2xl:text-[1.125rem] hover:text-[#DD6B4D] p-2 text-center border-b-[3px] lg:border-b-[5px] relative z-[1] border-solid border-transparent hidden"
                  data-electronic="tab-job-3"
                  data-target="tab-job"
                >
                  Thông tin liên hệ
                </button>
              </div>
              <div className="wrapper-tabcontent">
                <div
                  className="tabcontent active"
                  data-target="tab-job"
                  id="tab-job-1"
                >
                  <div className="s-content">
                    - Trực tiếp giải quyết các vụ việc hoặc hỗ trợ các Luật sư
                    và đồng nghiệp trong các lĩnh vực Dân sự, Kinh doanh Thương
                    mại, Thi hành án, Hành chính, Hình sự, Ly hôn… - Tư vấn các
                    thủ tục pháp lý về doanh nghiệp - đầu tư, đất đai, đại diện
                    theo ủy quyền tham gia tố tụng tại Tòa án cho khách hàng; -
                    Thực hiện các công việc theo sự phân công của Luật sư; -
                    Công việc cụ thể sẽ được trao đổi chi tiết hơn khi phỏng
                    vấn.
                  </div>
                </div>
                <div className="tabcontent" data-target="tab-job" id="tab-job-2">
                  <div className="xl:mt-8 mt-6 bg-white lg:p-8 p-4 rounded-md shadow-[0px_4px_10px_rgba(0,0,0,.3)]">
                    <h3 className="font-semibold xl:text-2xl text-lg text-[var(--cl-text-main-2)] uppercase mb-4">
                      Công ty Luật TNHH Minh Tín
                    </h3>
                    <div className="infomation">
                      <div className="flex flex-wrap md:-mx-2">
                        <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
                          <div className="c-img pt-[100%] rounded-md overflow-hidden">
                            <img
                              loading="lazy"
                              src="../theme/frontend/images/logo-viet-4.png"
                              alt="Công ty Luật TNHH Minh Tín"
                              title="Công ty Luật TNHH Minh Tín"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="w-full md:w-3/4 px-2 flex">
                          <div className="flex flex-col flex-1">
                            <div className="w-full flex flex-wrap info-job xl:mt-8 mt-4 -mx-2">
                              <div className="w-full md:w-1/2 px-2 lg:pr-10">
                                <div className="flex items-center mb-5">
                                  <span
                                    className="w-6 h-6 inline-block bg-no-repeat shrink-0 bg-contain bg-center"
                                    style="background-image: url(../theme/frontend/images/icon-website-company.svg);"
                                  ></span>
                                  <span className="ml-2 text-[var(--cl-sub-title)] text-sm">
                                    http://luatminhtin.vn/
                                  </span>
                                </div>
                                <div className="flex items-center mb-5">
                                  <span
                                    className="w-6 h-6 inline-block bg-no-repeat shrink-0 bg-contain bg-center"
                                    style="background-image: url(../theme/frontend/images/icon-address-company.svg);"
                                  ></span>
                                  <span className="ml-2 text-[var(--cl-sub-title)] text-sm">
                                    Tầng 4, Tòa nhà Hà Thành Plaza, số 102 phố
                                    Thái Thịnh - Phường Trung Liệt - Quận Đống
                                    đa - Hà Nội.
                                  </span>
                                </div>
                                <div className="flex flex-wrap items-center">
                                  <div className="flex items-center mr-6 last:mr-0 mb-2">
                                    <span
                                      className="w-6 h-6 inline-block bg-no-repeat shrink-0 bg-contain bg-center"
                                      style="background-image: url(../theme/frontend/images/icon-staff-size.svg);"
                                    ></span>
                                    <span className="ml-2 text-[var(--cl-sub-title)] text-sm">
                                      5
                                    </span>
                                  </div>
                                  <div className="flex items-center mr-6 last:mr-0 mb-2">
                                    <span
                                      className="w-6 h-6 inline-block bg-no-repeat shrink-0 bg-contain bg-center"
                                      style="background-image: url(../theme/frontend/images/icon-posted-company.svg);"
                                    ></span>
                                    <span className="ml-2 text-[var(--cl-sub-title)] text-sm">
                                      5
                                    </span>
                                  </div>
                                  <div className="flex items-center mr-6 last:mr-0 mb-2">
                                    <span
                                      className="w-6 h-6 inline-block bg-no-repeat shrink-0 bg-contain bg-center"
                                      style="background-image: url(../theme/frontend/images/icon-flow-company.svg);"
                                    ></span>
                                    <span className="ml-2 text-[var(--cl-sub-title)] text-sm">
                                      5
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full md:w-1/2 mt-4 md:mt-0 px-2">
                                <p className="text-[var(--cl-text-main-2)] lg:text-2xl text-lg font-semibold text-left">
                                  MST: 0104734686
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="s-content mb-4">
                      MinhTinlaw (tên viết tắt của Công ty Luật TNHH Minh Tín)
                      hoạt động theo giấy phép số 01070549 / TP / ĐKHĐ do Sở tư
                      pháp thành phố Hà Nội cấp. Được thành lập và điều hành bởi
                      các Luật sư có kinh nghiệm chuyên ngành tài chính, bất
                      động sản, kinh doanh thương mại.
                      <br />
                      <br />
                      Đội ngũ cán bộ nhân viên của Công ty Luật TNHH Minh Tín
                      chiếm đa số là các luật sư, thạc sỹ luật đã từng làm việc
                      tại các Công ty Luật nổi tiếng tại Việt Nam và hoặc đã
                      được trải nghiệm với tư cách là luật sư quản lý, lãnh đạo
                      tại các tổ chức hành nghề luật. Do đó, chúng tôi tự hào
                      cung cấp cho khách hàng những giải pháp đã được đúc kết từ
                      những trải nghiệm thực tế. Đây chính là thế mạnh vượt trội
                      và sự khác biệt so với các tổ chức tư vấn luật khác tại
                      Việt Nam.
                    </div>
                  </div>
                </div>
                <div className="tabcontent" data-target="tab-job" id="tab-job-3">
                  <p className="title font-bold text-[#000] text-[1.25rem] mb-1">
                    Thông tin liên hệ
                  </p>
                  <ul className="info_contact_post">
                    <li>
                      <span>Người tuyển dụng:</span>
                      <strong></strong>
                    </li>
                    <li>
                      <span>Email tuyển dụng:</span>
                      <strong></strong>
                    </li>
                    <li>
                      <span>Điện thoại tuyển dụng:</span>
                      <strong></strong>
                    </li>
                    <li>
                      <span>Địa chỉ tuyển dụng:</span>
                      <strong></strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-2 lg:w-1/4">
            <div className="info-detail__sidebar bg-[#FAFAFA] rounded-lg">
              <p className="head lg:p-6 p-4 text-[#1C4B82] lg:text-[1.125rem] font-bold border-b-[1px] border-solid border-[#A8A8A8]">
                Thông tin thêm về công việc
              </p>
              <div className="p-4 content lg:p-6">
                <div className="mb-5 item last:mb-0">
                  <p className="title font-bold text-[#000] mb-2">Nơi làm việc</p>

                  <p className="font-medium lg:text-[0.875rem] text-[#000]">
                    Bình Phước
                  </p>
                </div>
                <div className="mb-5 item last:mb-0">
                  <p className="title font-bold text-[#000] mb-2">Cấp bậc</p>
                  <p className="font-medium lg:text-[0.875rem] text-[#000]">
                    Phó giám đốc
                  </p>
                </div>
                <div className="mb-5 item last:mb-0">
                  <p className="title font-bold text-[#000] mb-2">Ngành nghề</p>
                  <p className="font-medium lg:text-[0.875rem] text-[#000]">
                    Luật sư
                  </p>
                </div>
                <div className="mb-5 item last:mb-0">
                  <p className="title font-bold text-[#000] mb-2">Kỹ năng</p>
                  <p className="font-medium lg:text-[0.875rem] text-[#000]"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailRecruitment;
