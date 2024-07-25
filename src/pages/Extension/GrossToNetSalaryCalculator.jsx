import React from "react";

const GrossToNetSalaryCalculator = () => {
  return (
    <section
      className="section-payroll py-8 bg-no-repeat bg-right-top"
      style={{ backgroundImage: "url(theme/frontend/images/bg-gross-net.png)" }}
    >
      <div className="container">
        <div className="box-white box-salary">
          <h2 className="text-[var(--cl-text-main-2)] mb-2 lg:text-2xl text-lg uppercase font-semibold">
            CÔNG CỤ TÍNH LƯƠNG
          </h2>
          <p className="text-[var(--cl-sub-title)] text-sm  mb-8">
            Công cụ tính lương này giúp chuyển đổi lương gộp (lương gross) thành
            lương ròng (lương net) và ngược lại. Thuế suất và các khoản giảm trừ
            liên quan đến khoản lương nói trên được tính theo luật lao động hiện
            hành.
          </p>
          <div className="salary-cal-form">
            <div className=" flex items-center flex-wrap mb-4">
              <label className="text-[var(--cl-text-main-2)] mr-4">
                Thu nhập:
              </label>
              <div className="box-pass relative flex justify-between items-center border-solid rounded-[5px] border h-12 p-3 bg-white">
                <input id="income" type="text" maxlength="15" />
                <label>VND</label>
              </div>
              <div>
                <label className="ml-10">Tiền tệ:</label>
                <label className="dropdown">
                  <select id="currency">
                    <option value="VND" selected="">
                      VND
                    </option>
                    <option value="USD">USD</option>
                  </select>
                </label>
                <label className="ml-10">1 USD = </label>
                <input
                  type="text"
                  id="exchangeRate"
                  maxlength="7"
                  className="not-allow"
                  disabled=""
                />
              </div>
              <small className="error-mess-income">
                <span>*</span> Xin vui lòng điền Thu nhập
              </small>
            </div>
            <div className=" flex items-center flex-wrap mb-4">
              <label className="text-[var(--cl-text-main-2)] mr-4 mb-2">
                Đóng bảo hiểm:
              </label>
              <label className="radio-row  mr-4 mb-2">
                <input type="radio" name="insurance" value="full" checked="" />
                <span style={{ fontWeight: "normal" }}>
                  Trên lương chính thức
                </span>
              </label>
              <label className="radio-row mr-4 mb-2">
                <input type="radio" name="insurance" value="other" />
                <span style={{ fontWeight: "normal" }}>Khác</span>
              </label>
              <input
                type="text"
                id="otherInsurance"
                maxlength="15"
                className="not-allow mb-2"
                disabled=""
              />
              <small className="error-mess-otherInsurance mb-2">
                <span>*</span> Xin vui lòng điền Mức lương đóng bảo hiểm
              </small>
            </div>
            <div className=" flex items-center flex-wrap mb-4">
              <label>Vùng:</label>
              <a
                href="#popup-personal-tax"
                className="popup-personal-tax"
                data-toggle="modal"
                data-target="#exampleModalCenter1"
              >
                <b style={{ color: "red" }}>(?)</b>
              </a>
              <label className="dropdown">
                <select id="zone" style={{ width: "60px" }}>
                  <option value="1" selected="">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </label>
              <label className=" sm:ml-10 my-2 sm:my-0 w-full sm:w-auto mr-2">
                Số người phụ thuộc:
              </label>
              <input
                id="numDep"
                type="text"
                maxlength="3"
                className="h-12 max-w-sm w-full rounded-[5px]"
              />
            </div>
            <div className="flex">
              <a
                id="btnGrossToNet"
                className="px-3 py-2 text-white bg-[var(--cl-bg-main)] hover:bg-white border-[var(--cl-bg-main)] border-solid border"
              >
                GROSS TO NET
              </a>
              <a
                id="btnNetToGross"
                className="px-3 py-2 text-white bg-[var(--cl-sub-title-2)] hover:bg-white btn-net ml-10 border-[var(--cl-sub-title-2)] border-solid border"
              >
                NET TO GROSS
              </a>
            </div>
          </div>
        </div>
        <div
          className="box-white box-salary afterCal mt-6"
          style={{ display: "none" }}
        >
          <div className="salary-cal-result">
            <div
              className="flex flex-wrap lg:-mx-2 mb-4"
              id="gross-net-result"
            ></div>
            <div className="flex  flex-wrap lg:-mx-2">
              <div className="w-full lg:w-1/2 lg:px-2">
                <h4 className="uppercase text-[var(--cl-text-main-2)] font-medium  mb-2">
                  CHI TIẾT LƯƠNG NHÂN VIÊN:
                </h4>
                <div className="flex items-center mb-2">
                  <div className="w-1/2">
                    <p className="font-bold">LƯƠNG GROSS:</p>
                  </div>
                  <class
                    id="result-gross-salary"
                    className="result-value w-1/2"
                  ></class>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-1/2">
                    <p className="font-semibold"> Bảo hiểm xã hội:</p>
                  </div>
                  <div className="w-1/2">
                    (<span id="per-social-ratio"></span>%)
                    <span
                      id="result-social-insur"
                      className="result-value"
                    ></span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-1/2">
                    <p className="font-semibold"> Bảo hiểm y tế: </p>
                  </div>
                  <div className="w-1/2">
                    (<span id="per-heal-ratio"></span>%)
                    <span
                      id="result-heal-insur"
                      className="result-value"
                    ></span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-1/2">
                    <p className="font-semibold">Bảo hiểm thất nghiệp:</p>
                  </div>
                  <div className="w-1/2">
                    (<span id="per-unemp-ratio"></span>%)
                    <span
                      id="result-unemp-insur"
                      className="result-value"
                    ></span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-1/2">
                    <p className="font-bold">THU NHẬP TRƯỚC THUẾ:</p>
                  </div>
                  <div className="w-1/2">
                    <strong
                      id="result-salary-before-tax"
                      className="result-value"
                    ></strong>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-1/2">
                    <p className="font-semibold">Giảm trừ gia cảnh bản thân:</p>
                  </div>
                  <div className="w-1/2">
                    <span id="result-per-allow" className="result-value"></span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-1/2">
                    <p className="font-semibold"> Giảm trừ người phụ thuộc:</p>
                  </div>
                  <div className="w-1/2">
                    <span id="result-dep-allow" className="result-value"></span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-1/2">
                    <p className="font-semibold">THU NHẬP CHỊU THUẾ:</p>
                  </div>
                  <div className="w-1/2">
                    <strong
                      id="result-taxable-salary"
                      className="result-value"
                    ></strong>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-1/2">
                    <p className="font-semibold">Thuế thu nhập cá nhân:</p>
                  </div>
                  <div className="w-1/2">
                    <a
                      href="#popup-personal-tax"
                      className="popup-personal-tax"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <b style={{ color: "red" }}>(?)</b>
                    </a>
                    <span id="result-per-tax" className="result-value"></span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-1/2">
                    <p className="font-semibold">LƯƠNG NET:</p>
                  </div>
                  <div className="w-1/2">
                    <strong
                      className="result-value"
                      id="result-net-salary"
                    ></strong>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:px-2">
                <h4 className="uppercase text-[var(--cl-text-main-2)] font-medium  mb-2">
                  NGƯỜI SỬ DỤNG LAO ĐỘNG TRẢ:
                </h4>
                <div className="flex items-center mb-2">
                  <div className="w-1/2">
                    <p className="font-bold">LƯƠNG GROSS:</p>
                  </div>
                  <div className="w-1/2">
                    <strong
                      id="result-cost-gross-salary"
                      className="result-value"
                    ></strong>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-1/2">
                    <p className="font-medium">Bảo hiểm xã hội:</p>
                  </div>
                  <div className="w-1/2">
                    (<span id="com-social-ratio"></span>%)
                    <span
                      id="result-cost-social-insur"
                      className="result-value"
                    ></span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-1/2">
                    <p className="font-medium">Bảo hiểm y tế: </p>
                  </div>
                  <div className="w-1/2">
                    (<span id="com-heal-ratio"></span>%)
                    <span
                      id="result-cost-heal-insur"
                      className="result-value"
                    ></span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-1/2">
                    <p className="font-medium"> Bảo hiểm thất nghiệp: </p>
                  </div>
                  <div className="w-1/2">
                    (<span id="com-unemp-ratio"></span>%)
                    <span
                      id="result-cost-unemp-insur"
                      className="result-value"
                    ></span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-1/2">
                    <p className="font-medium">Công đoàn: </p>
                  </div>
                  <div className="w-1/2">
                    (<span id="com-trade-ratio"></span>%)
                    <span
                      id="result-cost-trade-union"
                      className="result-value"
                    ></span>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-1/2">
                    <p className="font-bold">TỔNG CHI PHÍ:</p>
                  </div>
                  <div className="w-1/2">
                    <strong
                      className="result-value"
                      id="result-total-emp-cost"
                    ></strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="s-content mt-8">
          <h2>1. Khái niệm</h2>
          <p>
            <strong>Lương gross</strong> là tổng tiền lương mà người sử dụng lao
            động sẽ trả cho người lao động trong mỗi kì trả lương.
            <br />
            <br />
            Tổng tiền lương sẽ bao gồm: mức lương cơ bản, phụ cấp, các khoản trợ
            cấp, phụ cấp khác và khoản tiền đóng bảo hiểm (BHXH, BHYT, BHTN,…),
            thuế TNCN (nếu có) mà doanh nghiệp chưa trích đóng của người lao
            động.
            <br />
            Trước khi trả thu nhập cho người lao động, người sử dụng lao động sẽ
            trích từ tiền lương của người lao động một khoản tiền để đóng bảo
            hiểm, đóng thuế TNCN cho người lao động. Do đó mức lương thực nhận
            của người lao động sẽ thấp hơn so mới mức lương đã thỏa thuận trên
            hợp đồng.
            <br />
            <br />
            <strong>Lương net</strong> là tiền lương thực nhận của người lao
            động sau khi đã trừ các khoản tiền đóng bảo hiểm và tiền thuế. Khi
            thỏa thuận trả lương net thì người lao động sẽ nhận đúng với số
            lương đã thỏa thuận trên hợp đồng.
          </p>
          <h2>2. Cách tính lương gross sang net và ngược lại</h2>
          <p>
            Dựa trên khái niệm của lương gross và lương net, có thể thấy được
            rằng lương gross và lương net có mối quan hệ với nhau. Ta có thể
            tính lương gross sang net và ngược lại theo công thức:
          </p>
          <p
            style={
              ({ backgroundColor: "#3366ff" },
              { color: "#ffffff" },
              { padding: " 0.75rem" },
              { textAlign: "center" })
            }
          >
            Lương gross = Lương net + (BHXH + BHYT + BHTN) + Thuế TNCN (nếu có)
          </p>
          <p
            style={
              ({ backgroundColor: "#3366ff" },
              { color: "#ffffff" },
              { padding: " 0.75rem" },
              { textAlign: "center" })
            }
          >
            Lương net = Lương gross – (BHXH + BHYT + BHTN + Thuế TNCN (nếu có)
          </p>
          <h2>3. Phân biệt lương gross, net</h2>
          <table>
            <tbody>
              <tr
                style={({ backgroundColor: "#3366ff" }, { color: "#ffffff" })}
              >
                <td>&nbsp;</td>
                <td style={{ textAlign: "center" }}>Lương Gross</td>
                <td style={{ textAlign: "center" }}>Lương net</td>
              </tr>
              <tr>
                <td>Khái niệm</td>
                <td>
                  Là tổng tiền lương của người lao động (NLĐ) mà người sử dụng
                  lao động (NSDLĐ) chi trả mỗi kì trả lương chưa trừ các khoản
                  tiền bảo hiểm, tiền thuế TNCN.
                </td>
                <td>
                  Là tiền lương thực nhận của người lao động mỗi kì trả lương,
                  không bị trừ thêm tiền đóng bảo hiểm, tiền thuế TNCN.
                </td>
              </tr>
              <tr>
                <td>Mức lương thực nhận của người lao động</td>
                <td>
                  Thấp hơn so với lương đã thỏa thuận trên hợp đồng
                  <br />
                  <br />
                  Lương thực nhận bằng = Lương Gross – (BHXH + BHYT + BHTN +
                  Thuế TNCN (nếu có)
                  <br />
                  <br />
                  Trong đó, mức trích đóng các khoản bảo hiểm là: BHXH (8%),
                  BHYT (1,5%), BHTN (1%)
                </td>
                <td>Bằng với mức lương đã thỏa thuận trên hợp đồng</td>
              </tr>
              <tr>
                <td>Ưu điểm</td>
                <td>
                  Dựa trên mức lương gross có thể tính toán được các khoản tiền
                  bảo hiểm, tiền thuế TNCN phải nộp.
                </td>
                <td>
                  Người lao động chỉ cần nhận đúng số tiền đã thỏa thuận trên
                  hợp đồng, không phải tính toán xem người sử dụng lao động trừ
                  tiền đóng bảo hiểm, tiền thuế TNCN có đúng hay không như nhận
                  lương gross.
                </td>
              </tr>
              <tr>
                <td>Nhược điểm</td>
                <td>
                  Do thu nhập thực nhận thấp hơn mức lương đã thỏa thuận trên
                  hợp đồng nên NLĐ phải thường xuyên tính toán số tiền đóng bảo
                  hiểm và thuế thu nhập để tránh bị NSDLĐ tính sai.
                </td>
                <td>
                  &nbsp;NSDLĐ có thể sử dụng mức lương này để đóng Bảo hiểm cho
                  NLĐ dẫn đến mức đóng thấp, mức hưởng các chế độ bảo hiểm của
                  NLĐ cũng thấp.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default GrossToNetSalaryCalculator;
