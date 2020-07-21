function scrollAnimate() {
    addEventListener('scroll', () => { 
        updateBar()
    
        // Show elements
        if(pageYOffset > 20) {
            menuArea.classList.add('bg-light')
            show.forEach(i => {
                i.style.display = 'block'
            })
        }else {
            menuArea.classList.remove('bg-light')
            show.forEach(i => {
                i.style.display = 'none'
            })
        }
    })
}

function updateBar() {
    const textHeight = body.offsetHeight - 720
    const pagePosition = window.pageYOffset
    const updatedBar = (pagePosition * 100) / textHeight

    bar.style.width = updatedBar + "%"
}