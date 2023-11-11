// array of objects
const courses = [
    {
        name: "Complete Reactjs course",
        price: "2.3",
    },
    {
        name: "Complete Angular course",
        price: "2.1",
    },
    {
        name: "Complete MERN course",
        price: "2.7",
    },
    {
        name: "Complete C++ course",
        price: "2.8",
    },
]
// task 1) grabing the ul
// task 2) construct an li item (creating an element)
// task 3) injecting class list-group-item in li
// task 4)inject node in li
// task 5)create another element <span> same
// task 6) inject the <span> in <li>
// task 7)inject <li> in <ul>

function generateLIST(){
    // task 1)grabing ui from html
    const ul = document.querySelector(".list-group");
    // if ul already have some values in it so reset it
    ul.innerHTML = "";
    courses.forEach( course => {
        // task 2) creating <li> 
        // createElement create <></>
        const li = document.createElement("li");
        // task 3) injecting class to li
        li.classList.add("list-group-item");

        // task 4) creating text node in li'
        const name = document.createTextNode(course.name);
        li.appendChild(name);
        //task 5) creating element <span> in li
        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);
        // task 6) injecting the span in li
        li.appendChild(span);
        // task 7) injecting li in ul
        ul.appendChild(li);
    })
}

// generateLIST()
// when page load then we want to show this
window.addEventListener("load", generateLIST)

// onclicking the sort courses button, the courses should be sorted according to the price

// accessing the button having sort-btn class
const button = document.querySelector(".sort-btn")

button.addEventListener("click", () => {
    courses.sort( (a, b) => a.price - b.price);
    // this is working but the output is shown in the screen thats y to show on screen we have to call generateLIST
    // method here (but it will append the list in previous list, bz now html has already having our values)
    // reseting the value of ul in generateLIST()
    generateLIST();
})

const decButton = document.querySelector(".decrease-sort-btn");
decButton.addEventListener("click", () => {
    courses.sort( (a,b) => b.price - a.price);
    generateLIST();
})