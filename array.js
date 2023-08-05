//check array using Array.isArray
const friends=['tamim','sofik','sagor']
console.log(Array.isArray(friends))
console.log(friends.includes('tamim'))
//includes method
//concat method
const newFriendsAge=[12,34,56,76]
const allFriends=newFriendsAge.concat(friends)
console.log(allFriends)