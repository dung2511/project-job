import React from "react";

const SuperiorToolDetail = () => {
  return (
    <section
      className="section-taxpersonal py-8 bg-no-repeat bg-right-top"
      style={{
        backgroundImage: "url(../theme/frontend/images/bg-gross-net.png)",
      }}
    >
      <div className="container">
        <h2 className="text-[var(--cl-text-main-2)] lg:text-2xl text-lg uppercase font-semibold mb-4">
          CÔNG CỤ TÍNH THUẾ THU NHẬP CÁ NHÂN
        </h2>
        <div className="flex flex-wrap lg:-mx-2">
          <div className="box-white box-salary w-full lg:w-1/2 lg:px-2">
            <div className="salary-cal-form w-full">
              <div className="flex items-center mb-4">
                <label className="text-[var(--cl-text-main-2)] mr-4 w-full mb-2 lg:mb-0 lg:w-1/3">
                  Thu nhập:
                </label>
                <div className="w-full lg:w-2/3 box-pass relative flex justify-between items-center border-solid rounded-[5px] border h-12 p-3 bg-white">
                  <input
                    id="income"
                    placeholder="0"
                    type="text"
                    maxlength="15"
                  />
                  <label>VND</label>
                </div>
                <small className="error-mess-income">
                  <span>*</span> Xin vui lòng điền Thu nhập
                </small>
              </div>
              <div className="flex items-center mb-4">
                <label className="text-[var(--cl-text-main-2)] mr-4 w-full mb-2 lg:mb-0 lg:w-1/3">
                  Lương đóng bảo hiểm :
                </label>
                <div className="w-full lg:w-2/3 box-pass relative flex justify-between items-center border-solid rounded-[5px] border h-12 p-3 bg-white">
                  <input id="ldbh" placeholder="0" type="text" maxlength="15" />
                  <label>VND</label>
                </div>
                <small className="error-mess-income">
                  <span>*</span> Xin vui lòng điền Lương đóng bảo hiểm
                </small>
              </div>
              <div className="flex items-center mb-4">
                <label className="text-[var(--cl-text-main-2)] mr-4 w-full mb-2 lg:mb-0 lg:w-1/3">
                  Số người phụ thuộc:
                </label>
                <div className="w-full lg:w-2/3 box-pass relative flex justify-between items-center border-solid rounded-[5px] border h-12 p-3 bg-white">
                  <input
                    id="numDep"
                    type="text"
                    maxlength="3"
                    placeholder="0"
                  />
                  <label>Người</label>
                </div>
              </div>
              <a
                href="javascript:void(0)"
                id="btnTinh"
                className="bg-[var(--cl-bg-main)] border-[var(--border-main)] border-solid border hover:bg-white transition-all duration-500 rounded-md overflow-hidden btn-salary inline-block text-center max-w-xs w-full py-3"
                onclick="calculate()"
              >
                TÍNH
              </a>
            </div>
          </div>
          <div
            id="result"
            className="result mt-4 lg:mt-0 w-full lg:w-1/2 lg:px-2"
            style={{ display: "none" }}
          >
            <p className="mb-2">Mức đóng: BHXH (8%), BHYT (1.5%), BHTN (1%)</p>
            <p
              className="mb-2"
              id="contract_salary1"
              style={{ display: "none" }}
            >
              Mức lương tối đa để đóng BHXH, BHYT là: 29,800,000
            </p>
            <p
              className="mb-2"
              id="contract_salary2"
              style={{ display: "none" }}
            >
              Mức lương tối đa để đóng BHTN là: 85,172,000
            </p>
            <p className="mb-2">
              <b className="text-danger">Bảo hiểm bắt buộc</b> =
              <span id="fmt_bhxh_salary"></span> x 8% +
              <span id="fmt_bhxh_salary"></span> x 1.5% +
              <span id="fmt_bhxh_salary"></span> x 1% =
              <b className="text-danger" id="fmt_insurance">
                đ
              </b>
            </p>
            <p className="mb-2">Giảm trừ bản thân = 11,000,000</p>
            <p className="mb-2">
              Giảm trừ người phụ thuộc = <span id="fmt_children"></span> x
              4,400,000 = <span id="fmt_children_subtract"></span>
            </p>
            <p className="mb-2">
              Thu nhập tính thuế = <span id="fmt_gross"></span> -
              <span id="fmt_insurance1"></span> - 11,000,000 -
              <span id="fmt_children_subtract1"></span> =
              <span id="fmt_tntt"></span>
            </p>
            <p className="mb-2" id="tntt"></p>
            <div className="max-w-xs bg-[var(--cl-bg-main)] text-white py-2 rounded-md overflow-hidden">
              <p className="mb-2 text-center">
                THUẾ THU NHẬP CÁ NHÂN PHẢI NỘP <br />
                <span id="tntt1"></span> <span id="big-rs"></span>
              </p>
            </div>
          </div>
        </div>
        <div className="s-content mt-8">
          <h2>
            <span style={{ textDecoration: "underline" }}>1. Khái niệm</span>
          </h2>
          <p>
            Đóng thuế thu nhập cá nhân là việc một cá nhân nào đó phải thực hiện
            trích một khoản lương hoặc một khoản thu nhập nào khác nộp vào ngân
            sách nhà nước. Trong đó Thuế TNCN là một loại thuế trực thu, được
            đánh vào một số cá nhân có thu nhập cao và mức chịu thuế này sẽ do
            pháp luật quy định một cách rõ ràng.
          </p>
          <h2>
            <span style={{ textDecoration: "underline" }}>
              2. Đối tượng nộp thuế
            </span>
          </h2>
          <p style={{ textAlign: "left" }}>
            <span style={({ color: "#000000" }, { display: "block" })}>
              Chủ thể là cá nhân cư trú và có thu nhập từ trong và ngoài của
              lãnh thổ Việt Nam nhưng phải thuộc 1 trong hai trường hợp là
              <br />
            </span>
          </p>
          <ul>
            <li style={{ textAlign: "left" }}>
              <span style={({ color: "#000000" }, { display: "block" })}>
                Thực tế có mặt ở Việt Nam nhiều hơn 183 ngày của một năm theo
                dương lịch hoặc là đủ 12 tháng liên tục tính từ ngày đầu thực tế
                có mặt ở Việt Nam
              </span>
            </li>
            <li style={{ textAlign: "left" }}>
              <span style={({ color: "#000000" }, { display: "block" })}>
                Cá nhân có nơi ở thường xuyên ở Việt Nam, trong đó nơi ở là nơi
                chủ thể đăng ký thường trú hoặc là nhà đi thuê mục đích để ở tại
                Việt Nam nhưng đảm bảo hợp đồng thuê này phải có thời hạn.
              </span>
            </li>
            <li style={{ textAlign: "left" }}>
              <span style={({ color: "#000000" }, { display: "block" })}>
                Cá nhân không có cư trú nhưng có khoản thu nhập chịu thuế từ
                trong lãnh thổ của Việt Nam. Trong đó, cá nhân không có cư trú
                là cá nhân không đáp ứng đủ 1 trong các trường hợp trên về cá
                nhân cư trú.
              </span>
            </li>
          </ul>
          <h2 style={{ textAlign: "left" }}>
            <span style={{ textDecoration: "underline" }}>
              <span style={{ backgroundColor: '#ffffff', color: '#000000', display: 'block', textDecoration: 'underline' }}>
                3. Bảng mức thuế TNCN
                <br />
              </span>
            </span>
          </h2>
          <table style={{ width: "924px" }}>
            <tbody>
              <tr>
                <td style={{ width: "381px" }}>&nbsp;</td>
                <td style={{ width: "495.438px" }}>Lương Gross</td>
                <td style={{ width: "538.562px" }}>Lương Net</td>
              </tr>
              <tr>
                <td style={{ width: "381px" }}>1</td>
                <td style={{ width: "495.438px" }}>&nbsp;TN &lt;= 5tr</td>
                <td style={{ width: "538.562px" }}>&nbsp;TN x 5%</td>
              </tr>
              <tr>
                <td style={{ width: "381px" }}>2&nbsp;</td>
                <td style={{ width: "495.438px" }}>
                  &nbsp;5tr &lt; TN &lt;= 10tr
                </td>
                <td style={{ width: "538.562px" }}>&nbsp;TN x 10% - 0.25tr</td>
              </tr>
              <tr>
                <td style={{ width: "381px" }}>3&nbsp;</td>
                <td style={{ width: "495.438px" }}>
                  &nbsp;10tr &lt; TN &lt;= 18tr
                </td>
                <td style={{ width: "538.562px" }}>&nbsp;TN x 15% - 0.75tr</td>
              </tr>
              <tr>
                <td style={{ width: "381px" }}>4&nbsp;</td>
                <td style={{ width: "495.438px" }}>
                  &nbsp;18tr &lt; TN &lt;= 32tr
                </td>
                <td style={{ width: "538.562px" }}>&nbsp;TN x 20% - 1.65tr</td>
              </tr>
              <tr>
                <td style={{ width: "381px" }}>5&nbsp;</td>
                <td style={{ width: "495.438px" }}>
                  &nbsp;32tr &lt; TN &lt;= 52tr
                </td>
                <td style={{ width: "538.562px" }}>&nbsp;TN x 25% - 3.25tr</td>
              </tr>
              <tr>
                <td style={{ width: "381px" }}>6&nbsp;</td>
                <td style={{ width: "495.438px" }}>
                  &nbsp;52tr &lt; TN &lt;= 80tr
                </td>
                <td style={{ width: "538.562px" }}>&nbsp;TN x 30% - 5.85tr</td>
              </tr>
            </tbody>
          </table>
          <h2>4. Lưu ý</h2>
          <p>
            Thu nhập tháng (thường tính bằng tiền lương ghi trên hợp đồng) của
            tiện ích này là tổng thu nhập chịu thuế quy định tại Điều 10 và Điều
            11 của Luật thuế TNCN, đã tính các khoản giảm trừ sau:
          </p>
          <ul>
            <li>Các khoản đóng bảo hiểm, quỹ hưu trí tự nguyện.</li>
            <li>Các khoản đóng góp từ thiện, nhân đạo, khuyến học.</li>
          </ul>
          <p>
            * Mức tiền lương tháng thấp nhất để đóng BHXH không được thấp hơn
            mức tối thiểu vùng tại thời điểm đóng đối với người lao động làm
            công việc hoặc chức danh giản đơn nhất trong điều kiện lao động bình
            thường.
          </p>
          <p>&nbsp;</p>
        </div>
      </div>
    </section>
  );
};

export default SuperiorToolDetail;
