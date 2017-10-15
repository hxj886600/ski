const fs=require("fs")
const https =require("https")
const cheerio=require("cheerio")
var wanzh ="https://www.toutiao.com/ch/news_image/"
var bia1n
https.get(wanzh,(res)=>{
    res.on("data",(e)=>{
        bia1n +=e
    })
    res.on("end",()=>{
        var $=cheerio.load(bia1n)
        console.log($(".img-wrap  img"))
        
        
        })
    })
