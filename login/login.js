import fs from "fs";
export const añadirPlanta = (data) => {
    try{
        let plantas = JSON.parse(fs.readFileSync("./plantas.json", "utf-8"));
        console.log(plantas)
        plantas.push(data);
        fs.writeFileSync("./plantas.json",JSON.stringify(plantas,null,2));

        return plantas;
    }
    catch {
        console.log("[-] Ocurrio un Error.")
    }
};



export const getPlantas = () => {
    try{
        let plantas = JSON.parse(fs.readFileSync("./plantas.json", "utf-8"));
        console.log("ddjasjdjsa")
        return plantas;
    }
    catch {
        console.log("[-] Ocurrio un Error.")
    }
};
