import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions";

const Home = ()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsers());
    },[dispatch]);
    return(
        <>
        <h1>estoy en home</h1>
        <CardsContainer/>
        </>
    );
};

export default Home;