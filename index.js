const http=require('http');
const fs=require('fs');
var requests=require('requests');

let temp=document.getElementsByClassName('temp');
// 0fb25f1fff9ef80c33fba93995ac3e8e

const homeFile=fs.readFileSync('home.html','utf-8');

const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        requests('http://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=0fb25f1fff9ef80c33fba93995ac3e8e')
        .on("data",function(chunk){
            const objdata=JSON.parse(chunk);
            const arrData=[objdata];
            console.log(arrData[0].main.temp-273.15);
            

            
        })
        .on("end",function(err){
            if(err) return console.log('connection closed due to error');

            console.log('end');
        })

    }
    
});
server.listen(8000,'127.0.0.1');
