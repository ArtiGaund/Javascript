const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")


const center = document.querySelector(".center")

// how to get background color of each element
// getComputedStyle required you to pass on a property or selector 
//it gives the css style

// console.log(window.getComputedStyle(red).backgroundColor)

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor
}

// var color = getBGColor(orange)
// style is used to implement some of the styles, getComputedStyle is to grab the style
// orange.addEventListener('mouseenter', () => {
//     center.style.background = color;
// })

const magicColorChanger = ( element, color ) => {
   return element.addEventListener('mouseenter', () => {
        center.style.background = color;
    })
}

magicColorChanger(red, getBGColor(red))
magicColorChanger(cyan, getBGColor(cyan))
magicColorChanger(violet, getBGColor(violet))
magicColorChanger(orange, getBGColor(orange))
magicColorChanger(pink, getBGColor(pink))