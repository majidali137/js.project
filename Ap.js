console.log("welcome To this Page")
let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")
ourForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    //alert("thanks for submit form")
    createItems(ourField.value)
})
function createItems(x){
    let myHtml = `<li class="margin-b"> ${x} <button class="btn" onclick="delItems(this)">Delete</button></li>`
    ourList.insertAdjacentHTML("beforeend", myHtml)
    ourField.value = ""
    ourField.focus()
}
function delItems(elementToDelete) {
    elementToDelete.parentElement.remove()
    //alert("Successfully Delete")
}