import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../../../firebase.config";
import { doc, getDoc } from "firebase/firestore";
import SidebarEmployer from "../../../components/layout/SidebarEmployer";
import { Box, CircularProgress, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import FormUpdateAccount from "./Components/FormUpdateAccount";
import FormUpdateCompany from "./Components/FormUpdateCompany";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProfileEmployer = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [employerDetail, setEmployerDetail] = useState(null);

  const fetchEmployerData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        const docRef = doc(firestore, "Employers", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setEmployerDetail(docSnap.data());
        }
      } else {
        toast.error("Vui lòng đăng nhập tài khoản nhà tuyển dụng", {
          position: "top-right",
        });
        navigate("/");
      }
    });
  };

  useEffect(() => {
    fetchEmployerData();
  }, []);
  if (!employerDetail) {
    return (
      <Box className="flex items-center justify-center">
        <CircularProgress />
      </Box>
    );
  }
  return (
    <section className="mt-4 bg-[#F0F0F3]">
      <div className="container">
        <div className="head-title-all leading-[1.3] mb-4 border-l-[5px] border-solid border-[#DD6B4D] pl-4 font-bold 2xl:text-[2rem] xl:text-[1.5rem] text-[1.25rem]">
          <span className="text-[var(--cl-blue)]">
            Tài khoản nhà tuyển dụng
          </span>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full lg:w-[22%] px-2 mb-4 lg:mb-0">
            <SidebarEmployer />
          </div>
          <div className="w-full lg:w-[78%] px-2">
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Thông tin tài khoản" {...a11yProps(0)} />
                <Tab label="Thông tin công ty" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <FormUpdateAccount employerDetail={employerDetail} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <FormUpdateCompany employerDetail={employerDetail} />
            </CustomTabPanel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileEmployer;
