function getip () {
    fetch('https://api.ipify.org/?format=json').then(res => res.json()).then(data => {
        document.getElementById('ipv4').innerHTML = data.ip
    })
}
getip()