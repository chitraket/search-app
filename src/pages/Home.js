import React, { useState } from 'react'
import UserList from '../components/UserList'

const Home = ({data}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    
    const searchHandler = (searchTerm) => {
      setSearchTerm(searchTerm);
      if (searchTerm !== "") {
        const newContactList = data.filter((contact) => {
          return Object.values(contact)
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });
        setSearchResults(newContactList);
      } else {
        setSearchResults(data);
      }
    };
  return (
    <UserList 
    data={searchTerm.length < 1 ? data : searchResults}
    term={searchTerm}
    searchKeyword={searchHandler}/>
  )
}

export default Home