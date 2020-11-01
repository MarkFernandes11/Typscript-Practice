let reviews: number[] = [5,2,6,7,9];

reviews.push(10);
reviews.push(56);

console.log("using simplified for loop");
for(let num of reviews) {
    if(num % 2 == 0) {
        console.log(num+" is even");
    } else {
        console.log(num+" is odd");
    }
}