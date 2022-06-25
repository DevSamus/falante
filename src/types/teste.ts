import {Bobina, Enrolamento, Impedancia, Materiais, Tipo} from "./Bobina"

const enrolamento:Enrolamento ={altura:12, tipo:Tipo.normal}

let bobina :Bobina ={
 enrolamento:{altura:12, tipo:Tipo.normal},
 corpo:"35mm",
 material:Materiais.ALUMÍNIO,
 numeracao:"38x50",
 impedancia:Impedancia["4 ohms"]
}