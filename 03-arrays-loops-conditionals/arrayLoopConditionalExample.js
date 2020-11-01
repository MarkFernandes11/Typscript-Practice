var reviews = [5, 2, 6, 7, 9];
reviews.push(10);
reviews.push(56);
console.log("using simplified for loop");
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var num = reviews_1[_i];
    if (num % 2 == 0) {
        console.log(num + " is even");
    }
    else {
        console.log(num + " is odd");
    }
}
