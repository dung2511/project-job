import React from "react";
import { convertSalary } from "../../components/utils";
import { timeAgo } from "../../hooks/useFetchData";
import { Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const JobCard = (props) => {
  return (
    <div className="block md:flex flex-wrap bg-white border-solid border border-transparent hover:border-[#00b14f] transition-all duration-300 rounded-lg p-3 mb-4 relative">
      <div className="flex-1 block mb-4 sm:flex md:mr-6 md:mb-0">
        <Avatar
          className="avatar w-full img-contain shrink-0 mb-2 sm:mb-0 border border-solid border-[#e9eaec] sm:w-[7.5rem] !rounded p-2"
          alt={props.positionJob}
          src={props.avatar}
          sx={{
            width: 112,
            height: 112,
            borderRadius: "8px",
            objectFit: "contain",
          }}
        />
        <div className="w-full sm:w-5/6 sm:pl-4 ">
          <div className="flex flex-col h-full">
            <p className="name font-semibold line-clamp-2 text-[#212f3f] text-[1rem] mb-2">
              {props.positionJob}
            </p>
            <p className="company text-[#424e5c] text-[.875rem] mb-2 line-clamp-1">
              {props.nameCompany}
            </p>
            <div className="flex flex-wrap mt-auto">
              <div className="bg-[#e9eaec] rounded text-[#212f3f] px-2 py-1 mr-2 last:mr-0 text-[0.75rem] font-medium">
                {convertSalary(props.minSalary)} -{" "}
                {convertSalary(props.maxSalary)}
              </div>
              <div className="bg-[#e9eaec] rounded text-[#212f3f] px-2 py-1 mr-2 last:mr-0 text-[0.75rem] font-medium">
                {timeAgo(props.timeCreated.seconds)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end">
        <Link
          to={`/tuyen-dung/${props.slug}`}
          title="Ứng tuyển"
          className="px-3 py-1.5 rounded border font-semibold text-[0.75rem] border-solid border-transparent text-[#fff] bg-[#00b14f] hover:bg-[#009643] hover:text-white"
        >
          Ứng tuyển
        </Link>
        <Button title="Yêu thích" className="text-[#000] text-[1.25rem]">
          <FavoriteBorderIcon />
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
