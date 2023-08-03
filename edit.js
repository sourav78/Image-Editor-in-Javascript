
let blurSlider = document.getElementById("blur")
let brightnessSlider = document.getElementById("brightness")
let contrastSlider = document.getElementById("contrast")
let grayscaleSlider = document.getElementById("grayscale")
let huerotateSlider = document.getElementById("huerotate")
let invertSlider = document.getElementById("invert")
let opacitySlider = document.getElementById("opacity")
let saturationSlider = document.getElementById("saturation")
let sepiaSlider = document.getElementById("sepia")


let blurResult = document.getElementById("blur-val")
let brightnessResult = document.getElementById("brightness-val")
let contrastResult = document.getElementById("contrast-val")
let grayscaleResult = document.getElementById("grayscale-val")
let huerotateResult = document.getElementById("huerotate-val")
let invertResult = document.getElementById("invert-val")
let opacityResult = document.getElementById("opacity-val")
let saturationResult = document.getElementById("saturation-val")
let sepiaResult = document.getElementById("sepia-val")

let imgSelector = document.getElementById("img-selector")
let displayImage = document.getElementById("img-src")
let saveImage = document.getElementById("download")
let reset = document.getElementById("reset")

let filterValue = [0, 100, 100, 0, 0, 0, 100, 100, 0]

imgSelector.addEventListener("change", (event) => {
    if(event.target.files.length == 0){
        return
    }

    let imgSrc = URL.createObjectURL(event.target.files[0])
    displayImage.setAttribute("src", imgSrc)
    resetAllFilter()
})

blurSlider.addEventListener("input", (e) => {
    changeBackground(blurSlider)
    blurResult.innerText = `${blurSlider.value}%`
    filterValue[0] = Number(blurSlider.value)
    
    displayImage.style.filter = `blur(${filterValue[0]}px) brightness(${filterValue[1]}%) contrast(${filterValue[2]}%) grayscale(${filterValue[3]}%) hue-rotate(${filterValue[4]}deg) invert(${filterValue[5]}%) opacity(${filterValue[6]}%) saturate(${filterValue[7]}%) sepia(${filterValue[8]}%)`
    
})

brightnessSlider.addEventListener("input", (e) => {
    changeBackground(brightnessSlider)
    brightnessResult.innerText = `${100-Number(brightnessSlider.value)}%`
    
    filterValue[1] = 100-Number(brightnessSlider.value)
    displayImage.style.filter = `blur(${filterValue[0]}px) brightness(${filterValue[1]}%) contrast(${filterValue[2]}%) grayscale(${filterValue[3]}%) hue-rotate(${filterValue[4]}deg) invert(${filterValue[5]}%) opacity(${filterValue[6]}%) saturate(${filterValue[7]}%) sepia(${filterValue[8]}%)`
    
})

contrastSlider.addEventListener("input", (e) => {
    changeOddBackground(contrastSlider, 10)

    contrastResult.innerText = `${contrastSlider.value}%`
    

    filterValue[2] = contrastSlider.value
    displayImage.style.filter = `blur(${filterValue[0]}px) brightness(${filterValue[1]}%) contrast(${filterValue[2]}%) grayscale(${filterValue[3]}%) hue-rotate(${filterValue[4]}deg) invert(${filterValue[5]}%) opacity(${filterValue[6]}%) saturate(${filterValue[7]}%) sepia(${filterValue[8]}%)`
    
})

grayscaleSlider.addEventListener("input", (e) => {
    changeBackground(grayscaleSlider)
    grayscaleResult.innerText = `${grayscaleSlider.value}%`

    
    filterValue[3] = grayscaleSlider.value
    displayImage.style.filter = `blur(${filterValue[0]}px) brightness(${filterValue[1]}%) contrast(${filterValue[2]}%) grayscale(${filterValue[3]}%) hue-rotate(${filterValue[4]}deg) invert(${filterValue[5]}%) opacity(${filterValue[6]}%) saturate(${filterValue[7]}%) sepia(${filterValue[8]}%)`
})

huerotateSlider.addEventListener("input", (e) => {
    changeOddBackground(huerotateSlider, 3.6)

    huerotateResult.innerText = `${huerotateSlider.value}`
    

    filterValue[4] = huerotateSlider.value
    displayImage.style.filter = `blur(${filterValue[0]}px) brightness(${filterValue[1]}%) contrast(${filterValue[2]}%) grayscale(${filterValue[3]}%) hue-rotate(${filterValue[4]}deg) invert(${filterValue[5]}%) opacity(${filterValue[6]}%) saturate(${filterValue[7]}%) sepia(${filterValue[8]}%)`
})

invertSlider.addEventListener("input", (e) => {
    changeBackground(invertSlider)
    invertResult.innerText = `${invertSlider.value}%`
    

    filterValue[5] = invertSlider.value
    displayImage.style.filter = `blur(${filterValue[0]}px) brightness(${filterValue[1]}%) contrast(${filterValue[2]}%) grayscale(${filterValue[3]}%) hue-rotate(${filterValue[4]}deg) invert(${filterValue[5]}%) opacity(${filterValue[6]}%) saturate(${filterValue[7]}%) sepia(${filterValue[8]}%)`
})

opacitySlider.addEventListener("input", (e) => {
    changeBackground(opacitySlider)
    opacityResult.innerText = `${100-Number(opacitySlider.value)}%`
    

    filterValue[6] = 100-Number(opacitySlider.value)
    displayImage.style.filter = `blur(${filterValue[0]}px) brightness(${filterValue[1]}%) contrast(${filterValue[2]}%) grayscale(${filterValue[3]}%) hue-rotate(${filterValue[4]}deg) invert(${filterValue[5]}%) opacity(${filterValue[6]}%) saturate(${filterValue[7]}%) sepia(${filterValue[8]}%)`
})

saturationSlider.addEventListener("input", (e) => {
    changeBackground(saturationSlider)
    saturationResult.innerText = `${100-Number(saturationSlider.value)}%`
    

    filterValue[7] = 100-Number(saturationSlider.value)
    displayImage.style.filter = `blur(${filterValue[0]}px) brightness(${filterValue[1]}%) contrast(${filterValue[2]}%) grayscale(${filterValue[3]}%) hue-rotate(${filterValue[4]}deg) invert(${filterValue[5]}%) opacity(${filterValue[6]}%) saturate(${filterValue[7]}%) sepia(${filterValue[8]}%)`
})

sepiaSlider.addEventListener("input", (e) => {
    changeBackground(sepiaSlider)
    sepiaResult.innerText = `${sepiaSlider.value}%`
    

    filterValue[8] = sepiaSlider.value
    displayImage.style.filter = `blur(${filterValue[0]}px) brightness(${filterValue[1]}%) contrast(${filterValue[2]}%) grayscale(${filterValue[3]}%) hue-rotate(${filterValue[4]}deg) invert(${filterValue[5]}%) opacity(${filterValue[6]}%) saturate(${filterValue[7]}%) sepia(${filterValue[8]}%)`
})

saveImage.addEventListener("click", ()=>{
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    canvas.width = displayImage.naturalWidth
    canvas.height = displayImage.naturalHeight

    ctx.filter = `blur(${filterValue[0]}px) brightness(${filterValue[1]}%) contrast(${filterValue[2]}%) grayscale(${filterValue[3]}%) hue-rotate(${filterValue[4]}deg) invert(${filterValue[5]}%) opacity(${filterValue[6]}%) saturate(${filterValue[7]}%) sepia(${filterValue[8]}%)`
    ctx.drawImage(displayImage, 0, 0, canvas.width, canvas.height)

    let randomNum = Math.floor(Math.random()*10000+10000)
    const link = document.createElement("a")
    link.download = `imageeditor${randomNum}.jpg`
    link.href = canvas.toDataURL()
    link.click()
})

reset.addEventListener("click", resetAllFilter)



function changeBackground(sliderName){
    let val = sliderName.value
    sliderName.style.background = `linear-gradient(90deg, #0fd009 ${val}%, #fff ${val}%)`
}

function changeOddBackground(sliderName, per1){
    let val = Number(sliderName.value)
    sliderName.style.background = `linear-gradient(90deg, #0fd009 ${val/per1}%, #fff ${val/per1}%)`
}

function resetAllFilter(){
    blurSlider.value = 0
    brightnessSlider.value = 0
    contrastSlider.value = 100
    grayscaleSlider.value = 0
    huerotateSlider.value = 0
    invertSlider.value = 0
    opacitySlider.value = 0
    saturationSlider.value = 0
    sepiaSlider.value = 0

    changeBackground(blurSlider)
    changeBackground(brightnessSlider)
    changeBackground(grayscaleSlider)
    changeBackground(invertSlider)
    changeBackground(opacitySlider)
    changeBackground(saturationSlider)
    changeBackground(sepiaSlider)

    changeOddBackground(contrastSlider, 10)
    changeOddBackground(huerotateSlider, 3.6)


    blurResult.innerText = `${blurSlider.value}%`
    brightnessResult.innerText = `${100-Number(brightnessSlider.value)}%`
    contrastResult.innerText = `${contrastSlider.value}%`
    grayscaleResult.innerText = `${grayscaleSlider.value}%`
    huerotateResult.innerText = `${huerotateSlider.value}`
    invertResult.innerText = `${invertSlider.value}%`
    opacityResult.innerText = `${100-Number(opacitySlider.value)}%`
    saturationResult.innerText = `${100-Number(saturationSlider.value)}%`
    sepiaResult.innerText = `${sepiaSlider.value}%`

    filterValue = [0, 100, 100, 0, 0, 0, 100, 100, 0]
    displayImage.style.filter = `blur(${filterValue[0]}px) brightness(${filterValue[1]}%) contrast(${filterValue[2]}%) grayscale(${filterValue[3]}%) hue-rotate(${filterValue[4]}deg) invert(${filterValue[5]}%) opacity(${filterValue[6]}%) saturate(${filterValue[7]}%) sepia(${filterValue[8]}%)`
}