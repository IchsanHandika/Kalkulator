let outputDisplay = document.getElementById("outputDisplay")
let numberOperatorBtn = Array.from(document.getElementsByClassName("numberOperatorBtn"))
let clear = document.getElementById("clear")
let del = document.getElementById("delete")
let result = document.getElementById("result")
let tandaKurung = document.getElementById("tandaKurung")

// Menampilkan angka dan operator pada tampilan depan
numberOperatorBtn.map(button => {
    button.addEventListener("click", (e) => {
        outputDisplay.innerText += e.target.innerText
    })
})

// Fungsi dari tombol C
clear.addEventListener("click", () => {
    outputDisplay.innerHTML = ""
})

// Fungsi dari tombol Del
del.addEventListener("click", () => {
    outputDisplay.innerText = outputDisplay.innerText.slice(0, -1)
})

// Fungsu dari tombol =
result.addEventListener("click", () => {
    outputDisplay.innerText = eval(outputDisplay.innerText)
})