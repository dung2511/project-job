import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../../firebase.config";
import { doc, getDoc } from "firebase/firestore";
import SidebarUser from "../../../components/layout/SidebarUser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProfileUser = () => {
  const [userDetail, setUserDetail] = useState(null);
  const navigate = useNavigate();
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        const docRef = doc(firestore, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetail(docSnap.data());
        }
      } else {
        toast.error("Vui lòng đăng nhập tài khoản ứng viên", {
          position: "top-right",
        });
        navigate("/");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <section className="pt-8 bg-[#F0F0F3]">
      <div className="container">
        <div className="flex lg:-mx-2">
          <SidebarUser />
          <div className="w-full lg:w-2/3 lg:px-2">
            <p className="text-[var(--cl-text-main-2)] xl:text-2xl text-lg font-semibold flex items-center border-b-[1px] border-solid border-[#B9B9B9] h-20">
              Ứng viên
            </p>
            <form
              action="https://joblaw.vn/thay-doi-thong-tin-tai-khoan"
              className="form form-validate"
              data-success="NOTIFICATION.toastrMessageReload"
              method="POST"
            >
              <div className="mt-6">
                <p className="xl:text-[1.125rem] text-[0.875rem] font-semibold mb-3">
                  Thông tin đăng kí
                </p>
                <ul>
                  <li className="mb-2">
                    <strong>Địa chỉ email: </strong>
                    <span>{userDetail?.email}</span>
                  </li>
                  <li className="mb-2">
                    <strong>Số điện thoại: </strong>
                    <span>{userDetail?.phone}</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <p className="xl:text-[1.125rem] text-[0.875rem] font-semibold mb-3">
                  Thông tin cá nhân
                </p>
                <div className="relative w-20 h-20 mb-4 img-cover overflow-hidden rounded-full avatar-group img-ava">
                  <img
                    src="../../../theme/frontend/images/noimage.png"
                    id="output"
                    alt=""
                  />
                </div>
                <div className="btn-update__avatars relative inline-flex items-center px-9 text-[0.875rem] py-3 border-[1px] border-solid border-[var(--border-main)] text-[var(--cl-text-main)] rounded-md mb-6">
                  <i className="fa-solid fa-arrow-up-from-bracket"></i>
                  <p className="text color-gradient font-semibold text-[0.875rem] ml-2">
                    Tải ảnh lên
                  </p>
                  <input
                    type="file"
                    name="avatar"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer input-avatars"
                    accept="image/*"
                    onChange="document.getElementById('output').src = window.URL.createObjectURL(this.files[0])"
                  />
                </div>
              </div>
              <div className="flex flex-wrap text-[var(--cl-text-main-2)] lg:mt-8 mt-4 md:-mx-2">
                <div className="w-full md:w-1/3 name md:px-2 mb-8">
                  <p className="pb-2 font-semibold">Họ và tên</p>
                  <input
                    type="text"
                    name="name"
                    value={userDetail?.name}
                    className="bg-transparent outline-none border-[var(--border-inp)] border-solid border-[1px] w-full p-2 rounded-md text-[var(--cl-text-main-2)] h-11"
                    placeholder="Họ và tên"
                  />
                </div>
                <div className="w-full md:w-1/3 name md:px-2 mb-8">
                  <p className="pb-2 font-semibold">Ngày sinh</p>
                  <input
                    type="date"
                    placeholder="MM-DD-YYYY"
                    name="birthday"
                    value=""
                    className="outline-none bg-transparent border-[var(--border-inp)] border-solid border-[1px] w-full p-2 rounded-md text-[var(--cl-text-main-2)] h-11"
                  />
                </div>
                <div className="w-full md:w-1/3 name md:px-2 mb-8">
                  <p className="pb-2 font-semibold">Giới tính</p>
                  <select
                    name="gender"
                    id="gender"
                    className="outline-none bg-transparent border-[var(--border-inp)] border-solid border-[1px] w-full p-2 rounded-md text-[var(--cl-text-main-2)] h-11"
                  >
                    <option value="" selected="" disabled="">
                      Chọn
                    </option>
                    <option value="0" selected="">
                      Nam
                    </option>
                    <option value="1">Nữ</option>
                    <option value="2">Khác</option>
                  </select>
                </div>
                <div className="w-full md:w-1/2 name md:px-2 mb-8">
                  <p className="pb-2 font-semibold">Tỉnh/Thành phố</p>
                  <select
                    name="province"
                    className="outline-none bg-transparent border-[var(--border-inp)] border-solid border-[1px] w-full p-2 rounded-md text-[var(--cl-text-main-2)] h-11"
                  >
                    <option disabled="">Chọn thành phố</option>
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
                <div className="w-full md:w-1/2 name md:px-2 mb-8">
                  <p className="pb-2 font-semibold">Địa chỉ</p>
                  <input
                    type="text"
                    name="address"
                    value=""
                    className="outline-none bg-transparent border-[var(--border-inp)] border-solid border-[1px] w-full p-2 rounded-md text-[var(--cl-text-main-2)] h-11"
                    aria-required="true"
                    aria-invalid="false"
                    placeholder="Địa chỉ cụ thể"
                  />
                </div>
              </div>
              <div className="flex w-full gap-2 mt-4 font-medium btn-btn">
                <button
                  type="submit"
                  className="text-white max-w-[210px] text-center w-full py-3 bg-[#1C4B82] rounded-md border border-solid border-[var(--border-main)] hover:text-[var(--cl-text-main)] hover:bg-white transition-all duration-500"
                >
                  Lưu thông tin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileUser;
