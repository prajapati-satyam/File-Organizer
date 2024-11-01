import fs from 'fs'
import path from 'path';
let usename = 'psaty';
let basepath = `C:\\Users\\${usename}\\Downloads`;
try { 

    let files = fs.readdirSync(basepath);
    // console.log(files)
    for (const file of files) {
        let extention = file.split('.')[file.split('.').length -1];
        console.log(extention);
        if (extention === 'jpg'|| extention === 'png' ||extention === 'jpeg' ||extention === 'pdf') {
              if(fs.existsSync(path.join(basepath,extention))) {
                   fs.copyFileSync(path.join(basepath,file), path.join(basepath,extention,file))
                   console.log('exist');
              } else {
                fs.mkdirSync(path.join(basepath,extention))
                fs.copyFileSync(path.join(basepath,file), path.join(basepath,extention,file))
                console.log("made");
                
              } 
        }
        }
        }
 catch(err) {
      console.log("%c" + " Error : ", "color: red; font-size: 16px;")
  console.log('%c'+' error : user not found', "color: red; font-size: 10px");
  console.log('%c'+' error : node js not install', "color: red; font-size: 10px");
  console.log('%c'+' error :  npm project not initialize', "color: red; font-size: 10px");
  console.log("%c" + " Solotution :", "color: lightgreen; font-size: 16px;")
  console.log('%c'+ ' install node js from https://nodejs.org/en/download', "color: lightgreen; font-size: 10px");
  console.log('%c'+ ' make sure that your username is correct', "color: lightgreen; font-size: 10px");
  console.log('%c'+ ' after following this step, try to run programme again', "color: lightgreen; font-size: 10px");
  console.log('%c'+ ' to change your username type your username in username variable at the top of the programme', "color: lightgreen; font-size: 10px");
}