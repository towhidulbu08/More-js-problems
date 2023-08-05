//remove duplicate items from an array
const duplicateArray=['tamim','sakib','sakib','sagor','akash','akash','hamim','ramim','soikot','sojib','Omor','hasib','hasib']
function removeDuplicateName(names){
         const newArray=[];
         for(let element of names){
           
            if(newArray.includes(element)===false){
                newArray.push(element)
            }
         }
         return newArray
}
const uniqueNames=removeDuplicateName(duplicateArray)
console.log(uniqueNames)