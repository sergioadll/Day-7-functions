
const rapid = (str)=>{
    let arrayStr;
    let j=0;
    let newStr='';
    const vocals=['a','e','i','o','u','A','E','I','O','U']
    arrayStr=str.split("");
    for (i=0;i<=arrayStr.length;i++){
        for (j=0;j<=vocals.length;j++){
            if (arrayStr[i]==vocals[j]){
                //console.log(arrayStr[i])
                arrayStr.splice(i,1);
                //console.log(arrayStr)
            }  
        }    
    }
    newStr=arrayStr.join('');
    console.log(rapid);
    return newStr.toUpperCase();
}

   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));