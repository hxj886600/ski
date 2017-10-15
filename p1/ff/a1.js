const http=require("http");
const fs=require("fs");
const  https=require("https")
const cheerio=require("cheerio")
var bian;
var wzsu=[];
const wangzhi ="http://image.baidu.com/"
function imgss(ia,as){
    const wangz =ia 
    https.get(wangz,(res)=>{
        //二进制保存
        res.setEncoding('binary');
        var imagaaes=""
        res.on("data",(e)=>{
            imagaaes+=e;
            //加载值
        })
        res.on("end",()=>{
            if(!fs.existsSync("./images")){
                fs.mkdir("./images")
                //existsSync判断image是否存在（存在返回），
            } 
            fs.writeFile('./images/images'+as+'.gif', imagaaes, 'binary')
           })    
    })
}
http.get(wangzhi,(res)=>{
        res.on("data",(e)=>{
            bian+=e
        })
        res.on("end",()=>{
            var $=cheerio.load(bian)
            $(".img_pic_wrap_layer img").each((index,e)=>{

             wzsu.push( e.attribs.src)
            })
            for(as=0;as< wzsu.length;as++){
               var abs=wzsu[as]
                imgss(abs,as)

            }
        })
    })
