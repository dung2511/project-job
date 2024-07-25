import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, firestore, storage } from "../../../firebase.config";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import SidebarEmployer from "../../../components/layout/SidebarEmployer";
import { Box, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import Select from "react-select";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProfileEmployer = () => {
  const urlImageUserDefault =
    "https://firebasestorage.googleapis.com/v0/b/website-job-21a07.appspot.com/o/Images%2Fuser_profile_default.png?alt=media&token=e0db52f4-0be5-42a2-a1be-c40da07929c1";
  const [value, setValue] = useState(0);
  const [personelSize, setPersonalSize] = useState(null);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [employerDetail, setEmployerDetail] = useState(null);
  const [password, setPassword] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [emailRecruitment, setEmailRecruitment] = useState(null);
  const [address, setAddress] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const fetchDataPersonalSize = async () => {
    try {
      const q = query(collection(firestore, "personel_size"));
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setPersonalSize(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchEmployerData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        const docRef = doc(firestore, "Employers", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setEmployerDetail(docSnap.data());
          setFullName(employerDetail?.fullName || "");
          setEmailRecruitment(employerDetail?.emailRecruitment || "");
          setPassword(employerDetail?.password || "");
          setAddress(employerDetail?.address || "");
          setAvatar(employerDetail?.avatar || "");
        }
      } else {
        toast.error("Vui lòng đăng nhập tài khoản nhà tuyển dụng", {
          position: "top-right",
        });
        navigate("/");
      }
    });
  };

  useEffect(() => {
    fetchDataPersonalSize();
    fetchEmployerData();
  }, []);
  const handleImageUpload = async () => {
    if (avatar == null) return "";
    const storageRef = ref(storage, `Employers/${avatar.name}`);
    await uploadBytes(storageRef, avatar);
    const url = await getDownloadURL(storageRef);
    return url;
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };
  const handleUpdateAccount = async (e) => {
    e.preventDefault();
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        try {
          const avartaUrl = await handleImageUpload();
          const docRef = doc(firestore, "Employers", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setEmployerDetail(docSnap.data());
            let updatedData = {
              fullName: fullName,
              emailRecruitment: emailRecruitment,
              password: password,
              address: address,
              avatar: avartaUrl ? avartaUrl : avatar,
            };
            await updateDoc(docRef, updatedData);
            toast.success("Cập nhật thông tin thành công !!", {
              position: "top-right",
            });
          }
        } catch (error) {
          toast.error(error.message, {
            position: "top-right",
          });
        }
      }
    });
  };

  return (
    <section className="mt-4 bg-[#F0F0F3]">
      <div className="container">
        <div className="head-title-all leading-[1.3] mb-4 border-l-[5px] border-solid border-[#DD6B4D] pl-4 font-bold 2xl:text-[2rem] xl:text-[1.5rem] text-[1.25rem]">
          <span className="text-[var(--cl-blue)]">
            Tài khoản nhà tuyển dụng
          </span>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full lg:w-[22%] px-2 mb-4 lg:mb-0">
            <SidebarEmployer />
          </div>
          <div className="w-full lg:w-[78%] px-2">
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Thông tin tài khoản" {...a11yProps(0)} />
                <Tab label="Thông tin công ty" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <form
                className="info-acc form-all form-validate"
                id="tab-lesson-1"
                onSubmit={handleUpdateAccount}
              >
                <div className="flex flex-wrap border-b border-solid border-[#EBEBEB] lg:-mx-2 mb-4">
                  <div className="w-full lg:w-1/2 lg:px-2 mb-4 lg:mb-0">
                    <p className="tittle text-[var(--cl-text-main-2)] font-semibold mb-4">
                      Thông tin đăng nhập
                    </p>
                    <div className="flex flex-wrap items-center mb-4">
                      <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
                        Địa chỉ email <span className=" text-[#D90909]">*</span>
                      </p>
                      <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border">
                        <input
                          type="text"
                          disabled={true}
                          defaultValue={
                            employerDetail?.email != null
                              ? employerDetail.email
                              : ""
                          }
                          placeholder="tuyendung@gmail.com"
                          className="bg-white"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center mb-4">
                      <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
                        Mật khẩu <span className=" text-[#D90909]">*</span>
                      </p>
                      <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border">
                        <input
                          type="password"
                          disabled={true}
                          onChange={(e) => setPassword(e.target.value)}
                          value={
                            employerDetail?.password != null
                              ? employerDetail.password
                              : ""
                          }
                          className="bg-white"
                          placeholder="********"
                        />
                      </div>
                    </div>
                    <div className="flex lg:justify-end">
                      <span className="block w-full lg:w-3/4 ml-auto mt-2 text-[var(--cl-text-main)] font-medium">
                        Thay đổi mật khẩu
                      </span>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 lg:px-2">
                    <p className="font-semibold text-[var(--cl-text-main-2)]">
                      Ảnh đại diện
                    </p>
                    <div className="mt-4">
                      <div className="flex items-center flex-nowrap">
                        <div className="lg:mr-[1.5rem] mr-[1rem]">
                          <div
                            htmlFor="avatar"
                            className="img-ava rounded-md overflow-hidden w-28 h-28 c-img pt-0 bg-transparent"
                          >
                            <img
                              src={
                                avatar ||
                                employerDetail?.avatar ||
                                urlImageUserDefault
                              }
                              alt="Nguyễn Văn C"
                              id="output"
                            />
                          </div>
                        </div>
                        <div className="">
                          <label
                            htmlFor="avatar"
                            className="relative inline-flex rounded-md overflow-hidden border-solid border border-[var(--border-main)] px-5 py-2.5 !text-[var(--cl-text-main)] font-medium text-sm"
                          >
                            <input
                              type="file"
                              onChange={onImageChange}
                              className="absolute top-0 right-0 w-full h-full opacity-0 input-avatars"
                              accept="image/*"
                            />
                            Thay đổi ảnh
                          </label>
                          <div className="note text-[var(--cl-sub-title)] mt-2 max-w-sm w-full">
                            Cho phép tải ảnh JPG, GIF hoặc PNG, dung lượng tối
                            đa 800kB
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <p className="tittle text-[var(--cl-text-main-2)] font-semibold mb-4">
                    Thông tin liên hệ
                  </p>
                  <div className="flex flex-wrap items-center mb-4">
                    <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
                      Họ và tên <span className=" text-[#D90909]">*</span>
                    </p>
                    <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
                      <input
                        type="text"
                        defaultValue={
                          employerDetail?.fullName != null
                            ? employerDetail.fullName
                            : ""
                        }
                        onChange={(e) => setFullName(e.target.value)}
                        className="bg-[#F0F0F3]"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-wrap items-center mb-4">
                      <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
                        Số điện thoại <span className=" text-[#D90909]">*</span>
                      </p>
                      <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
                        <input
                          type="text"
                          disabled={true}
                          defaultValue={
                            employerDetail?.phone != null
                              ? employerDetail.phone
                              : ""
                          }
                          className="bg-[#F0F0F3]"
                          placeholder="098 456 789"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center mb-4">
                    <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
                      Email liên hệ
                    </p>
                    <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
                      <input
                        type="text"
                        className="bg-[#F0F0F3]"
                        defaultValue={
                          employerDetail?.emailRecruitment != null
                            ? employerDetail.emailRecruitment
                            : ""
                        }
                        placeholder="tuyendung@gmail.com"
                        onChange={(e) => setEmailRecruitment(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center mb-4 ">
                    <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
                      Địa chỉ liên hệ
                    </p>
                    <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
                      <input
                        type="text"
                        className="bg-[#F0F0F3]"
                        defaultValue={
                          employerDetail?.address != null
                            ? employerDetail.address
                            : ""
                        }
                        placeholder="123 Example Street, City, Country"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full text-center">
                  <button
                    type="submit"
                    title="Cập nhập"
                    className="lg:mt-8 mt-4 text-white text-center  bg-[var(--cl-bg-main)] rounded-md border border-solid border-[var(--border-main)] hover:text-[var(--cl-text-main)] hover:bg-white transition-all duration-500"
                  >
                    Cập nhập
                  </button>
                </div>
              </form>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <form className="info-acc form-validate" id="tab-lesson-2">
                <div className="xl:max-w-[53.9375rem] w-full py-4 border-b border-solid last:border-none">
                  <div className="form-all">
                    <div className="flex flex-wrap items-center mb-4">
                      <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
                        Mã số thuế <span className=" text-[#D90909]">*</span>
                      </p>
                      <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
                        <input
                          type="text"
                          className="bg-[#F0F0F3]"
                          placeholder="0103293209"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center mb-4">
                      <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
                        Tên công ty <span className=" text-[#D90909]">*</span>
                      </p>
                      <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
                        <input
                          type="text"
                          value={employerDetail?.companyName}
                          className="bg-[#F0F0F3]"
                          placeholder="Công ty TNHH ABC"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center mb-4">
                      <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
                        Quy mô nhân sự{" "}
                        <span className=" text-[#D90909]">*</span>
                      </p>
                      <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
                        <Select options={personelSize} />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center mb-4">
                      <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
                        Địa điểm <span className=" text-[#D90909]">*</span>
                      </p>
                      <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
                        <select
                          name="province"
                          id="province"
                          className="bg-[#F0F0F3]"
                        >
                          <option value="" selected="" disabled="">
                            Chọn quận/huyện
                          </option>
                          <option value="2706">Hà Nội</option>
                          <option value="2707">Toàn Quốc</option>
                          <option value="2708">Bình Định</option>
                          <option value="2709">Miền Bắc</option>
                          <option value="2710">Hồ Chí Minh</option>
                          <option value="2711">Phú Thọ</option>
                          <option value="2712">Miền Nam</option>
                          <option value="2713">Đồng Nai</option>
                          <option value="2714">Gia Lai</option>
                          <option value="2715">Bến Tre</option>
                          <option value="2716">Thanh Hóa</option>
                          <option value="2717">An Giang</option>
                          <option value="2718">Hưng Yên</option>
                          <option value="2719">Khánh Hòa</option>
                          <option value="2720">Thái Bình</option>
                          <option value="2721">Vĩnh Long</option>
                          <option value="2722">Kiên Giang</option>
                          <option value="2723">Nghệ An</option>
                          <option value="2724">Bình Dương</option>
                          <option value="2725">Tiền Giang</option>
                          <option value="2726">Cà Mau</option>
                          <option value="2727">Long An</option>
                          <option value="2728">Cần Thơ</option>
                          <option value="2729">Sóc Trăng</option>
                          <option value="2730">Lâm Đồng</option>
                          <option value="2731">Miền Trung</option>
                          <option value="2732">Quảng Nam</option>
                          <option value="2733">Hải Dương</option>
                          <option value="2734">Hải Phòng</option>
                          <option value="2735">Bạc Liêu</option>
                          <option value="2736">Đắk Lắk</option>
                          <option value="2737">Điện Biên</option>
                          <option value="2738">Bắc Giang</option>
                          <option value="2739">Quảng Ninh</option>
                          <option value="2740">Thừa Thiên Huế</option>
                          <option value="2741">Đà Nẵng</option>
                          <option value="2742">Bình Thuận</option>
                          <option value="2743">Ninh Bình</option>
                          <option value="2744">Nam Định</option>
                          <option value="2745">Hà Tĩnh</option>
                          <option value="2746">Hà Nam</option>
                          <option value="2747">Bắc Ninh</option>
                          <option value="2748">Đồng Tháp</option>
                          <option value="2749">Bà Rịa - Vũng Tàu</option>
                          <option value="2750">Bắc Kạn</option>
                          <option value="2751">Hà Giang</option>
                          <option value="2752">Lạng Sơn</option>
                          <option value="2753">Lai Châu</option>
                          <option value="2754">Trà Vinh</option>
                          <option value="2755">Đắk Nông</option>
                          <option value="2756">Bình Phước</option>
                          <option value="2757">Vĩnh Phúc</option>
                          <option value="2758">Thái Nguyên</option>
                          <option value="2759">Yên Bái</option>
                          <option value="2760">Ninh Thuận</option>
                          <option value="2761">Quảng Bình</option>
                          <option value="2762">Lào Cai</option>
                          <option value="2763">Hòa Bình</option>
                          <option value="2764">Quảng Trị</option>
                          <option value="2765">Cao Bằng</option>
                          <option value="2766">Quảng Ngãi</option>
                          <option value="2767">Tây Ninh</option>
                          <option value="2768">Hậu Giang</option>
                          <option value="2769">Sơn La</option>
                          <option value="2770">Chưa cập nhật</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center mb-4">
                      <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
                        Địa chỉ <span className=" text-[#D90909]">*</span>
                      </p>
                      <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
                        <input
                          type="text"
                          name="company_address"
                          value=""
                          className="bg-[#F0F0F3]"
                          placeholder="Số 19 Ngõ 68 Lưu Hữu Phước, Mỹ Đình 1, Nam Từ Liêm, Hà Nội"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center mb-4">
                      <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
                        Số điện thoại cố định{" "}
                        <span className=" text-[#D90909]">*</span>
                      </p>
                      <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
                        <input
                          type="text"
                          name="hotline"
                          value=""
                          className="bg-[#F0F0F3]"
                          placeholder="0234 456 778"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center mb-4">
                      <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
                        Địa chỉ website Công ty{" "}
                        <span className=" text-[#D90909]">*</span>
                      </p>
                      <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
                        <input
                          type="text"
                          name="website_company"
                          value=""
                          className="bg-[#F0F0F3]"
                          placeholder="Địa chỉ website"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center mb-4">
                      <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
                        Hình ảnh công ty{" "}
                        <span className=" text-[#D90909]">*</span>
                      </p>
                      <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
                        <div className="flex items-center flex-nowrap">
                          <div className="lg:mr-[1.5rem] mr-[1rem]">
                            <div
                              htmlhtmlFor="image_company"
                              className="img-ava rounded-md overflow-hidden w-28 h-28 c-img pt-0 bg-[#D9D9D9]"
                            >
                              <img
                                src="../../../theme/frontend/images/noimage.png"
                                alt="Nguyễn Văn C"
                                id="image_company"
                              />
                            </div>
                          </div>
                          <div className="">
                            <label
                              htmlFor="image_company"
                              className="relative inline-flex rounded-md overflow-hidden border-solid border border-[var(--border-main)] px-5 py-2.5 !text-[var(--cl-text-main)] font-medium text-sm"
                            >
                              <input
                                type="file"
                                name="image_company"
                                className="absolute top-0 right-0 w-full h-full opacity-0 input-avatars"
                                accept="image/*"
                              />
                              Thay đổi ảnh
                            </label>
                            <div className="note text-[var(--cl-sub-title)] mt-2 max-w-sm w-full">
                              Cho phép tải ảnh JPG, GIF hoặc PNG, dung lượng tối
                              đa 800kB
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center mb-4">
                    <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
                      Giới thiệu công ty
                    </p>
                    <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
                      <textarea
                        type="text"
                        name="content_company"
                        className="bg-[#F0F0F3] editor"
                        placeholder="Thông tin về công ty"
                        id="mce_0"
                        aria-hidden="true"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full form-all text-center">
                    <button
                      type="submit"
                      title="Cập nhập"
                      className="lg:mt-8 mt-4 text-white text-center  bg-[var(--cl-bg-main)] rounded-md border border-solid border-[var(--border-main)] hover:text-[var(--cl-text-main)] hover:bg-white transition-all duration-500"
                    >
                      Cập nhập
                    </button>
                  </div>
                </div>
                <div className="up-file xl:max-w-[53.9375rem] w-full py-4 border-b border-solid last:border-none">
                  <p className="font-semibold text-[var(--cl-text-main-2)] ">
                    Giấy phép kinh doanh
                  </p>
                  <p className="my-4">
                    Để chứng thực tài khoản Quý khách đang sử dụng, vui lòng
                    đăng tải giấy phép đăng ký kinh doanh.
                  </p>
                  <div className="flex items-center">
                    <div className="btn-update__avatars relative inline-flex rounded-md overflow-hidden border-solid border border-[var(--border-main)] px-5 py-2.5 !text-[var(--cl-text-main)] font-medium text-sm mr-2">
                      <p className="font-medium text-[0.875rem]">Tải file</p>
                      <input
                        type="file"
                        name="business_license"
                        value=""
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer input-business-license"
                      />
                    </div>
                    <span>
                      (Dạng file .doc, .docx, .pdf dung lượng &lt;= 10 MB)
                    </span>
                  </div>
                  <div className="mt-2 file-name w-fit hidden"></div>
                  <p className="mt-4 font-semibold">
                    Giấy phép kinh doanh hợp lệ
                  </p>
                  <div className="mt-2 s-content">
                    <ul>
                      <li>Có dấu giáp lai của cơ quan có thẩm quyền.</li>
                      <li>
                        Trường hợp giấy phép kinh doanh là bản photo thì phải có
                        dấu công chứng.
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </CustomTabPanel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileEmployer;
