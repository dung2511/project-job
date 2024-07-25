import React from "react";

const ListCandidate = () => {
  return (
    <section className="search-law">
      <div className="py-6 xl:py-10 shadow-[0px_2px_25px_0px_rgba(0,0,0,.1)]">
        <div className="container">
          <div className="form-search-candidates flex flex-wrap bg-white rounded-lg p-2 shadow-[0px_4px_25px_0px_rgba(0,0,0,.2)]">
            <div className="w-full sm:w-1/2 lg:w-1/4 px-2 lg:border-r-[1px] border-solid border-[#ebebeb] mb-4 lg:mb-0">
              <div className="relative pl-6">
                <span
                  className="icon inline-flex h-6 w-6 bg-no-repeat bg-contain bg-center absolute top-1/2 -translate-y-[50%] left-0"
                  style={{
                    backgroundImage: "url(theme/frontend/images/Bag.png)",
                  }}
                ></span>
                <select
                  name="career"
                  className="font-control w-full border-none outline-none focus:shaodow-none bg-none py-3 px-4 lg:text-[0.875rem] text-[#7d7d7d]"
                  filter="filter"
                >
                  <option value="">Chọn lĩnh vực tư vấn</option>
                  <option value="65">Vụ án hình sự</option>
                  <option value="66">Vụ án dân sự</option>
                  <option value="67">Vụ án hành chính</option>
                  <option value="68">Vụ án lao động</option>
                  <option value="69">Vụ án hôn nhân và gia đình</option>
                  <option value="70">Vụ án tranh chấp đất đai</option>
                  <option value="71">Vụ án án KDTM, kinh tế</option>
                  <option value="72">Tư vấn thành lập doanh nghiệp</option>
                  <option value="73">Tư vấn chia tách doanh nghiệp</option>
                  <option value="74">Tư vấn sáp nhập doanh nghiệp</option>
                  <option value="75">Tư vấn giải thể doanh nghiệp</option>
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
            <div className="w-full sm:w-1/2 lg:w-1/4 px-2 lg:border-r-[1px] border-solid border-[#ebebeb] mb-4 lg:mb-0">
              <div className="relative pl-6">
                <span
                  className="icon inline-flex h-6 w-6 bg-no-repeat bg-contain bg-center absolute top-1/2 -translate-y-[50%] left-0"
                  style={{backgroundImage: "url(theme/frontend/images/Location.png)"}}
                ></span>
                <select
                  name="province"
                  className="font-control w-full border-none outline-none focus:shaodow-none bg-none py-3 px-4 lg:text-[0.875rem] text-[#7d7d7d]"
                  filter="filter"
                >
                  <option value="">Chọn nơi làm việc</option>
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
            <div className="w-full lg:w-[35%] px-2 mb-4 lg:mb-0">
              <div className="relative pl-6">
                <span
                  className="icon inline-flex h-6 w-6 bg-no-repeat bg-contain bg-center absolute top-1/2 -translate-y-[50%] left-0"
                  style={{backgroundImage: "url(theme/frontend/images/hand.png)"}}
                ></span>
                <input
                  type="text"
                  name="s"
                  placeholder="Kỹ năng, họ tên, mã hồ sơ, kinh nghiệm, ... "
                  className="form-control w-full border-none outline-none focus:shaodow-none bg-none py-3 px-4 lg:text-[0.875rem] text-[#7d7d7d]"
                  value=""
                  filter="filter"
                />
              </div>
            </div>
            <div className="w-full lg:w-[15%] px-2">
              <button
                className="w-full py-3 rounded btn btn-orange"
                onclick="FILTER.submit()"
              >
                Tìm kiếm nhanh
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 xl:py-10">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-2 lg:w-1/4">
              <div className="form-search__job sidebar-filter filter_post">
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
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </span>
                <div className="box-filter__item border border-solid border-[#A8A8A8] rounded-lg 2xl:py-6 2xl:px-8 xl:p-6 p-4 mb-4 last:mb-0">
                  <p className="title font-bold text-[#000] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] mb-4">
                    Lĩnh vực tư vấn
                  </p>
                  <div className="module-content max-h-[400px] overflow-y-auto">
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="careers[]"
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
                        value="50"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Luật sư
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="careers[]"
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
                        value="57"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Pháp chế
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="careers[]"
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
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
                        className="absolute hidden opacity-0"
                        value="63"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Lĩnh vực khác
                      </p>
                    </label>
                  </div>
                </div>
                <div className="box-filter__item border border-solid border-[#A8A8A8] rounded-lg 2xl:py-6 2xl:px-8 xl:p-6 p-4 mb-4 last:mb-0">
                  <p className="title font-medium text-[#000] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] mb-4">
                    Nơi hành nghề
                  </p>
                  <div className="module-content max-h-[400px] overflow-y-auto">
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2706"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">Hà Nội</p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2710"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Hồ Chí Minh
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2717"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        An Giang
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2749"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Bà Rịa - Vũng Tàu
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2738"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Bắc Giang
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2750"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Bắc Kạn
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2735"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Bạc Liêu
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2747"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Bắc Ninh
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2715"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Bến Tre
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2724"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Bình Dương
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2708"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Bình Định
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2756"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Bình Phước
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2742"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Bình Thuận
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2726"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">Cà Mau</p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2728"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Cần Thơ
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2765"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Cao Bằng
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2770"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Chưa cập nhật
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2741"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Đà Nẵng
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2736"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Đắk Lắk
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2755"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Đắk Nông
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2737"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Điện Biên
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2713"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Đồng Nai
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2748"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Đồng Tháp
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2714"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Gia Lai
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2751"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Hà Giang
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2746"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">Hà Nam</p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2745"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Hà Tĩnh
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2733"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Hải Dương
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2734"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Hải Phòng
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2768"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Hậu Giang
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2763"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Hòa Bình
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2718"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Hưng Yên
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2719"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Khánh Hòa
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2722"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Kiên Giang
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2753"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Lai Châu
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2730"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Lâm Đồng
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2752"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Lạng Sơn
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2762"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Lào Cai
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2727"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Long An
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2709"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Miền Bắc
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2712"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Miền Nam
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2731"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Miền Trung
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2744"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Nam Định
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2723"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Nghệ An
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2743"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Ninh Bình
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2760"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Ninh Thuận
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2711"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Phú Thọ
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2761"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Quảng Bình
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2732"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Quảng Nam
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2766"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Quảng Ngãi
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2739"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Quảng Ninh
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2764"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Quảng Trị
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2729"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Sóc Trăng
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2769"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">Sơn La</p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2767"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Tây Ninh
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2720"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Thái Bình
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2758"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Thái Nguyên
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2716"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Thanh Hóa
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2740"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Thừa Thiên Huế
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2725"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Tiền Giang
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2707"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Toàn Quốc
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2754"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Trà Vinh
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2721"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Vĩnh Long
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2757"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Vĩnh Phúc
                      </p>
                    </label>
                    <label
                      className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0"
                      item_filter=""
                    >
                      <input
                        type="checkbox"
                        name="provinces[]"
                        className="absolute hidden opacity-0"
                        value="2759"
                        filter="filter"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Yên Bái
                      </p>
                    </label>
                  </div>
                </div>
                <div className="box-filter__item border border-solid border-[#A8A8A8] rounded-lg 2xl:py-6 2xl:px-8 xl:p-6 p-4 mb-4 last:mb-0">
                  <p className="title font-medium text-[#000] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] mb-4">
                    Bằng cấp
                  </p>
                  <div className="module-content max-h-[400px] overflow-y-auto">
                    <label className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0">
                      <input
                        type="radio"
                        filter-change=""
                        value="30"
                        name="qualification"
                        className="absolute opacity-0"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Cử nhân
                      </p>
                    </label>

                    <label className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0">
                      <input
                        type="radio"
                        filter-change=""
                        value="26"
                        name="qualification"
                        className="absolute opacity-0"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Thạc sĩ
                      </p>
                    </label>

                    <label className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0">
                      <input
                        type="radio"
                        filter-change=""
                        value="27"
                        name="qualification"
                        className="absolute opacity-0"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Tiến sĩ
                      </p>
                    </label>

                    <label className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0">
                      <input
                        type="radio"
                        filter-change=""
                        value="28"
                        name="qualification"
                        className="absolute opacity-0"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Phó giáo sư
                      </p>
                    </label>

                    <label className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0">
                      <input
                        type="radio"
                        filter-change=""
                        value="31"
                        name="qualification"
                        className="absolute opacity-0"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Giáo sư
                      </p>
                    </label>

                    <label className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0">
                      <input
                        type="radio"
                        filter-change=""
                        value="25"
                        name="qualification"
                        className="absolute opacity-0"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">Khác</p>
                    </label>
                  </div>
                </div>
                <div className="box-filter__item border border-solid border-[#A8A8A8] rounded-lg 2xl:py-6 2xl:px-8 xl:p-6 p-4 mb-4 last:mb-0">
                  <p className="title font-medium text-[#000] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] mb-4">
                    Kinh nghiệm
                  </p>
                  <div className="module-content max-h-[400px] overflow-y-auto">
                    <label className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0">
                      <input
                        type="radio"
                        filter-change=""
                        value="1"
                        name="experience"
                        className="absolute opacity-0"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Không có kinh nghiệm
                      </p>
                    </label>

                    <label className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0">
                      <input
                        type="radio"
                        filter-change=""
                        value="2"
                        name="experience"
                        className="absolute opacity-0"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Dưới 5 năm
                      </p>
                    </label>

                    <label className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0">
                      <input
                        type="radio"
                        filter-change=""
                        value="3"
                        name="experience"
                        className="absolute opacity-0"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Từ 6 - 10 năm
                      </p>
                    </label>

                    <label className="relative flex items-center gap-2 mb-4 checkbox__all last:mb-0">
                      <input
                        type="radio"
                        filter-change=""
                        value="4"
                        name="experience"
                        className="absolute opacity-0"
                      />
                      <span className="circle block w-[18px] h-[18px] rounded-[2px] border-[1px] border-solid border-[#A8A8A8]"></span>
                      <p className="text text-[#000] text-[0.875rem]">
                        Trên 10 năm
                      </p>
                    </label>
                  </div>
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
            <div className="w-full px-2 lg:w-3/4">
              <div className="flex items-center justify-between head">
                <div className="head-title-all leading-[1.3] border-l-[5px] border-solid border-[#DD6B4D] pl-4 font-bold 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
                  <span className="text-[var(--cl-blue)]">
                    Tìm thấy
                    <span className="text-[var(--cl-sub-title-2)] count-lawyer">
                      220
                    </span>
                    luật sư
                  </span>
                </div>
                <div className="show-filter__job lg:hidden inline-flex items-center justify-center w-10 h-10 rounded bg-[#E1E1E1] text-[#000] cursor-pointer">
                  <span
                    className="w-6 h-6 bg-no-repeat bg-contain icon"
                    style={{backgroundImage: "url(theme/frontend/images/filter.png)"}}
                  ></span>
                </div>
              </div>
              <div className="mt-6 results_filter">
                <div className="item-filter block md:flex flex-wrap bg-[#F7F7F7] border border-solid border-[#A8A8A8] rounded-lg xl:px-5 xl:py-6 p-4 mb-4 relative">
                  <div className="flex-1 block mb-4 sm:flex md:mr-6 md:mb-0">
                    <div className="avatar w-full sm:w-[110px] shrink-0 sm:mr-4 mb-2 sm:mb-0">
                      <div className="img c-img pt-[100%] rounded overflow-hidden">
                        <img
                          loading="lazy"
                          src="uploads/lawyer/avatar/230/983924_224460711367919_5970845157112734238_n.jpg"
                          alt="Nguyễn Văn An"
                          title="Nguyễn Văn An"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="flex-1 info-content">
                      <p className="name font-semibold text-[#000] text-[0.875rem] mb-4">
                        Nguyễn Văn An
                      </p>
                      <ul className="flex flex-wrap lis-info__detail ">
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-clock"></i>
                          Kinh nghiệm Từ 6 - 10 năm
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-location-dot"></i>
                          Hà Nội, An Giang
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-graduation-cap"></i>
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-credit-card"></i>
                          Số thẻ LS: 23894759231
                        </li>
                      </ul>
                      <div className="flex flex-wrap work-position">
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          Vụ án hành chính
                        </div>
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          Vụ án hôn nhân và gia đình
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="nguyen-van-an-230"
                    title="Xem liên lạc"
                    className="btn btn-view mt-auto py-2 font-medium rounded border border-solid border-[#1C4B82] text-[#1C4B82] hover:bg-[#DBECFF] hover:text-[#1C4B82] shrink-0"
                  >
                    Xem liên lạc
                  </a>
                  <a
                    href="javascript:void(0)"
                    title="Yêu thích"
                    favourite-user=""
                    className="btn-favourite  absolute z-[1] xl:top-6 xl:right-5 top-4 right-4 z-[1] text-[#000] text-[1.25rem]"
                  >
                    <i className="fa-regular fa-bookmark"></i>
                  </a>
                </div>
                <div className="item-filter block md:flex flex-wrap bg-[#F7F7F7] border border-solid border-[#A8A8A8] rounded-lg xl:px-5 xl:py-6 p-4 mb-4 relative">
                  <div className="flex-1 block mb-4 sm:flex md:mr-6 md:mb-0">
                    <div className="avatar w-full sm:w-[110px] shrink-0 sm:mr-4 mb-2 sm:mb-0">
                      <div className="img c-img pt-[100%] rounded overflow-hidden">
                        <img
                          loading="lazy"
                          src="admin/images/noimage.png"
                          data-src="admin/images/noimage.png"
                          alt="hà"
                          title="hà"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="flex-1 info-content">
                      <p className="name font-semibold text-[#000] text-[0.875rem] mb-4">
                        hà
                      </p>
                      <ul className="flex flex-wrap lis-info__detail ">
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-clock"></i>
                          Kinh nghiệm
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-location-dot"></i>
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-graduation-cap"></i>
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-credit-card"></i>
                          Số thẻ LS:
                        </li>
                      </ul>
                      <div className="flex flex-wrap work-position"></div>
                    </div>
                  </div>
                  <a
                    href="ha-221"
                    title="Xem liên lạc"
                    className="btn btn-view mt-auto py-2 font-medium rounded border border-solid border-[#1C4B82] text-[#1C4B82] hover:bg-[#DBECFF] hover:text-[#1C4B82] shrink-0"
                  >
                    Xem liên lạc
                  </a>
                  <a
                    href="javascript:void(0)"
                    title="Yêu thích"
                    favourite-user=""
                    className="btn-favourite  absolute z-[1] xl:top-6 xl:right-5 top-4 right-4 z-[1] text-[#000] text-[1.25rem]"
                  >
                    <i className="fa-regular fa-bookmark"></i>
                  </a>
                </div>
                <div className="item-filter block md:flex flex-wrap bg-[#F7F7F7] border border-solid border-[#A8A8A8] rounded-lg xl:px-5 xl:py-6 p-4 mb-4 relative">
                  <div className="flex-1 block mb-4 sm:flex md:mr-6 md:mb-0">
                    <div className="avatar w-full sm:w-[110px] shrink-0 sm:mr-4 mb-2 sm:mb-0">
                      <div className="img c-img pt-[100%] rounded overflow-hidden">
                        <img
                          loading="lazy"
                          src="uploads/lawyer-directory-avatar/dl2259683.jpg"
                          data-src="uploads/lawyer-directory-avatar/dl2259683.jpg"
                          alt="HỒ PHƯỚC TUẤN"
                          title="HỒ PHƯỚC TUẤN"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="flex-1 info-content">
                      <p className="name font-semibold text-[#000] text-[0.875rem] mb-4">
                        HỒ PHƯỚC TUẤN
                      </p>
                      <ul className="flex flex-wrap lis-info__detail ">
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-clock"></i>
                          Kinh nghiệm
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-location-dot"></i>
                          Hải Phòng, Hà Nội
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-graduation-cap"></i>
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-credit-card"></i>
                          Số thẻ LS: 3681/LS
                        </li>
                      </ul>
                      <div className="flex flex-wrap work-position">
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          Pháp chế
                        </div>
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          Công chứng viên
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="ho-phuoc-tuan-219"
                    title="Xem liên lạc"
                    className="btn btn-view mt-auto py-2 font-medium rounded border border-solid border-[#1C4B82] text-[#1C4B82] hover:bg-[#DBECFF] hover:text-[#1C4B82] shrink-0"
                  >
                    Xem liên lạc
                  </a>
                  <a
                    href="javascript:void(0)"
                    title="Yêu thích"
                    favourite-user=""
                    className="btn-favourite  absolute z-[1] xl:top-6 xl:right-5 top-4 right-4 text-[#000] text-[1.25rem]"
                  >
                    <i className="fa-regular fa-bookmark"></i>
                  </a>
                </div>
                <div className="item-filter block md:flex flex-wrap bg-[#F7F7F7] border border-solid border-[#A8A8A8] rounded-lg xl:px-5 xl:py-6 p-4 mb-4 relative">
                  <div className="flex-1 block mb-4 sm:flex md:mr-6 md:mb-0">
                    <div className="avatar w-full sm:w-[110px] shrink-0 sm:mr-4 mb-2 sm:mb-0">
                      <div className="img c-img pt-[100%] rounded overflow-hidden">
                        <img
                          loading="lazy"
                          src="uploads/lawyer-directory-avatar/avatar20ls20male-goc-5.png"
                          data-src="uploads/lawyer-directory-avatar/avatar20ls20male-goc-5.png"
                          alt="HỒ HỮU TỶ"
                          title="HỒ HỮU TỶ"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="flex-1 info-content">
                      <p className="name font-semibold text-[#000] text-[0.875rem] mb-4">
                        HỒ HỮU TỶ
                      </p>
                      <ul className="flex flex-wrap lis-info__detail ">
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-clock"></i>
                          Kinh nghiệm
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-location-dot"></i>
                          Hải Dương, Hà Nam, Hưng Yên
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-graduation-cap"></i>
                          Phó giáo sư
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-credit-card"></i>
                          Số thẻ LS: 3728/LS
                        </li>
                      </ul>
                      <div className="flex flex-wrap work-position">
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          Thực tập sinh
                        </div>
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          Luật sư
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="ho-huu-ty-218"
                    title="Xem liên lạc"
                    className="btn btn-view mt-auto py-2 font-medium rounded border border-solid border-[#1C4B82] text-[#1C4B82] hover:bg-[#DBECFF] hover:text-[#1C4B82] shrink-0"
                  >
                    Xem liên lạc
                  </a>
                  <a
                    href="javascript:void(0)"
                    title="Yêu thích"
                    favourite-user=""
                    className="btn-favourite  absolute z-[1] xl:top-6 xl:right-5 top-4 right-4 z-[1] text-[#000] text-[1.25rem]"
                  >
                    <i className="fa-regular fa-bookmark"></i>
                  </a>
                </div>
                <div className="item-filter block md:flex flex-wrap bg-[#F7F7F7] border border-solid border-[#A8A8A8] rounded-lg xl:px-5 xl:py-6 p-4 mb-4 relative">
                  <div className="flex-1 block mb-4 sm:flex md:mr-6 md:mb-0">
                    <div className="avatar w-full sm:w-[110px] shrink-0 sm:mr-4 mb-2 sm:mb-0">
                      <div className="img c-img pt-[100%] rounded overflow-hidden">
                        <img
                          loading="lazy"
                          src="uploads/lawyer-directory-avatar/avatar20ls20male-24.png"
                          data-src="uploads/lawyer-directory-avatar/avatar20ls20male-24.png"
                          alt="VĂN ĐỨC TRIỆU"
                          title="VĂN ĐỨC TRIỆU"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="flex-1 info-content">
                      <p className="name font-semibold text-[#000] text-[0.875rem] mb-4">
                        VĂN ĐỨC TRIỆU
                      </p>
                      <ul className="flex flex-wrap lis-info__detail ">
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-clock"></i>
                          Kinh nghiệm
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-location-dot"></i>
                          Quảng Nam, Hà Tĩnh, An Giang
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-graduation-cap"></i>
                          Tiến sĩ
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-credit-card"></i>
                          Số thẻ LS: 3624/LS
                        </li>
                      </ul>
                      <div className="flex flex-wrap work-position">
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          Thẩm định giá
                        </div>
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          Nghiên cứu viên
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="van-duc-trieu-217"
                    title="Xem liên lạc"
                    className="btn btn-view mt-auto py-2 font-medium rounded border border-solid border-[#1C4B82] text-[#1C4B82] hover:bg-[#DBECFF] hover:text-[#1C4B82] shrink-0"
                  >
                    Xem liên lạc
                  </a>
                  <a
                    href="javascript:void(0)"
                    title="Yêu thích"
                    favourite-user=""
                    className="btn-favourite  absolute z-[1] xl:top-6 xl:right-5 top-4 right-4 z-[1] text-[#000] text-[1.25rem]"
                  >
                    <i className="fa-regular fa-bookmark"></i>
                  </a>
                </div>
                <div className="item-filter block md:flex flex-wrap bg-[#F7F7F7] border border-solid border-[#A8A8A8] rounded-lg xl:px-5 xl:py-6 p-4 mb-4 relative">
                  <div className="flex-1 block mb-4 sm:flex md:mr-6 md:mb-0">
                    <div className="avatar w-full sm:w-[110px] shrink-0 sm:mr-4 mb-2 sm:mb-0">
                      <div className="img c-img pt-[100%] rounded overflow-hidden">
                        <img
                          loading="lazy"
                          src="uploads/lawyer-directory-avatar/avatar20ls20male-23.png"
                          data-src="uploads/lawyer-directory-avatar/avatar20ls20male-23.png"
                          alt="NGUYỄN MINH TRÍ"
                          title="NGUYỄN MINH TRÍ"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="flex-1 info-content">
                      <p className="name font-semibold text-[#000] text-[0.875rem] mb-4">
                        NGUYỄN MINH TRÍ
                      </p>
                      <ul className="flex flex-wrap lis-info__detail ">
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-clock"></i>
                          Kinh nghiệm
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-location-dot"></i>
                          Miền Trung, Nam Định, Thanh Hóa
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-graduation-cap"></i>
                          Thạc sĩ
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-credit-card"></i>
                          Số thẻ LS: 3611/LS
                        </li>
                      </ul>
                      <div className="flex flex-wrap work-position">
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          Đấu giá viên
                        </div>
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          Giảng viên
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="nguyen-minh-tri-216"
                    title="Xem liên lạc"
                    className="btn btn-view mt-auto py-2 font-medium rounded border border-solid border-[#1C4B82] text-[#1C4B82] hover:bg-[#DBECFF] hover:text-[#1C4B82] shrink-0"
                  >
                    Xem liên lạc
                  </a>
                  <a
                    href="javascript:void(0)"
                    title="Yêu thích"
                    favourite-user=""
                    className="btn-favourite  absolute z-[1] xl:top-6 xl:right-5 top-4 right-4 z-[1] text-[#000] text-[1.25rem]"
                  >
                    <i className="fa-regular fa-bookmark"></i>
                  </a>
                </div>
                <div className="item-filter block md:flex flex-wrap bg-[#F7F7F7] border border-solid border-[#A8A8A8] rounded-lg xl:px-5 xl:py-6 p-4 mb-4 relative">
                  <div className="flex-1 block mb-4 sm:flex md:mr-6 md:mb-0">
                    <div className="avatar w-full sm:w-[110px] shrink-0 sm:mr-4 mb-2 sm:mb-0">
                      <div className="img c-img pt-[100%] rounded overflow-hidden">
                        <img
                          loading="lazy"
                          src="uploads/lawyer-directory-avatar/avatar20ls20female-8.png"
                          data-src="uploads/lawyer-directory-avatar/avatar20ls20female-8.png"
                          alt="VŨ HUYỀN TRÂN"
                          title="VŨ HUYỀN TRÂN"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="flex-1 info-content">
                      <p className="name font-semibold text-[#000] text-[0.875rem] mb-4">
                        VŨ HUYỀN TRÂN
                      </p>
                      <ul className="flex flex-wrap lis-info__detail ">
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-clock"></i>
                          Kinh nghiệm
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-location-dot"></i>
                          Lâm Đồng, Ninh Bình, Bến Tre
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-graduation-cap"></i>
                          Khác
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-credit-card"></i>
                          Số thẻ LS: 3605/LS
                        </li>
                      </ul>
                      <div className="flex flex-wrap work-position">
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          Quản tài viên
                        </div>
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          Thư ký, trợ lý
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="vu-huyen-tran-215"
                    title="Xem liên lạc"
                    className="btn btn-view mt-auto py-2 font-medium rounded border border-solid border-[#1C4B82] text-[#1C4B82] hover:bg-[#DBECFF] hover:text-[#1C4B82] shrink-0"
                  >
                    Xem liên lạc
                  </a>
                  <a
                    href="javascript:void(0)"
                    title="Yêu thích"
                    favourite-user=""
                    className="btn-favourite  absolute z-[1] xl:top-6 xl:right-5 top-4 right-4 z-[1] text-[#000] text-[1.25rem]"
                  >
                    <i className="fa-regular fa-bookmark"></i>
                  </a>
                </div>
                <div className="item-filter block md:flex flex-wrap bg-[#F7F7F7] border border-solid border-[#A8A8A8] rounded-lg xl:px-5 xl:py-6 p-4 mb-4 relative">
                  <div className="flex-1 block mb-4 sm:flex md:mr-6 md:mb-0">
                    <div className="avatar w-full sm:w-[110px] shrink-0 sm:mr-4 mb-2 sm:mb-0">
                      <div className="img c-img pt-[100%] rounded overflow-hidden">
                        <img
                          loading="lazy"
                          src="uploads/lawyer-directory-avatar/avatar20ls20male-22.png"
                          data-src="uploads/lawyer-directory-avatar/avatar20ls20male-22.png"
                          alt="VÕ XUÂN TRUNG"
                          title="VÕ XUÂN TRUNG"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="flex-1 info-content">
                      <p className="name font-semibold text-[#000] text-[0.875rem] mb-4">
                        VÕ XUÂN TRUNG
                      </p>
                      <ul className="flex flex-wrap lis-info__detail ">
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-clock"></i>
                          Kinh nghiệm
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-location-dot"></i>
                          Sóc Trăng, Bình Thuận, Gia Lai
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-graduation-cap"></i>
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-credit-card"></i>
                          Số thẻ LS: 3653/LS
                        </li>
                      </ul>
                      <div className="flex flex-wrap work-position">
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          Thừa phát lại
                        </div>
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          HCNS
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="vo-xuan-trung-214"
                    title="Xem liên lạc"
                    className="btn btn-view mt-auto py-2 font-medium rounded border border-solid border-[#1C4B82] text-[#1C4B82] hover:bg-[#DBECFF] hover:text-[#1C4B82] shrink-0"
                  >
                    Xem liên lạc
                  </a>
                  <a
                    href="javascript:void(0)"
                    title="Yêu thích"
                    favourite-user=""
                    className="btn-favourite  absolute z-[1] xl:top-6 xl:right-5 top-4 right-4 z-[1] text-[#000] text-[1.25rem]"
                  >
                    <i className="fa-regular fa-bookmark"></i>
                  </a>
                </div>
                <div className="item-filter block md:flex flex-wrap bg-[#F7F7F7] border border-solid border-[#A8A8A8] rounded-lg xl:px-5 xl:py-6 p-4 mb-4 relative">
                  <div className="flex-1 block mb-4 sm:flex md:mr-6 md:mb-0">
                    <div className="avatar w-full sm:w-[110px] shrink-0 sm:mr-4 mb-2 sm:mb-0">
                      <div className="img c-img pt-[100%] rounded overflow-hidden">
                        <img
                          loading="lazy"
                          src="uploads/lawyer-directory-avatar/avatar20ls20male-21.png"
                          data-src="uploads/lawyer-directory-avatar/avatar20ls20male-21.png"
                          alt="NGUYỄN HOÀI BẢO"
                          title="NGUYỄN HOÀI BẢO"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="flex-1 info-content">
                      <p className="name font-semibold text-[#000] text-[0.875rem] mb-4">
                        NGUYỄN HOÀI BẢO
                      </p>
                      <ul className="flex flex-wrap lis-info__detail ">
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-clock"></i>
                          Kinh nghiệm
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-location-dot"></i>
                          Cần Thơ, Đà Nẵng, Đồng Nai
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-graduation-cap"></i>
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-credit-card"></i>
                          Số thẻ LS: 4874/LS
                        </li>
                      </ul>
                      <div className="flex flex-wrap work-position">
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          Công chứng viên
                        </div>
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          Chuyên viên pháp lý
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="nguyen-hoai-bao-213"
                    title="Xem liên lạc"
                    className="btn btn-view mt-auto py-2 font-medium rounded border border-solid border-[#1C4B82] text-[#1C4B82] hover:bg-[#DBECFF] hover:text-[#1C4B82] shrink-0"
                  >
                    Xem liên lạc
                  </a>
                  <a
                    href="javascript:void(0)"
                    title="Yêu thích"
                    favourite-user=""
                    className="btn-favourite  absolute z-[1] xl:top-6 xl:right-5 top-4 right-4 z-[1] text-[#000] text-[1.25rem]"
                  >
                    <i className="fa-regular fa-bookmark"></i>
                  </a>
                </div>
                <div className="item-filter block md:flex flex-wrap bg-[#F7F7F7] border border-solid border-[#A8A8A8] rounded-lg xl:px-5 xl:py-6 p-4 mb-4 relative">
                  <div className="flex-1 block mb-4 sm:flex md:mr-6 md:mb-0">
                    <div className="avatar w-full sm:w-[110px] shrink-0 sm:mr-4 mb-2 sm:mb-0">
                      <div className="img c-img pt-[100%] rounded overflow-hidden">
                        <img
                          loading="lazy"
                          src="uploads/lawyer-directory-avatar/avatar20ls20male-20.png"
                          data-src="uploads/lawyer-directory-avatar/avatar20ls20male-20.png"
                          alt="Trần Anh Tùng"
                          title="Trần Anh Tùng"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="flex-1 info-content">
                      <p className="name font-semibold text-[#000] text-[0.875rem] mb-4">
                        Trần Anh Tùng
                      </p>
                      <ul className="flex flex-wrap lis-info__detail ">
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-clock"></i>
                          Kinh nghiệm
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-location-dot"></i>
                          Long An, Thừa Thiên Huế, Miền Nam
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-solid fa-graduation-cap"></i>
                          Giáo sư
                        </li>
                        <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                          <i className="mr-1 fa-regular fa-credit-card"></i>
                          Số thẻ LS: 8871/LS
                        </li>
                      </ul>
                      <div className="flex flex-wrap work-position">
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          Luật sư
                        </div>
                        <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                          Pháp chế
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="tran-anh-tung-212"
                    title="Xem liên lạc"
                    className="btn btn-view mt-auto py-2 font-medium rounded border border-solid border-[#1C4B82] text-[#1C4B82] hover:bg-[#DBECFF] hover:text-[#1C4B82] shrink-0"
                  >
                    Xem liên lạc
                  </a>
                  <a
                    href="javascript:void(0)"
                    title="Yêu thích"
                    favourite-user=""
                    className="btn-favourite  absolute z-[1] xl:top-6 xl:right-5 top-4 right-4 z-[1] text-[#000] text-[1.25rem]"
                  >
                    <i className="fa-regular fa-bookmark"></i>
                  </a>
                </div>
                <div className="pagination" pagination-filter="">
                  <strong>1</strong>
                  <a
                    href="https://joblaw.vn/danh-ba-luat-su?page=2"
                    data-page="2"
                  >
                    2
                  </a>
                  <a
                    href="https://joblaw.vn/danh-ba-luat-su?page=3"
                    data-page="3"
                  >
                    3
                  </a>
                  <a
                    href="https://joblaw.vn/danh-ba-luat-su?page=4"
                    data-page="4"
                  >
                    4
                  </a>

                  <span style={{pointerEvents: "none"}}> ... </span>
                  <a
                    href="https://joblaw.vn/danh-ba-luat-su?page=22"
                    data-page="22"
                  >
                    22
                  </a>
                  <a
                    href="https://joblaw.vn/danh-ba-luat-su?page=2"
                    data-page="2"
                  >
                    <i
                      className="fa-solid fa-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListCandidate;
