window.addEventListener("load", function() {
document.querySelector("form").addEventListener("submit", userInput)
})

function userInput(e){
    e.preventDefault()
    const sentence = document.querySelector("#sentence").value 
    const newWords = sentence.split(" ") //new array from the sentence
    let finalWordPlay = newsentences(newWords)
    
    const response = document.createElement("p");
    response.append(finalWordPlay.join(" "))
    document.body.append(response)
}

function newsentences(words) {
    const sentence = words.filter(word => word.length >= 3);
    return sentence.reverse()
}
