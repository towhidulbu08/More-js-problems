/*
1.show output from:1-50
2.if the number is divisible by 3 then show 'foo' instead of the number
3.if the number is divisible by 5 then show 'bar' instead of the number
4.if the number is divisible by both 3 and 6 then show 'foobar' instead of the number


*/
for(var i=1;i<=50;i++){
    if(i%3==0 && i%5==0){
        console.log("foobar")
    }
    else if(i%3==0){
        console.log('foo')
       
    }
    else if(i%5==0){
        console.log('bar')
       
    }
    else{
        console.log(i)
    }
     
}
