import  { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import { info } from "./info";


const MailMe= () => {

    const form = useRef();

    const [sent, setSent] = useState(false);

    const handleSubmit = (event) => {

        event.preventDefault();
        emailjs.sendForm(
            info.serviceID,
            info.templateID,
            form.current,
            info.public
            
        )
        .then((result) => {
            setSent(true)
        }, (error) => {
            console.log(error.text)
        }
        )
    };

    return (
        <div className="container">
            <div className="row title-mail">
                <h2>Escríbeme </h2>
            </div>

            <div className="row">   

                <div className="col">
                    Llena este formulario si deseas contarme, te responderé muy pronto.
                    <p className="text-muted"><small> Todos los campos marcados con * son obligatorios.</small></p>
                </div>

                <form ref={form} onSubmit={handleSubmit} className="col align-items-center">

                    <div className="form-group row">
                        <label 
                            htmlFor="name" 
                            className="mb-1">
                            Nombre 
                            <small> *</small>
                        </label>
                        <input type="text" id="name" className="mb-3"/>
                    </div>
                    
                    <div className="form-group row">
                        <label 
                            htmlFor="email"  
                            className="mb-1">
                            Email 
                            <small> *</small>
                        </label>
                        <input type="email" id="email" className="mb-3"/>
                    </div>

                    <div className="form-group row">
                        <label 
                            htmlFor="subject" 
                            className="mb-1">
                            Asunto
                            <small> *</small>
                        </label>
                        <input type="text" id="subject" className="mb-3"/>
                    </div>
                    <div className="form-group row">
                        <label 
                            htmlFor="message" 
                            className="mb-1">
                            Mensaje
                            <small> *</small>
                        </label>
                        <textarea id="message" cols="5" rows="5" className="mb-3"></textarea>
                    </div>
                    <div className="form-group row">
                        <button className="justify-content-end">Enviar</button>
                    </div>
                    

                    {sent && 'Mensaje enviado con exito, gracias.'}

                </form>
           

            </div>
        

        </div>
        
    )

}


export  default MailMe;