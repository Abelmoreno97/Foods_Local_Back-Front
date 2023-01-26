import styles from "./Card.module.css"

const Card = (props)=>{
    return(
        <div className={styles.card}>
            <p>id:{props.id}</p>
            <p>Name:{props.name}</p>
            <p>healthScore:{props.healthScore}</p>
            <p>diets:{props.diets}</p>
            <p>dishTypes:{props.dishTypes}</p>
            <p>image:{props.image}</p>
        </div>
    )
};

export default Card;