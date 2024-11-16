// setTimeout() delays the method to implement its execution for a given time seconds. After that, the function whose time limit ends, itgets implement first.
// For eg. Even though h() calls first but m() implements first because of the variation in delays of each function. m() has delay of only 1s whereas h() has the delay of 2s after running the program.


function h()
{
    console.log("Hello");
}
function m()
{
    console.log("Mello");
}

// setTimeout(h,2000);         // setTimeout(functionName, time);
// setTimeout(m,1000);

// We can pass the whole function in its parameter instead of passing its name.

// setTimeout(function (){}, time);

// setTimeout(function(){
//     console.log("Hey EveryOne !!");
// }, 500);


// setTimeout(function(){
//     console.log("After the delay of 15s after running the program");
//     for(let i = 1; i < 11; i++)
//     {
//         console.log(i);
//     } 
// }, 15000)        // This prints the whole count after the 2s delay instead of printing each number after the 2s delay

// console.log("After the delay of 1s for each count print after running the program");
// for(let i = 1; i < 11; i++)
// {
//     setTimeout(function(){
//         console.log(i);
//     }, i * 1000);
// }

// To print the reverse counting .....
for(let i = 10; i > 0; i--)
{
    setTimeout(function(){          // We can do the both things to print counting in reverse
        console.log(11-i);          // console.log(i);
    },i * 100)                      // (11-i) * 100
}
