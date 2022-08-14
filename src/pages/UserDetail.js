import React from 'react'
import { useParams } from 'react-router-dom';
import UserInfo from '../components/UserInfo';


const UserDetail = ({data}) => {
    const { id } = useParams(); 
    const userData = data.filter(item => item?.login?.uuid === id);

  return (
   userData.length > 0 ? <UserInfo data={userData[0]}/> : <p>No Contacts available</p>
  )
}

export default UserDetail