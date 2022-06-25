/* 
  * Materiais -> ALUMÍNIO/FIBRA/KAPTON
  * numeração -> 63x10  
  * corpo:  ->  mm
  * enrolamento: {tipo:Reforçado /2SDS /4SDS / normal, altura:mm }
  * impedância -> 2/4/6/8/12 ohms

   # enrolamento {
   #  	tipo: Reforçado /2SDS /4SDS / normal inout,
   # 	altura: xmm, }

 *    Material: Alumínio
 *   numeração: 38x50
 *       corpo: "altura" -> 35mm
 * Enrolamento: {tipo:Normal, altura:12mm}
 *  impedância: 4 ohms
 *       saída: simples 

*/

export enum Materiais {
	ALUMÍNIO,
	FIBRA,
	KAPTON
}

export enum Tipo{
	'Reforçado',
	'2SDS',
	'4SDS',
	'normal',
	'in/out',
}
export enum Impedancia {
	'2 ohms',
	'4 ohms',
	'6 ohms',
	'8 ohms',
	'12 ohms'
}
export type Enrolamento ={
	tipo:Tipo;
	altura:number
}

export type Bobina ={
	material: Materiais;
	numeracao:string;
	corpo:string;
	enrolamento:Enrolamento
	impedancia:Impedancia
}