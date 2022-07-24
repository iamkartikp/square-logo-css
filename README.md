Using an object write the paths where the travelling is done
For ex:
travel = {
  // Kiev-Prague
  0: [0, 1],
  // Prague-Zurich
  1: [1, 2],
  // and so on...
}

loop through [0,1], [1,2], ...
if indexof 2nd element matches the first index i.e 0, return the path.

path = [0,1,2...] // index of object which is travelled.
Else push the object index in a new array labelled as path and return it..


loop through array in objects.
if the second node in the array matches the first node in the array, return the path else push the object index in a new array labelled as path and return it.
