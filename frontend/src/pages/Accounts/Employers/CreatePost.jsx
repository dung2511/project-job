import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
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
const initialState = {
  positionJob: "",
  levelJob: "",
  careerJob: "",
  workJob: "",
  experienceJob: "",
  minSalary: "",
  maxSalary: "",
  unit: "",
  salaryNegotiable: 0,
  descriptionJob: "",
  candidateRequirement: "",
  benefit: "",
  timeWork: "",
  quantity: "",
  workplace: "",
  timeCreated: dayjs(new Date()),
  expirationDate: dayjs(new Date()),
};
const CreatePost = () => {
  const [employerDetail, setEmployerDetail] = useState(null);
  const editorRef = useRef();
  const navigate = useNavigate();
  const [data, setData] = useState(initialState);
  const {
    positionJob,
    levelJob,
    careerJob,
    workJob,
    experienceJob,
    minSalary,
    maxSalary,
    unit,
    salaryNegotiable,
    descriptionJob,
    candidateRequirement,
    benefit,
    timeWork,
    quantity,
    timeCreated,
    expirationDate,
    workplace,
  } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleDateChange = (date) => {
    setData({ ...data, [date.target.name]: date });
  };
  const handleEditorChange = (content, name) => {
    setData({
      ...data,
      [name]: content,
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
  const handleCreatePost = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    try {
      if (positionJob == "") {
        toast.error("Vui lòng nhập chức danh công việc !!", {
          position: "top-right",
        });
        return;
      }
      if (levelJob == "") {
        toast.error("Vui lòng chọn cấp bậc !!", {
          position: "top-right",
        });
        return;
      }
      if (careerJob == "") {
        toast.error("Vui lòng chọn ngành nghề !!", {
          position: "top-right",
        });
        return;
      }
      if (workJob == "") {
        toast.error("Vui lòng chọn nơi làm việc !!", {
          position: "top-right",
        });
        return;
      }
      if (experienceJob == "") {
        toast.error("Vui lòng chọn kinh nghiệm làm việc !!", {
          position: "top-right",
        });
        return;
      }
      if (salaryNegotiable == 0) {
        if (minSalary == "") {
          toast.error("Vui lòng nhập mức lương tối thiểu !!", {
            position: "top-right",
          });
          return;
        }
        if (Number(minSalary) <= 10000) {
          toast.error("Mức lương tối thiểu phải lớn hơn 10.000đ !!", {
            position: "top-right",
          });
          return;
        }
        if (isNaN(minSalary) && isNaN(maxSalary)) {
          toast.error("Mức lương phải là số !!", {
            position: "top-right",
          });
          return;
        }
        if (maxSalary == "") {
          toast.error("Vui lòng nhập mức lương tối đa !!", {
            position: "top-right",
          });
          return;
        }
        if (Number(maxSalary) <= Number(minSalary)) {
          toast.error("Mức lương tối đa phải lớn hơn mức lương tối thiểu !!", {
            position: "top-right",
          });
          return;
        }
      }
      if (descriptionJob == "") {
        toast.error("Vui lòng nhập mô tả công việc !!", {
          position: "top-right",
        });
        return;
      }
      if (candidateRequirement == "") {
        toast.error("Vui lòng nhập yêu cầu ứng viên !!", {
          position: "top-right",
        });
        return;
      }
      if (benefit == "") {
        toast.error("Vui lòng nhập quyền lợi !!", {
          position: "top-right",
        });
        return;
      }
      if (timeWork == "") {
        toast.error("Vui lòng nhập thời gian làm việc !!", {
          position: "top-right",
        });
        return;
      }
      if (quantity == "") {
        toast.error("Vui lòng nhập số lượng ứng viên !!", {
          position: "top-right",
        });
        return;
      }
      if (workplace == "") {
        toast.error("Vui lòng chọn hình thức làm việc !!", {
          position: "top-right",
        });
        return;
      }
      if (expirationDate.isBefore(timeCreated)) {
        toast.error("Ngày hết hạn không thể trước ngày tạo !!", {
          position: "top-right",
        });
        return;
      }
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
        unit: unit || 1,
        salaryNegotiable: salaryNegotiable || 0,
        descriptionJob: descriptionJob || "",
        candidateRequirement: candidateRequirement || "",
        benefit: benefit || "",
        timeWork: timeWork || "",
        timeCreated: timeCreated ? timeCreated.toDate() : new Date(),
        expirationDate: expirationDate ? expirationDate.toDate() : new Date(),
        quantity: quantity || 0,
        workplace: workplace || "",
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
  const { career } = useFetchCareerJob();
  const { listCity } = useFetchCity();
  const { level } = useFetchLevelJob();
  const { experience } = useFetchExperience();
  const { workType } = useFetchWorkType();
  const { listUnit } = useFetchUnitType();
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
            <form onSubmit={handleCreatePost}>
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
                      onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                          onChange={handleChange}
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
                          onChange={handleChange}
                          id={`outlined-maxSalary`}
                          label={"Lương tối đa"}
                          name={"maxSalary"}
                          value={maxSalary}
                          variant="outlined"
                          autoComplete="off"
                        />
                      </Box>
                    </div>
                    <div className="flex items-center mr-4 min-w-[6rem]">
                      <Box sx={{ width: 1 }}>
                        <FormControl fullWidth>
                          <InputLabel id={`unit-select-label`}>
                            Đơn vị
                          </InputLabel>
                          <Select
                            fullWidth
                            className="w-full"
                            labelId={`unit-select-label`}
                            id="unit-simple-select"
                            value={unit}
                            name={"unit"}
                            onChange={handleChange}
                            label={"Đơn vị"}
                          >
                            {listUnit &&
                              listUnit.map((item, index) => {
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
                    onEditorChange={(content) =>
                      handleEditorChange(content, "descriptionJob")
                    }
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
                    onEditorChange={(content) =>
                      handleEditorChange(content, "candidateRequirement")
                    }
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
                    onEditorChange={(content) =>
                      handleEditorChange(content, "benefit")
                    }
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
                    onEditorChange={(content) =>
                      handleEditorChange(content, "timeWork")
                    }
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
                      Ngày đăng
                      <span className="text-[#DD6B4D]">*</span>
                    </p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        name={"timeCreated"}
                        className="w-full"
                        value={dayjs(timeCreated.toDate())}
                        onChange={handleDateChange}
                      />
                    </LocalizationProvider>
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
                        onChange={handleDateChange}
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
                        <InputLabel id={`unit-select-label`}>
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
