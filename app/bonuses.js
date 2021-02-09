//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
  str = str.replaceAll(' ','1')
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) == 1){
            str = str.replace(str.charAt(i + 1), str.charAt(i + 1).toUpperCase())
        }
    }
   str = str.replaceAll('1','')
    
    return str
}
