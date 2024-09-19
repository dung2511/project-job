import React from "react";
import { NavLink } from "react-router-dom";

const listMenu = [
  {
    id: 1,
    title: "Tuyển dụng",
    link: "/tuyen-dung",
  },
  {
    id: 2,
    title: "Danh sách ứng viên",
    link: "/danh-sach-ung-vien",
  },
  {
    id: 3,
    title: "Tin tức",
    link: "/tin-tuc",
  },
  {
    id: 4,
    title: "Tiện ích",
    link: "/",
    subMenu: [
      {
        id: 1,
        title: "Tính lương GROSS - NET",
        link: "/tien-ich/tinh-luong-gross-net",
      },
      {
        id: 2,
        title: "Tính thuế thu nhập cá nhân",
        link: "/tien-ich/tinh-thue-thu-nhap-ca-nhan",
      },
    ],
  },
  {
    id: 5,
    title: "Dịch vụ",
    link: "/dich-vu",
  },
  {
    id: 6,
    title: "Liên hệ",
    link: "/lien-he",
  },
];
const MenuHeader = () => {
  return (
    <>
      {listMenu && listMenu.length > 0 && (
        <ul>
          {listMenu &&
            listMenu.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink to={item.link} title={item.title}>
                    {item.title}
                  </NavLink>
                  {item.subMenu && item.subMenu.length > 0 && (
                    <ul className="">
                      {item.subMenu.map((subItem) => {
                        return (
                          <li key={subItem.id}>
                            <NavLink to={subItem.link} title={subItem.title}>
                              {subItem.title}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
};

export default MenuHeader;
