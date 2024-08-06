import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../firebase.config";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SidebarUser = () => {
  const [userDetail, setUserDetail] = useState(null);
  const navigate = useNavigate();
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        const docRef = doc(firestore, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetail(docSnap.data());
        }
      }
    });
  };
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
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
      <aside className="lg:px-2 lg:w-1/4 sidebar-account fixed lg:static">
        <div className="info-management bg-[#f7f7f7] rounded-lg xl:p-6 p-4">
          <div className="box-avatar max-w-[16.688rem] mx-auto">
            <div className="avatar c-img pt-[100%] img-cover overflow-hidden rounded mb-2 ">
              <img src="../../../theme/frontend/images/user_profile_default.png" />
            </div>
          </div>
          <p className="name text-center font-semibold text-[#000]">
            {userDetail?.fullName}
          </p>
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
