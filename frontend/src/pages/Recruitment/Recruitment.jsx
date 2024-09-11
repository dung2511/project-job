import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { firestore } from "../../firebase.config";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  TextField,
  CircularProgress,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import {
  useFetchCareerJob,
  useFetchCity,
  useFetchLevelJob,
  useFetchSalary,
} from "../../hooks/useFetchData";
import { convertSalary } from "../../components/utils";
const initialState = {
  textJob: "",
  selectCareer: "",
  selectCity: "",
  selectSalary: "",
  selectLevel: "",
};
const Recruitment = () => {
  const location = useLocation();
  const { career } = useFetchCareerJob();
  const { listCity } = useFetchCity();
  const { salary } = useFetchSalary();
  const { level } = useFetchLevelJob();
  const [valueSearch, setValueSearch] = useState(initialState);
  const { textJob, selectCareer, selectCity, selectSalary, selectLevel } =
    valueSearch;
  const handleChange = (e) => {
    setValueSearch({
      ...valueSearch,
      [e.target.name]: e.target.value,
    });
  };
  const [listData, setListData] = useState();
  const [loading, setLoading] = useState(true);
  const fetchDataRecruitment = async () => {
    try {
      const conditions = [];
      if (selectCareer !== "") {
        conditions.push(where("careerJob", "==", selectCareer));
      }
      if (selectCity !== "") {
        conditions.push(where("workJob", "==", selectCity));
      }
      const q = query(collection(firestore, "Posts"), ...conditions);
      console.log(q);

      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      if (textJob !== "") {
        data = data.filter(
          (doc) => doc.positionJob.toLowerCase().includes(textJob.toLowerCase())
        );
      }
      setListData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const getDataSearch = () => {
    const queryParams = new URLSearchParams(location.search);
    const textJob = queryParams.get("textJob") || "";
    const selectCareer = queryParams.get("selectCareer") || "";
    const selectCity = queryParams.get("selectCity") || "";
    const selectSalary = queryParams.get("selectSalary") || "";
    const selectLevel = queryParams.get("selectLevel") || "";
    setValueSearch({
      textJob,
      selectCareer,
      selectCity,
      selectSalary,
      selectLevel,
    });
  };
  useEffect(() => {
    getDataSearch();
  }, [location]);
  useEffect(() => {
    fetchDataRecruitment();
  }, []);
  if (loading) {
    return (
      <Box className="flex items-center justify-center">
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      <div className="xl:py-10 py-6 shadow-[0px_2px_25px_0px_rgba(0,0,0,.1)]">
        <div className="container">
          <div className="flex-wrap items-center block sm:flex">
            <div className="flex-1 mb-4 sm:mb-0">
              <form
                action={"/tuyen-dung/"}
                method="GET"
                className="form-search rounded-lg bg-white shadow-[0px_4px_25px_0px_rgba(0,0,0,.2)] px-2 py-2"
              >
                <div className="flex flex-wrap items-center -mx-2">
                  <div className="w-full lg:w-auto flex-1 px-2 flex flex-wrap">
                    <div className="w-full md:w-1/2 lg:w-1/4 px-1 lg:last:pr-0 lg:py-0">
                      <Box sx={{ width: 1 }} autoComplete="off">
                        <TextField
                          type={"text"}
                          fullWidth
                          onChange={handleChange}
                          id={`outlined-textJob`}
                          placeholder={"Vị trí tuyển dụng"}
                          name={"textJob"}
                          value={textJob}
                          variant="outlined"
                          autoComplete="off"
                        />
                      </Box>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-1 lg:last:pr-0 lg:py-0">
                      <Box sx={{ width: 1 }}>
                        <FormControl fullWidth>
                          <Select
                            fullWidth
                            className="w-full"
                            labelId={"salary-select-label"}
                            id="salary-simple-select"
                            name={"selectSalary"}
                            displayEmpty
                            value={selectSalary}
                            onChange={handleChange}
                          >
                            <MenuItem value="" disabled>
                              <em>Tất cả mức lương</em>
                            </MenuItem>
                            {salary &&
                              salary.map((item, index) => {
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
                    <div className="w-full md:w-1/2 lg:w-1/4 px-1 lg:last:pr-0 lg:py-0">
                      <Box sx={{ width: 1 }}>
                        <FormControl fullWidth>
                          <Select
                            fullWidth
                            className="w-full"
                            labelId={"career-select-label"}
                            id="career-simple-select"
                            name={"selectCareer"}
                            displayEmpty
                            value={selectCareer}
                            onChange={handleChange}
                          >
                            <MenuItem value="" disabled>
                              <em>Tất cả ngành nghề</em>
                            </MenuItem>
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
                    <div className="w-full md:w-1/2 lg:w-1/4 px-1 lg:last:pr-0 lg:py-0">
                      <Box sx={{ width: 1 }}>
                        <FormControl fullWidth>
                          <Select
                            fullWidth
                            className="w-full"
                            labelId={"listCity-select-label"}
                            id="listCity-simple-select"
                            name={"selectCity"}
                            displayEmpty
                            value={selectCity}
                            onChange={handleChange}
                          >
                            <MenuItem value="" disabled>
                              <em>Tất cả tỉnh/thành phố</em>
                            </MenuItem>
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
                  </div>
                  <div className="w-full lg:w-auto px-2 text-center lg:text-right">
                    <button
                      type="submit"
                      className="btn inline-flex py-4 px-6 rounded bg-[#DD6B4D] hover:bg-[#ff8768] text-white font-bold"
                    >
                      Tìm kiếm
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:py-10 py-6">
        <div className="container">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full lg:w-1/4 px-2">
              <div className="form-search__job ">
                <span className="close-filter__job absolute top-2 right-2 z-[1] block lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M1 1L19 19M19 1L1 19"
                      stroke="#454545"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
                <div className="box-filter__item border border-solid border-[#A8A8A8] rounded-lg 2xl:py-6 2xl:px-8 xl:p-6 p-4 mb-4 last:mb-0">
                  <p className="title font-medium text-[#000] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] mb-2">
                    Ngành nghề
                  </p>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="career-radio-buttons-group-label"
                      defaultValue={selectCareer}
                      name="radio-buttons-group-career"
                    >
                      {career.map((item) => {
                        return (
                          <FormControlLabel
                            key={item.id}
                            value={item.id}
                            control={<Radio />}
                            label={item.name}
                          />
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="box-filter__item border border-solid border-[#A8A8A8] rounded-lg 2xl:py-6 2xl:px-8 xl:p-6 p-4 mb-4 last:mb-0">
                  <p className="title font-medium text-[#000] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] mb-4">
                    Cấp bậc
                  </p>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="levelJob-radio-buttons-group-label"
                      defaultValue={selectLevel}
                      name="radio-buttons-group-levelJob"
                    >
                      {level.map((item) => {
                        return (
                          <FormControlLabel
                            key={item.id}
                            value={item.id}
                            control={<Radio />}
                            label={item.name}
                          />
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="box-filter__item border border-solid border-[#A8A8A8] rounded-lg 2xl:py-6 2xl:px-8 xl:p-6 p-4 mb-4 last:mb-0">
                  <p className="title font-medium text-[#000] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] mb-4">
                    Mức lương
                  </p>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="salary-radio-buttons-group-label"
                      defaultValue={selectSalary}
                      name="radio-buttons-group-salary"
                    >
                      {salary.map((item) => {
                        return (
                          <FormControlLabel
                            key={item.id}
                            value={item.id}
                            control={<Radio />}
                            label={item.name}
                          />
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-3/4 px-2">
              <div className="flex items-center justify-between head">
                <div className="head-title-all leading-[1.3] border-l-[5px] border-solid border-[#DD6B4D] pl-4 font-bold 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
                  <span className="text-[var(--cl-blue)]">
                    Tìm thấy
                    <span className="count-post text-[var(--cl-orange)]">
                      1546
                    </span>
                    việc làm
                  </span>
                </div>
                <div className="show-filter__job lg:hidden inline-flex items-center justify-center w-10 h-10 rounded bg-[#E1E1E1] text-[#000] cursor-pointer">
                  <span
                    className="w-6 h-6 bg-no-repeat bg-contain icon"
                    style={{
                      backgroundImage: "url(theme/frontend/images/filter.png)",
                    }}
                  ></span>
                </div>
              </div>
              <div className="list-job results_filter_post mt-4">
                {listData &&
                  listData.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="item-filter block md:flex flex-wrap bg-[#F7F7F7] border border-solid border-[#A8A8A8] rounded-lg xl:px-5 xl:py-6 p-4 mb-4 relative"
                      >
                        <div className="flex-1 items-center block mb-4 sm:flex md:mr-6 md:mb-0">
                          <div className="avatar w-full sm:w-[110px] shrink-0 sm:mr-4 mb-2 sm:mb-0">
                            <div className="img c-img pt-[100%] rounded overflow-hidden">
                              <img
                                loading="lazy"
                                src={item.avatar}
                                alt={item.positionJob}
                                title={item.positionJob}
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <div className="flex-1 info-content">
                            <p className="name font-semibold text-[#000] text-[0.875rem] mb-2">
                              {item.positionJob}
                            </p>
                            <p className="company text-[#7d7d7d] text-[.875rem] mb-2">
                              {item.nameCompany}
                            </p>
                            <ul className="flex flex-wrap lis-info__detail ">
                              <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                                <i className="mr-1 fa-regular fa-user"></i>
                                Vị trí: {item.levelJob}
                              </li>
                              <li className="flex items-center text-[#000] lg:text-[0.875rem] mr-4 last:mr-0 mb-4">
                                <i className="fa-regular fa-file-lines mr-1"></i>
                                Kinh nghiệm: {item.experienceJob}
                              </li>
                            </ul>
                            <div className="flex flex-wrap work-position">
                              <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                                {convertSalary(item.minSalary)} -{" "}
                                {convertSalary(item.maxSalary)}
                              </div>
                              <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                                <span>{item.workJob}</span>
                              </div>
                              <div className="item mr-2 mb-2 text-[#000] text-[0.875rem] bg-[rgba(28,75,130,.2)] rounded-3xl py-2 px-4">
                                {item.timeCreated.seconds}
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link
                          to={`/tuyen-dung/${item.slug}`}
                          title="Xem chi tiết"
                          className="btn btn-view mt-auto py-2 font-medium rounded border border-solid border-[#1C4B82] text-[#1C4B82] bg-[#DBECFF] hover:bg-[#1C4B82] hover:text-white shrink-0"
                        >
                          Xem chi tiết
                        </Link>
                        <Link
                          to={"/"}
                          title="Yêu thích"
                          favourite-user=""
                          className="btn-favourite  absolute z-[1] xl:top-6 xl:right-5 top-4 right-4 text-[#000] text-[1.25rem]"
                        >
                          <i className="fa-regular fa-bookmark"></i>
                        </Link>
                      </div>
                    );
                  })}

                <div className="pagination" pagination-filter="">
                  <strong>1</strong>
                  <Link to="https://joblaw.vn/tuyen-dung?page=2" data-page="2">
                    2
                  </Link>
                  <Link to="https://joblaw.vn/tuyen-dung?page=3" data-page="3">
                    3
                  </Link>
                  <Link to="https://joblaw.vn/tuyen-dung?page=4" data-page="4">
                    4
                  </Link>

                  <span style={{ pointerEvents: "none" }}> ... </span>
                  <Link
                    to="https://joblaw.vn/tuyen-dung?page=78"
                    data-page="78"
                  >
                    78
                  </Link>
                  <Link to="https://joblaw.vn/tuyen-dung?page=2" data-page="2">
                    <i
                      className="fa-solid fa-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="over-lay-sidebar fixed lg:hidden w-full h-full z-50 block top-0 right-[-100%] bg-[rgba(0,0,0,.6)] transition-all duration-300"></div>
        <span className="show-sidebar-post lg:hidden flex items-center justify-center w-10 h-10 rounded-tl-lg rounded-bl-lg bg-white shadow-[0_4px_10px_rgba(0,0,0,.3)] text-[var(--cl-text-main)] fixed top-[20%] right-0 z-10">
          <i className="fa-solid fa-filter"></i>
        </span>
      </div>
    </>
  );
};

export default Recruitment;
