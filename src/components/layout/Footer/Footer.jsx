import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer_upgrade">
      <div className="container">
        <div className="main-footer 2xl:py-14 xl:py-10 py-6 border-b-[1px] border-solid border-[#fff]">
          <div className="flex flex-wrap lg:justify-between -mx-2">
            <div className="w-full lg:w-[25%] px-2 mb-4 lg:mb-0">
              <Link
                to="https://joblaw.vn"
                title="JobLaw TUYỂN DỤNG VIỆC LÀM PHÁP LUẬT"
                className="logo-footer block max-w-[200px] md:max-w-[390px]"
              >
                <img
                  loading="lazy"
                  src="../theme/frontend/images//logo-footer.png"
                  data-src="../theme/frontend/images//logo-footer.png"
                  alt=""
                  title=""
                  className="img-fluid"
                />
              </Link>
              <div className="footer-contact text-white lg:mt-6 mt-4">
                <p className="title flex items-center font-semibold lg:text-[1.125rem] ">
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.9994 16.9201V19.9201C22.0006 20.1986 21.9435 20.4743 21.832 20.7294C21.7204 20.9846 21.5567 21.2137 21.3515 21.402C21.1463 21.5902 20.904 21.7336 20.6402 21.8228C20.3764 21.912 20.0968 21.9452 19.8194 21.9201C16.7423 21.5857 13.7864 20.5342 11.1894 18.8501C8.77327 17.3148 6.72478 15.2663 5.18945 12.8501C3.49942 10.2413 2.44769 7.27109 2.11944 4.1801C2.09446 3.90356 2.12732 3.62486 2.21595 3.36172C2.30457 3.09859 2.44702 2.85679 2.63421 2.65172C2.82141 2.44665 3.04925 2.28281 3.30324 2.17062C3.55722 2.05843 3.83179 2.00036 4.10945 2.0001H7.10945C7.59475 1.99532 8.06524 2.16718 8.43321 2.48363C8.80118 2.80008 9.04152 3.23954 9.10944 3.7201C9.23607 4.68016 9.47089 5.62282 9.80945 6.5301C9.94399 6.88802 9.97311 7.27701 9.89335 7.65098C9.8136 8.02494 9.62831 8.36821 9.35944 8.6401L8.08945 9.9101C9.513 12.4136 11.5859 14.4865 14.0894 15.9101L15.3594 14.6401C15.6313 14.3712 15.9746 14.1859 16.3486 14.1062C16.7225 14.0264 17.1115 14.0556 17.4694 14.1901C18.3767 14.5286 19.3194 14.7635 20.2794 14.8901C20.7652 14.9586 21.2088 15.2033 21.526 15.5776C21.8431 15.9519 22.0116 16.4297 21.9994 16.9201Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  Liên hệ:
                </p>
                <div className="content mt-4 mb-3">
                  Hệ thống Hotline hỗ trợ 24/7. Nếu cần hỗ trợ vui lòng liên hệ:
                  <Link
                    to="tel:024.62872777"
                    title="hotline"
                    className="link font-bold"
                  >
                    024.62872777
                  </Link>
                  <span> - </span>
                  <Link
                    to="tel:091.121.9099"
                    title="hotline"
                    className="link font-bold"
                  >
                    091.121.9099
                  </Link>
                  <span></span>
                </div>
                <p>
                  <i className="fa fa-globe" aria-hidden="true"></i>
                  <span>Website: </span>
                  <Link
                    to="https://joblaw.vn"
                    target="_blank"
                    title="hotline"
                    className="link font-bold"
                  >
                    https://joblaw.vn
                  </Link>
                </p>
                <p>
                  <i className="fa fa-globe" aria-hidden="true"></i>
                  <span>Website: </span>
                  <Link
                    to="https://luattamanh.com.vn"
                    target="_blank"
                    title="hotline"
                    className="link font-bold"
                  >
                    https://luattamanh.com.vn
                  </Link>
                </p>
              </div>
              <div className="footer-social lg:mt-6 mt-4">
                <p className="title font-semibold text-white mb-4">
                  Cộng đồng JobLaw
                </p>
                <ul className="f-social flex flex-wrap items-center">
                  <li className="xl:mr-8 mr-4 last:mr-0">
                    <Link
                      to="https://www.facebook.com/luattamanh.com.vn"
                      title="Facebook"
                      target="_blank"
                      className="w-10 h-10 img_full img-h-full img-contain"
                    >
                      <img
                        src="../theme/frontend/images/logos_facebook.svg"
                        alt="facebook"
                      />
                    </Link>
                  </li>
                  <li className="xl:mr-8 mr-4 last:mr-0">
                    <Link
                      to="https://zalo.me/0911219099"
                      title="Facebook"
                      target="_blank"
                      className="w-10 h-10 img_full img-h-full img-contain"
                    >
                      <img
                        src="../theme/frontend/images/zalo.png"
                        style={{ width: "41px" }}
                        alt="facebook"
                      />
                    </Link>
                  </li>
                  <li className="xl:mr-8 mr-4 last:mr-0">
                    <Link
                      to="https://www.instagram.com/"
                      title="Instagram"
                      target="_blank"
                      className="w-10 h-10 img_full img-h-full img-contain"
                    >
                      <img
                        src="../theme/frontend/images/skill-icons_instagram.png"
                        alt="instagram"
                      />
                    </Link>
                  </li>
                  <li className="xl:mr-8 mr-4 last:mr-0">
                    <Link
                      to="https://twitter.com/?lang=vi"
                      title="Twitter"
                      target="_blank"
                      className="w-10 h-10 img_full img-h-full img-contain"
                    >
                      <img
                        src="../theme/frontend/images/formkit_twitter.png"
                        alt="twitter"
                      />
                    </Link>
                  </li>
                  <li className="xl:mr-8 mr-4 last:mr-0">
                    <Link
                      to="https://twitter.com/?lang=vi"
                      title="linkedin"
                      target="_blank"
                      className="w-10 h-10 img_full img-h-full img-contain"
                    >
                      <img
                        src="../theme/frontend/images/skill-icons_linkedin.png"
                        alt="linkedin"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-[70%] px-2">
              <div className="flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                  <p className="title-footer font-semibold text-white 2xl:text-[1.5rem] lg:text-[1.25rem] text-[1rem] mb-4">
                    Về chúng tôi
                  </p>
                  <div className="nav-footer">
                    <ul>
                      <li>
                        <Link to="huong-dan-su-dung" title="Hướng dẫn sử dụng">
                          Hướng dẫn sử dụng
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="mau-hop-dong-dich-vu"
                          title="Mẫu hợp đồng dịch vụ"
                        >
                          Mẫu hợp đồng dịch vụ
                        </Link>
                      </li>
                      <li>
                        <Link to="quy-che-hoat-dong" title="Quy chế hoạt động">
                          Quy chế hoạt động
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="quy-trinh-tiep-nhan-va-giai-quyet-khieu-nai-tranh-chap"
                          title="Quy trình tiếp nhận và giải quyết khiếu nại, tranh chấp"
                        >
                          Quy trình tiếp nhận và giải quyết khiếu nại, tranh
                          chấp
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                  <p className="title-footer font-semibold text-white 2xl:text-[1.5rem] lg:text-[1.25rem] text-[1rem] mb-4">
                    Trợ giúp &amp; dịch vụ
                  </p>
                  <div className="nav-footer">
                    <ul>
                      <li>
                        <Link
                          to="chinh-sach-bao-mat-thong-tin"
                          title="Chính sách bảo mật thông tin"
                        >
                          Chính sách bảo mật thông tin
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="quy-che-bao-ve-dlcn"
                          title="Quy chế bảo vệ dữ liệu cá nhân"
                        >
                          Quy chế bảo vệ dữ liệu cá nhân
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="thoa-thuan-bao-ve-dlcn"
                          title="Thoả thuận bảo vệ dữ liệu cá nhân"
                        >
                          Thoả thuận bảo vệ dữ liệu cá nhân
                        </Link>
                      </li>
                      <li>
                        <Link to="bao-phi-dich-vu" title="Báo phí dịch vụ">
                          Báo phí dịch vụ
                        </Link>
                      </li>
                      <li>
                        <Link to="lien-he" title="Liên hệ">
                          Liên hệ
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                  <p className="title-footer font-semibold text-white 2xl:text-[1.5rem] lg:text-[1.25rem] text-[1rem] mb-4">
                    Hồ sơ &amp; CV
                  </p>
                  <div className="nav-footer">
                    <ul>
                      <li>
                        <Link to="#" title="Nhà tuyển dụng xem hồ sơ của bạn">
                          Nhà tuyển dụng xem hồ sơ của bạn
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Quản lý việc đã làm">
                          Quản lý việc đã làm
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Quản lý CV của bạn">
                          Quản lý CV của bạn
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                  <p className="title-footer font-semibold text-white 2xl:text-[1.5rem] lg:text-[1.25rem] text-[1rem] mb-4">
                    Khám phá
                  </p>
                  <div className="nav-footer">
                    <ul>
                      <li>
                        <Link to="#" title="Định hướng ngành luật">
                          Định hướng ngành luật
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Công cụ tính thuế thu nhập cá nhân">
                          Công cụ tính thuế thu nhập cá nhân
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Hỏi - đáp ngành luật">
                          Hỏi - đáp ngành luật
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Tính lương Gross - Net">
                          Tính lương Gross - Net
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                  <p className="title-footer font-semibold text-white 2xl:text-[1.5rem] lg:text-[1.25rem] text-[1rem] mb-4">
                    Phát triển bản thân
                  </p>
                  <div className="nav-footer">
                    <ul>
                      <li>
                        <Link to="#" title="Việc làm lương cao">
                          Việc làm lương cao
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Việc làm tốt nhất">
                          Việc làm tốt nhất
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Định hướng ngành luật">
                          Định hướng ngành luật
                        </Link>
                      </li>
                      <li>
                        <Link to="#" title="Tính lương Gross - Net">
                          Tính lương Gross - Net
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                  <p className="title-footer font-semibold text-white 2xl:text-[1.5rem] lg:text-[1.25rem] text-[1rem] mb-4">
                    Luật sư
                  </p>
                  <div className="nav-footer">
                    <ul>
                      <li>
                        <Link to="dang-ky-luat-su" title="Đăng ký luật sư">
                          Đăng ký luật sư
                        </Link>
                      </li>
                      <li>
                        <Link to="dang-nhap-luat-su" title="Đăng nhập luật sư">
                          Đăng nhập luật sư
                        </Link>
                      </li>
                      <li>
                        <Link to="danh-ba-luat-su" title="Danh bạ luật sư">
                          Danh bạ luật sư
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle xl:py-8 py-6">
          <div className="flex flex-wrap -mx-2 lg:justify-between">
            <div className="w-full lg:w-[60%] px-2 mb-4 lg:mb-0">
              <p className="address flex items-center text-white mb-3">
                <i
                  className="fa fa-building mr-2 text-[1.5rem] relative"
                  aria-hidden="true"
                ></i>
                <span className="company_name">
                  CÔNG TY TNHH JOBLAW - MST: 0110475863
                </span>
              </p>
              <p className="address flex items-center text-white mb-3">
                <i className="fa-solid fa-house-chimney mr-2 text-[1.5rem] relative "></i>
                Nhà liền kề số 14 - Manor 1 Str Sunrise A – Khu đô thị The Manor
                Central Park đường Nguyễn Xiển, Phường Đại Kim, Quận Hoàng Mai,
                Thành phố Hà Nội, Việt Nam
              </p>
              <p className="address flex items-center text-white mb-3">
                <i className="fa-solid fa-location-dot mr-2 text-[1.5rem] relative"></i>
                <Link
                  to="https://www.google.com/maps/place/LU%E1%BA%ACT+T%C3%82M+ANH/@20.9751544,105.8131586,17z/data=!3m1!4b1!4m6!3m5!1s0x3135adb5be55818d:0x38b5f41ebc1148b2!8m2!3d20.9751544!4d105.8131586!16s%2Fg%2F11vbylgn2r?entry=ttu"
                  target="_blank"
                >
                  Link google map
                </Link>
              </p>
              <p className="address flex items-center text-white mb-3">
                <i className="fa-regular fa-envelope mr-2 text-[1.5rem] relative "></i>
                <Link to="mailto:joblawpro@gmail.com" className="link">
                  Gmail: joblawpro@gmail.com
                </Link>
              </p>
              <p className="address flex items-center text-white mb-3">
                <i className="fa-solid fa-credit-card mr-2 text-[1.5rem] relative"></i>
                Số tài khoản: 9911219099 - Techcombank - CN Hà Thành Hà Nội
              </p>
            </div>
            <div className="w-full lg:w-[26%] px-2">
              <p className="title text-white font-semibold mb-4">
                Nhận thông tin việc làm
              </p>
              <div className="form-send-mail">
                <form
                  action="https://joblaw.vn/gui-lien-he"
                  method="POST"
                  className="form-validate"
                  acceptCharset="utf8"
                  absolute=""
                  clear=""
                >
                  <input type="hidden" name="type" value="1" />
                  <div className="w-full">
                    <input
                      className="outline-none"
                      type="email"
                      placeholder="Nhập email..."
                      name="email"
                      aria-required="true"
                    />
                  </div>
                  <button type="submit">Gửi</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom py-4 flex flex-wrap justify-center text-white text-[.875rem]">
          <div className="item w-full lg:w-auto text-center lg:pr-4 lg:mr-4 last:pr-0 last:mr-0 lg:border-r-[1px] border-solid border-white last:border-r-[0px]">
            Copyright © 2022 JOBLAW Việt Nam
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
