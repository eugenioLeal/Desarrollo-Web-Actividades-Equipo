
function binary_search_call(l,r,x,arr) {
    while(l <= r) {
        let mid:number = Math.floor(arr.length-1/2);
        if(x === arr[mid]) {
            return mid;
        }
        else if(arr[mid] < x) {
            l = mid +1; 
        }
        else {
            r = mid - 1;
        }
    }
    return -1;
}

function binary_search(x,arr) {
    return binary_search_call(0,arr.length-1,x, arr);
}

let arr:number[] = [1,4,18,22,35,46];
let arr2:string[] = ['apple','bannana','coche','danone'];

let answer:number = binary_search('danone',arr2);
if(answer == -1) {
    console.log('Not found');
} else {
    console.log('Found element at '+ answer);
}