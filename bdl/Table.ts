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
    //console.log(cones);
    const arr= xlsx.utils.sheet_to_json<B>(cones)
    return arr.filter(p=> {
      if(p.code==1877) {
        console.error("Valor",p.Valor);
        console.error("descrição",p['BOBINAS EM ALUMÍNIO'].split(' '));
        


        return p;
      }
    })
  } catch (e: any) {
    console.log(e.message);
  }
};
