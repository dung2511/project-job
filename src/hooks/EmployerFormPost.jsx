import React, { useState } from "react";
import { toast } from "react-toastify";

const EmployerFormPost = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const handleDateChange = (name, date) => {
    setValues({
      ...values,
      [name]: date,
    });
  };
  const handlePostJob = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const validate = () => {
    let isValid = true;
    if (!values.positionJob) {
      toast.error("Vui lòng nhập chức danh công việc !!", {
        position: "top-right",
      });
      isValid = false;
      return;
    }
    if (!values.leveJob) {
      toast.error("Vui lòng chọn cấp bậc !!", {
        position: "top-right",
      });
      isValid = false;
      return;
    }
    if (!values.careerJob) {
      toast.error("Vui lòng chọn ngành nghề !!", {
        position: "top-right",
      });
      isValid = false;
      return;
    }
    if (!values.wordJob) {
      toast.error("Vui lòng chọn nơi làm việc !!", {
        position: "top-right",
      });
      isValid = false;
      return;
    }
    if (!values.experienceJob) {
      toast.error("Vui lòng chọn kinh nghiệm làm việc !!", {
        position: "top-right",
      });
      isValid = false;
      return;
    }
    if (values.salaryNegotiable == 0) {
      if (!values.minSalary) {
        toast.error("Vui lòng nhập mức lương tối thiểu !!", {
          position: "top-right",
        });
        isValid = false;
        return;
      }
      if (!values.maxSalary) {
        toast.error("Vui lòng nhập mức lương tối đa !!", {
          position: "top-right",
        });
        isValid = false;
        return;
      }
      if (Number(values.maxSalary) <= Number(Number(values.maxSalary))) {
        toast.error("Mức lương tối đa phải lớn hơn mức lương tối thiểu !!", {
          position: "top-right",
        });
        isValid = false;
        return;
      }
    }
    if (!values.descriptionJob) {
      toast.error("Vui lòng nhập mô tả công việc !!", {
        position: "top-right",
      });
      isValid = false;
      return;
    }
    if (!values.candidateRequirement) {
      toast.error("Vui lòng nhập yêu cầu ứng viên !!", {
        position: "top-right",
      });
      isValid = false;
      return;
    }
    if (!values.benefit) {
      toast.error("Vui lòng nhập quyền lợi !!", {
        position: "top-right",
      });
      isValid = false;
      return;
    }
    if (!values.timeWork) {
      toast.error("Vui lòng nhập thời gian làm việc !!", {
        position: "top-right",
      });
      isValid = false;
      return;
    }
    if (!values.quantity) {
      toast.error("Vui lòng nhập số lượng ứng viên !!", {
        position: "top-right",
      });
      isValid = false;
      return;
    }
    if (!values.workplace) {
      toast.error("Vui lòng chọn hình thức làm việc !!", {
        position: "top-right",
      });
      isValid = false;
      return;
    }
    if (values.expirationDate.isBefore(values.timeCreated)) {
      toast.error("Ngày hết hạn không thể trước ngày tạo !!", {
        position: "top-right",
      });
      isValid = false;
      return;
    }
    return isValid;
  };
  return {
    values,
    handlePostJob,
    handleDateChange,
    validate,
  };
};

export default EmployerFormPost;
