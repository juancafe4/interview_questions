var nums = [35, 25, 53, 3, 102, 203, 230, 1005];
var k = Math.max.apply(null, nums.map(i => {
    console.log(Math.ceil(Math.log(i)/Math.log(2)));
    return Math.ceil(Math.log(i)/Math.log(2));
}));

console.log(k)