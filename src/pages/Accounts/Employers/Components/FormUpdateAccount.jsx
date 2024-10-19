import React, { useEffect, useState } from "react";
import { auth, firestore, storage } from "../../../../firebase.config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { Avatar, Box, Button, styled, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const initialState = {
  fullName: "",
  phone: "",
  emailRecruitment: "",
  address: "",
  email: "",
  password: "",
  avatar: "",
};
const FormUpdateAccount = ({ employerDetail }) => {
  const urlImageUserDefault =
    "https://firebasestorage.googleapis.com/v0/b/website-job-21a07.appspot.com/o/Images%2Fuser_profile_default.png?alt=media&token=e0db52f4-0be5-42a2-a1be-c40da07929c1";
  const navigate = useNavigate();
  const [data, setData] = useState(initialState);
  const {
    fullName,
    phone,
    emailRecruitment,
    address,
    email,
    password,
    avatar,
  } = data;
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
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
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
              fullName: fullName,
              emailRecruitment: emailRecruitment,
              address: address,
              avatar: url ? url : avatar,
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
  const fetchEmployerData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        const docRef = doc(firestore, "Employers", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData({ ...docSnap.data() });
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
    fetchEmployerData();
  });
  return (
    <form className="info-acc" onSubmit={handleUpdateAccount}>
      <div className="flex flex-wrap border-b border-solid border-[#EBEBEB] lg:-mx-2 mb-4">
        <div className="w-full lg:w-1/2 lg:px-2 mb-4 lg:mb-0">
          <p className="tittle text-[var(--cl-text-main-2)] font-semibold mb-4">
            Thông tin đăng nhập
          </p>
          <div className="flex flex-wrap items-center mb-4">
            <p className="w-full lg:w-1/4 mb-2 lg:mb-0">Địa chỉ email</p>
            <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center rounded-[5px] bg-[#F0F0F3]">
              <Box sx={{ width: 1 }} autoComplete="off">
                <TextField
                  type={"text"}
                  fullWidth
                  id={`outlined-email`}
                  label={"Địa chỉ email"}
                  name={"email"}
                  value={email}
                  variant="outlined"
                  autoComplete="off"
                />
              </Box>
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-4">
            <p className="w-full lg:w-1/4 mb-2 lg:mb-0">Mật khẩu</p>
            <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center rounded-[5px] bg-[#F0F0F3]">
              <Box sx={{ width: 1 }} autoComplete="off">
                <TextField
                  type={"text"}
                  fullWidth
                  id={`outlined-password`}
                  label={"Mật khẩu"}
                  name={"password"}
                  value={password}
                  variant="outlined"
                  autoComplete="off"
                />
              </Box>
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
                <Avatar
                  className="avatar w-full h-full img-cover overflow-hidden rounded mb-2 "
                  alt={fullName}
                  src={urlAvatar || avatar || urlImageUserDefault}
                  sx={{ width: 112, height: 112 }}
                />
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                  onChange={onImageChange}
                  className="text-white capitalize"
                >
                  Tải ảnh đại diện
                  <VisuallyHiddenInput type="file" />
                </Button>
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
            <Box sx={{ width: 1 }} autoComplete="off">
              <TextField
                type={"text"}
                fullWidth
                onChange={handleInputChange}
                id={`outlined-positionJob`}
                label={"Họ và tên"}
                name={"fullName"}
                value={fullName}
                variant="outlined"
                autoComplete="off"
              />
            </Box>
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-4">
          <p className="w-full lg:w-1/4 mb-2 lg:mb-0">Số điện thoại</p>
          <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center rounded-[5px] bg-[#F0F0F3]">
            <Box sx={{ width: 1 }} autoComplete="off">
              <TextField
                type={"text"}
                fullWidth
                id={`outlined-phone`}
                label={"Số điện thoại"}
                name={"phone"}
                value={phone}
                variant="outlined"
                autoComplete="off"
              />
            </Box>
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-4">
          <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
            Email liên hệ <span className=" text-[#D90909]">*</span>
          </p>
          <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center rounded-[5px] bg-[#F0F0F3]">
            <Box sx={{ width: 1 }} autoComplete="off">
              <TextField
                type={"text"}
                fullWidth
                onChange={handleInputChange}
                id={`outlined-emailRecruitment`}
                label={"Email liên hệ"}
                name={"emailRecruitment"}
                value={emailRecruitment}
                variant="outlined"
                autoComplete="off"
              />
            </Box>
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-4">
          <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
            Địa chỉ <span className=" text-[#D90909]">*</span>
          </p>
          <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center rounded-[5px] bg-[#F0F0F3]">
            <Box sx={{ width: 1 }} autoComplete="off">
              <TextField
                type={"text"}
                fullWidth
                onChange={handleInputChange}
                id={`outlined-address`}
                label={"Địa chỉ"}
                name={"address"}
                value={address}
                variant="outlined"
                autoComplete="off"
              />
            </Box>
          </div>
        </div>
      </div>
      <div className="w-full text-center">
        <Button variant="contained" type="submit">Cập nhật</Button>
      </div>
    </form>
  );
};

export default FormUpdateAccount;
