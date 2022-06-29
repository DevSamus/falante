//import path from "path";
/* 
const tempDir = path.resolve(__dirname, './cones.xlsx')
const mkdirp = require('mkdirp')
mkdirp.sync(tempDir) */

import xlsx, {SheetType}from "xlsx";
type cone = {
  tipo: string;
  polegada: number;
  modelo: string;
};

export const planilha = function () {
  try {
    const wb = xlsx.readFile(__dirname + "/bobinas.xlsx", { cellDates: true });

    //* nomes das folhas ..
    //console.log(wb.SheetNames);

    //console.log(wb.Sheets); // * conteúdo da folha!

    const cones = wb.Sheets["ba"];
    type B ={
      code:number,
      'BOBINAS EM ALUMÍNIO':string,
      Valor:string
    }
    //console.log(cones["!rows"]);
    //console.log(cones); 38x70 Along/RF 4h
    const arr= xlsx.utils.sheet_to_json<B>(cones)
    return arr.filter(p=> {
      const dd =p['BOBINAS EM ALUMÍNIO'].split(' ')
			let n ="";
			let imp="4h"
			let tipo ="Normal"
			let alt_corp =""

       dd.forEach(d=>{
				if(d.match('\\d{2,}(x|X)\\d{2,}')) n=d;
				else if(d.match('\\d{2,}')) alt_corp=d;
				if(d.match('\\dh|\\d+\\dh')) imp=d.replace("*", '');
				if(d.match("RF|2SDS|4SDS"))tipo=d;
				else if(d.match("ED"))tipo="2SDS";
				
			 })
        
				if(n==="") console.error(p.code,"nada!");
				
				// if(alt_corp==="") console.log(`${p.code} | ${p["BOBINAS EM ALUMÍNIO"]} => `,n,tipo,imp,"A",alt_corp);
				if(alt_corp) console.log(`${p.code} | ${p["BOBINAS EM ALUMÍNIO"]} => `,n,tipo,imp,"A",alt_corp);
			 
			 return p;
    })
  } catch (e: any) {
    console.log(e.message);
  }
};
