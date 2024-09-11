import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetchCareerJob, useFetchCity } from "../../../hooks/useFetchData";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
const initialState = {
  textJob: "",
  selectCareer: "",
  selectCity: "",
};
const BannerHome = () => {
  const { career } = useFetchCareerJob();
  const { listCity } = useFetchCity();
  const [valueSearch, setValueSearch] = useState(initialState);
  const { textJob, selectCareer, selectCity } = valueSearch;
  const handleChange = (e) => {
    setValueSearch({
      ...valueSearch,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="section-banner__home xl:pt-16 xl:pb-[160px] py-10 bg-no-repeat bg-cover bg-right">
      <div className="container">
        <h2 className="title text-center text-white font-bold 2xl:text-[2.5rem] xl:text-[1.87rem] text-[1.25rem] xl:mb-4 mb-2">
          Một bước đến thành công
        </h2>
        <div className="short_content text-center text-white xl:mb-10 mb-2">
          Tiếp cận thông tin tuyển dụng việc làm pháp luật mỗi ngày từ hàng ngàn
          doanh nghiệp uy tín tại Việt Nam
        </div>
        <form
          action={"/tuyen-dung/"}
          method="GET"
          className="form-search rounded-lg bg-white shadow-[0px_4px_25px_0px_rgba(0,0,0,.2)] px-2 py-2"
        >
          <div className="flex flex-wrap items-center -mx-2">
            <div className="w-full lg:w-auto flex-1 px-2 flex flex-wrap">
              <div className="w-full md:w-1/2 px-3 lg:last:pr-0 lg:py-0">
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
        <div className="propose flex xl:mt-6 mt-4">
          <p className="title text-white font-bold shrink-0 lg:mr-8 mr-4 pt-2">
            Đề xuất:
          </p>
          <ul className="flex flex-wrap ">
            {career &&
              career.map((item, index) => {
                return (
                  <li className="mr-4 mb-2" key={index}>
                    <Link
                      to={item.slug}
                      title={item.name}
                      className="block bg-white py-2 px-4 rounded text-[#000] hover:bg-[#DD6B4D] hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
