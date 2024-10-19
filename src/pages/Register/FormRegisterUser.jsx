import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, firestore } from "../../firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const FormRegisterUser = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const validatePhoneNumber = (number) => {
    const phoneNumberPattern = /^0[3-9]\d{8}$/;
    return phoneNumberPattern.test(number);
  };
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };
  
  const handleRegisterUser = async (e) => {
    e.preventDefault();
    if (fullName == "") {
      toast.error("Vui lòng nhập họ tên !!", {
        position: "top-right",
      });
      return;
    }
    if (phone == "") {
      toast.error("Vui lòng nhập số điện thoại !!", {
        position: "top-right",
      });
      return;
    }
    if (!validatePhoneNumber(phone)) {
      toast.error("Số điện thoại không hợp lệ", {
        position: "top-right",
      });
      return;
    }
    if (email == "") {
      toast.error("Vui lòng nhập email !!", {
        position: "top-right",
      });
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Email không hợp lệ", {
        position: "top-right",
      });
      return;
    }
    if (password == "") {
      toast.error("Vui lòng nhập mật khẩu !!", {
        position: "top-right",
      });
      return;
    } else if (password.length < 8) {
      toast.error("Mật khẩu phải từ 8 ký tự trở lên", {
        position: "top-right",
      });
    }
    if (confirmPassword == "") {
      toast.error("Vui lòng nhập lại mật khẩu !!", {
        position: "top-right",
      });
      return;
    }
    if (confirmPassword !== password) {
      toast.error("Mật khẩu không khớp !!", {
        position: "top-right",
      });
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(firestore, "Users", user.uid), {
          email: user.email,
          fullName: fullName,
          phone: phone,
          password: password,
          avatar: "",
        });
      }
      toast.success("Đăng ký tài khoản thành công !!", {
        position: "top-right",
      });
      setTimeout(() => {
        navigate("/dang-nhap");
      }, 300);
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
      });
    }
  };
  return (
    <form
      onSubmit={handleRegisterUser}
      className="content xl:py-6 xl:px-8 p-4 form-validate"
    >
      <p className="font-bold text-[#000] text-[0.875rem] mb-2">
        Họ và tên <span className="text-[#dd0000]">*</span>
      </p>
      <input
        type="text"
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Nhập họ và tên"
        className="form-control outline-none mb-4 text-[0.875rem] w-full py-3 px-4 rounded border border-solid border-[#A8A8A8]"
      />
      <p className="font-bold text-[#000] text-[0.875rem] mb-2">
        Số điện thoại <span className="text-[#dd0000]">*</span>
      </p>
      <input
        type="text"
        onChange={(e) => setPhone(e.target.value)}
        placeholder=" Nhập số điện thoại liên hệ"
        className="form-control outline-none mb-4 text-[0.875rem] w-full py-3 px-4 rounded border border-solid border-[#A8A8A8]"
      />
      <p className="font-bold text-[#000] text-[0.875rem] mb-2">
        Email <span className="text-[#dd0000]">*</span>
      </p>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Nhập email của bạn"
        className="form-control outline-none mb-4 text-[0.875rem] w-full py-3 px-4 rounded border border-solid border-[#A8A8A8]"
      />
      <p className="font-bold text-[#000] text-[0.875rem] mb-2">
        Mập khẩu <span className="text-[#dd0000]">*</span>
      </p>
      <div className="relative mb-4">
        <input
          id="password1"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nhập mật khẩu"
          className="form-control outline-none text-[0.875rem] w-full py-3 px-4 rounded border border-solid border-[#A8A8A8]"
        />
        <span className="show-password text-[1.25rem] cursor-pointer absolute inline-flex items-center justify-center w-10 h-full top-0 right-0 z-[1]">
          <i className="fa-regular fa-eye-slash"></i>
        </span>
      </div>
      <p className="font-bold text-[#000] text-[0.875rem] mb-2">
        Nhập lại mật khẩu <span className="text-[#dd0000]">*</span>
      </p>
      <div className="relative mb-4">
        <input
          id="repass1"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Nhập lại mật khẩu"
          className="form-control outline-none text-[0.875rem] w-full py-3 px-4 rounded border border-solid border-[#A8A8A8]"
        />
        <span className="show-password text-[1.25rem] cursor-pointer absolute inline-flex items-center justify-center w-10 h-full top-0 right-0 z-[1]">
          <i className="fa-regular fa-eye-slash"></i>
        </span>
      </div>
      <button
        type="submit"
        className="btn-submit py-3 px-4 flex w-full transition-all duration-300 items-center justify-center text-white font-bold bg-[#1C4B82] hover:bg-[#1d8dc5] rounded-xl"
      >
        Đăng ký
      </button>
      <p className="text xl:mt-10 mt-6 text-center text-[#000] text-[0.875rem]">
        Bạn đã có tài khoản?
        <Link
          to={"/dang-nhap"}
          title="Đăng nhập ngay"
          className="font-bold text-[#1C4B82]"
        >
          Đăng nhập ngay
        </Link>
      </p>
    </form>
  );
};

export default FormRegisterUser;
