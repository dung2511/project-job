import * as React from "react";
import { Link } from "react-router-dom";

const Recruitment = () => {
  return (
    <>
      <div className="xl:py-10 py-6 shadow-[0px_2px_25px_0px_rgba(0,0,0,.1)]">
        <div className="container">
          <div className="flex-wrap items-center block sm:flex">
            <div className="flex-1 mb-4 sm:mb-0">
              <form
                action="https://joblaw.vn/tuyen-dung"
                method=" GET"
                className="form-search form-search-banner rounded-lg bg-white shadow-[0px_4px_25px_0px_rgba(0,0,0,.2)] px-2 py-2"
              >
                <div className="flex flex-wrap items-center -mx-2">
                  <div className="w-full lg:w-[88%] px-2 flex flex-wrap">
                    <div className="w-full px-3 md:w-1/2 lg:w-1/4 lg:px-6 lg:last:pr-0 lg:py-0">
                      <div className="relative flex items-center px-2 border-soli border-[1px] border-[#6b7280] lg:border-none rounded-md mb-3 lg:mb-0">
                        <button type="submit" className="">
                          <span
                            className="inline-block w-6 h-6 bg-center bg-no-repeat bg-contain "
                            style={{
                              backgroundImage:
                                "url(theme/frontend/images/icon-search-form.svg)",
                            }}
                          ></span>
                        </button>
                        <input
                          type="text"
                          className="w-full p-4 border-none"
                          name="s"
                          placeholder="Vị trí ứng tuyển"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 md:w-1/2 lg:w-1/4 lg:px-6 lg:last:pr-0 lg:py-0">
                      <div className="relative flex items-center px-2  border-solid  border-[1px] border-[#6b7280] lg:border-none rounded-md mb-3 lg:mb-0">
                        <span
                          className="inline-block w-6 h-6 bg-center bg-no-repeat bg-contain shrink-0"
                          style={{
                            backgroundImage:
                              "url(theme/frontend/images/icon-job.svg)",
                          }}
                        ></span>
                        <select className="p-4 w-full text-[var(--cl-sub-title)] bg-white js-select-2 border-none">
                          <option
                            selected=""
                            disabled=""
                            data-select2-id="select2-data-3-mor1"
                          >
                            Tất cả các nghề
                          </option>
                          <option value="65">Vụ án hình sự</option>
                          <option value="66">Vụ án dân sự</option>
                          <option value="67">Vụ án hành chính</option>
                          <option value="68">Vụ án lao động</option>
                          <option value="69">Vụ án hôn nhân và gia đình</option>
                          <option value="70">Vụ án tranh chấp đất đai</option>
                          <option value="71">Vụ án án KDTM, kinh tế</option>
                          <option value="72">
                            Tư vấn thành lập doanh nghiệp
                          </option>
                          <option value="73">
                            Tư vấn chia tách doanh nghiệp
                          </option>
                          <option value="74">
                            Tư vấn sáp nhập doanh nghiệp
                          </option>
                          <option value="75">
                            Tư vấn giải thể doanh nghiệp
                          </option>
                          <option value="76">Tư vấn đăng ký SHTT</option>
                          <option value="77">Tư vấn xin giấy phép con</option>
                          <option value="50">Luật sư</option>
                          <option value="51">Công chứng viên</option>
                          <option value="52">Thừa phát lại</option>
                          <option value="53">Quản tài viên</option>
                          <option value="54">Đấu giá viên</option>
                          <option value="55">Thẩm định giá</option>
                          <option value="56">Thực tập sinh</option>
                          <option value="57">Pháp chế</option>
                          <option value="58">Chuyên viên pháp lý</option>
                          <option value="59">HCNS</option>
                          <option value="60">Thư ký, trợ lý</option>
                          <option value="61">Giảng viên</option>
                          <option value="62">Nghiên cứu viên</option>
                          <option value="63">Lĩnh vực khác</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full px-3 md:w-1/2 lg:w-1/4 lg:px-6 lg:last:pr-0 lg:py-0">
                      <div className="relative flex items-center px-2  border-solid  border-[1px] border-[#6b7280] lg:border-none rounded-md mb-3 lg:mb-0">
                        <span
                          className="inline-block w-6 h-6 bg-center bg-no-repeat bg-contain shrink-0"
                          style={{
                            backgroundImage:
                              "url(theme/frontend/images/icon-city.svg)",
                          }}
                        ></span>
                        <select className="p-4 w-full text-[var(--cl-sub-title)] bg-white js-select-2 ">
                          <option
                            selected=""
                            disabled=""
                            data-select2-id="select2-data-6-sfdr"
                          >
                            Tất cả địa điểm
                          </option>
                          <option value="2706">Hà Nội</option>
                          <option value="2710">Hồ Chí Minh</option>
                          <option value="2717">An Giang</option>
                          <option value="2749">Bà Rịa - Vũng Tàu</option>
                          <option value="2738">Bắc Giang</option>
                          <option value="2750">Bắc Kạn</option>
                          <option value="2735">Bạc Liêu</option>
                          <option value="2747">Bắc Ninh</option>
                          <option value="2715">Bến Tre</option>
                          <option value="2724">Bình Dương</option>
                          <option value="2708">Bình Định</option>
                          <option value="2756">Bình Phước</option>
                          <option value="2742">Bình Thuận</option>
                          <option value="2726">Cà Mau</option>
                          <option value="2728">Cần Thơ</option>
                          <option value="2765">Cao Bằng</option>
                          <option value="2770">Chưa cập nhật</option>
                          <option value="2741">Đà Nẵng</option>
                          <option value="2736">Đắk Lắk</option>
                          <option value="2755">Đắk Nông</option>
                          <option value="2737">Điện Biên</option>
                          <option value="2713">Đồng Nai</option>
                          <option value="2748">Đồng Tháp</option>
                          <option value="2714">Gia Lai</option>
                          <option value="2751">Hà Giang</option>
                          <option value="2746">Hà Nam</option>
                          <option value="2745">Hà Tĩnh</option>
                          <option value="2733">Hải Dương</option>
                          <option value="2734">Hải Phòng</option>
                          <option value="2768">Hậu Giang</option>
                          <option value="2763">Hòa Bình</option>
                          <option value="2718">Hưng Yên</option>
                          <option value="2719">Khánh Hòa</option>
                          <option value="2722">Kiên Giang</option>
                          <option value="2753">Lai Châu</option>
                          <option value="2730">Lâm Đồng</option>
                          <option value="2752">Lạng Sơn</option>
                          <option value="2762">Lào Cai</option>
                          <option value="2727">Long An</option>
                          <option value="2709">Miền Bắc</option>
                          <option value="2712">Miền Nam</option>
                          <option value="2731">Miền Trung</option>
                          <option value="2744">Nam Định</option>
                          <option value="2723">Nghệ An</option>
                          <option value="2743">Ninh Bình</option>
                          <option value="2760">Ninh Thuận</option>
                          <option value="2711">Phú Thọ</option>
                          <option value="2761">Quảng Bình</option>
                          <option value="2732">Quảng Nam</option>
                          <option value="2766">Quảng Ngãi</option>
                          <option value="2739">Quảng Ninh</option>
                          <option value="2764">Quảng Trị</option>
                          <option value="2729">Sóc Trăng</option>
                          <option value="2769">Sơn La</option>
                          <option value="2767">Tây Ninh</option>
                          <option value="2720">Thái Bình</option>
                          <option value="2758">Thái Nguyên</option>
                          <option value="2716">Thanh Hóa</option>
                          <option value="2740">Thừa Thiên Huế</option>
                          <option value="2725">Tiền Giang</option>
                          <option value="2707">Toàn Quốc</option>
                          <option value="2754">Trà Vinh</option>
                          <option value="2721">Vĩnh Long</option>
                          <option value="2757">Vĩnh Phúc</option>
                          <option value="2759">Yên Bái</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full px-3 md:w-1/2 lg:w-1/4 lg:px-6 lg:last:pr-0 lg:py-0">
                      <div className="relative flex items-center px-2  border-solid border-[1px] border-[#6b7280] lg:border-none rounded-md mb-3 lg:mb-0">
                        <span
                          className="inline-block w-6 h-6 bg-center bg-no-repeat bg-contain shrink-0"
                          style={{
                            backgroundImage:
                              "url(theme/frontend/images/icon-salary.svg)",
                          }}
                        ></span>
                        <select
                          name="price_ranges[]"
                          id=""
                          className="p-4 w-full text-[var(--cl-sub-title)] bg-white js-select-2"
                        >
                          <option
                            selected=""
                            disabled=""
                            data-select2-id="select2-data-9-jkmm"
                          >
                            Tất cả mức lượng
                          </option>
                          <option value="1">Dưới 7 triệu</option>
                          <option value="4">Từ 7 đến 10 triệu</option>
                          <option value="3">Từ 11 đến 15 triệu</option>
                          <option value="2">Từ 16 đến 20 triệu</option>
                          <option value="5">Trên 21 triệu</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-[12%] px-2 text-center lg:text-right">
                    <button
                      type="submit"
                      className="btn w-full inline-flex py-4 px-6 rounded bg-[#DD6B4D] hover:bg-[#ff8768] text-white font-bold"
                    >
                      Tìm kiếm
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <Link
              to="ho-so-cua-ban"
              title="Tạo hồ sơ"
              className="ml-4 font-semibold rounded btn btn-blue shrink-0"
            >
              Tạo hồ sợ
            </Link>
          </div>
          <div className="flex mt-4 propose xl:mt-6">
            <p className="title font-medium text-[#000] shrink-0 mr-4 pt-2 xl:pt-4">
              Đề xuất
            </p>
            <ul className="flex flex-wrap ">
              <li className="mb-2 mr-4">
                <Link
                  to="https://joblaw.vn/tuyen-dung?career=50"
                  title="Luật sư"
                  className="block bg-white xl:py-4 xl:px-6 py-2 px-4 rounded text-[#000] hover:bg-[#DD6B4D] hover:text-white border border-solid border-[#a8aba8] hover:border-[#DD6B4D]"
                >
                  Luật sư
                </Link>
              </li>
              <li className="mb-2 mr-4">
                <Link
                  to="https://joblaw.vn/tuyen-dung?career=51"
                  title="Công chứng viên"
                  className="block bg-white xl:py-4 xl:px-6 py-2 px-4 rounded text-[#000] hover:bg-[#DD6B4D] hover:text-white border border-solid border-[#a8aba8] hover:border-[#DD6B4D]"
                >
                  Công chứng viên
                </Link>
              </li>
              <li className="mb-2 mr-4">
                <Link
                  to="https://joblaw.vn/tuyen-dung?career=52"
                  title="Thừa phát lại"
                  className="block bg-white xl:py-4 xl:px-6 py-2 px-4 rounded text-[#000] hover:bg-[#DD6B4D] hover:text-white border border-solid border-[#a8aba8] hover:border-[#DD6B4D]"
                >
                  Thừa phát lại
                </Link>
              </li>
              <li className="mb-2 mr-4">
                <Link
                  to="https://joblaw.vn/tuyen-dung?career=53"
                  title="Quản tài viên"
                  className="block bg-white xl:py-4 xl:px-6 py-2 px-4 rounded text-[#000] hover:bg-[#DD6B4D] hover:text-white border border-solid border-[#a8aba8] hover:border-[#DD6B4D]"
                >
                  Quản tài viên
                </Link>
              </li>
              <li className="mb-2 mr-4">
                <Link
                  to="https://joblaw.vn/tuyen-dung?career=54"
                  title="Đấu giá viên"
                  className="block bg-white xl:py-4 xl:px-6 py-2 px-4 rounded text-[#000] hover:bg-[#DD6B4D] hover:text-white border border-solid border-[#a8aba8] hover:border-[#DD6B4D]"
                >
                  Đấu giá viên
                </Link>
              </li>
              <li className="mb-2 mr-4">
                <Link
                  to="https://joblaw.vn/tuyen-dung?career=55"
                  title="Thẩm định giá"
                  className="block bg-white xl:py-4 xl:px-6 py-2 px-4 rounded text-[#000] hover:bg-[#DD6B4D] hover:text-white border border-solid border-[#a8aba8] hover:border-[#DD6B4D]"
                >
                  Thẩm định giá
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:py-10 py-6">
        <div className="container">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full lg:w-1/4 px-2">
              <div className="form-search__job ">
                <span className="close-filter__job absolute top-2 right-2 z-[1] block lg:hidden">
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
                </span>
                <div className="box-filter__item border border-solid border-[#A8A8A8] rounded-lg 2xl:py-6 2xl:px-8 xl:p-6 p-4 mb-4 last:mb-0">
                  <p className="title font-medium text-[#000] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] mb-4">
                    Ngành nghề
                  </p>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_65"
                      className="ip-op-0 input-check"
                      value="65"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Vụ án hình sự
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_66"
                      className="ip-op-0 input-check"
                      value="66"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Vụ án dân sự
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_67"
                      className="ip-op-0 input-check"
                      value="67"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Vụ án hành chính
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_68"
                      className="ip-op-0 input-check"
                      value="68"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Vụ án lao động
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_69"
                      className="ip-op-0 input-check"
                      value="69"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Vụ án hôn nhân và gia đình
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_70"
                      className="ip-op-0 input-check"
                      value="70"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Vụ án tranh chấp đất đai
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_71"
                      className="ip-op-0 input-check"
                      value="71"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Vụ án án KDTM, kinh tế
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_72"
                      className="ip-op-0 input-check"
                      value="72"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Tư vấn thành lập doanh nghiệp
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_73"
                      className="ip-op-0 input-check"
                      value="73"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Tư vấn chia tách doanh nghiệp
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_74"
                      className="ip-op-0 input-check"
                      value="74"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Tư vấn sáp nhập doanh nghiệp
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_75"
                      className="ip-op-0 input-check"
                      value="75"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Tư vấn giải thể doanh nghiệp
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_76"
                      className="ip-op-0 input-check"
                      value="76"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Tư vấn đăng ký SHTT
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_77"
                      className="ip-op-0 input-check"
                      value="77"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Tư vấn xin giấy phép con
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_50"
                      className="ip-op-0 input-check"
                      value="50"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">Luật sư</p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_51"
                      className="ip-op-0 input-check"
                      value="51"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Công chứng viên
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_52"
                      className="ip-op-0 input-check"
                      value="52"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Thừa phát lại
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_53"
                      className="ip-op-0 input-check"
                      value="53"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Quản tài viên
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_54"
                      className="ip-op-0 input-check"
                      value="54"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Đấu giá viên
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_55"
                      className="ip-op-0 input-check"
                      value="55"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Thẩm định giá
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_56"
                      className="ip-op-0 input-check"
                      value="56"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Thực tập sinh
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_57"
                      className="ip-op-0 input-check"
                      value="57"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">Pháp chế</p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_58"
                      className="ip-op-0 input-check"
                      value="58"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Chuyên viên pháp lý
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_59"
                      className="ip-op-0 input-check"
                      value="59"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">HCNS</p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_60"
                      className="ip-op-0 input-check"
                      value="60"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Thư ký, trợ lý
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_61"
                      className="ip-op-0 input-check"
                      value="61"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Giảng viên
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_62"
                      className="ip-op-0 input-check"
                      value="62"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Nghiên cứu viên
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="careers[]"
                      id="careers_63"
                      className="ip-op-0 input-check"
                      value="63"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Lĩnh vực khác
                    </p>
                  </label>
                </div>
                <div className="box-filter__item border border-solid border-[#A8A8A8] rounded-lg 2xl:py-6 2xl:px-8 xl:p-6 p-4 mb-4 last:mb-0">
                  <p className="title font-medium text-[#000] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] mb-4">
                    Cấp bậc
                  </p>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="level[]"
                      id="level_76"
                      className="ip-op-0 input-check"
                      value="76"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Mới tốt nghiệp, Thực tập
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="level[]"
                      id="level_75"
                      className="ip-op-0 input-check"
                      value="75"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Nhân viên, Có kinh nghiệm
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="level[]"
                      id="level_74"
                      className="ip-op-0 input-check"
                      value="74"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">Quản lý</p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="level[]"
                      id="level_73"
                      className="ip-op-0 input-check"
                      value="73"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">Thư ký</p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="level[]"
                      id="level_72"
                      className="ip-op-0 input-check"
                      value="72"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Trưởng nhóm, ban
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="level[]"
                      id="level_71"
                      className="ip-op-0 input-check"
                      value="71"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Cộng tác viên
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="level[]"
                      id="level_70"
                      className="ip-op-0 input-check"
                      value="70"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Trưởng phòng, Quản lý cấp trung
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="level[]"
                      id="level_69"
                      className="ip-op-0 input-check"
                      value="69"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Bán thời gian
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="level[]"
                      id="level_68"
                      className="ip-op-0 input-check"
                      value="68"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Trợ lý kinh doanh
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="level[]"
                      id="level_67"
                      className="ip-op-0 input-check"
                      value="67"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Phó giám đốc
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="level[]"
                      id="level_66"
                      className="ip-op-0 input-check"
                      value="66"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Giám đốc, Quản lý cấp cao
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      name="level[]"
                      id="level_65"
                      className="ip-op-0 input-check"
                      value="65"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Chuyên viên
                    </p>
                  </label>
                </div>
                <div className="box-filter__item border border-solid border-[#A8A8A8] rounded-lg 2xl:py-6 2xl:px-8 xl:p-6 p-4 mb-4 last:mb-0">
                  <p className="title font-medium text-[#000] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] mb-4">
                    Mức lương
                  </p>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      value="1"
                      name="price_ranges[]"
                      id="price_ranges_1"
                      className="ip-op-0 input-check"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Dưới 7 triệu
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      value="4"
                      name="price_ranges[]"
                      id="price_ranges_4"
                      className="ip-op-0 input-check"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Từ 7 đến 10 triệu
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      value="3"
                      name="price_ranges[]"
                      id="price_ranges_3"
                      className="ip-op-0 input-check"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Từ 11 đến 15 triệu
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      value="2"
                      name="price_ranges[]"
                      id="price_ranges_2"
                      className="ip-op-0 input-check"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Từ 16 đến 20 triệu
                    </p>
                  </label>
                  <label
                    className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                    item_filter=""
                  >
                    <input
                      type="checkbox"
                      value="5"
                      name="price_ranges[]"
                      id="price_ranges_5"
                      className="ip-op-0 input-check"
                      filter="filter"
                    />
                    <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                    <p className="text text-[#000] text-[0.875rem]">
                      Trên 21 triệu
                    </p>
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/4 px-2">
              <div className="flex items-center justify-between head">
                <div className="head-title-all leading-[1.3] border-l-[5px] border-solid border-[#DD6B4D] pl-4 font-bold 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
                  <span className="text-[var(--cl-blue)]">
                    Tìm thấy
                    <span className="count-post text-[var(--cl-orange)]">
                      1546
                    </span>
                    việc làm
                  </span>
                </div>
                <div className="show-filter__job lg:hidden inline-flex items-center justify-center w-10 h-10 rounded bg-[#E1E1E1] text-[#000] cursor-pointer">
                  <span
                    className="w-6 h-6 bg-no-repeat bg-contain icon"
                    style={{
                      backgroundImage: "url(theme/frontend/images/filter.png)",
                    }}
                  ></span>
                </div>
              </div>
              <div className="list-job results_filter_post mt-4">
                <div className="item-filter block md:flex flex-wrap bg-[#F7F7F7] border border-solid border-[#A8A8A8] rounded-lg xl:px-5 xl:py-6 p-4 mb-4 relative">
                  <div className="flex-1 items-center block mb-4 sm:flex md:mr-6 md:mb-0">
                    <div className="avatar w-full sm:w-[110px] shrink-0 sm:mr-4 mb-2 sm:mb-0">
                      <div className="img c-img pt-[100%] rounded overflow-hidden">
                        <img
                          loading="lazy"
                          src="../theme/frontend/images/logo-viet-3.png"
                          data-src="../theme/frontend/images/logo-viet-3.png"
                          alt="Luật sư， Chuyên viên luật"
                          title="Luật sư， Chuyên viên luật"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="flex-1 info-content">
                      <p className="name font-semibold text-[#000] text-[0.875rem] mb-2">
                        Luật sư， Chuyên viên luật
                      </p>
                      <p className="company text-[#7d7d7d] text-[.875rem] mb-2">
                        Công ty Luật TNHH Minh Tín
                      </p>
                      <ul className="flex flex-wrap lis-info__detail ">
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-user"></i>
                          Vị trí: Phó giám đốc
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="fa-regular fa-file-lines mr-1"></i>
                          Kinh nghiệm: 3 năm
                        </li>
                      </ul>
                      <div className="flex flex-wrap work-position">
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          8M - 13M
                        </div>
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          <span>Bình Phước</span>
                        </div>
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          20/05/2024 08:39
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="luat-su-chuyen-vien-luat-1627"
                    title="Xem chi tiết"
                    className="btn btn-view mt-auto py-2 font-medium rounded border border-solid border-[#1C4B82] text-[#1C4B82] bg-[#DBECFF] hover:bg-[#1C4B82] hover:text-white shrink-0"
                  >
                    Xem chi tiết
                  </Link>
                  <Link
                    to={"/"}
                    title="Yêu thích"
                    favourite-user=""
                    className="btn-favourite  absolute z-[1] xl:top-6 xl:right-5 top-4 right-4 text-[#000] text-[1.25rem]"
                  >
                    <i className="fa-regular fa-bookmark"></i>
                  </Link>
                </div>
                <div className="pagination" pagination-filter="">
                  <strong>1</strong>
                  <Link to="https://joblaw.vn/tuyen-dung?page=2" data-page="2">
                    2
                  </Link>
                  <Link to="https://joblaw.vn/tuyen-dung?page=3" data-page="3">
                    3
                  </Link>
                  <Link to="https://joblaw.vn/tuyen-dung?page=4" data-page="4">
                    4
                  </Link>

                  <span style={{ pointerEvents: "none" }}> ... </span>
                  <Link
                    to="https://joblaw.vn/tuyen-dung?page=78"
                    data-page="78"
                  >
                    78
                  </Link>
                  <Link to="https://joblaw.vn/tuyen-dung?page=2" data-page="2">
                    <i
                      className="fa-solid fa-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="over-lay-sidebar fixed lg:hidden w-full h-full z-50 block top-0 right-[-100%] bg-[rgba(0,0,0,.6)] transition-all duration-300"></div>
        <span className="show-sidebar-post lg:hidden flex items-center justify-center w-10 h-10 rounded-tl-lg rounded-bl-lg bg-white shadow-[0_4px_10px_rgba(0,0,0,.3)] text-[var(--cl-text-main)] fixed top-[20%] right-0 z-10">
          <i className="fa-solid fa-filter"></i>
        </span>
      </div>
    </>
  );
};

export default Recruitment;
