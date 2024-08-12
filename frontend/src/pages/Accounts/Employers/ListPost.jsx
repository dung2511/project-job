import React, { useEffect, useState } from "react";
import SidebarEmployer from "../../../components/layout/SidebarEmployer";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { auth, firestore } from "../../../firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, CircularProgress } from "@mui/material";
import { convertTimestampToDate } from "../../../components/utils";
import EditIcon from "@mui/icons-material/Edit";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
const ListPost = () => {
  const [userId, setUserId] = useState(null);
  const [listData, setListData] = useState(null);
  const navigate = useNavigate();
  const checkAuth = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user != null) {
        setUserId(user.uid);
      } else {
        navigate("/");
        toast.error("Vui lòng đăng nhập tài khoản nhà tuyển dụng", {
          position: "top-right",
        });
      }
    });
  };
  const fetchListDataPost = async () => {
    try {
      const q = query(
        collection(firestore, "Posts"),
        where("employerId", "==", userId)
      );
      if (!q.empty) {
        const unsubscribe = onSnapshot(q, (docSnapshot) => {
          setListData(
            docSnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
        return () => unsubscribe();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkAuth();
    fetchListDataPost();
  }, [userId]);
  if (listData == null) {
    return (
      <Box className="flex items-center justify-center">
        <CircularProgress />
      </Box>
    );
  }
  return (
    <section className="py-6 xl:py-10 posting-list">
      <div className="container">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full lg:w-[22%] px-2 mb-4 lg:mb-0">
            <SidebarEmployer />
          </div>
          <div className="w-full lg:w-[78%] px-2">
            <div className="head-title-all mb-4 leading-[1.3] border-l-[5px] border-solid border-[#DD6B4D] pl-4 font-bold 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
              <span className="text-[var(--cl-blue)]">Danh sách tin đăng</span>
            </div>
            <div className="table-file my-service">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Tên công việc</TableCell>
                      <TableCell
                        sx={{
                          width: "160px",
                          textAlign: "center",
                        }}
                      >
                        Ngày đăng
                      </TableCell>
                      <TableCell
                        sx={{
                          width: "160px",
                          textAlign: "center",
                        }}
                      >
                        Thời hạn nộp
                      </TableCell>
                      <TableCell
                        sx={{
                          width: "160px",
                          textAlign: "center",
                        }}
                      >
                        Lượt nộp
                      </TableCell>
                      <TableCell
                        sx={{
                          width: "160px",
                          textAlign: "center",
                        }}
                      >
                        Tình trạng tin
                      </TableCell>
                      <TableCell
                        sx={{
                          width: "160px",
                          textAlign: "center",
                        }}
                      >
                        Chức năng
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {listData.map((item) => (
                      <TableRow
                        key={item.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {item.positionJob}
                        </TableCell>
                        <TableCell
                          sx={{
                            width: "160px",
                            textAlign: "center",
                          }}
                        >
                          {convertTimestampToDate(item.timeCreated)}
                        </TableCell>
                        <TableCell
                          sx={{
                            width: "160px",
                            textAlign: "center",
                          }}
                        >
                          {convertTimestampToDate(item.expirationDate)}
                        </TableCell>
                        <TableCell
                          sx={{
                            width: "160px",
                            textAlign: "center",
                          }}
                        >
                          0
                        </TableCell>
                        <TableCell
                          sx={{
                            width: "160px",
                            textAlign: "center",
                          }}
                        >
                          {item.expirationDate.seconds <=
                          item.timeCreated.seconds
                            ? "Đã hết hạn"
                            : "Đang hoạt động"}
                        </TableCell>
                        <TableCell
                          sx={{
                            width: "160px",
                            textAlign: "center",
                          }}
                        >
                          <Link
                            to={"/tuyen-dung/" + item.slug}
                            title="Xem tin"
                            className="p-2"
                          >
                            <RemoveRedEyeIcon />
                          </Link>
                          <Link
                            to={"/sua-tin-dang/" + item.id}
                            title="Chỉnh sửa"
                            className="p-2"
                          >
                            <EditIcon />
                          </Link>
                          <button title="Xóa tin" className="inline-block">
                            <DeleteIcon />
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListPost;
