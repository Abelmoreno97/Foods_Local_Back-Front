import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions";
import style from "./home.module.css"

const Home = ()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsers());
    },[dispatch]);
    return(
        <div className={style.home}>
        <CardsContainer/>
        </div>
    );
};

export default Home;