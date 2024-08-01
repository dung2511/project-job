import React, { useEffect, useRef, useState } from "react";
import { auth, firestore, storage } from "../../../../firebase.config";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { Select } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
const FormUpdateCompany = ({ employerDetail }) => {
  const urlImageUserDefault =
    "https://firebasestorage.googleapis.com/v0/b/website-job-21a07.appspot.com/o/Images%2Fuser_profile_default.png?alt=media&token=e0db52f4-0be5-42a2-a1be-c40da07929c1";
  const [queryQersonalSize, setQueryPersonalSize] = useState(null);
  const [taxCode, setTaxCode] = useState(null);
  const [nameCompany, setNameCompany] = useState(null);
  const [personalSize, setPersonalSize] = useState(null);
  const [cityWork, setCityWork] = useState(null);
  const [addressCompany, setAddressCompany] = useState(null);
  const [introduceCompany, setIntroduceCompay] = useState(null);
  const [phoneCompany, setPhoneCompany] = useState(null);
  const [imageCompany, setImageCompany] = useState(null);
  const [urlImageCompany, setUrlImageCompany] = useState(null);
  const editorRef = useRef();
  const fetchDataPersonalSize = async () => {
    try {
      const q = query(collection(firestore, "personel_size"));
      if (!q.empty) {
        const categories = onSnapshot(q, (querySnapshot) => {
          setQueryPersonalSize(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleImageUpload = async () => {
    if (imageCompany == null) return;
    const storageRef = ref(storage, `Employers/` + v4() + `${imageCompany.name}`);
    const snapshot = await uploadBytes(storageRef, imageCompany);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setUrlImageCompany(URL.createObjectURL(event.target.files[0]));
      setImageCompany(event.target.files[0]);
    }
  };
  useEffect(() => {
    fetchDataPersonalSize();
  }, []);
  const handleChangeEditor = (content) => {
    setIntroduceCompay(content);
  };
  const handleUpdateCompany = async (e) => {
    e.preventDefault();
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        try {
          const url = await handleImageUpload();
          const docRef = doc(firestore, "Employers", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            let updatedData = {
              nameCompany:
                nameCompany == null ? employerDetail.nameCompany : nameCompany,
              taxCode: taxCode == null ? employerDetail.taxCode : taxCode,
              personalSize:
                personalSize == null
                  ? employerDetail.personalSize
                  : personalSize,
              // cityWork: cityWork == null ? employerDetail.cityWork : cityWork,
              addressCompany:
                addressCompany == null
                  ? employerDetail.addressCompany
                  : addressCompany,
              phoneCompany:
                phoneCompany == null
                  ? employerDetail.phoneCompany
                  : phoneCompany,
              imageCompany: url ? url : employerDetail.imageCompany,
              // introduceCompany:
              //   introduceCompany == null
              //     ? employerDetail.introduceCompany
              //     : introduceCompany,
            };
            await updateDoc(docRef, updatedData);
            toast.success("Cập nhật thông tin thành công !!", {
              position: "top-right",
            });
          }
        } catch (error) {
          toast.error(error.message, {
            position: "top-right",
          });
        }
      }
    });
  };

  return (
    <form className="info-acc" onSubmit={handleUpdateCompany}>
      <div className="xl:max-w-[53.9375rem] w-full py-4 border-b border-solid last:border-none">
        <div className="form-all">
          <div className="flex flex-wrap items-center mb-4">
            <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
              Mã số thuế <span className=" text-[#D90909]">*</span>
            </p>
            <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
              <input
                onChange={(e) => setTaxCode(e.target.value)}
                defaultValue={employerDetail?.taxCode}
                type="text"
                className="bg-[#F0F0F3]"
                placeholder="0103293209"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-4">
            <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
              Tên công ty <span className=" text-[#D90909]">*</span>
            </p>
            <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
              <input
                type="text"
                onChange={(e) => setNameCompany(e.target.value)}
                defaultValue={employerDetail?.companyName}
                className="bg-[#F0F0F3]"
                placeholder="Công ty TNHH ABC"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-4">
            <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
              Quy mô nhân sự <span className=" text-[#D90909]">*</span>
            </p>
            <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
              <select
                id="personel_size_id"
                className="bg-[#F0F0F3]"
                onChange={(e) => setPersonalSize(e.target.value)}
                defaultValue={"Chọn quy mô nhân sự"}
              >
                <option value={"Chọn quy mô nhân sự"} disabled={true}>
                  Chọn quy mô nhân sự
                </option>
                {queryQersonalSize &&
                  queryQersonalSize.map((item, index) => {
                    return (
                      <option
                        key={index}
                        value={item.name}
                        selected={employerDetail.personalSize === item.name}
                      >
                        {item.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-4">
            <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
              Địa điểm <span className=" text-[#D90909]">*</span>
            </p>
            <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
              <select
                className="bg-[#F0F0F3]"
                onChange={(e) => setCityWork(e.target.value)}
                defaultValue={"Chọn quận/huyện"}
              >
                <option value={"Chọn quận/huyện"} disabled={true}>
                  Chọn quận/huyện
                </option>
                <option value="2706">Hà Nội</option>
                <option value="2707">Toàn Quốc</option>
                <option value="2708">Bình Định</option>
                <option value="2709">Miền Bắc</option>
                <option value="2710">Hồ Chí Minh</option>
                <option value="2711">Phú Thọ</option>
                <option value="2712">Miền Nam</option>
                <option value="2713">Đồng Nai</option>
                <option value="2714">Gia Lai</option>
                <option value="2715">Bến Tre</option>
                <option value="2716">Thanh Hóa</option>
                <option value="2717">An Giang</option>
                <option value="2718">Hưng Yên</option>
                <option value="2719">Khánh Hòa</option>
                <option value="2720">Thái Bình</option>
                <option value="2721">Vĩnh Long</option>
                <option value="2722">Kiên Giang</option>
                <option value="2723">Nghệ An</option>
                <option value="2724">Bình Dương</option>
                <option value="2725">Tiền Giang</option>
                <option value="2726">Cà Mau</option>
                <option value="2727">Long An</option>
                <option value="2728">Cần Thơ</option>
                <option value="2729">Sóc Trăng</option>
                <option value="2730">Lâm Đồng</option>
                <option value="2731">Miền Trung</option>
                <option value="2732">Quảng Nam</option>
                <option value="2733">Hải Dương</option>
                <option value="2734">Hải Phòng</option>
                <option value="2735">Bạc Liêu</option>
                <option value="2736">Đắk Lắk</option>
                <option value="2737">Điện Biên</option>
                <option value="2738">Bắc Giang</option>
                <option value="2739">Quảng Ninh</option>
                <option value="2740">Thừa Thiên Huế</option>
                <option value="2741">Đà Nẵng</option>
                <option value="2742">Bình Thuận</option>
                <option value="2743">Ninh Bình</option>
                <option value="2744">Nam Định</option>
                <option value="2745">Hà Tĩnh</option>
                <option value="2746">Hà Nam</option>
                <option value="2747">Bắc Ninh</option>
                <option value="2748">Đồng Tháp</option>
                <option value="2749">Bà Rịa - Vũng Tàu</option>
                <option value="2750">Bắc Kạn</option>
                <option value="2751">Hà Giang</option>
                <option value="2752">Lạng Sơn</option>
                <option value="2753">Lai Châu</option>
                <option value="2754">Trà Vinh</option>
                <option value="2755">Đắk Nông</option>
                <option value="2756">Bình Phước</option>
                <option value="2757">Vĩnh Phúc</option>
                <option value="2758">Thái Nguyên</option>
                <option value="2759">Yên Bái</option>
                <option value="2760">Ninh Thuận</option>
                <option value="2761">Quảng Bình</option>
                <option value="2762">Lào Cai</option>
                <option value="2763">Hòa Bình</option>
                <option value="2764">Quảng Trị</option>
                <option value="2765">Cao Bằng</option>
                <option value="2766">Quảng Ngãi</option>
                <option value="2767">Tây Ninh</option>
                <option value="2768">Hậu Giang</option>
                <option value="2769">Sơn La</option>
                <option value="2770">Chưa cập nhật</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-4">
            <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
              Địa chỉ website Công ty <span className=" text-[#D90909]">*</span>
            </p>
            <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
              <input
                type="text"
                defaultValue={employerDetail?.addressCompany}
                onChange={(e) => setAddressCompany(e.target.value)}
                className="bg-[#F0F0F3]"
                placeholder="Số 19 Ngõ 68 Lưu Hữu Phước, Mỹ Đình 1, Nam Từ Liêm, Hà Nội"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-4">
            <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
              Số điện thoại cố định <span className=" text-[#D90909]">*</span>
            </p>
            <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
              <input
                type="text"
                defaultValue={employerDetail?.phoneCompany}
                onChange={(e) => setPhoneCompany(e.target.value)}
                className="bg-[#F0F0F3]"
                placeholder="0234 456 778"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-4">
            <p className="w-full lg:w-1/4 mb-2 lg:mb-0">
              Hình ảnh công ty <span className=" text-[#D90909]">*</span>
            </p>
            <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
              <div className="flex items-center flex-nowrap">
                <div className="lg:mr-[1.5rem] mr-[1rem]">
                  <div
                    htmlFor="image_company"
                    className="img-ava rounded-md overflow-hidden w-28 h-28 c-img pt-0 bg-[#D9D9D9]"
                  >
                    <img
                      src={
                        urlImageCompany ||
                        employerDetail?.imageCompany ||
                        urlImageUserDefault
                      }
                      alt={employerDetail?.nameCompany}
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="image_company"
                    className="relative inline-flex rounded-md overflow-hidden border-solid border border-[var(--border-main)] px-5 py-2.5 !text-[var(--cl-text-main)] font-medium text-sm"
                  >
                    <input
                      type="file"
                      name="image_company"
                      onChange={onImageChange}
                      className="absolute top-0 right-0 w-full h-full opacity-0 input-avatars"
                      accept="image/*"
                    />
                    Thay đổi ảnh
                  </label>
                  <div className="note text-[var(--cl-sub-title)] mt-2 max-w-sm w-full">
                    Cho phép tải ảnh JPG, GIF hoặc PNG, dung lượng tối đa 800kB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center mb-4">
          <p className="w-full lg:w-1/4 mb-2 lg:mb-0">Giới thiệu công ty</p>
          <div className="w-full lg:w-3/4 box-pass relative flex justify-between items-center border-solid rounded-[5px] border border-[#B9B9B9] bg-[#F0F0F3]">
            <Editor
              apiKey="fliutou8i6pp4gkt9r5eb3g8cpicg9y90ono29vhhs1z133h"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={
                employerDetail?.introduceCompany
                  ? employerDetail.introduceCompany
                  : ""
              }
              // onEditorChange={handleChangeEditor}
              init={{
                placeholder: "Hãy viết gì đó ở đây...",
                height: 600,
                width: "100%",
                menubar: false,
                plugins:
                  "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
              }}
            />
          </div>
        </div>
        <div className="w-full form-all text-center">
          <button
            type="submit"
            title="Cập nhập"
            className="lg:mt-8 mt-4 text-white text-center  bg-[var(--cl-bg-main)] rounded-md border border-solid border-[var(--border-main)] hover:text-[var(--cl-text-main)] hover:bg-white transition-all duration-500"
          >
            Cập nhập
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormUpdateCompany;
