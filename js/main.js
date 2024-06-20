// {
//     // 1 - masala for da 
//     // function calculateSums(arr) {

//     //     let positiveSum = 0;
//     //     let negativeSum = 0;
    
//     //     for (let i = 0; i < arr.length; i++) {
//     //         if (arr[i] > 0) {
//     //             positiveSum += arr[i];

//     //         } else if (arr[i] < 0) {
//     //             negativeSum += arr[i];

//     //         }
//     //     }
    
//     //     return {
//     //         musbat: positiveSum,
//     //         manfiy: negativeSum
//     //     };

//     // } 

//     // let number = [ 10, -5, 20, -15, 50, -25 ]
//     // let sums = calculateSums(number)

//     // console.log(`masalani for tsiklida ishlanishi. Natija: musbat = ${sums.musbat}, manfiy = ${sums.manfiy}`); 
// }

// {
//     // 1 - masala while da 
//     // function calculateSums(arr) {

//     //     let positiveSum = 0;
//     //     let negativeSum = 0;
//     //     let i = 0;

//     //     while (i < arr.length) {
//     //         if (arr[i] > 0) {
//     //             positiveSum += arr[i];

//     //         } else if (arr[i] < 0) {
//     //             negativeSum += arr[i];

//     //         }
//     //         i++;

//     //     }
//     //     return {
//     //         musbat: positiveSum,
//     //         manfiy: negativeSum
//     //     };

//     // }

//     // let numbers = [10, -5, 20, -15, 50, -25, 0];
//     // let sums = calculateSums(numbers);

//     // console.log(`masalani while tsiklida ishlanishi. Natija: musbat = ${sums.musbat}, manfiy = ${sums.manfiy}`);
// }

// {
//     // 1 - masalani do da 
//     // function calculateSums(arr) {
//     //     let positiveSum = 0;
//     //     let negativeSum = 0;
//     //     let i = 0;

//     //     do {
//     //         if (arr[i] > 0) {
//     //             positiveSum += arr[i];

//     //         } else if (arr[i] < 0) {
//     //             negativeSum += arr[i];

//     //         }
//     //         i++;

//     //     } while (i < arr.length);
    
//     //     return {
//     //         musbat: positiveSum,
//     //         manfiy: negativeSum
//     //     };

//     // }

//     // let numbers = [10, -5, 20, -15, 50, -25];
//     // let sums = calculateSums(numbers);

//     // console.log(`masalani do tsiklida ishlanishi. Natija: musbat = ${sums.musbat}, manfiy = ${sums.manfiy}`);   
// }

// {
//     // 2 - masala for da 
//     // function sumOfEvenNumbers(arr) {
//     //     let evenSum = 0;
    
//     //     for (let i = 0; i < arr.length; i += 2) {
//     //         evenSum += arr[i];
//     //     }

//     //     return evenSum;
//     // }

//     // let number = [10, 3, 20, 15, 50, 25];
//     // let evenSum = sumOfEvenNumbers(number);
    
//     // console.log(`Juft sonlar yig'indisi (for da) = ${evenSum}`);
// }

// {
//     // 2 - masala while da 
//     // function sumOfEvenNumbers(arr) {
//     //     let evenSum = 0;
//     //     let i = 0;  

//     //     while (i < arr.length) {
//     //         if (arr[i] % 2 === 0) {
//     //             evenSum += arr[i];
//     //         }
//     //         i++;
//     //     }   

//     //     return evenSum;
//     // }  

//     // let numbers = [10, 3, 20, 15, 50, 25];
//     // let evenSum = sumOfEvenNumbers(numbers);

//     // console.log(`Juft sonlar yig'indisi (whileda ishlanishi) = ${evenSum}`);  
// }

// {
//     // 2 - masala do da 
//     // function sumOfEvenNumbers(arr) {
//     //     let evenSum = 0;
//     //     let i = 0;
    
//     //     if (arr.length === 0) {
//     //         return evenSum;
//     //     }
    
//     //     do {
//     //         if (arr[i] % 2 === 0) {
//     //             evenSum += arr[i];
//     //         }
//     //         i++;
//     //     } while (i < arr.length);
    
//     //     return evenSum;
//     // }
    
//     // let numbers = [10, 3, 20, 15, 50, 25];
//     // let evenSum = sumOfEvenNumbers(numbers);

//     // console.log(`Juft sonlar yig'indisi (do da) = ${evenSum}`);   
// }

// {
//     // 3 - masala for da 
//     // function sumFromAToB(a, b) {
//     //     let sum = 0;
    
//     //     for (let i = a; i <= b; i++) {
//     //         sum += i;
//     //     }
    
//     //     return sum;
//     // }
        
//     // console.log(`a sonidan b sonigacha bo'lgan sonlar yig'indisi (forda ishlanishi) = ${sumFromAToB(0, 10)}`);
// }

// {
//     // 3 - masala while da 
//     // function sumFromAToB(a, b) {
//     //     let sum = 0;
    
//     //     while (a <= b) {
//     //         sum += a;
//     //         a++;
//     //     }
    
//     //     return sum;
//     // }
    
//     // console.log(`a sonidan b sonigacha bo'lgan sonlar yig'indisi (whileda ishlanishi) = ${sumFromAToB(0, 10)}`);
// }

// {
//     // 3 - masala do da 
//     // function sumFromAToB(a, b) {
//     //     let sum = 0;
    
//     //     do {
//     //         sum += a;
//     //         a++;
//     //     } while (a <= b);
    
//     //     return sum;
//     // }
    
//     // console.log(`a sonidan b sonigacha bo'lgan sonlar yig'indisi (do da ishlanishi) = ${sumFromAToB(0, 10)}`);   
// }

// {
//     // 4 - masala for da 
//     // function oddNumbersFromNto0(n) {
//     //     let oddNumbers = [];
    
//     //     for (i = n; i >= 0; i--) {
//     //         if (i % 2 !== 0) {
//     //            oddNumbers.push(i)
//     //         }
//     //     }
    
//     //     return oddNumbers;
//     // }
    
//     // console.log(`n=${oddNumbersFromNto0(10)} dan boshlab 0 gacha faqat toq sonlar (for da ishlanishi)`);
// }

// {
//     // 4 - masala while da 
//     // function oddNumbersFromNto0(n) {
//     //     let oddNumbers = [];
//     //     let i = n
    
//     //     while (i >= 0) {
//     //         if (i % 2 !== 0) {
//     //             oddNumbers.push(i);
//     //         }
//     //         i--;
//     //     }
    
//     //     return oddNumbers;
//     // }
    
//     // console.log(`n=${oddNumbersFromNto0(10)} dan boshlab 0 gacha faqat toq sonlar (while da ishlanishi)`);
// }

// {
//     // 4 - masala do da 
//     // function oddNumbersFromNto0(n) {
//     //     let oddNumbers = [];
//     //     let i = n;
    
//     //     do {
//     //         if (i % 2 !== 0) {
//     //             oddNumbers.push(i);
//     //         }
//     //         i--;
//     //     } while (i >= 0);
    
//     //     return oddNumbers;
//     // }
    
//     // console.log(`n=${oddNumbersFromNto0(10)} dan boshlab 0 gacha faqat toq sonlar (do da ishlanishi)`);   
// }

// {
//     // while 1
//     // function length(a, b) { 
//     //     let i = 0

//     //     while (a > b) {
    //     //         a -= b
    //     //         i++
//     //     }
//     //     console.log(`a kesmaning bo'sh qismi = ${a} ga teng`);
//     // }
//     // console.log( length( 16, 3 ) );
// }

// {
//     // while 2
//     // function length(a, b) {
//     //     let i = 0
//     //     while ( a > b ) {
//     //         a -= b
//     //         i++
//     //     }
//     //     console.log(a);
//     // }
//     // console.log( length(25, 7 ) );
// }

// {
//     // while 3
//     // function numbers(n, k) {
//     //     let i = 0
    
//     //     while (n > k) {
//     //         n -= k
//     //         i++
//     //     }
//     //     console.log(` n  sonini k  soniga bo'lganda javob = ${i} qoldiq esa = ${n}`);
//     // }
//     // console.log( numbers(20, 8) );
// }

// {
//     // while 4
//         // function number(n) {
//         //     let i = 1
        
//         //     while (i < n) {
//         //         i *= 3
//         //     }
//         //     if (i === n) {
//         //         return `n = ${n} 3 ning darajasi`
//         //     }
//         //     return `n = ${n} 3 ning darajasi emas`
//         // }
//         // console.log(number(81));   
// }
    