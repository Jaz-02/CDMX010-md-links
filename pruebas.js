// let requireStack = require('require-stack')
// try{
//   requireStack('./module/with/syntax/error')
// }catch(e){
//   console.log(e.stack)
// }

let readMarkdown = require('read-markdown')
 
readMarkdown('./files/README-CF.md')
    .then(function(data){
        console.log(data)
    })
    .catch(console.error)