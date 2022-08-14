import React, { useRef } from "react";
import CardComponents from "../Card";

const UserList = (props) => {
  const inputEl = useRef("");
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  const renderContactList = props.data.map((item, index) => {
    return <CardComponents data={item} key={index} />;
  });
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Search
            </label>
            <input
              ref={inputEl}
              type="text"
              placeholder="Search User Name"
              className="w-full bg-white rounded border border-gray-300 focus:border-sky-100 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={props.term}
              onChange={getSearchTerm}
            />
          </div>
  <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            {renderContactList.length > 0
              ? renderContactList
              : "No Contacts available"}
            </div>
    </div>
      </section>
    </>
  );
};

export default UserList;
