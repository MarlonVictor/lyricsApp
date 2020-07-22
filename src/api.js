const apiURL   = 'https://api.lyrics.ovh'

// Search by song or artist 
async function searchSongs(term) {
    const res = await fetch(`${apiURL}/suggest/${term}`)
    const data = await res.json()

    showData(data)
}

// Get prev and next songs
async function getMoreSongs(url) {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`)
    const data = await res.json()

    showData(data)
}

// Show song and artist in DOM
function showData(data) {
    result.innerHTML = // Lyric page
        `
        <ul class="songs">
            ${data.data.map( song => 
                `
                <li>
                    <span><strong>${song.artist.name}</strong> - ${song.title}</span>
                    <a href="#top" data-artist="${song.artist.name}" data-songtitle="${song.title}">Letra</a>
                </li>
                `).join('')}
        </ul>
        `

    if(data.prev || data.next) { // Page btn
        more.innerHTML = ` 
            ${data.prev ? 
                `<a href="#topo" "class:"prev" onclick="getMoreSongs('${data.prev}')">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-caret-left-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg>
                </a>`
                : ''
            }
            ${data.next ? 
                `<a href="#topo" "class:"next" onclick="getMoreSongs('${data.next}')">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-caret-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg>
                </a>`
                : ''
            }
            `
    } else more.innerHTML = ''
}

// Get lyrics for song
async function getLyrics(artist, songTitle) {
    const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`)
    const data = await res.json()

    result.classList.add('lyric')

    if (data.error) {
        result.innerHTML = `<span id="error">Letra não encontrada</span>`

    } else {
        const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>')

        result.innerHTML = 
            `
                <h2>
                    <strong>${artist}</strong> - ${songTitle}
                </h2>
                <span>${lyrics}</span>
            `
    }

    more.innerHTML = ''
}