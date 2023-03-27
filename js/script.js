window.addEventListener("load", function() {
document.querySelector("form").addEventListener("submit", userInput)
})
function userInput(e){
    e.preventDefault()
    const sentence = document.querySelector("#sentence").value 
    const newWords = sentence.split()
    
    console.log(newWords);
}


