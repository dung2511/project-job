import { useParams } from "react-router-dom";
import SidebarEmployer from "../../../components/layout/SidebarEmployer";
import InputComponent from "../../../components/InputComponent";
import SelectComponent from "../../../components/SelectComponent";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  startAt,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { auth, firestore } from "../../../firebase.config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { Editor } from "@tinymce/tinymce-react";
import { v4 } from "uuid";
import { convertTimestampToDate, createSlug } from "../../../components/utils";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import {
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
const EditorPost = () => {
  const { id } = useParams();
  const [dataPost, setDataPost] = useState({});
  const [employerDetail, setEmployerDetail] = useState(null);
  const editorRef = useRef();
  const navigate = useNavigate();
  const [positionJob, setPositionJob] = useState("");
  const [levelJob, setLevelJob] = useState("");
  const [careerJob, setCareerJob] = useState("");
  const [workJob, setWorkJob] = useState("");
  const [experienceJob, setExperienceJob] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [unit, setUnit] = useState("");
  const [salaryNegotiable, setSalaryNegotiable] = useState(false);
  const [descriptionJob, setDescriptionJob] = useState("");
  const [candidateRequirement, setCandidateRequirement] = useState("");
  const [benefit, setBenefit] = useState("");
  const [timeWork, setTimeWork] = useState("");
  const [timeCreated, setTimeCreated] = useState(dayjs(new Date()));
  const [expirationDate, setExpirationDate] = useState(dayjs(new Date()));
  const [quantity, setQuantity] = useState("");
  const [workplace, setWorkplace] = useState("");
  const fetchDataPost = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        try {
          const data = await getDoc(doc(firestore, "Posts", id));
          if (data.exists()) {
            setDataPost(data.data());
            setPositionJob(dataPost.positionJob);
            setLevelJob(dataPost.levelJob);
            setCareerJob(dataPost.careerJob);
            setWorkJob(dataPost.workJob);
            setExperienceJob(dataPost.experienceJob);
            setMinSalary(dataPost.minSalary);
            setMaxSalary(dataPost.maxSalary);
            setUnit(dataPost.unit);
            setSalaryNegotiable(dataPost.salaryNegotiable);
            setDescriptionJob(dataPost.descriptionJob);
            setCandidateRequirement(dataPost.candidateRequirement);
            setBenefit(dataPost.benefit);
            setTimeWork(dataPost.timeWork);
            setTimeCreated(dayjs(dataPost.timeCreated.toDate()));
            setExpirationDate(dayjs(dataPost.expirationDate.toDate()));
            setQuantity(dataPost.quantity);
            setWorkplace(dataPost.workplace);
          }
        } catch (error) {
          console.log(error);
        }
      }
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
  const handleUpdatePost = async (e) => {
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
      const docRef = doc(firestore, "Posts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const slug =
          positionJob == dataPost.positionJob
            ? dataPost.slug
            : createSlug(positionJob) + v4();
        const dataUpdatePost = {
          slug: slug,
          positionJob: positionJob || dataPost.positionJob,
          levelJob: levelJob || dataPost.levelJob,
          careerJob: careerJob || dataPost.careerJob,
          workJob: workJob || dataPost.workJob,
          experienceJob: experienceJob || dataPost.experienceJob,
          minSalary: minSalary || dataPost.minSalary,
          maxSalary: maxSalary || dataPost.maxSalary,
          unit: unit || dataPost.unit,
          salaryNegotiable: salaryNegotiable || dataPost.salaryNegotiable,
          descriptionJob: descriptionJob || dataPost.descriptionJob,
          candidateRequirement:
            candidateRequirement || dataPost.candidateRequirement,
          benefit: benefit || dataPost.benefit,
          timeWork: timeWork || dataPost.timeWork,
          timeCreated: timeCreated.toDate() || dataPost.timeCreated,
          expirationDate: expirationDate.toDate() || dataPost.toDate(),
          quantity: quantity || dataPost.quantity,
          workplace: workplace || dataPost.workplace,
        };
        await updateDoc(docRef, dataUpdatePost);
        toast.success("Cập nhật thành công !!", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [listCity, setListCity] = useState(null);
  const [level, setLevel] = useState(null);
  const [career, setCareer] = useState(null);
  const [experience, setExperience] = useState(null);
  const [workType, setWorkType] = useState(null);
  const [listUnit, setListUnit] = useState(null);
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
  const fectchDataLevel = async () => {
    try {
      const q = query(collection(firestore, "levels"));
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setLevel(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDataCareer = async () => {
    try {
      const q = query(collection(firestore, "career_categories"));
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setCareer(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDataExperience = async () => {
    try {
      const q = query(
        collection(firestore, "experiences"),
        orderBy("id"),
        startAt(0)
      );
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setExperience(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDataWorkType = async () => {
    try {
      const q = query(
        collection(firestore, "working_types"),
        orderBy("id"),
        startAt(0)
      );
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setWorkType(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDataListUnit = async () => {
    try {
      const q = query(
        collection(firestore, "unit_type"),
        orderBy("id"),
        startAt(0)
      );
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setListUnit(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDataPost();
    fetchDataCity();
    fectchDataLevel();
    fetchDataCareer();
    fetchDataExperience();
    fetchDataWorkType();
    checkAuth();
    fetchDataListUnit();
  }, [dataPost]);
  if (Object.keys(dataPost).length == 0) {
    return (
      <Box className="flex items-center justify-center my-20">
        <CircularProgress />
      </Box>
    );
  }
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
            <form onSubmit={handleUpdatePost}>
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
                      onChange={(e) => setPositionJob(e.target.value)}
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
                        onChange={(e) => setLevelJob(e.target.value)}
                        label={"Cấp bậc"}
                      >
                        {level &&
                          level.map((item, index) => {
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
                        onChange={(e) => setCareerJob(e.target.value)}
                        label={"Ngành nghề"}
                      >
                        {career &&
                          career.map((item, index) => {
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
                        onChange={(e) => setWorkJob(e.target.value)}
                        label={"Nơi làm việc"}
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
                        onChange={(e) => setExperienceJob(e.target.value)}
                        label={"Kinh nghiệm làm việc"}
                      >
                        {experience &&
                          experience.map((item, index) => {
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
                          onChange={(e) => setMinSalary(e.target.value)}
                          id={`outlined-minSalary`}
                          label={"Lương tối thiểu"}
                          name={"minSalary"}
                          value={
                            minSalary !== undefined && minSalary !== null
                              ? minSalary
                              : ""
                          }
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
                          onChange={(e) => setMaxSalary(e.target.value)}
                          id={`outlined-maxSalary`}
                          label={"Lương tối đa"}
                          name={"maxSalary"}
                          value={
                            maxSalary !== undefined && maxSalary !== null
                              ? maxSalary
                              : ""
                          }
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
                            onChange={(e) => setUnit(e.target.value)}
                            label={"Đơn vị"}
                          >
                            {listUnit &&
                              listUnit.map((item, index) => {
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
                    <div className="flex items-center mb-2">
                      <label className="form-status__all block relative">
                        <input
                          onChange={(e) =>
                            setSalaryNegotiable(e.target.checked)
                          }
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
                    onEditorChange={(content) => setDescriptionJob(content)}
                    init={{
                      placeholder: "Hãy viết gì đó ở đây...",
                      height: 300,
                      width: "100%",
                      menubar: false,
                      plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
                      toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
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
                      setCandidateRequirement(content)
                    }
                    init={{
                      placeholder: "Hãy viết gì đó ở đây...",
                      height: 300,
                      width: "100%",
                      menubar: false,
                      plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
                      toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
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
                    onEditorChange={(content) => setBenefit(content)}
                    init={{
                      placeholder: "Hãy viết gì đó ở đây...",
                      height: 300,
                      width: "100%",
                      menubar: false,
                      plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
                      toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
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
                    onEditorChange={(content) => setTimeWork(content)}
                    init={{
                      placeholder: "Hãy viết gì đó ở đây...",
                      height: 300,
                      width: "100%",
                      menubar: false,
                      plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
                      toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
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
                        name="timeCreated"
                        className="w-full"
                        value={timeCreated}
                        onChange={(e) => setTimeCreated(e)}
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
                        name="expirationDate"
                        className="w-full"
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e)}
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
                        onChange={(e) => setQuantity(e.target.value)}
                        id={`outlined-quantity`}
                        label={"Lương tối đa"}
                        name={"quantity"}
                        value={
                          quantity !== undefined && quantity !== null
                            ? quantity
                            : ""
                        }
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
                          onChange={(e) => setWorkplace(e.target.value)}
                          label={"Hình thức làm việc"}
                        >
                          {workType &&
                            workType.map((item, index) => {
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
              </div>
              <div className="form-button text-center">
                <div className="container">
                  <button
                    type="submit"
                    className="btn py-[10px] px-[50px] rounded font-medium bg-[#DD6B4D] text-white hover:bg-[#ff8768] hover:text-white"
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorPost;
