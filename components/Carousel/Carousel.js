class Carousel {
    constructor(imageArr, imgContainer, btnLeft, btnRight){
        this.currentIndex = 0
        this.btnLeft = btnLeft
        this.btnRight = btnRight
        this.imageArr = imageArr
        this.imgContainer = imgContainer
        this.btnLeft.addEventListener('click', function(){
            this.prevImage()
        }.bind(this))

        this.btnRight.addEventListener('click', ()=> {
            this.nextImage()
        })
        this.showHideButton()
        this.showImage()
    }
    nextImage(){
        if(this.currentIndex < this.imageArr.length-1){
            this.currentIndex++;
        }else{
            this.currentIndex = this.imageArr.length-1;
        }
        this.showHideButton()
        this.showImage()
    }
    prevImage(){
        console.log(this.currentIndex)
        if(this.currentIndex > 0){
            this.currentIndex--;
        }else{
            this.currentIndex = 0;
        }
        this.showHideButton()
        this.showImage()
    }
    
    showHideButton(){
        // If it's the fisrt image, don't show left button
        if ( this.currentIndex === 0){
            this.btnLeft.style.opacity = "0"
        }else{
            this.btnLeft.style.opacity = "1"
        }
        // If it's the last image, don't show right button
        if ( this.currentIndex === this.imageArr.length-1 ){
            this.btnRight.style.opacity = "0"
        }else{
            this.btnRight.style.opacity = "1"
        }
        
    }
    showImage(){
        this.imageArr.forEach(el => el.classList.remove("showImg"))
        this.imageArr[this.currentIndex].classList.add("showImg")
        let imageWidth = this.imgContainer.offsetWidth//this.imageContainer.getComputedStyle(this.imgContainer).
        this.imgContainer.style.transform = `translateX(${(imageWidth * (this.currentIndex)) * -1}px)`
    }
}

let carousel = document.querySelector('.carousel');
let caroselBtnLeft = carousel.querySelector('.left-button')
let caroselBtnRight= carousel.querySelector('.right-button')
let carouselImgs = carousel.querySelectorAll('img')
let imgContainer = carousel.querySelector('.img-container')
let carouselObj = new Carousel(Array.from(carouselImgs), imgContainer, caroselBtnLeft, caroselBtnRight)

console.log(carouselObj)


