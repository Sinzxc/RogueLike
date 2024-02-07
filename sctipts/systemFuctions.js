
// функция получения рандомного числа от min до max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isOverlap(room1, room2) {
    return (
        room1.x < room2.x + room2.width + minDistanceBetweenRooms &&
        room1.x + room1.width + minDistanceBetweenRooms > room2.x &&
        room1.y < room2.y + room2.height + minDistanceBetweenRooms &&
        room1.y + room1.height + minDistanceBetweenRooms > room2.y
    );
}

// function getRandomIndexes(interArray) {
//     let array = [];
//     let indexes=[];
//     for (let i = 0; i < interArray-1; i++) {
//         array[i] = i;
//     }
//     for (let i = 0; i < interArray; i++) {
        
//         let index=getRandomInt(0,array.length-1)
//             indexes[i]=index;
//         console.log(array)
//         array.splice(index, 1);
//     }
    
//     return indexes
// }

