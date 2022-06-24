const  xlsxFile = require('read-excel-file/node');

let x =0;
let table =[[]]
let tabela =[[]]


await xlsxFile('./cones.xlsx').then((rows) => {
	
	table=rows
	rows.forEach((ls)=> {
	 //console.log(ls[0]);
	 if(`${ls[0]}`.trim().startsWith('COD')) {
		 tabela.push(ls)
	 }
		else tabela.push(ls)
	})
 // table = tabela
	// return table;
 

})


const ta = tab();



