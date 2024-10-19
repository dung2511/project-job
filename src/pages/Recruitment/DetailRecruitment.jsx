import {
  Button,
  CircularProgress,
  Skeleton,
  Stack,
} from "@mui/material";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { auth, firestore } from "../../firebase.config";
import dayjs from "dayjs";
import GradeIcon from "@mui/icons-material/Grade";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import GroupsIcon from "@mui/icons-material/Groups";
import BusinessIcon from "@mui/icons-material/Business";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import PeopleIcon from "@mui/icons-material/People";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { convertSalary } from "../../components/utils";
import { toast } from "react-toastify";
const DetailRecruitment = () => {
  const { slug } = useParams();
  const [dataDetail, setDataDetail] = useState(null);
  const [dataEmployer, setDataEmployer] = useState(null);
  const [levelJobName, setLevelJobName] = useState(null);
  const [careerJobName, setCareerJobName] = useState(null);
  const [experienceJobName, setExperienceJobName] = useState(null);
  const [hasApplied, setHasApplied] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fetchDataDetail = async () => {
    try {
      const q = query(
        collection(firestore, "Posts"),
        where("slug", "==", slug)
      );
      const docSnap = await getDocs(q);
      if (!docSnap.empty) {
        const data = docSnap.docs[0].data();
        setDataDetail((prevDetail) => ({
          ...prevDetail,
          id: docSnap.docs[0].id,
          ...data,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDataEmployer = async () => {
    try {
      if (!dataDetail || !dataDetail.employerId) return;
      const docRef = doc(firestore, "Employers", dataDetail?.employerId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDataEmployer(docSnap.data());
      }
    } catch (error) {
      console.log(error);
    }
  };
  const queryDataId = async () => {
    const queryLevelJob = async () => {
      try {
        if (!dataDetail || !dataDetail.levelJob) return;
        const docSnap = await getDoc(
          doc(firestore, "levels", dataDetail?.levelJob)
        );
        if (docSnap.exists()) {
          setLevelJobName(docSnap.data().name);
        }
      } catch (error) {
        console.error("Error fetching level job:", error);
        return "Error fetching level";
      }
    };
    const queryCareerJob = async () => {
      try {
        if (!dataDetail || !dataDetail.careerJob) return;
        const docSnap = await getDoc(
          doc(firestore, "career_categories", dataDetail?.careerJob)
        );
        if (docSnap.exists()) {
          setCareerJobName(docSnap.data().name);
        }
      } catch (error) {
        console.error("Error fetching level job:", error);
        return "Error fetching level";
      }
    };
    const queryExperienceJob = async () => {
      try {
        if (!dataDetail || !dataDetail.experienceJob) return;
        const docSnap = await getDoc(
          doc(firestore, "experiences", dataDetail?.experienceJob)
        );
        if (docSnap.exists()) {
          setExperienceJobName(docSnap.data().name);
        }
      } catch (error) {
        console.error("Error fetching level job:", error);
        return "Error fetching level";
      }
    };
    queryLevelJob();
    queryCareerJob();
    queryExperienceJob();
  };

  const handleCheckApplyJob = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return;
      const userId = user.uid;
      if (userId) {
        const q = query(
          collection(firestore, "Applications"),
          where("postId", "==", dataDetail?.id),
          where("userId", "==", userId)
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          setHasApplied(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleApplyJob = async (postId, employerId) => {
    try {
      const user = auth.currentUser;
      if (!user) {
        toast.error("Vui lòng đăng nhập để ứng tuyển !!", {
          position: "top-right",
        });
      } else if (user.uid) {
        const userQuery = doc(firestore, "Users", user.uid);
        const userSnapshot = await getDoc(userQuery);
        if (userSnapshot.exists()) {
          const data = {
            postId: postId,
            employerId: employerId,
            userId: user.uid,
            createAt: new Date(),
          };
          await addDoc(collection(firestore, "Applications"), data);
          toast.success("Ứng tuyển thành công !!", {
            position: "top-right",
          });
        } else {
          toast.error("Vui lòng đăng nhập tài khoản ứng viên để ứng tuyển !!", {
            position: "top-right",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCheckSaveJob = async () => {
    try {
      const user = auth.currentUser;
      if (user == null) return;
      const userId = user.uid;
      if (userId !== "") {
        if (userId !== "") {
          const q = query(
            collection(firestore, "Favourites"),
            where("postId", "==", dataDetail?.id),
            where("userId", "==", user.uid)
          );
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            setHasLiked(true);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSaveJob = async () => {
    setIsLoading(true);
    try {
      const user = auth.currentUser;
      if (user.uid === "") {
        toast.error("Vui lòng đăng nhập để lưu tin !!", {
          position: "top-right",
        });
      } else {
        const userQuery = doc(firestore, "Users", user.uid);
        const userSnapshot = await getDoc(userQuery);
        if (userSnapshot.exists()) {
          if (!hasLiked) {
            const data = {
              postId: dataDetail?.id,
              employerId: dataDetail?.employerId,
              userId: user?.uid,
              createAt: new Date(),
            };
            await addDoc(collection(firestore, "Favourites"), data);
            setHasLiked(true);
            toast.success("Lưu tin thành công !!", {
              position: "top-right",
            });
          } else {
            const q = query(
              collection(firestore, "Favourites"),
              where("postId", "==", dataDetail?.id),
              where("userId", "==", user?.uid)
            );
            const querySnapshot = await getDocs(q);
            const jobDoc = querySnapshot.docs[0];
            if (jobDoc) {
              await deleteDoc(doc(firestore, "Favourites", jobDoc.id));
              toast.success("Đã bỏ lưu tin !!", {
                position: "top-right",
              });
              setHasLiked(false);
            }
          }
        } else {
          toast.error("Vui lòng đăng nhập tài khoản ứng viên để lưu tin !!", {
            position: "top-right",
          });
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchDataEmployer();
    handleCheckApplyJob();
    handleCheckSaveJob();
    queryDataId();
  }, [dataDetail]);

  useEffect(() => {
    fetchDataDetail();
  }, [slug]);

  return (
    <section className="py-6 xl:py-10 section-job__detail bg-[#f4f5f5]">
      <div className="container">
        <div className="flex flex-wrap mb-6 -mx-2">
          <div className="w-full px-2 mb-4 lg:w-3/4 lg:mb-0">
            <div className="job-info bg-[#ffffff] rounded-lg xl:p-6 p-4">
              <div className="content">
                {dataDetail?.positionJob ? (
                  <h3 className="title font-semibold text-[#000] 2xl:text-[1.5rem] text-[1.25rem] mb-3">
                    {dataDetail.positionJob}
                  </h3>
                ) : (
                  <Skeleton variant="text" width={"100%"} height={48} />
                )}
                <div className="flex flex-wrap -mx-2 lg:justify-between mb-4">
                  <div className="w-full mb-4 last:mb-0 lg:mb-0 px-2 sm:w-1/2 lg:w-1/3">
                    {dataDetail?.minSalary && dataDetail?.maxSalary ? (
                      <div className="flex items-center">
                        <span className="mr-3 bg-[#00bf5d] inline-block p-2 rounded-full">
                          <MonetizationOnIcon
                            sx={{
                              color: "#ffffff",
                              fontSize: "2rem",
                            }}
                          />
                        </span>
                        <div className="">
                          <p className="text-[0.875rem] font-medium text-[#000] flex items-center">
                            Mức lương
                          </p>
                          <p className="text-[1rem] font-bold text-[#000] flex items-center">
                            {convertSalary(dataDetail.minSalary)}
                            <span className="mx-2">-</span>
                            {convertSalary(dataDetail.maxSalary)}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <Skeleton variant="text" width={"100%"} height={48} />
                    )}
                  </div>
                  <div className="w-full mb-4 last:mb-0 lg:mb-0 px-2 sm:w-1/2 lg:w-1/3">
                    {dataEmployer?.cityWork ? (
                      <div className="flex items-center">
                        <span className="mr-3 bg-[#00bf5d] inline-block p-2 rounded-full">
                          <BusinessIcon
                            sx={{
                              color: "#ffffff",
                              fontSize: "2rem",
                            }}
                          />
                        </span>
                        <div className="">
                          <p className="text-[0.875rem] font-medium text-[#000] flex items-center">
                            Địa điểm
                          </p>
                          <p className="text-[1rem] font-bold text-[#000] flex items-center">
                            {dataEmployer.cityWork}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <Skeleton variant="text" width={"100%"} height={48} />
                    )}
                  </div>
                  <div className="w-full mb-4 last:mb-0 lg:mb-0 px-2 sm:w-1/2 lg:w-1/3">
                    {dataDetail?.experienceJob && experienceJobName ? (
                      <div className="flex items-center">
                        <span className="mr-3 bg-[#00bf5d] inline-block p-2 rounded-full">
                          <WorkIcon
                            sx={{
                              color: "#ffffff",
                              fontSize: "2rem",
                            }}
                          />
                        </span>
                        <div className="">
                          <p className="text-[0.875rem] font-medium text-[#000] flex items-center">
                            Kinh nghiệm
                          </p>
                          <p className="text-[1rem] font-bold text-[#000] flex items-center">
                            {experienceJobName}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <Skeleton variant="text" width={"100%"} height={48} />
                    )}
                  </div>
                </div>
                {dataDetail?.expirationDate ? (
                  <div className="flex items-center bg-[#f2f4f5] px-3 py-2 w-fit mb-4">
                    <AccessTimeFilledIcon
                      sx={{ marginRight: "0.5rem", color: "#7f878f" }}
                    />
                    <p className="text-[0.875rem] font-medium text-[#000] flex items-center">
                      <span className="mr-2">Hạn nộp:</span>
                      {dayjs(dataDetail.expirationDate.toDate()).format(
                        "DD/MM/YYYY"
                      )}
                    </p>
                  </div>
                ) : (
                  <Skeleton variant="text" width={"100%"} height={48} />
                )}
                {dataDetail ? (
                  <Stack direction="row" className="flex flex-wrap md:-mx-2">
                    <div className="w-full md:w-2/3 md:px-2 mb-4 last:mb-0">
                      <Button
                        onClick={() => {
                          if (!handleCheckApplyJob) {
                            handleApplyJob(dataDetail?.id, dataEmployer?.id);
                          }
                        }}
                        disabled={hasApplied}
                        variant="contained"
                        fullWidth
                        sx={{
                          backgroundColor: "#00b14f",
                          textTransform: "none",
                          padding: "0.75rem 0",
                          transition: "all 0.5s",
                          "&:hover": {
                            backgroundColor: "#009643",
                          },
                        }}
                      >
                        <SendIcon
                          sx={{
                            marginRight: "0.5rem",
                            transform: "rotate(-45deg)",
                          }}
                        />
                        {hasApplied ? "Đã ứng tuyển" : "Ứng tuyển ngay"}
                      </Button>
                    </div>
                    <div className="w-full md:w-1/3 md:px-2 mb-4 last:mb-0">
                      <Button
                        onClick={handleSaveJob}
                        variant="outlined"
                        fullWidth
                        sx={{
                          color: "#00b14f",
                          textTransform: "none",
                          padding: "0.75rem 0",
                          borderColor: "#99e0b9",
                          transition: "all 0.5s",
                          "&:hover": {
                            borderColor: "#00b14f",
                            color: "#00b14f",
                          },
                        }}
                        disabled={isLoading} // Disable button while loading
                      >
                        {isLoading ? (
                          <CircularProgress
                            size={24}
                            sx={{ color: "#00b14f" }}
                          />
                        ) : hasLiked ? (
                          <>
                            <FavoriteBorderIcon
                              sx={{ marginRight: "0.5rem" }}
                            />
                            Đã lưu tin
                          </>
                        ) : (
                          <>
                            <FavoriteBorderIcon
                              sx={{ marginRight: "0.5rem" }}
                            />
                            Lưu tin
                          </>
                        )}
                      </Button>
                    </div>
                  </Stack>
                ) : (
                  <Stack direction="row" spacing={2}>
                    <Skeleton variant="text" width={160} height={40} />
                    <Skeleton variant="text" width={120} height={40} />
                  </Stack>
                )}
              </div>
            </div>
          </div>
          <div className="w-full px-2 lg:w-1/4">
            <div className="bg-white p-4 rounded-md infomation">
              <div className="flex flex-wrap md:-mx-2 mb-4">
                <div className="w-full mb-4 last:mb-0 sm:mb-0 sm:w-1/3 px-2">
                  {dataEmployer?.imageCompany ? (
                    <div className="c-img pt-[100%] rounded-md overflow-hidden">
                      <img
                        loading="lazy"
                        src={dataEmployer.imageCompany}
                        alt={dataEmployer.nameCompany}
                        title={dataEmployer.nameCompany}
                        className="img-fluid"
                      />
                    </div>
                  ) : (
                    <Skeleton variant={"circular"} width={90} height={90} />
                  )}
                </div>
                <div className="w-full mb-4 last:mb-0 sm:mb-0 sm:w-2/3 px-2">
                  {dataEmployer?.nameCompany ? (
                    <div className="text-[#212f3f] font-semibold text-center sm:text-left">
                      {dataEmployer.nameCompany}
                    </div>
                  ) : (
                    <Skeleton
                      variant="rectangular"
                      width={"100%"}
                      height={90}
                    />
                  )}
                </div>
              </div>
              {dataEmployer?.personalSize ? (
                <div className="flex items-center mb-2">
                  <div className="flex text-[0.875rem] text-[#7f878f] w-1/3 font-medium items-center">
                    <GroupsIcon sx={{ marginRight: "0.5rem" }} />
                    Quy mô:
                  </div>
                  <div className="w-2/3 font-semibold">
                    {dataEmployer.personalSize}
                  </div>
                </div>
              ) : (
                <Skeleton variant={"text"} width={"100%"} height={40} />
              )}
              {dataDetail?.careerJob && careerJobName ? (
                <div className="flex items-center mb-2">
                  <div className="flex text-[0.875rem] text-[#7f878f] w-1/3 font-medium items-center">
                    <ViewInArIcon sx={{ marginRight: "0.5rem" }} />
                    Lĩnh vực:
                  </div>
                  <div className="w-2/3 font-semibold">{careerJobName}</div>
                </div>
              ) : (
                <Skeleton variant={"text"} width={"100%"} height={40} />
              )}
              {dataEmployer?.addressCompany ? (
                <div className="flex items-center mb-2">
                  <div className="flex text-[0.875rem] text-[#7f878f] w-1/3 font-medium items-center">
                    <BusinessIcon sx={{ marginRight: "0.5rem" }} />
                    Địa điểm:
                  </div>
                  <div className="w-2/3 font-semibold">
                    {dataEmployer.addressCompany}
                  </div>
                </div>
              ) : (
                <Skeleton variant={"text"} width={"100%"} height={40} />
              )}
              {dataEmployer?.slug ? (
                <Link
                  className="text-center block text-[#00b14f] text-[0.875rem] font-semibold"
                  to={"/cong-ty/" + dataEmployer?.slug}
                >
                  Xem trang công ty
                </Link>
              ) : (
                <Skeleton variant={"text"} width={"100%"} height={40} />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 mb-4 lg:w-3/4 lg:mb-0">
            <div className="info-detail bg-white rounded-lg xl:p-6 p-4 mb-6">
              <div className="wrapper-tabcontent">
                {dataDetail ? (
                  <div className="border-l-[6px] border-solid border-[#00b14f] text-[#212f3f] text-[1.25rem] font-bold pl-2.5 mb-4">
                    Chi tiết tin tuyển dụng
                  </div>
                ) : (
                  <Skeleton width={"100%"} height={48} />
                )}
                {dataDetail?.descriptionJob ? (
                  <>
                    {dataDetail.descriptionJob !== "" ? (
                      <p className="text-[1.125rem] font-semibold mb-2">
                        Mô tả công việc
                      </p>
                    ) : (
                      ""
                    )}
                    <div
                      className="s-content mb-8 last:mb-0"
                      dangerouslySetInnerHTML={{
                        __html: dataDetail.descriptionJob,
                      }}
                    ></div>
                    {dataDetail.candidateRequirement !== "" ? (
                      <p className="text-[1.125rem] font-semibold mb-2">
                        Yêu cầu ứng viên
                      </p>
                    ) : (
                      ""
                    )}
                    <div
                      className="s-content mb-8 last:mb-0"
                      dangerouslySetInnerHTML={{
                        __html: dataDetail.candidateRequirement,
                      }}
                    ></div>
                    {dataDetail.benefit !== "" ? (
                      <p className="text-[1.125rem] font-semibold mb-2">
                        Quyền lợi
                      </p>
                    ) : (
                      ""
                    )}
                    <div
                      className="s-content mb-8 last:mb-0"
                      dangerouslySetInnerHTML={{
                        __html: dataDetail.benefit,
                      }}
                    ></div>
                    {dataDetail.timeWork !== "" ? (
                      <p className="text-[1.125rem] font-semibold mb-2">
                        Thời gian làm việc
                      </p>
                    ) : (
                      ""
                    )}
                    <div
                      className="s-content mb-8 last:mb-0"
                      dangerouslySetInnerHTML={{
                        __html: dataDetail.timeWork,
                      }}
                    ></div>
                  </>
                ) : (
                  <Skeleton variant="rectangular" width={"100%"} height={360} />
                )}
                {dataDetail ? (
                  <div className="mb-4">
                    <p className="text-[1.125rem] font-semibold mb-2">
                      Cách thức ứng tuyển
                    </p>
                    <p>
                      Ứng viên nộp hồ sơ trực tuyến bằng cách bấm{" "}
                      <span className="font-bold">Ứng tuyển</span> ngay dưới
                      đây.
                    </p>
                  </div>
                ) : (
                  <Skeleton variant="text" width={"100%"} height={40} />
                )}
                {dataDetail?.expirationDate ? (
                  <p className="mb-4">
                    Hạn nộp hồ sơ:{" "}
                    {dayjs(dataDetail.expirationDate.toDate()).format(
                      "DD/MM/YYYY"
                    )}
                  </p>
                ) : (
                  <Skeleton variant="text" width={"100%"} height={40} />
                )}

                {dataDetail ? (
                  <Stack direction="row" spacing={2}>
                    <Button
                      onClick={() => {
                        if (!handleCheckApplyJob) {
                          handleApplyJob(dataDetail?.id, dataEmployer?.id);
                        }
                      }}
                      disabled={hasApplied}
                      variant="contained"
                      sx={{
                        backgroundColor: "#00b14f",
                        textTransform: "none",

                        transition: "all 0.5s",
                        "&:hover": {
                          backgroundColor: "#009643",
                        },
                      }}
                    >
                      {hasApplied ? "Đã ứng tuyển" : "Ứng tuyển ngay"}
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#00b14f",
                        textTransform: "none",
                        borderColor: "#99e0b9",
                        transition: "all 0.5s",
                        "&:hover": {
                          borderColor: "#00b14f",
                          color: "#00b14f",
                        },
                      }}
                    >
                      {isLoading ? (
                        <CircularProgress size={24} sx={{ color: "#00b14f" }} />
                      ) : hasLiked ? (
                        <>Đã lưu tin</>
                      ) : (
                        <>Lưu tin</>
                      )}
                    </Button>
                  </Stack>
                ) : (
                  <Stack direction="row" spacing={2}>
                    <Skeleton variant="text" width={160} height={40} />
                    <Skeleton variant="text" width={120} height={40} />
                  </Stack>
                )}
              </div>
            </div>
          </div>
          <div className="w-full px-2 lg:w-1/4">
            <div className="info-detail__sidebar bg-white rounded-lg">
              <p className="head p-3 text-center lg:text-[1.125rem] font-bold border-b-[1px] border-solid border-[#A8A8A8]">
                {dataDetail ? (
                  "Thông tin chung"
                ) : (
                  <Skeleton variant="text" width={"100%"} height={40} />
                )}
              </p>
              <div className="p-4 content">
                {dataDetail?.levelJob && levelJobName ? (
                  <div className="flex items-center mb-4">
                    <span className="mr-3 bg-[#00bf5d] inline-block p-2 rounded-full">
                      <GradeIcon
                        sx={{
                          color: "#ffffff",
                          fontSize: "1.25rem",
                          width: "1.75rem",
                          height: "1.75rem",
                        }}
                      />
                    </span>
                    <div className="">
                      <p className="text-[0.875rem] font-medium text-[#000] flex items-center">
                        Cấp bậc
                      </p>
                      <p className="text-[1rem] font-semibold text-[#000] flex items-center">
                        {levelJobName}
                      </p>
                    </div>
                  </div>
                ) : (
                  <Skeleton variant="text" width={"100%"} height={48} />
                )}
                {dataDetail?.experienceJob ? (
                  <div className="flex items-center mb-4">
                    <span className="mr-3 bg-[#00bf5d] inline-block p-2 rounded-full">
                      <WorkIcon
                        sx={{
                          color: "#ffffff",
                          fontSize: "1.25rem",
                          width: "1.75rem",
                          height: "1.75rem",
                        }}
                      />
                    </span>
                    <div className="">
                      <p className="text-[0.875rem] font-medium text-[#000] flex items-center">
                        Kinh nghiệm
                      </p>
                      <p className="text-[1rem] font-semibold text-[#000] flex items-center">
                        {experienceJobName}
                      </p>
                    </div>
                  </div>
                ) : (
                  <Skeleton variant="text" width={"100%"} height={48} />
                )}
                {dataDetail?.quantity ? (
                  <div className="flex items-center mb-4">
                    <span className="mr-3 bg-[#00bf5d] inline-block p-2 rounded-full">
                      <PeopleIcon
                        sx={{
                          color: "#ffffff",
                          fontSize: "1.25rem",
                          width: "1.75rem",
                          height: "1.75rem",
                        }}
                      />
                    </span>
                    <div className="">
                      <p className="text-[0.875rem] font-medium text-[#000] flex items-center">
                        Số lượng
                      </p>
                      <p className="text-[1rem] font-semibold text-[#000] flex items-center">
                        {dataDetail.quantity}
                      </p>
                    </div>
                  </div>
                ) : (
                  <Skeleton variant="text" width={"100%"} height={48} />
                )}
                {dataDetail?.workplace ? (
                  <div className="flex items-center mb-4">
                    <span className="mr-3 bg-[#00bf5d] inline-block p-2 rounded-full">
                      <WorkHistoryIcon
                        sx={{
                          color: "#ffffff",
                          fontSize: "1.25rem",
                          width: "1.75rem",
                          height: "1.75rem",
                        }}
                      />
                    </span>
                    <div className="">
                      <p className="text-[0.875rem] font-medium text-[#000] flex items-center">
                        Hình thức làm việc
                      </p>
                      <p className="text-[1rem] font-semibold text-[#000] flex items-center">
                        {dataDetail.workplace}
                      </p>
                    </div>
                  </div>
                ) : (
                  <Skeleton variant="text" width={"100%"} height={48} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailRecruitment;
