//lolu

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

    function changeBackground(sliderName){
        let val = sliderName.value
        sliderName.style.background = `linear-gradient(90deg, #0fd009 ${val}%, #fff ${val}%)`
    }

    
    let filterValue = [0, 100, 100, 0, 0, 0, 100, 100, 0]

    imgSelector.addEventListener("change", (event) => {
        if(event.target.files.length == 0){
            return
        }

        let imgSrc = URL.createObjectURL(event.target.files[0])
        displayImage.setAttribute("src", imgSrc)
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
        let val = Number(contrastSlider.value)
        console.log(val);
        contrastSlider.style.background = `linear-gradient(90deg, #0fd009 ${val/10}%, #fff ${val/10}%)`

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
        let val1 = Number(huerotateSlider.value)
        console.log(val1);
        huerotateSlider.style.background = `linear-gradient(90deg, #0fd009 ${val1/3.6}%, #fff ${val1/3.6}%)`
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
        // ctx.translate(canvas.width / 2, canvas.height / 2)
        ctx.drawImage(displayImage, 0, 0, canvas.width, canvas.height)

        
        let randomNum = Math.floor(Math.random()*10000+10000)
        const link = document.createElement("a")
        link.download = `imageeditor${randomNum}.jpg`
        link.href = canvas.toDataURL()
        link.click()
    })