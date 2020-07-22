// Scroll animate
addEventListener('load', scrollAnimate())

// Search lyric
form.addEventListener('submit', e => {
    e.preventDefault()

    const searchTerm = search.value.trim()
    search.value = ''

    if (searchTerm) {
        result.innerHTML = `
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        `
        searchSongs(searchTerm)
    } 
})

// Get lyrics button click
result.addEventListener('click', e => {
    const clickedEl = e.target
    
    if (clickedEl.tagName === 'A') {
        const artist = clickedEl.getAttribute('data-artist')
        const songTitle = clickedEl.getAttribute('data-songtitle')

        getLyrics(artist, songTitle)
    }
})