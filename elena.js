let images =["manicuregel1.jpg", "manicurebezpok.jpg", "manicuregel2.jpg", "manicuregel3.jpg", "manicuregel4.jpg", "manicuregel5.jpg", "manicuregel6.jpg", "manicuregel7.jpg", "manicuregel8.jpg", "manicuregel9.jpg", "manicuregel10.jpg", "manicuregel11.jpg", "manicuregel12.jpg", "mmanicure1.jpg", "mmanicure2.jpg", "pedicure1.jpg", "pedicure2.jpg"]
var windowInnerWidth = window.innerWidth

setInterval(()=>{
    var windowInnerWidth = window.innerWidth
    footer.style.width= windowInnerWidth+'px'
    console.log(windowInnerWidth)
}, 200)

var i =0
slider.style.backgroundImage='url(img/'+images[0]+')'
const intervalID = setInterval(function(){
    slider.style.backgroundImage='url(img/'+images[i]+')'
    i++
    if (i==images.length){
        i=0
    }
}, 3000)
DescTextLink.addEventListener('mouseover', ()=>{
    DescTextLink.style.color='rgb(82, 82, 82)'
})
DescTextLink.addEventListener('mouseout', ()=>{
    DescTextLink.style.color='black'
})
madeby.addEventListener('mouseover', ()=>{
    madeby.style.color='black'
})
madeby.addEventListener('mouseout', ()=>{
    madeby.style.color='rgb(82,82,82)'
})
