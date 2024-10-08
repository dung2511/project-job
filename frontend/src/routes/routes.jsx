import Home from "../pages/Home/Home";
import Recruitment from "../pages/Recruitment/Recruitment";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllNews from "../pages/News/AllNews";
import NewsDetail from "../pages/News/NewsDetail";
import ListCandidate from "../pages/Accounts/Employers/CandidateManagement";
import DetailCandidate from "../pages/Candidate/DetailCandidate";
import SuperiorToolDetail from "../pages/Extension/SuperiorToolDetail";
import Services from "../pages/Services/Services";
import ProfileUser from "../pages/Accounts/Users/ProfileUser";
import ChangePassword from "../pages/Accounts/Users/ChangePassword";
import SaveJobs from "../pages/Accounts/Users/SaveJobs";
import JobsApply from "../pages/Accounts/Users/JobsApply";
import ProfileEmployer from "../pages/Accounts/Employers/ProfileEmployer";
import CandidateManagement from "../pages/Accounts/Employers/CandidateManagement";
import ListPost from "../pages/Accounts/Employers/ListPost";
import CreatePost from "../pages/Accounts/Employers/CreatePost";
import Contact from "../pages/Contact/Contact";
import DetailRecruitment from "../pages/Recruitment/DetailRecruitment";
import EditorPost from "../pages/Accounts/Employers/EditorPost";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/tuyen-dung",
    component: Recruitment,
  },
  {
    path: "/tuyen-dung/:slug",
    component: DetailRecruitment,
  },
  {
    path: "/tin-tuc",
    component: AllNews,
  },
  {
    path: "/tin-tuc/:slug",
    component: NewsDetail,
  },
  {
    path: "/danh-sach-ung-vien",
    component: ListCandidate,
  },
  {
    path: "/ung-vien/:slug",
    component: DetailCandidate,
  },
  {
    path: "/tien-ich/:slug",
    component: SuperiorToolDetail,
  },
  {
    path: "/dich-vu",
    component: Services,
  },
  {
    path: "/lien-he",
    component: Contact,
  },
  {
    path: "/dang-nhap",
    component: Login,
  },
  {
    path: "/dang-ky",
    component: Register,
  },
  {
    path: "*",
    component: PageNotFound,
  },
];

const privateRoutes = [
  {
    path: "/thong-tin-tai-khoan",
    component: ProfileUser,
  },
  {
    path: "/doi-mat-khau",
    component: ChangePassword,
  },
  {
    path: "/viec-lam-da-luu",
    component: SaveJobs,
  },
  {
    path: "/viec-lam-ung-tuyen",
    component: JobsApply,
  },
  {
    path: "/thong-tin-tai-khoan-nha-tuyen-dung",
    component: ProfileEmployer,
  },
  {
    path: "/dang-tin",
    component: CreatePost,
  },
  {
    path: "/sua-tin-dang/:id",
    component: EditorPost,
  },
  {
    path: "/quan-ly-ung-vien",
    component: CandidateManagement,
  },
  {
    path: "/danh-sach-tin-dang",
    component: ListPost,
  },
];
export { publicRoutes, privateRoutes };
