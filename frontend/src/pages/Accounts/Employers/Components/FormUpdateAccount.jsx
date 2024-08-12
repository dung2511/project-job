import React, { useState } from "react";
import { auth, firestore, storage } from "../../../../firebase.config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-toastify";

import InputComponent from "../../../../components/InputComponent";
const FormUpdateAccount = ({ employerDetail }) => {
  const urlImageUserDefault =
    "https://firebasestorage.googleapis.com/v0/b/website-job-21a07.appspot.com/o/Images%2Fuser_profile_default.png?alt=media&token=e0db52f4-0be5-42a2-a1be-c40da07929c1";
  const [password, setPassword] = useState(null);
  const [file, setFile] = useState(null);
  const [urlAvatar, setUrlAvatar] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    emailRecruitment: "",
    address: "",
  });
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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleUpdateAccount = async (e) => {
    e.preventDefault();
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        try {
          const url = await handleImageUpload();
          const docRef = doc(firestore, "Employers", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            let updatedData = {
              fullName: formData.fullName || employerDetail.fullName,
              emailRecruitment:
                formData.emailRecruitment || employerDetail.emailRecruitment,
              address: formData.address || employerDetail.address,
              avatar: url ? url : employerDetail.avatar,
            };
            await updateDoc(docRef, updatedData);
            toast.success("Cập nhật thông tin thành công !!", {
              position: "top-right",
            });
            setTimeout(() => {
              window.location.reload();
            }, 300);
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

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
            <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center rounded-[5px]">
              <InputComponent
                name={"email"}
                disabled={true}
                value={employerDetail?.email}
                label={"Địa chỉ Email"}
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-4">
            <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
              Mật khẩu <span className=" text-[#D90909]">*</span>
            </p>
            <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center rounded-[5px]">
              <InputComponent
                type={"password"}
                disabled={true}
                value={employerDetail.password}
                label={"Mật khẩu"}
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
          <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center rounded-[5px] bg-[#F0F0F3]">
            <InputComponent
              name={"fullName"}
              value={employerDetail.fullName}
              onChange={handleInputChange}
              label={"Họ và tên"}
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-wrap items-center mb-4">
            <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
              Số điện thoại <span className=" text-[#D90909]">*</span>
            </p>
            <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center rounded-[5px] bg-[#F0F0F3]">
              <InputComponent
                label={"Số điện thoại"}
                disabled={true}
                value={employerDetail.phone}
                name={"phone"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-4">
          <p className="w-full lg:w-1/4 mb-2 lg:mb-0">Email liên hệ</p>
          <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center rounded-[5px]  bg-[#F0F0F3]">
            <InputComponent
              name={"emailRecruitment"}
              label={"Email liên hệ"}
              value={employerDetail.emailRecruitment}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-4 ">
          <p className="w-full lg:w-1/4 mb-2 lg:mb-0">Địa chỉ liên hệ</p>
          <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center rounded-[5px] bg-[#F0F0F3]">
            <InputComponent
              name={"address"}
              label={"Địa chỉ liên hệ"}
              value={employerDetail.address}
              onChange={handleInputChange}
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
