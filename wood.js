/* 
1.chair --> 3ft
2.table --> 10ft
3. bed --> 50ft
*/
function woodCalculator(charQuantity,tableQuantity,bedQuantity){
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=50;
    const chairWood=charQuantity*perChairWood;
    const tableWood=tableQuantity*perTableWood
    const bedWood=bedQuantity*perBedWood;
    const totalWood=chairWood+tableWood+bedWood
    return totalWood

}
const result=woodCalculator(1,1,1)
console.log(result)