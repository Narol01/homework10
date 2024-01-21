const array=[3,5,6,2,1,7,8]
const words=['bike','strim','scooter','ananas']


console.log( array.map (num => num*2));


console.log( words.map (word => word.toUpperCase()));


let sum=0;
array.forEach( num => sum+=num)
console.log(sum)


const array1=[3,5,-6,-2,-1,7,-8]
console.log( array1.filter (num => num > 0))