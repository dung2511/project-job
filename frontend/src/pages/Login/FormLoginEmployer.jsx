import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, firestore } from "../../firebase.config";
import { doc, getDoc } from "firebase/firestore";

const FormLoginEmployer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };
  const handleSubmitEmployer = async (e) => {
    e.preventDefault();
    if (email == "") {
      toast.error("Vui lòng nhập địa chỉ Email !!", {
        position: "top-right",
      });
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Vui lòng nhập địa chỉ Email hợp lệ !!", {
        position: "top-right",
      });
      return;
    }
    if (password == "") {
      toast.error("Vui lòng nhập mật khẩu !!", {
        position: "top-right",
      });
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      const userQuery = doc(firestore, "Employers", user.uid);
      const userSnapshot = await getDoc(userQuery);
      if (userSnapshot.exists()) {
        toast.success("Đăng nhập thành công !!", {
          position: "top-right",
        });
        setTimeout(() => {
          navigate("/thong-tin-tai-khoan-nha-tuyen-dung");
        }, 300);
      } else {
        toast.error("Tài khoản không tồn tại !!", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmitEmployer}
      className="content form-validate xl:py-6 xl:px-8 p-4"
    >
      <p className="font-medium text-[#000] text-[0.875rem] mb-2">Email</p>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Nhập email của bạn"
        className="form-control outline-none mb-4 text-[0.875rem] w-full py-3 px-4 rounded border border-solid border-[#A8A8A8]"
      />
      <p className="font-medium text-[#000] text-[0.875rem] mb-2">Mập khẩu</p>
      <div className="relative mb-4">
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nhập mật khẩu"
          className="form-control outline-none text-[0.875rem] w-full py-3 px-4 rounded border border-solid border-[#A8A8A8]"
        />
        <span className="show-password text-[1.25rem] cursor-pointer absolute inline-flex items-center justify-center w-10 h-full top-0 right-0 z-[1]">
          <i className="fa-regular fa-eye-slash"></i>
        </span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <input type="checkbox" className="w-fit mr-2" />
          <span className="text text-[#000] text-[0.875rem]">Nhớ mật khẩu</span>
        </div>
        <a
          data-modal="forgotPassword"
          title="Quên mật khẩu"
          className="link text-[0.875rem] text-[#1C4B82]"
        >
          Quên mật khẩu?
        </a>
      </div>
      <button className="btn-submit py-3 px-4 flex w-full transition-all duration-300 items-center justify-center text-white font-bold bg-[#1C4B82] hover:bg-[#1d8dc5] rounded-xl">
        Đăng nhập
      </button>
      <p className="text my-4 text-center text-[#7D7D7D]">Hoặc</p>
      <p className="text xl:mt-10 mt-6 text-center text-[#000] text-[0.875rem]">
        Bạn chưa có tài khoản?
        <Link
          to={"/dang-ky"}
          title="Đăng ký ngay"
          className="font-bold text-[#1C4B82]"
        >
          Đăng ký ngay
        </Link>
      </p>
    </form>
  );
};

export default FormLoginEmployer;
