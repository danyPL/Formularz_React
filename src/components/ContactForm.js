
import React,{useState,useEffect} from "react";
import ThankYou from "./ThankYou";

const ContactForm = () =>{
    const [state,setState] = useState({
        name:"",
        email:"",
        topic:"",
        description:"",
        succes:false
    })
    const handleSubmit = (e) =>{
        if(Object.values(state).some(e=>{
            if(!e){
                alert("Uzupełnij formularz!")
                setState({
                    ...state,
                    succes:false
                })
            }
        }))
        setState({
            ...state,
            succes:true
        })
    }
    const handleChange = (e) =>{
        setState({
            [e.name]:[e.value]
        })
    }
    return (
        <div className='container'>
            {state.succes ? <ThankYou/> : (
            <form onSubmit={handleSubmit}>
            <label>Imie i nazwisko: </label> <input name="name" value={state.name} onChange={handleChange}/>
            <label>Adres Email: </label> <input name="name" value={state.email} onChange={handleChange}/>
            <label>Temat</label>
            <select onChange={handleChange}>
                {["Wsparcie techniczne","Wycena projektu","Współpraca","Inne"].map((e,i)=>(
                    <option key={i}>{e}</option>
                ))}
            </select>
            <label>Opis</label>
            <textarea onChange={handleChange} value={state.description}>
                
            </textarea>
            <button type="submit" className="">Wyślij</button>
            </form>
            )}
            
        </div>
    )
}


export default ContactForm;