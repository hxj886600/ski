const fs=require("fs")
const https =require("https")
const http =require("http")
const cheerio=require("cheerio")
var wanzh ="http://www.bootcss.com/p/font-awesome/"
var bia1n
var shuz=[]
http.get(wanzh,(res)=>{
    res.on("data",(e)=>{
        bia1n +=e
    })
    res.on("end",()=>{
        var $=cheerio.load(bia1n)
        shuz=$(".the-icons  li").text().split(" ")
        
       // console.log(shuz)
        shuz.splice(0,1)
       // console.log(shuz)
        if(fs.existsSync("./shuj.json")){
            fs.mkdir("./shuj.json")
        }
        shuz=JSON.stringify(shuz)
        fs.writeFile("./shuj.json",shuz)
        })
    })
