//  Amsterdam, Kiev, Zurich, Prague, Berlin, Barcelona.
// lets say Amsterdam = 0, Kiev = 1, Zurich = 2, Prague = 3, Berlin = 4, Barcelona = 5
let input1 = [0, 1, 2, 3, 4, 5]

// Paris-Skopje, Zurich-Amsterdam, Prague-Zurich, Barcelona-Berlin, Kiev-Prague, Skopje-Paris, Amsterdam-Barcelona, Berlin-Kiev, Berlin-Amsterdam.
// Kid started from Kiev
// Kiev-Prague = [1, 3]
// Prague-Zurich = [2, 0]
// Zurich-Amsterdam = [0, 5]
// Amsterdam-Barcelona = [5, 4]
// Barcelona-Berlin = [4, 3]
// Berlin-Kiev = [3, 1]

let input2 = {
    0: [1, 3],
    1: [3, 0],
    2: [0, 5],
    3: [5, 4],
    4: [4, 3],
    5: [3, 1],
}

// function to return [1,3,0,5,4,3]

function findPath(input1, input2) {
    let path = [];
    let startingPoint = input1[1][0];
    for(let item in input2) {
        if(input2[item][1] !== startingPoint) {
            path.push(input2[item][0]);
            
        }
    }
    return path
}

console.log(findPath(input1, input2));