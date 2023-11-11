var counter = document.querySelector(".counter")
var followers = document.querySelector(".followers")

let count=1
// changing number
setInterval( () => {
    if(count<=1000){
        counter.innerText = count;
        count++;
    }
   
}, 1)

// after number reach 1000 we want to show followers on instagram
setTimeout( () => {
    followers.innerText = "Followers on Instagram!"
}, 5000)