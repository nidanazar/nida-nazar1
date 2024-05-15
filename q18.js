//Q18.seeing the world:Array
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Pakistan", "Saudi Arab", "Phalastine", " Kashmer", "Karachi",];
console.log("1.original:\n" + places);
console.log("2.copy:\n" + __spreadArray([], places, true).sort());
console.log("3.orignal:\n" + places);
console.log("4.copy:\n" + __spreadArray([], places, true).sort().reverse());
console.log("5.copy:\n" + __spreadArray([], places, true).sort().reverse());
console.log("6.orignal:\n" + places.sort());
console.log("7.orignal:\n" + places.sort().reverse());
