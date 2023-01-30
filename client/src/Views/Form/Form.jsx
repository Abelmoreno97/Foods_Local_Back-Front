import { useState } from "react";
import style from "./form.module.css"

const Form = ()=>{


    const [form,setForm] = useState({
        name:""
    })

    const [errors,setErrors] = useState({
        name:""
    })



    const changeHandler= (event) => {
        const property = event.target.name;
        const value = event.target.value;
        
        validate({...form,[property]:value})
        setForm({...form,[property]:value})
    }

    const validate = (form) => {
        if(form.name===""){
            setErrors({...errors,name:"error, campo vacio"})
        }else if(form.name.match("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$")!=null) {
                setErrors({...errors,name:""})
        }else{
            setErrors({...errors,name:"error, campo invalido"})
        }
    }

    const submitHandler = (event) => {
        event.preventDefault()
        alert("boton apretado")
        // agregar peticion al back para enviar formulario
    }

    return(
     <form className={style.Form} onSubmit={submitHandler}>
        <div className={style.divForm}>
            <label>name</label>
            <input type="text" value={form.name} onChange={changeHandler} name="name"/>
            {errors.name && <span>{errors.name}</span>}
        </div>
        <div className={style.divForm}>
            <label>summary</label>
            <input type="text" value={form.name} onChange={changeHandler} name="name"/>
            {errors.name && <span>{errors.name}</span>}
        </div>
        <div className={style.divForm}>
            <label>healthscore</label>
            <input type="text" value={form.name} onChange={changeHandler} name="name"/>
            {errors.name && <span>{errors.name}</span>}
        </div>
        <div className={style.divForm}>
            <label>steps</label>
            <input type="text" value={form.name} onChange={changeHandler} name="name"/>
            {errors.name && <span>{errors.name}</span>}
        </div>
        <div className={style.divForm}>
            <label>dishtypes</label>
            <input type="text" value={form.name} onChange={changeHandler} name="name"/>
            {errors.name && <span>{errors.name}</span>}
        </div>
        <div className={style.divForm}>
            <label>image</label>
            <input type="text" value={form.name} onChange={changeHandler} name="name"/>
            {errors.name && <span>{errors.name}</span>}
        </div>
        <div className={style.divForm}>
            <label>diets</label>
            <input type="text" value={form.name} onChange={changeHandler} name="name"/>
            {errors.name && <span>{errors.name}</span>}
        </div>
      
        <button type="submit">SUBMIT</button>
     </form>
    )
};

export default Form;