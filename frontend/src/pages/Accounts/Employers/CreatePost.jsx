import {
<<<<<<< HEAD
  addDoc,
  collection,
  doc,
  getDoc,
=======
  collection,
  documentId,
>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398
  onSnapshot,
  orderBy,
  query,
  startAt,
<<<<<<< HEAD
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
=======
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398
import { auth, firestore } from "../../../firebase.config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import SidebarEmployer from "../../../components/layout/SidebarEmployer";
import SelectComponent from "../../../components/SelectComponent";
import InputComponent from "../../../components/InputComponent";
<<<<<<< HEAD
import { Editor } from "@tinymce/tinymce-react";
import { v4 } from "uuid";
import { createSlug } from "../../../components/createSlug";
const CreatePost = () => {
  const [employerDetail, setEmployerDetail] = useState(null);
  const editorRef = useRef();
=======
const CreatePost = () => {
>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    positionJob: "",
    levelJob: "",
    careerJob: "",
    workJob: "",
    experienceJob: "",
    minSalary: "",
    maxSalary: "",
    unit: "",
    salaryNegotiable: false,
    descriptionJob: "",
    candidateRequirement: "",
    benefit: "",
    timeWork: "",
    timeCreated: dayjs(new Date()),
    expirationDate: dayjs(new Date()),
    quantity: "",
    workplace: "",
  });
  const handleEditorChange = (content, editorName) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [editorName]: content,
    }));
  };
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
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
      if (formData.positionJob == "") {
        toast.error("Vui lòng nhập chức danh công việc !!", {
          position: "top-right",
        });
        return;
      }
      if (formData.levelJob == "") {
        toast.error("Vui lòng chọn cấp bậc !!", {
          position: "top-right",
        });
        return;
      }
      if (formData.careerJob == "") {
        toast.error("Vui lòng chọn ngành nghề !!", {
          position: "top-right",
        });
        return;
      }
      if (formData.workJob == "") {
        toast.error("Vui lòng chọn nơi làm việc !!", {
          position: "top-right",
        });
        return;
      }
      if (formData.experienceJob == "") {
        toast.error("Vui lòng chọn kinh nghiệm làm việc !!", {
          position: "top-right",
        });
        return;
      }
      if (formData.salaryNegotiable == 0) {
        if (formData.minSalary == "") {
          toast.error("Vui lòng nhập mức lương tối thiểu !!", {
            position: "top-right",
          });
          return;
        }
<<<<<<< HEAD
        if (Number(formData.minSalary) <= 10000) {
          toast.error("Mức lương tối thiểu phải lớn hơn 10.000đ !!", {
            position: "top-right",
          });
          return;
        }
        if (isNaN(formData.minSalary) && isNaN(formData.maxSalary)) {
          toast.error("Mức lương phải là số !!", {
            position: "top-right",
          });
          return;
        }
=======
>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398
        if (formData.maxSalary == "") {
          toast.error("Vui lòng nhập mức lương tối đa !!", {
            position: "top-right",
          });
          return;
        }
<<<<<<< HEAD
        if (Number(formData.maxSalary) <= Number(formData.minSalary)) {
=======
        if (Number(formData.maxSalary) <= Number(formData.maxSalary)) {
>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398
          toast.error("Mức lương tối đa phải lớn hơn mức lương tối thiểu !!", {
            position: "top-right",
          });
          return;
        }
      }
      if (formData.descriptionJob == "") {
        toast.error("Vui lòng nhập mô tả công việc !!", {
          position: "top-right",
        });
        return;
      }
      if (formData.candidateRequirement == "") {
        toast.error("Vui lòng nhập yêu cầu ứng viên !!", {
          position: "top-right",
        });
        return;
      }
      if (formData.benefit == "") {
        toast.error("Vui lòng nhập quyền lợi !!", {
          position: "top-right",
        });
        return;
      }
      if (formData.timeWork == "") {
        toast.error("Vui lòng nhập thời gian làm việc !!", {
          position: "top-right",
        });
        return;
      }
      if (formData.quantity == "") {
        toast.error("Vui lòng nhập số lượng ứng viên !!", {
          position: "top-right",
        });
        return;
      }
      if (formData.workplace == "") {
        toast.error("Vui lòng chọn hình thức làm việc !!", {
          position: "top-right",
        });
        return;
      }
      if (formData.expirationDate.isBefore(formData.timeCreated)) {
        toast.error("Ngày hết hạn không thể trước ngày tạo !!", {
          position: "top-right",
        });
        return;
      }
<<<<<<< HEAD
      const slug = createSlug(formData.positionJob) + v4();
      const cleanedFormData = {
        slug: slug,
        image: employerDetail.imageCompany,
        nameCompany: employerDetail.nameCompany,
        positionJob: formData.positionJob || "",
        levelJob: formData.levelJob || "",
        careerJob: formData.careerJob || "",
        workJob: formData.workJob || "",
        experienceJob: formData.experienceJob || "",
        minSalary: formData.minSalary || 0,
        maxSalary: formData.maxSalary || 0,
        unit: formData.unit || 1,
        salaryNegotiable: formData.salaryNegotiable || 0,
        descriptionJob: formData.descriptionJob || "",
        candidateRequirement: formData.candidateRequirement || "",
        benefit: formData.benefit || "",
        timeWork: formData.timeWork || "",
        timeCreated: formData.timeCreated
          ? formData.timeCreated.toDate()
          : new Date(),
        expirationDate: formData.expirationDate
          ? formData.expirationDate.toDate()
          : new Date(),
        quantity: formData.quantity || 0,
        workplace: formData.workplace || "",
      };
      await addDoc(collection(firestore, "Posts"), {
        employerId: user.uid,
        ...cleanedFormData,
      });
      toast.success("Đăng bài thành công !!", {
        position: "top-right",
      });
=======
>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398
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
    fetchDataCity();
    fectchDataLevel();
    fetchDataCareer();
    fetchDataExperience();
    fetchDataWorkType();
    checkAuth();
    fetchDataListUnit();
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
              <span className="text-[var(--cl-blue)]">Đăng tin tuyển dụng</span>
            </div>
            <form onSubmit={handleCreatePost}>
              <div className="form-post-new">
                <p className="title flex items-center xl:text-[1.5rem] text-[1.25rem] mb-6">
                  <span className="icon rounded-full text-[1rem] w-[2.5rem] h-[2.5rem] bg-[#DD6B4D] text-white inline-flex items-center justify-center shrink-0 mr-2">
                    <i className="fa-solid fa-suitcase"></i>
                  </span>
                  Mô tả công việc
                </p>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Chức danh <span className="text-[#DD6B4D]">*</span>
                  </p>
<<<<<<< HEAD
                  <InputComponent
                    name={"positionJob"}
                    onChange={handleInputChange}
                    value={formData.positionJob}
                    label={"Nhập chức danh công việc"}
=======
                  <input
                    type="text"
                    name="positionJob"
                    defaultValue={formData.positionJob}
                    onChange={handleInputChange}
                    placeholder="Nhập chức danh công việc"
                    className="form-control border-solid border p-3 rounded w-full border-[#ebebeb]"
>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398
                  />
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Cấp bậc <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <SelectComponent
                    name={"levelJob"}
                    option={level}
                    value={formData.levelJob}
                    onChange={handleInputChange}
                    label={"Cấp bậc"}
                  />
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Ngành nghề <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <SelectComponent
                    name={"careerJob"}
                    option={career}
                    value={formData.careerJob}
                    onChange={handleInputChange}
                    label={"Ngành nghề"}
                  />
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Nơi làm việc<span className="text-[#DD6B4D]">*</span>
                  </p>
                  <SelectComponent
                    name={"workJob"}
                    option={listCity}
                    value={formData.workJob}
                    onChange={handleInputChange}
                    label={"Nơi làm việc"}
                  />
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Kinh nghiệm làm việc
                    <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <SelectComponent
                    name={"experienceJob"}
                    option={experience}
                    value={formData.experienceJob}
                    onChange={handleInputChange}
                    label={"Kinh nghiệm làm việc"}
                  />
                </div>

                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Mức lương<span className="text-[#DD6B4D]">*</span>
                  </p>
                  <div className="import-wage flex flex-wrap">
<<<<<<< HEAD
                    <div className="flex items-center mr-4">
=======
                    <div className="flex items-center">
>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398
                      <span style={{ marginRight: "5px" }}>Từ: </span>
                      <InputComponent
                        name={"minSalary"}
                        onChange={handleInputChange}
                        value={formData.minSalary}
                        label={"Lương tối thiểu"}
                      />
                    </div>
<<<<<<< HEAD
                    <div className="flex items-center mr-4">
=======
                    <div className="flex items-center">
>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398
                      <span style={{ marginRight: "5px" }}>Đến: </span>
                      <InputComponent
                        name={"maxSalary"}
                        onChange={handleInputChange}
                        value={formData.maxSalary}
                        label={"Lương tối đa"}
                      />
                    </div>
<<<<<<< HEAD
                    <div className="flex items-center mr-4 min-w-[6rem]">
=======
                    <div className="flex items-center">
>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398
                      <SelectComponent
                        name={"unit"}
                        value={formData.unit}
                        onChange={handleInputChange}
                        label={"Đơn vị"}
                        option={listUnit}
                      />
                    </div>
                    <div className="flex items-center mb-2">
                      <label className="form-status__all block relative">
                        <input
                          onChange={handleInputChange}
                          type="checkbox"
                          value={1}
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
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Mô tả công việc <span className="text-[#DD6B4D]">*</span>
                  </p>
<<<<<<< HEAD
                  <Editor
                    apiKey="fliutou8i6pp4gkt9r5eb3g8cpicg9y90ono29vhhs1z133h"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    onEditorChange={(content) =>
                      handleEditorChange(content, "descriptionJob")
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
=======
                  <textarea
                    className="form-control w-full border-[#A8A8A8] border border-solid p-3 rounded bg-[#FCFCFC] h-[125px] editor"
                    placeholder="Thông tin cho vị trí công việc yêu cầu, trách nhiệm mà ứng viên có thể đảm nhận khi làm việc ở công ty"
                  ></textarea>
>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398
                  <p className="sub text-[.75rem] text-[#7d7d7d]">
                    (Bạn có thể nhập tối đa 5.000 ký tự)
                  </p>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Yêu cầu ứng viên <span className="text-[#DD6B4D]">*</span>
                  </p>
<<<<<<< HEAD
                  <Editor
                    apiKey="fliutou8i6pp4gkt9r5eb3g8cpicg9y90ono29vhhs1z133h"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    onEditorChange={(content) =>
                      handleEditorChange(content, "candidateRequirement")
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
=======
                  <textarea
                    className="form-control w-full border-[#A8A8A8] border border-solid p-3 rounded bg-[#FCFCFC] h-[125px] editor"
                    placeholder="Nhập mô tả công việc"
                    s
                  ></textarea>
>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398
                  <p className="sub text-[.75rem] text-[#7d7d7d]">
                    (Bạn có thể nhập tối đa 5.000 ký tự)
                  </p>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Quyền lợi <span className="text-[#DD6B4D]">*</span>
                  </p>
<<<<<<< HEAD
                  <Editor
                    apiKey="fliutou8i6pp4gkt9r5eb3g8cpicg9y90ono29vhhs1z133h"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    onEditorChange={(content) =>
                      handleEditorChange(content, "benefit")
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
=======
                  <textarea
                    placeholder="Nhập quyền lợi"
                    className="form-control w-full border-[#A8A8A8] border border-solid p-3 rounded bg-[#FCFCFC] h-[125px] editor"
                  ></textarea>

>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398
                  <p className="sub text-[.75rem] text-[#7d7d7d]">
                    (Bạn có thể nhập tối đa 5.000 ký tự)
                  </p>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Thời gian làm việc <span className="text-[#DD6B4D]">*</span>
                  </p>
<<<<<<< HEAD
                  <Editor
                    apiKey="fliutou8i6pp4gkt9r5eb3g8cpicg9y90ono29vhhs1z133h"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    onEditorChange={(content) =>
                      handleEditorChange(content, "timeWork")
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
=======
                  <textarea
                    placeholder="Nhập thời gian làm việc"
                    className="form-control w-full border-[#A8A8A8] border border-solid p-3 rounded bg-[#FCFCFC] h-[125px] editor"
                  ></textarea>
>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398

                  <p className="sub text-[.75rem] text-[#7d7d7d]">
                    (Bạn có thể nhập tối đa 5.000 ký tự)
                  </p>
                </div>
                <div className="flex flex-wrap items-center md:-mx-2">
                  <div className="form-group mb-3 w-full md:w-1/2 md:px-2">
                    <p className="font-semibold text-[#1C4B82] mb-2">
                      Ngày đăng
                      <span className="text-[#DD6B4D]">*</span>
                    </p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
<<<<<<< HEAD
                        name="timeCreated"
=======
>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398
                        className="w-full"
                        value={formData.timeCreated}
                        onChange={handleInputChange}
                      />
                    </LocalizationProvider>
                  </div>
                  <div className="form-group mb-3 w-full md:w-1/2 md:px-2">
                    <p className="font-semibold text-[#1C4B82] mb-2">
                      Ngày hết hạn
                      <span className="text-[#DD6B4D]">*</span>
                    </p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
<<<<<<< HEAD
                        name="expirationDate"
=======
>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398
                        className="w-full"
                        value={formData.expirationDate}
                        onChange={handleInputChange}
                      />
                    </LocalizationProvider>
                  </div>
                  <div className="form-group mb-3 w-full md:w-1/2 md:px-2">
                    <p className="font-semibold text-[#1C4B82] mb-2">
                      Số lượng cần tuyển
                      <span className="text-[#DD6B4D]">*</span>
                    </p>
<<<<<<< HEAD
                    <InputComponent
                      name={"quantity"}
                      onChange={handleInputChange}
                      value={formData.quantity}
                      label={"Số lượng cần tuyển"}
=======
                    <input
                      type="text"
                      className="form-control w-full rounded border border-solid p-3 border-[#ebebeb]"
                      placeholder="Vui lòng nhập"
>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398
                    />
                  </div>
                  <div className="form-group mb-3 w-full md:w-1/2 md:px-2">
                    <p className="font-semibold text-[#1C4B82] mb-2">
                      Hình thức làm việc
                      <span className="text-[#DD6B4D]">*</span>
                    </p>
<<<<<<< HEAD
                    <SelectComponent
                      name={"workplace"}
                      option={workType}
                      value={formData.workplace}
                      onChange={handleInputChange}
                      label={"Hình thức làm việc"}
                    />
=======
                    <select
                      className="form-control rounded w-full border border-solid p-3 border-[#ebebeb]"
                      defaultValue={"Chọn"}
                    >
                      <option value={"Chọn"} disabled={true}>
                        Chọn
                      </option>

                      {workType &&
                        workType.map((item) => {
                          return (
                            <option value={item.id} key={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                    </select>
>>>>>>> 4bb4de4179fa6df349e45e1621a7d0d81d8e7398
                  </div>
                </div>
              </div>
              <div className="form-button text-center">
                <div className="container">
                  <button
                    type="submit"
                    className="btn py-[10px] px-[50px] rounded font-medium bg-[#DD6B4D] text-white hover:bg-[#ff8768] hover:text-white"
                  >
                    Đăng tin
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

export default CreatePost;
