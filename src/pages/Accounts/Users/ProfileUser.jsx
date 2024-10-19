import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../../firebase.config";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import SidebarUser from "../../../components/layout/SidebarUser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  Skeleton,
  styled,
  TextField,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
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
  email: "",
  phone: "",
  gender: "",
  birthday: "",
  city: "",
  address: "",
};
const ProfileUser = () => {
  const urlImageUserDefault =
    "https://firebasestorage.googleapis.com/v0/b/website-job-21a07.appspot.com/o/Images%2Fuser_profile_default.png?alt=media&token=e0db52f4-0be5-42a2-a1be-c40da07929c1";
  const [data, setData] = useState(initialState);
  const { fullName, email, phone, gender, birthday, city, address } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleDateChange = (date) => {
    setData({ ...data, birthday: date });
  };
  const [listCity, setListCity] = useState(null);
  const navigate = useNavigate();
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        const docRef = doc(firestore, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData({ ...docSnap.data() });
        }
      } else {
        toast.error("Vui lòng đăng nhập tài khoản ứng viên", {
          position: "top-right",
        });
        navigate("/");
      }
    });
  };

  const fetchDataCity = async () => {
    try {
      const q = query(collection(firestore, "cities"));
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setListCity(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;
      if (fullName == "") {
        toast.error("Vui lòng nhập họ tên !!", {
          position: "top-right",
        });
        return;
      }
      if (birthday == "") {
        toast.error("Vui lòng nhập ngày sinh !!", {
          position: "top-right",
        });
        return;
      }
      if (birthday.year() < 1970 || birthday.year() > 2006) {
        toast.error("Năm sinh phải nằm trong khoảng từ 1970 đến 2006 !!", {
          position: "top-right",
        });
        return;
      }
      if (gender == "") {
        toast.error("Vui lòng chọn giới tính !!", {
          position: "top-right",
        });
        return;
      }
      if (city == "") {
        toast.error("Vui lòng chọn thành phố !!", {
          position: "top-right",
        });
      }
      if (address == "") {
        toast.error("Vui lòng nhập địa chỉ !!", {
          position: "top-right",
        });
      }
      if (user) {
        const docRef = doc(firestore, "Users", user.uid);
        console.log(user.uid);
        const dataUpdate = {
          fullName: fullName,
          gender: gender,
          birthday: birthday.toDate(),
          city: city,
          address: address,
        };
        await updateDoc(docRef, dataUpdate);
        toast.success("Cập nhật thông tin thành công !!", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "top-right",
      });
    }
  };
  useEffect(() => {
    fetchDataCity();
  }, []);
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <section className="pt-8 bg-[#F0F0F3]">
      <div className="container">
        <div className="flex lg:-mx-2">
          <SidebarUser />
          <div className="w-full lg:w-2/3 lg:px-2">
            <p className="text-[var(--cl-text-main-2)] xl:text-2xl text-lg font-semibold mb-4 flex items-center border-b-[1px] border-solid border-[#B9B9B9] pb-2">
              Ứng viên
            </p>
            <form className="form form-validate" onSubmit={handleUpdateUser}>
              <div>
                <p className="xl:text-[1.125rem] text-[0.875rem] font-semibold">
                  Thông tin đăng kí
                </p>
                <List
                  sx={{
                    width: "100%",
                  }}
                >
                  <ListItem disableGutters>
                    <strong className="mr-1">Địa chỉ email:</strong>
                    <span>{email}</span>
                  </ListItem>
                  <ListItem disableGutters>
                    <strong className="mr-1">Số điện thoại: </strong>
                    <span>{phone}</span>
                  </ListItem>
                </List>
              </div>
              <div className="mt-6">
                <p className="xl:text-[1.125rem] text-[0.875rem] font-semibold mb-3">
                  Thông tin cá nhân
                </p>
                <Avatar
                  className="avatar w-full h-full img-cover overflow-hidden rounded mb-2 "
                  alt={fullName}
                  src={urlImageUserDefault}
                  sx={{ width: 100, height: 100 }}
                />
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <VisuallyHiddenInput type="file" />
                </Button>
              </div>
              <div className="flex flex-wrap text-[var(--cl-text-main-2)] lg:mt-8 mt-4 md:-mx-2">
                <div className="w-full md:w-1/3 name md:px-2 mb-8">
                  <Box sx={{ width: 1 }} autoComplete="off">
                    <TextField
                      type={"text"}
                      fullWidth
                      id={`outlined-fullName`}
                      label={"Họ và tên"}
                      name={"fullName"}
                      value={fullName}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Box>
                </div>
                <div className="w-full md:w-1/3 name md:px-2 mb-8">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Ngày sinh"
                      name={"birthday"}
                      className="w-full"
                      value={
                        birthday ? dayjs(birthday.toDate()) : dayjs(new Date())
                      }
                      onChange={handleDateChange}
                    />
                  </LocalizationProvider>
                </div>
                <div className="w-full md:w-1/3 name md:px-2 mb-8">
                  <Box sx={{ width: 1 }}>
                    <FormControl fullWidth>
                      <InputLabel id={`gender-select-label`}>
                        Giới tính
                      </InputLabel>
                      <Select
                        fullWidth
                        className="w-full"
                        labelId={`gender-select-label`}
                        id="gender-simple-select"
                        value={gender || ""}
                        name={"gender"}
                        onChange={handleChange}
                        label={"Giới tính"}
                      >
                        <MenuItem value={"Nam"} key={1}>
                          Nam
                        </MenuItem>
                        <MenuItem value={"Nữ"} key={2}>
                          Nữ
                        </MenuItem>
                        <MenuItem value={"Khác"} key={3}>
                          Khác
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className="w-full md:w-1/2 name md:px-2 mb-8">
                  <Box sx={{ width: 1 }}>
                    <FormControl fullWidth>
                      <InputLabel id={`city-select-label`}>
                        Tình / Thành phố
                      </InputLabel>
                      <Select
                        fullWidth
                        className="w-full"
                        labelId={`city-select-label`}
                        id="city-simple-select"
                        value={city || ""}
                        name={"city"}
                        onChange={handleChange}
                        label={"Tình / Thành phố"}
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
                <div className="w-full md:w-1/2 name md:px-2 mb-8">
                  <Box sx={{ width: 1 }} autoComplete="off">
                    <TextField
                      type={"text"}
                      fullWidth
                      id={`outlined-address`}
                      label={"Địa chỉ"}
                      name={"address"}
                      value={address || ""}
                      onChange={handleChange}
                      variant="outlined"
                      autoComplete="off"
                    />
                  </Box>
                </div>
              </div>
              <div className="flex w-full mt-4 font-medium">
                <Button variant="contained" type="submit">
                  Cập nhật
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileUser;
