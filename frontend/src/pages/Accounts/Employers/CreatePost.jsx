import {
  collection,
  documentId,
  onSnapshot,
  orderBy,
  query,
  startAt,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
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
const CreatePost = () => {
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
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const checkAuth = async () => {
    auth.onAuthStateChanged((user) => {
      if (user == null) {
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
        if (formData.maxSalary == "") {
          toast.error("Vui lòng nhập mức lương tối đa !!", {
            position: "top-right",
          });
          return;
        }
        if (Number(formData.maxSalary) <= Number(formData.maxSalary)) {
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
                  <input
                    type="text"
                    name="positionJob"
                    defaultValue={formData.positionJob}
                    onChange={handleInputChange}
                    placeholder="Nhập chức danh công việc"
                    className="form-control border-solid border p-3 rounded w-full border-[#ebebeb]"
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
                    <div className="flex items-center">
                      <span style={{ marginRight: "5px" }}>Từ: </span>
                      <InputComponent
                        name={"minSalary"}
                        onChange={handleInputChange}
                        value={formData.minSalary}
                        label={"Lương tối thiểu"}
                      />
                    </div>
                    <div className="flex items-center">
                      <span style={{ marginRight: "5px" }}>Đến: </span>
                      <InputComponent
                        name={"maxSalary"}
                        onChange={handleInputChange}
                        value={formData.maxSalary}
                        label={"Lương tối đa"}
                      />
                    </div>
                    <div className="flex items-center">
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
                  <textarea
                    className="form-control w-full border-[#A8A8A8] border border-solid p-3 rounded bg-[#FCFCFC] h-[125px] editor"
                    placeholder="Thông tin cho vị trí công việc yêu cầu, trách nhiệm mà ứng viên có thể đảm nhận khi làm việc ở công ty"
                  ></textarea>
                  <p className="sub text-[.75rem] text-[#7d7d7d]">
                    (Bạn có thể nhập tối đa 5.000 ký tự)
                  </p>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Yêu cầu ứng viên <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <textarea
                    className="form-control w-full border-[#A8A8A8] border border-solid p-3 rounded bg-[#FCFCFC] h-[125px] editor"
                    placeholder="Nhập mô tả công việc"
                    s
                  ></textarea>
                  <p className="sub text-[.75rem] text-[#7d7d7d]">
                    (Bạn có thể nhập tối đa 5.000 ký tự)
                  </p>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Quyền lợi <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <textarea
                    placeholder="Nhập quyền lợi"
                    className="form-control w-full border-[#A8A8A8] border border-solid p-3 rounded bg-[#FCFCFC] h-[125px] editor"
                  ></textarea>

                  <p className="sub text-[.75rem] text-[#7d7d7d]">
                    (Bạn có thể nhập tối đa 5.000 ký tự)
                  </p>
                </div>
                <div className="form-group mb-3">
                  <p className="font-semibold text-[#1C4B82] mb-2">
                    Thời gian làm việc <span className="text-[#DD6B4D]">*</span>
                  </p>
                  <textarea
                    placeholder="Nhập thời gian làm việc"
                    className="form-control w-full border-[#A8A8A8] border border-solid p-3 rounded bg-[#FCFCFC] h-[125px] editor"
                  ></textarea>

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
                    <input
                      type="text"
                      className="form-control w-full rounded border border-solid p-3 border-[#ebebeb]"
                      placeholder="Vui lòng nhập"
                    />
                  </div>
                  <div className="form-group mb-3 w-full md:w-1/2 md:px-2">
                    <p className="font-semibold text-[#1C4B82] mb-2">
                      Hình thức làm việc
                      <span className="text-[#DD6B4D]">*</span>
                    </p>
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
