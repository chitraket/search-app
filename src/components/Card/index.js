import React from "react";
import { Link } from "react-router-dom";

const CardComponents = ({data}) => {
    const {picture,gender,name,email,location,dob,login} = data
  return (
    <Link
    to={{ pathname: `/contact/${login?.uuid}`, state: { contact: data } }}
    className="w-full 2xl:w-[45.7rem] xl:w-[37.7rem] lg:w-[29.7rem]  border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 m-2"
  >
      <div className="grid grid-cols-6 p-5 gap-y-2">
        <div>
          <img
            src={picture?.medium}
            alt={name?.first}
            className="max-w-16 max-h-16 rounded-full"
          />
        </div>
        <div className="col-span-5 md:col-span-4 ml-4">
          <p className="text-sky-500 font-bold text-xs"> {gender} </p>
          <p className="text-gray-600 font-bold">
            {name?.title}. {name?.first} {name?.last}
          </p>
          <p className="text-gray-400">{email}</p>
          <p className="text-gray-400">
            {location?.city}, {location?.state}, {location?.country}{" "}
          </p>
        </div>
        <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
          <p className="rounded-lg text-sky-500 font-bold bg-sky-100  py-1 px-3 text-sm w-fit h-fit">
            {dob.age}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardComponents;
