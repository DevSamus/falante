import {Bobina, Enrolamento, Impedance, Materiais, Tipo} from "./Bobina"

const enrolamento:Enrolamento ={height:12, tipo:Tipo.normal}

 
let bobina :Bobina ={
 enrolamento:{height:12, tipo:Tipo.normal},
 bodyHeight:"35mm",
 material:Materiais.ALUMÍNIO,
 numeracao:"38x50",
 impedance: Impedance["4 ohms"]
} 