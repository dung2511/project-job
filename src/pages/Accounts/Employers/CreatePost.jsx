import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { auth, firestore } from "../../../firebase.config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import SidebarEmployer from "../../../components/layout/SidebarEmployer";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Editor } from "@tinymce/tinymce-react";
import { v4 } from "uuid";
import { createSlug } from "../../../components/utils";
import {
  useFetchCareerJob,
  useFetchCity,
  useFetchExperience,
  useFetchGender,
  useFetchLevelJob,
  useFetchUnitType,
  useFetchWorkType,
} from "../../../hooks/useFetchData";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { formPostReducer, initialState } from "../../../hooks/formPostReducer";
const CreatePost = () => {
  const [employerDetail, setEmployerDetail] = useState(null);
  const editorRef = useRef();
  const navigate = useNavigate();
  const { career } = useFetchCareerJob();
  const { listCity } = useFetchCity();
  const { level } = useFetchLevelJob();
  const { experience } = useFetchExperience();
  const { workType } = useFetchWorkType();
  const { genderWork } = useFetchGender();
  const [state, dispatch] = useReducer(formPostReducer, initialState);
  const {
    positionJob,
    levelJob,
    careerJob,
    workJob,
    experienceJob,
    minSalary,
    maxSalary,
    salaryNegotiable,
    descriptionJob,
    candidateRequirement,
    benefit,
    timeWork,
    quantity,
    timeCreated,
    expirationDate,
    workplace,
    gender,
  } = state;
  const handleChange = (field) => (e) => {
    dispatch({
      type: "SET_FIELD",
      field,
      value: e.target.value,
    });
  };
  const handleDateChange = (field) => (date) => {
    dispatch({
      type: "SET_FIELD",
      field,
      value: date,
    });
  };
  const handleEditorChange = (field) => (content) => {
    dispatch({
      type: "SET_FIELD",
      field,
      value: content,
    });
  };
  const checkAuth = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        const docRef = doc(firestore, "Employers", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setEmployerDetail(docSnap.data());
        }
      } else {
        navigate("/");
        toast.error("Vui lòng đăng nhập tài khoản nhà tuyển dụng", {
          position: "top-right",
        });
      }
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    dispatch({ type: "CREATE_POST" });
    if (!state.isValid) {
      return;
    }
    try {
      const slug = createSlug(positionJob) + v4();
      const cleanedFormData = {
        slug: slug,
        positionJob: positionJob || "",
        levelJob: levelJob || "",
        careerJob: careerJob || "",
        workJob: workJob || "",
        experienceJob: experienceJob || "",
        minSalary: minSalary || 0,
        maxSalary: maxSalary || 0,
        salaryNegotiable: salaryNegotiable || 0,
        descriptionJob: descriptionJob || "",
        candidateRequirement: candidateRequirement || "",
        benefit: benefit || "",
        timeWork: timeWork || "",
        timeCreated: dayjs().toDate(),
        expirationDate: expirationDate ? expirationDate.toDate() : new Date(),
        quantity: quantity || 0,
        workplace: workplace || "",
        nameComapny: employerDetail.nameComapny,
        avatar: employerDetail.imageCompany,
        gender: gender,
      };
      await addDoc(collection(firestore, "Posts"), {
        employerId: user.uid,
        ...cleanedFormData,
      });
      toast.success("Đăng bài thành công !!", {
        position: "top-right",
      });
      setTimeout(() => {
        navigate("/danh-sach-tin-dang");
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <section className="make-news-recruit xl:py-10 py-6">
      <div className="container">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full lg:w-[22%] px-2 mb-4 lg:mb-0">
            <SidebarEmployer />
          </div>
          <div className="w-full lg:w-[78%] px-2">
            <div className="head-title-all leading-[1.3] mb-4 border-l-[5px] border-solid border-[#DD6B4D] pl-4 font-bold 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
              <span className="text-[var(--cl-blue)]">
                Chỉnh sửa tin tuyển dụng
              </span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-post-new">
                <p className="title flex items-center xl:text-[1.5rem] text-[1.25rem] mb-6">
                  <span className="icon rounded-full text-[1rem] w-[2.5rem] h-[2.5rem] bg-[#DD6B4D] text-white inline-flex items-center justify-center shrink-0 mr-2">
                    <BusinessCenterIcon />
                  </span>
                  Mô tả công việc
                </p>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-4">
                    Chức danh <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <Box sx={{ width: 1 }} autoComplete="off">
                    <TextField
                      type={"text"}
                      fullWidth
                      onChange={handleChange("positionJob")}
                      id={`outlined-positionJob`}
                      label={"Chức danh"}
                      name={"positionJob"}
                      value={positionJob}
                      variant="outlined"
                      autoComplete="off"
                    />
                  </Box>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-4">
                    Cấp bậc <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <Box sx={{ width: 1 }}>
                    <FormControl fullWidth>
                      <InputLabel id={`levelJob-select-label`}>
                        Cấp bậc
                      </InputLabel>
                      <Select
                        fullWidth
                        className="w-full"
                        labelId={`levelJob-select-label`}
                        id="levelJob-simple-select"
                        value={levelJob}
                        name={"levelJob"}
                        onChange={handleChange("levelJob")}
                        label={"Cấp bậc"}
                      >
                        {level &&
                          level.map((item, index) => {
                            return (
                              <MenuItem value={item.id} key={index}>
                                {item.name}
                              </MenuItem>
                            );
                          })}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-4">
                    Ngành nghề <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <Box sx={{ width: 1 }}>
                    <FormControl fullWidth>
                      <InputLabel id={`careerJob-select-label`}>
                        Ngành nghề
                      </InputLabel>
                      <Select
                        fullWidth
                        className="w-full"
                        labelId={`careerJob-select-label`}
                        id="careerJob-simple-select"
                        value={careerJob}
                        name={"careerJob"}
                        onChange={handleChange("careerJob")}
                        label={"Ngành nghề"}
                      >
                        {career &&
                          career.map((item, index) => {
                            return (
                              <MenuItem value={item.id} key={index}>
                                {item.name}
                              </MenuItem>
                            );
                          })}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-4">
                    Nơi làm việc<span className="text-[#DD6B4D]">*</span>
                  </p>
                  <Box sx={{ width: 1 }}>
                    <FormControl fullWidth>
                      <InputLabel id={`workJob-select-label`}>
                        Nơi làm việc
                      </InputLabel>
                      <Select
                        fullWidth
                        className="w-full"
                        labelId={`workJob-select-label`}
                        id="workJob-simple-select"
                        value={workJob}
                        name={"workJob"}
                        onChange={handleChange("workJob")}
                        label={"Nơi làm việc"}
                      >
                        {listCity &&
                          listCity.map((item, index) => {
                            return (
                              <MenuItem value={item.id} key={index}>
                                {item.name}
                              </MenuItem>
                            );
                          })}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-4">
                    Kinh nghiệm làm việc
                    <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <Box sx={{ width: 1 }}>
                    <FormControl fullWidth>
                      <InputLabel id={`experienceJob-select-label`}>
                        Kinh nghiệm làm việc
                      </InputLabel>
                      <Select
                        fullWidth
                        className="w-full"
                        labelId={`experienceJob-select-label`}
                        id="experienceJob-simple-select"
                        value={experienceJob}
                        name={"experienceJob"}
                        onChange={handleChange("experienceJob")}
                        label={"Kinh nghiệm làm việc"}
                      >
                        {experience &&
                          experience.map((item, index) => {
                            return (
                              <MenuItem value={item.id} key={index}>
                                {item.name}
                              </MenuItem>
                            );
                          })}
                      </Select>
                    </FormControl>
                  </Box>
                </div>

                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-4">
                    Mức lương<span className="text-[#DD6B4D]">*</span>
                  </p>
                  <div className="import-wage flex flex-wrap">
                    <div className="flex items-center mr-4">
                      <span style={{ marginRight: "5px" }}>Từ: </span>
                      <Box sx={{ width: 1 }} autoComplete="off">
                        <TextField
                          type={"text"}
                          fullWidth
                          onChange={handleChange("minSalary")}
                          id={`outlined-minSalary`}
                          label={"Lương tối thiểu"}
                          name={"minSalary"}
                          value={minSalary}
                          variant="outlined"
                          autoComplete="off"
                        />
                      </Box>
                    </div>
                    <div className="flex items-center mr-4">
                      <span style={{ marginRight: "5px" }}>Đến: </span>
                      <Box sx={{ width: 1 }} autoComplete="off">
                        <TextField
                          type={"text"}
                          fullWidth
                          onChange={handleChange("maxSalary")}
                          id={`outlined-maxSalary`}
                          label={"Lương tối đa"}
                          name={"maxSalary"}
                          value={maxSalary}
                          variant="outlined"
                          autoComplete="off"
                        />
                      </Box>
                    </div>

                    <div className="flex items-center mb-2">
                      <label className="form-status__all block relative">
                        <input
                          onChange={handleChange}
                          type="checkbox"
                          value={salaryNegotiable}
                          className="hidden"
                        />
                        <span className="button"></span>
                      </label>
                      <span className="text text-[#000] ml-2 lg:text-[0.875rem]">
                        Thỏa thuận
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-4">
                    Mô tả công việc <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <Editor
                    apiKey="fliutou8i6pp4gkt9r5eb3g8cpicg9y90ono29vhhs1z133h"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue={descriptionJob}
                    onEditorChange={handleEditorChange("descriptionJob")}
                    init={{
                      placeholder: "Hãy viết gì đó ở đây...",
                      height: 300,
                      width: "100%",
                      menubar: false,
                      plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount   linkchecker                   ",
                      toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table  | addcomment showcomments | spellcheckdialog a11ycheck  | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                    }}
                  />
                  <p className="sub text-[.75rem] text-[#7d7d7d]">
                    (Bạn có thể nhập tối đa 5.000 ký tự)
                  </p>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-4">
                    Yêu cầu ứng viên <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <Editor
                    apiKey="fliutou8i6pp4gkt9r5eb3g8cpicg9y90ono29vhhs1z133h"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue={candidateRequirement}
                    onEditorChange={handleEditorChange("candidateRequirement")}
                    init={{
                      placeholder: "Hãy viết gì đó ở đây...",
                      height: 300,
                      width: "100%",
                      menubar: false,
                      plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount   linkchecker                   ",
                      toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table  | addcomment showcomments | spellcheckdialog a11ycheck  | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                    }}
                  />
                  <p className="sub text-[.75rem] text-[#7d7d7d]">
                    (Bạn có thể nhập tối đa 5.000 ký tự)
                  </p>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-4">
                    Quyền lợi <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <Editor
                    apiKey="fliutou8i6pp4gkt9r5eb3g8cpicg9y90ono29vhhs1z133h"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue={benefit}
                    onEditorChange={handleEditorChange("benefit")}
                    init={{
                      placeholder: "Hãy viết gì đó ở đây...",
                      height: 300,
                      width: "100%",
                      menubar: false,
                      plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount   linkchecker                   ",
                      toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table  | addcomment showcomments | spellcheckdialog a11ycheck  | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                    }}
                  />
                  <p className="sub text-[.75rem] text-[#7d7d7d]">
                    (Bạn có thể nhập tối đa 5.000 ký tự)
                  </p>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-4">
                    Thời gian làm việc <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <Editor
                    apiKey="fliutou8i6pp4gkt9r5eb3g8cpicg9y90ono29vhhs1z133h"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue={timeWork}
                    onEditorChange={handleEditorChange("timeWork")}
                    init={{
                      placeholder: "Hãy viết gì đó ở đây...",
                      height: 300,
                      width: "100%",
                      menubar: false,
                      plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount   linkchecker                   ",
                      toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table  | addcomment showcomments | spellcheckdialog a11ycheck  | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                    }}
                  />

                  <p className="sub text-[.75rem] text-[#7d7d7d]">
                    (Bạn có thể nhập tối đa 5.000 ký tự)
                  </p>
                </div>
                <div className="flex flex-wrap items-center md:-mx-2">
                  <div className="form-group mb-3 w-full md:w-1/2 md:px-2">
                    <p className="font-semibold text-[#1C4B82] mb-4">
                      Giới tính
                      <span className="text-[#DD6B4D]">*</span>
                    </p>
                    <Box sx={{ width: 1 }}>
                      <FormControl fullWidth>
                        <InputLabel id={`careerJob-select-label`}>
                          Giới tính
                        </InputLabel>
                        <Select
                          fullWidth
                          className="w-full"
                          labelId={`gender-select-label`}
                          id="gender-simple-select"
                          value={gender}
                          name={"gender"}
                          onChange={handleChange("gender")}
                          label={"Giới tính"}
                        >
                          {genderWork &&
                            genderWork.map((item) => {
                              return (
                                <MenuItem value={item.name} key={item.id}>
                                  {item.name}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className="form-group mb-3 w-full md:w-1/2 md:px-2">
                    <p className="font-semibold text-[#1C4B82] mb-4">
                      Ngày hết hạn
                      <span className="text-[#DD6B4D]">*</span>
                    </p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        name={"expirationDate"}
                        className="w-full"
                        value={dayjs(expirationDate.toDate())}
                        onChange={handleDateChange("expirationDate")}
                      />
                    </LocalizationProvider>
                  </div>
                  <div className="form-group mb-3 w-full md:w-1/2 md:px-2">
                    <p className="font-semibold text-[#1C4B82] mb-4">
                      Số lượng cần tuyển
                      <span className="text-[#DD6B4D]">*</span>
                    </p>
                    <Box sx={{ width: 1 }} autoComplete="off">
                      <TextField
                        type={"text"}
                        fullWidth
                        onChange={handleChange}
                        id={`outlined-quantity`}
                        label={"Số lượng"}
                        name={"quantity"}
                        value={quantity}
                        variant="outlined"
                        autoComplete="off"
                      />
                    </Box>
                  </div>
                  <div className="form-group mb-3 w-full md:w-1/2 md:px-2">
                    <p className="font-semibold text-[#1C4B82] mb-4">
                      Hình thức làm việc
                      <span className="text-[#DD6B4D]">*</span>
                    </p>
                    <Box sx={{ width: 1 }}>
                      <FormControl fullWidth>
                        <InputLabel id={`workplace-select-label`}>
                          Hình thức làm việc
                        </InputLabel>
                        <Select
                          fullWidth
                          className="w-full"
                          labelId={`workplace-select-label`}
                          id="workplace-simple-select"
                          value={workplace}
                          name={"workplace"}
                          onChange={handleChange}
                          label={"Hình thức làm việc"}
                        >
                          {workType &&
                            workType.map((item, index) => {
                              return (
                                <MenuItem value={item.id} key={index}>
                                  {item.name}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  type="submit"
                  sx={{
                    textTransform: "none",
                    lineHeight: "1",
                  }}
                  variant="contained"
                >
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

export default CreatePost;
