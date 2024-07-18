// Loops

{
    // For Loop
    let num = 5;
    let i;
    for (i = 0; i < num.length; i++) {
        console.log("jhesdaf")
        console.log(i);
    }
}

{
    // Nested for loop
    for(let i=0; i<5; i++) {
        for(let j=i; j<5; j++){
            // console.log("*");
        }
        // console.log("\n");
    }
}

{
    // While Loop
    let sum = 0, num = 1;
    while (num < 10) {
        sum += num;
        num++;
    }
    console.log(sum);
}

{
    // Factorial Using Do While Loop
    let factnum = 6;
    let fact = 1;
    do {
    //    if(factnum == 0 || factnum == 1) return 1;
       fact *= factnum;
       factnum--;
    } while ( factnum >= 1 );
    console.log(fact);
}