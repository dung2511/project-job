import React, { useState } from "react";
import { Box, FormControl, MenuItem, Select, TextField } from "@mui/material";
import {
  useFetchCareerJob,
  useFetchCity,
  useFetchLevelJob,
  useFetchSalary,
} from "../../hooks/useFetchData";
import { useSearchParams } from "react-router-dom";
const SearchBar = (props) => {
  const { career } = useFetchCareerJob();
  const { listCity } = useFetchCity();
  const { salary } = useFetchSalary();
  const { level } = useFetchLevelJob();
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobCriteria, setJobCriteria] = useState({
    name: searchParams.get("name") || "",
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    level: searchParams.get("level") || "",
  });
  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setSearchParams({
      ...jobCriteria,
      [e.target.name]: e.target.value,
    });
  };
  const search = async (e) => {
    e.preventDefault();
    await props.fetchJobsCustom(jobCriteria);
  };

  return (
    <div className="py-3 shadow-[0px_2px_25px_0px_rgba(0,0,0,.1)] bg-[#19734e]">
      <div className="container">
        <div className="flex-wrap items-center block sm:flex">
          <div className="flex-1 mb-4 sm:mb-0">
            <form
              onSubmit={search}
              className="form-search rounded-lg px-2 py-2"
            >
              <div className="flex flex-wrap items-center -mx-2">
                <div className="w-full lg:w-auto flex-1 px-2 flex flex-wrap">
                  <div className="w-full md:w-1/2 lg:w-1/4 px-1 lg:last:pr-0 lg:py-0">
                    <Box sx={{ width: 1 }} autoComplete="off">
                      <TextField
                        className="bg-white overflow-hidden rounded"
                        type={"text"}
                        fullWidth
                        onChange={handleChange}
                        id={`outlined-textJob`}
                        placeholder={"Vị trí tuyển dụng"}
                        name={"name"}
                        value={jobCriteria.name}
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
                          className="w-full bg-white overflow-hidden rounded"
                          labelId={"level-select-label"}
                          id="level-simple-select"
                          name={"level"}
                          displayEmpty
                          value={jobCriteria.level}
                          onChange={handleChange}
                        >
                          <MenuItem value="">Cấp bậc</MenuItem>
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
                  <div className="w-full md:w-1/2 lg:w-1/4 px-1 lg:last:pr-0 lg:py-0">
                    <Box sx={{ width: 1 }}>
                      <FormControl fullWidth>
                        <Select
                          fullWidth
                          className="w-full bg-white overflow-hidden rounded"
                          labelId={"career-select-label"}
                          id="career-simple-select"
                          name={"type"}
                          displayEmpty
                          value={jobCriteria.type}
                          onChange={handleChange}
                        >
                          <MenuItem value="">Tất cả ngành nghề</MenuItem>
                          {career &&
                            career.map((item) => {
                              return (
                                <MenuItem value={item.id} key={item.id}>
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
                          className="w-full bg-white overflow-hidden rounded"
                          labelId={"listCity-select-label"}
                          id="listCity-simple-select"
                          name={"city"}
                          displayEmpty
                          value={jobCriteria.city}
                          onChange={handleChange}
                        >
                          <MenuItem value="">Tất cả tỉnh/thành phố</MenuItem>
                          {listCity &&
                            listCity.map((item) => {
                              return (
                                <MenuItem value={item.id} key={item.id}>
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
                    className="inline-flex py-4 px-6 rounded bg-[#00c056] hover:bg-[#00b652] text-white font-bold"
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
  );
};

export default SearchBar;
