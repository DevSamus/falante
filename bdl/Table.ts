import path from "path";
import xlsx from "xlsx";
/* 
const tempDir = path.resolve(__dirname, './cones.xlsx')
const mkdirp = require('mkdirp')
mkdirp.sync(tempDir) */

type cone ={
	tipo:string,
	polegada:number,
	modelo:string
}




export const planilha = function () {
  try {
    const wb = xlsx.readFile(__dirname+"/cones.xlsx", { cellDates: true });

    //* nomes das folhas ..
    //console.log(wb.SheetNames);

    //console.log(wb.Sheets); // * conteúdo da folha!

    const cones = wb.Sheets["cones1"];

    //console.log(cones["!rows"]);
    //console.log(cones);

    return xlsx.utils.sheet_to_json(cones);
  } catch (e:any) {
         console.log(e.message);				 
	}
};



