import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../firebase.config";
import { NavLink, useNavigate } from "react-router-dom";
import { Avatar, Skeleton } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
const initialState = {
  fullName: "",
  avatar: "",
};
const SidebarUser = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(initialState);
  const { fullName, avatar } = data;
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        const docRef = doc(firestore, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData({ ...docSnap.data() });
        }
      } else {
        toast.error("Vui lòng đăng nhập tài khoản ứng viên", {
          position: "top-right",
        });
        navigate("/");
      }
    });
  };
  
  useEffect(() => {
    fetchUserData();
  }, []);
  const urlImageUserDefault =
    "https://firebasestorage.googleapis.com/v0/b/website-job-21a07.appspot.com/o/Images%2Fuser_profile_default.png?alt=media&token=e0db52f4-0be5-42a2-a1be-c40da07929c1";
  async function handleLogout() {
    try {
      await auth.signOut();
      setTimeout(() => {
        navigate("/dang-nhap");
      }, 300);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <aside className="lg:px-2 lg:w-1/4 sidebar-account fixed lg:static">
        <div className="info-management bg-[#f7f7f7] rounded-lg xl:p-6 p-4">
          {data ? (
            <Avatar
              className="avatar w-full h-full mx-auto img-cover overflow-hidden rounded mb-2 "
              alt={fullName}
              src={urlImageUserDefault}
              sx={{ width: 150, height: 150 }}
            />
          ) : (
            <Skeleton
              className="mx-auto"
              variant={"circular"}
              width={150}
              height={150}
            />
          )}
          {Object.keys(data).length > 0 ? (
            <p className="name text-center font-semibold text-[#000]">
              {fullName}
            </p>
          ) : (
            <Skeleton
              variant="text"
              width={"100%"}
              height={40}
              className="mx-auto"
            />
          )}
          <div className="menu-info mt-6">
            <ul>
              <li>
                <div className="block">Quản lý tài khoản</div>
                <ul>
                  <li>
                    <NavLink
                      to={"/thong-tin-tai-khoan"}
                      className=""
                      title="Tài khoản của bạn"
                    >
                      Tài khoản của bạn
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/doi-mat-khau"}
                      title="Đổi mật khẩu"
                      className=""
                    >
                      Đổi mật khẩu
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <div className="block">Quản lý việc làm</div>
                <ul>
                  <li>
                    <NavLink
                      to={"/viec-lam-ung-tuyen"}
                      className=""
                      title="Việc làm đã ứng tuyển"
                    >
                      Việc làm đã ứng tuyển
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/viec-lam-da-luu"}
                      className=""
                      title="Việc làm đã lưu"
                    >
                      Việc làm đã lưu
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <button onClick={handleLogout}>Đăng xuất</button>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div className="over-lay-sidebar fixed lg:hidden w-full h-full z-50 block top-0 right-[-100%] bg-[rgba(0,0,0,.6)] transition-all duration-300"></div>
      <span className="show-sidebar flex items-center justify-center w-10 h-10 rounded-tl-lg rounded-bl-lg bg-white shadow-[0_4px_10px_rgba(0,0,0,.3)] text-[#F44336] fixed top-[20%] right-0 z-10">
        <i className="fa-solid fa-gear"></i>
      </span>
    </>
  );
};

export default SidebarUser;
