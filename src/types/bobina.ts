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
	'RF',
	'2SDS',
	'4SDS',
	'normal',
	'in/out',
}
export enum Impedance {
	'2 ohms'='2',
	'2+2 ohms'='2+2',
	'4 ohms'='4',
	'4+4 ohms'='4+4',
	'6 ohms'='6',
	'8 ohms'='8',
	'12 ohms'='12'
}
export type Enrolamento ={
	tipo:Tipo;
	height?:number//#altura do enrolamento 
	internalDiameter?:string //* Diâmetro interno do enrolamento da bobina "in/out"
	externalDiameter?:string	//* Diâmetro externo do enrolamento!
}

export type BobinaType ={
	material: Materiais;//* material da bobina alumínio/kapton/fibra
	numeracao:string;
	bodyHeight?:string; // * altura do corpo
	enrolamento:Enrolamento
	impedance:Impedance;	
}