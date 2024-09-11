import React, { useEffect, useRef, useState } from "react";
import { auth, firestore, storage } from "../../../../firebase.config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { createSlug } from "../../../../components/utils";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  useFetchCity,
  useFetchPersonalSize,
} from "../../../../hooks/useFetchData";
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
  taxCode: "",
  nameCompany: "",
  personalSize: "",
  cityWork: "",
  addressCompany: "",
  phoneCompany: "",
  introduceCompany: "",
  imageCompany: "",
};
const FormUpdateCompany = () => {
  const urlImageUserDefault =
    "https://firebasestorage.googleapis.com/v0/b/website-job-21a07.appspot.com/o/Images%2Fuser_profile_default.png?alt=media&token=e0db52f4-0be5-42a2-a1be-c40da07929c1";
  const navigate = useNavigate();
  const { queryPersonalSize } = useFetchPersonalSize();
  const { listCity } = useFetchCity();
  const [data, setData] = useState(initialState);
  const {
    taxCode,
    nameCompany,
    personalSize,
    cityWork,
    addressCompany,
    phoneCompany,
    introduceCompany,
    imageCompany,
  } = data;
  const [urlImageCompany, setUrlImageCompany] = useState(null);
  const [file, setFile] = useState(null);
  const editorRef = useRef();
  const handleEditorChange = (content, name) => {
    setData({
      ...data,
      [name]: content,
    });
  };
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async () => {
    if (imageCompany == null) return;
    const storageRef = ref(
      storage,
      `Employers/` + v4() + `${imageCompany.name}`
    );
    const snapshot = await uploadBytes(storageRef, imageCompany);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setUrlImageCompany(URL.createObjectURL(event.target.files[0]));
      setFile(event.target.files[0]);
    }
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
  }, []);
  const handleUpdateCompany = async (e) => {
    e.preventDefault();
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        try {
          const url = await handleImageUpload();
          const docRef = doc(firestore, "Employers", user.uid);
          const docSnap = await getDoc(docRef);
          const slug = createSlug(nameCompany) + "-" + v4();
          if (docSnap.exists()) {
            let updatedData = {
              slug: slug,
              nameCompany: nameCompany,
              taxCode: taxCode,
              personalSize: personalSize,
              cityWork: cityWork,
              addressCompany: addressCompany,
              phoneCompany: phoneCompany,
              imageCompany: url || imageCompany,
              introduceCompany: introduceCompany,
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
    <form className="info-acc" onSubmit={handleUpdateCompany}>
      <div className="xl:max-w-[53.9375rem] w-full py-4 border-b border-solid last:border-none">
        <div className="flex flex-wrap items-center mb-4">
          <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
            Mã số thuế <span className=" text-[#D90909]">*</span>
          </p>
          <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center  bg-[#F0F0F3]">
            <Box sx={{ width: 1 }} autoComplete="off">
              <TextField
                type={"text"}
                fullWidth
                id={`outlined-taxCode`}
                label={"Mã số thuế"}
                name={"taxCode"}
                value={taxCode}
                variant="outlined"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </Box>
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-4">
          <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
            Tên công ty <span className=" text-[#D90909]">*</span>
          </p>
          <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center bg-[#F0F0F3]">
            <Box sx={{ width: 1 }} autoComplete="off">
              <TextField
                type={"text"}
                fullWidth
                id={`outlined-nameCompany`}
                label={"Tên công ty"}
                name={"nameCompany"}
                value={nameCompany}
                variant="outlined"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </Box>
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-4">
          <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
            Quy mô nhân sự <span className=" text-[#D90909]">*</span>
          </p>
          <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center bg-[#F0F0F3]">
            <Box sx={{ width: 1 }}>
              <FormControl fullWidth>
                <InputLabel id={`personalSize-select-label`}>
                  Quy mô nhân sự
                </InputLabel>
                <Select
                  fullWidth
                  className="w-full"
                  labelId={`personalSize-select-label`}
                  id="personalSize-simple-select"
                  value={personalSize}
                  name={"personalSize"}
                  onChange={handleInputChange}
                  label={"Quy mô nhân sự"}
                >
                  {queryPersonalSize &&
                    queryPersonalSize.map((item, index) => {
                      return (
                        <MenuItem value={item.name} key={index}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-4">
          <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
            Địa điểm <span className=" text-[#D90909]">*</span>
          </p>
          <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center  bg-[#F0F0F3]">
            <Box sx={{ width: 1 }}>
              <FormControl fullWidth>
                <InputLabel id={`levelJob-select-label`}>Địa điểm</InputLabel>
                <Select
                  fullWidth
                  className="w-full"
                  labelId={`cityWork-select-label`}
                  id="cityWork-simple-select"
                  value={cityWork}
                  name={"cityWork"}
                  onChange={handleInputChange}
                  label={"Địa điểm"}
                >
                  {listCity &&
                    listCity.map((item, index) => {
                      return (
                        <MenuItem value={item.name} key={index}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-4">
          <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
            Địa chỉ website Công ty <span className=" text-[#D90909]">*</span>
          </p>
          <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center bg-[#F0F0F3]">
            <Box sx={{ width: 1 }} autoComplete="off">
              <TextField
                type={"text"}
                fullWidth
                id={`outlined-addressCompany`}
                label={"Địa chỉ website Công ty"}
                name={"addressCompany"}
                value={addressCompany}
                variant="outlined"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </Box>
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-4">
          <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
            Số điện thoại cố định <span className=" text-[#D90909]">*</span>
          </p>
          <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center bg-[#F0F0F3]">
            <Box sx={{ width: 1 }} autoComplete="off">
              <TextField
                type={"text"}
                fullWidth
                id={`outlined-phoneCompany`}
                label={"Số điện thoại cố định"}
                name={"phoneCompany"}
                value={phoneCompany}
                variant="outlined"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </Box>
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-4">
          <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
            Hình ảnh công ty <span className=" text-[#D90909]">*</span>
          </p>
          <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
            <div className="flex items-center flex-nowrap">
              <div className="lg:mr-[1.5rem] mr-[1rem] p-2">
                <Avatar
                  className="avatar w-full h-full img-cover overflow-hidden rounded bg-white"
                  alt={nameCompany}
                  src={urlImageCompany || imageCompany || urlImageUserDefault}
                  sx={{ width: 112, height: 112 }}
                />
              </div>
              <div className="">
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
                <div className="note text-[var(--cl-sub-title)] mt-2 max-w-sm w-full">
                  Cho phép tải ảnh JPG, GIF hoặc PNG
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-4">
          <p className="w-full lg:w-1/4 mb-2 lg:mb-0">Giới thiệu công ty</p>
          <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
            <Editor
              apiKey="fliutou8i6pp4gkt9r5eb3g8cpicg9y90ono29vhhs1z133h"
              onInit={(evt, editor) => (editorRef.current = editor)}
              onEditorChange={(content) =>
                handleEditorChange(content, "introduceCompany")
              }
              initialValue={introduceCompany}
              init={{
                placeholder: "Hãy viết gì đó ở đây...",
                height: 600,
                width: "100%",
                menubar: false,
                plugins:
                  "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount   linkchecker                   ",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table  | addcomment showcomments | spellcheckdialog a11ycheck  | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
              }}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button variant="contained" type="submit">
            Cập nhật
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormUpdateCompany;
