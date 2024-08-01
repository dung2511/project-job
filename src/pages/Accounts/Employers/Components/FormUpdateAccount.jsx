import React, { useState } from "react";
import { auth, firestore, storage } from "../../../../firebase.config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const FormUpdateAccount = ({ employerDetail }) => {
  const urlImageUserDefault =
    "https://firebasestorage.googleapis.com/v0/b/website-job-21a07.appspot.com/o/Images%2Fuser_profile_default.png?alt=media&token=e0db52f4-0be5-42a2-a1be-c40da07929c1";
  const [password, setPassword] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [emailRecruitment, setEmailRecruitment] = useState(null);
  const [address, setAddress] = useState(null);
  const [file, setFile] = useState(null);
  const [urlAvatar, setUrlAvatar] = useState(null);
  const handleImageUpload = async () => {
    if (file == null) return;
    const storageRef = ref(storage, `Employers/` + v4() + `${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setUrlAvatar(URL.createObjectURL(event.target.files[0]));
      setFile(event.target.files[0]);
    }
  };
  const handleUpdateAccount = async (e) => {
    e.preventDefault();
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        try {
          const url = await handleImageUpload();
          console.log(url);
          const docRef = doc(firestore, "Employers", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            let updatedData = {
              fullName: fullName == null ? employerDetail.fullName : fullName,
              emailRecruitment:
                emailRecruitment == null
                  ? employerDetail.emailRecruitment
                  : emailRecruitment,
              address: address == null ? employerDetail.address : address,
              avatar: url ? url : employerDetail.avatar,
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
  if (!employerDetail) {
    return (
      <Box className="flex items-center justify-center">
        <CircularProgress />
      </Box>
    );
  }
  return (
    <form className="info-acc form-all" onSubmit={handleUpdateAccount}>
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
                  employerDetail?.email != null ? employerDetail.email : ""
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
                      urlAvatar || employerDetail?.avatar || urlImageUserDefault
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
                  Cho phép tải ảnh JPG, GIF hoặc PNG, dung lượng tối đa 800kB
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
                employerDetail?.fullName != null ? employerDetail.fullName : ""
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
                  employerDetail?.phone != null ? employerDetail.phone : ""
                }
                className="bg-[#F0F0F3]"
                placeholder="098 456 789"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-4">
          <p className="w-full lg:w-1/4 mb-2 lg:mb-0">Email liên hệ</p>
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
          <p className="w-full lg:w-1/4 mb-2 lg:mb-0">Địa chỉ liên hệ</p>
          <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
            <input
              type="text"
              className="bg-[#F0F0F3]"
              defaultValue={
                employerDetail?.address != null ? employerDetail.address : ""
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
  );
};

export default FormUpdateAccount;
