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
    title: "Công ty",
    link: "/cong-ty",
  },
  {
    id: 3,
    title: "Công cụ",
    link: "",
    subMenu: [
      {
        id: 1,
        title: "Tính lương GROSS - NET",
        link: "/tien-ich/tinh-luong-gross-net",
      },
      {
        id: 2,
        title: "Tính lãi suất kép",
        link: "/tien-ich/tinh-lai-kep",
      },
      {
        id: 3,
        title: "Tính thuế thu nhập cá nhân",
        link: "/tien-ich/tinh-thue-thu-nhap-ca-nhan",
      },
      {
        id: 4,
        title: "Tính Bảo hiểm thất nghiệp",
        link: "/tien-ich/cong-cu-tinh-muc-huong-bao-hiem-that-nghiep",
      },
      {
        id: 5,
        title: "Lập kế hoạch tiết kiệm",
        link: "/tien-ich/lap-ke-hoach-tiet-kiem",
      },
      {
        id: 6,
        title: "Tính bảo hiểm xã hội một lần",
        link: "/tien-ich/tinh-bao-hiem-xa-hoi-mot-lan",
      },
    ],
  },
  {
    id: 4,
    title: "Tin tức",
    link: "/tin-tuc",
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
              if (item.link !== "") {
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
              } else {
                return (
                  <li key={item.id}>
                    <span title={item.title}>{item.title}</span>
                    {item.subMenu && item.subMenu.length > 0 && (
                      <ul>
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
              }
            })}
        </ul>
      )}
    </>
  );
};

export default MenuHeader;
