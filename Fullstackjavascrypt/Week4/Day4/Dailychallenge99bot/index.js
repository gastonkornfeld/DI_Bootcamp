// Have you heard the infamous song “99 Bottles of Beer?”
// In this exercise you need to console.log the lyrics to the song 99 Bottles of Beer.

// Prompt the user for a number to begin counting down bottles.

// In the song everytime a bottle falls we subtract the bottles by 1.
// What your code should do is:
// instead of subtracting by 1, everytime a bottle drops the subtracted number should go up by 1
// For example the first time a bottle drops we subtract by 1, the second time we subtract by 2 and so on.

// The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.

// Note : Make sure you get the grammar correct.
// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.
// ==============================
// Take a look below for more help.
// ==============================

// 99 bottles of beer on the wall
// 99 bottles of beer
// Take 1 down, pass it around
// 98 bottles of beer on the wall

// 98 bottles of beer on the wall
// 98 bottles of beer
// Take 2 down, pass them around
// 96 bottles of beer on the wall

// 96 bottles of beer on the wall
// 96 bottles of beer
// Take 3 down, pass them around
// 93 bottles of beer on the wall

// ect …

// ==============================


let bottles = Number(prompt("How many Bottles are in your wall?"));
console.log(`${bottles} bottles of beer on the wall`);  
console.log(`${bottles} bottles of beer`);


for (let i = 1; i < bottles ; i++) {
    if (i == 1) {
        console.log("Take 1 down, pass it around");
    } else {
        console.log(`take ${i} down, pass them around`);
    }
    if(bottles - i < 0) {
        console.log("No bottle of beer on the wall");
        break;
    } else if(bottles - i == 0) {
        console.log("0 bottles of beer on the wall");
        break;
    } else{
        console.log(`${bottles - i} bottles of beer on the wall`);
        console.log(`${bottles - i} bottles of beer on the wall`);
        console.log(`${bottles - i} bottles of beer`);
    }
    bottles -= i;

   
   
    
   

}
console.log("I think I should put more bottles on the wall, if I want to continue the song");