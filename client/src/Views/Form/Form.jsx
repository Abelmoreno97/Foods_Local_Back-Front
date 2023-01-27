import { useState } from "react";

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
    // (form.name.match("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$")!=null){
        // setErrors({...errors,name:""})

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
     <form onSubmit={submitHandler}>
        <div>
            <label>name</label>
            <input type="text" value={form.name} onChange={changeHandler} name="name"/>
            {errors.name && <span>{errors.name}</span>}
        </div>
        {/* <div>
            <label></label>
            <input></input>
        </div>
        <div>
            <label></label>
            <input></input>
        </div> */}
        <button type="submit">SUBMIT</button>
     </form>
    )
};

export default Form;