(function (){
    Array.from(document.querySelectorAll('[width="32.9%"]')).forEach( el => {
        el.width = ''
    })
    Array.from(document.querySelectorAll('.plhin')).forEach(v => {
        let fromEl = v.querySelector('.favatar.pls .authi');
        let toEl = v.querySelector('[id^="authorposton"]')
        toEl.textContent = fromEl.textContent.trim() + ' ' + toEl.textContent
    })
})()
