const phones=[
    {name:'samsung', camera:120, price:60000,color:"silver"},
    {name:'walton', camera:45, price:20000,color:"silver"},
    {name:'iphone', camera:64, price:90000,color:"silver"},
    {name:'xiomi', camera:72, price:50000,color:"silver"},
    {name:'Oppo', camera:80, price:30000,color:"silver"},
]
function cheapest(phones){
    let check=phones[0]
    for(var i=0;i<phones.length;i++){
            const phone=phones[i]
           if(phone.camera<check.camera)
           check=phone;
    }
    return check
    //console.log(phones)

}
const result=cheapest(phones)
console.log(result)