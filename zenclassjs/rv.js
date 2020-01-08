const suriya ={
    name:"suriyakumar",
    age:"21",
}
var arr=[]

for (const property in suriya){

    arr.unshift(`${property}`)
}
console.log(arr)


const suriya1={
    name:"suriyakumar",
    age:"21",
}
for (const i in suriya1){
    console.log(suriya1[i])
}

