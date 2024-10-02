import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetchCareerJob, useFetchCity } from "../../../hooks/useFetchData";
import { Box, FormControl, MenuItem, Select, TextField } from "@mui/material";
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
  const navigate = useNavigate();
  const handleChange = (e) => {
    setValueSearch({
      ...valueSearch,
      [e.target.name]: e.target.value,
    });
  };
  const handleSearchForm = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if(textJob) params.append("textJob", textJob);
    if(selectCareer) params.append("selectCareer", selectCareer);
    if(selectCity) params.append("selectCity", selectCity);
    navigate(`/tuyen-dung?${params.toString()}`)  
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
          onSubmit={handleSearchForm}
          className="form-search rounded-lg bg-white shadow-[0px_4px_25px_0px_rgba(0,0,0,.2)] px-2 py-2"
        >
          <div className="flex flex-wrap items-center -mx-2">
            <div className="w-full lg:w-auto flex-1 px-2 flex flex-wrap">
              <div className="w-full lg:w-1/2 mb-2 lg:mb-0 lg:pr-2 lg:py-0">
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
              <div className="w-full md:w-1/2 lg:w-1/4 md:pr-1 lg:py-0">
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
                      <MenuItem value="">
                        Tất cả ngành nghề
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
              <div className="w-full md:w-1/2 lg:w-1/4 md:pl-1 lg:py-0">
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
                      <MenuItem value="">
                        Tất cả tỉnh/thành phố
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
  );
};

export default BannerHome;
