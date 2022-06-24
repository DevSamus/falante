# criação / configuração do projeto!
 na pasta do projeto 
  npm init -v

  dependencies 
  npm install config dotenv express express-validator mongoose morgan winston 
  
  devDependencies
  
  npm install @types/config @types/express  @types/morgan @types/node ts-node-dev typescript --save-dev
  <!-- * o mongoose já possui seu próprio tipos  -->

	no package.json
	    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
	 -> 	"dev": "ts-node-dev --respawn --transpile-only src/app.ts"
    },

Integrando o Express		
   https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30377784#overview

2:14 no main da aplicação import config from "config";
       config/
        default.ts
  
	no root/
	  no main do app ->  require("dotenv").config();
	   .env  
	    
	 src/
	   router.ts		


lendo tabela excel 
 npm install read-excel-file 
 npm install @types/read-excel-file --save-dev