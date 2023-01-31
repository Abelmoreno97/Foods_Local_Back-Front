import React, {useEffect} from "react";
import { useParams} from "react-router-dom";
import {useDispatch, useSelector } from "react-redux"
import { getUser, getDetailFromState } from "../../redux/actions";

const Detail = () => {

  const dispatch = useDispatch();
  const {id} = useParams();
 const user = useSelector((state)=> state.user);
 const users = useSelector((state)=> state.users)

 useEffect(() => {
  if(users.length){
    dispatch(getDetailFromState(id));
  }else{
    dispatch(getUser(id))
  }
 }, [dispatch,id,users.length])
  return (
    <div>
      <p>hola</p>
      {user.length ?(
        <div>
          <img src={user[0].image} alt="img"/>
        </div>):(<div><p>error</p></div>)}
    </div>
  );
};

export default Detail;
