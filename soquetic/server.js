import { onEvent, startServer, sendEvent } from "soquetic";
import { añadirPlanta, getPlantas } from "../login/login.js";
import { fetchPlant } from "../api/api.js";
import { updateFavoritos, readFavoritos } from "../favoritos/favoritos.js";

// no esta importado el enviarDesdeArduino?
//tmp esta el de infoPlanta

onEvent("infoPlanta", (nombre) => {
  const res = fetchPlant(nombre);
  return res;
});

// chat me tira que esto debe ser esto: 
//onEvent("infoPlanta", (nombre) => {
  //const planta = fetchPlant(nombre);  
  //mostrarModal(planta);
//});

onEvent("añadirPlanta", async (data) => {
  const plantas = await añadirPlanta(data);
  return plantas;
});

onEvent("getPlantas",()=> {return getPlantas})

onEvent("readFavoritos",()=>{ return readFavoritos()})
onEvent("updateFavoritos",(data)=>{  updateFavoritos(data)})


export const sendData = (data)=>{
    sendEvent("enviarDesdeArduino",data);
    
    console.log("del back funciona");
};
startServer();

