const{readFile}=require('fs');

console.log('start')
const first =readFile('./content/firsttxt','utf-8',(err,result)=>{
 if(result)
 console.log(result);
})

console.log('fala');
