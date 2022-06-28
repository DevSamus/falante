import {BobinaType, Enrolamento, Impedance, Materiais, Tipo} from "./bobina"

const enrolamento:Enrolamento ={height:12, tipo:Tipo.normal}

 
let bobina :BobinaType ={
 enrolamento:{height:12, tipo:Tipo.normal},
 bodyHeight:"35mm",
 material:Materiais.ALUMÍNIO,
 numeracao:"38x50",
 impedance: Impedance["4 ohms"]
} 