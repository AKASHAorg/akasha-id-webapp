const status = document.getElementById('status')

const Masq = new masq.Masq(
    'TestApp',
    'App description',
    window.location.host+'/logo.svg',
    window.location.host,
    {
        hubUrls: ['wss://masq-ws.qwant.com/'],
        masqAppBaseUrl: window.location.hostname+':3000/'
    }
)

const displayProfile = async () => {
    document.getElementById('pic').src = await Masq.getProfileImage()
    document.getElementById('did').innerText = await Masq.getDID()
}

init = async () => {
    await Masq.init()
    if (Masq.isLoggedIn()) {
        await Masq.logIntoMasq()
        status.innerText = Masq.state
    } else {
        const link = await Masq.getLoginLink()
        console.log(link)
        const a = document.getElementById('link')
        a.href = link
        a.innerText = link
        document.getElementById('qr').src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(link)
        // Display link to the user
        // and ask if he wants to stay connected on restart until he signs out
        const stayConnected = true
        // Once the link is opened, execute the following code
        await Masq.logIntoMasq(stayConnected)
        status.innerText = Masq.state
        await displayProfile()

        await Masq.put('someKey', 'someValue')
        const val = await Masq.get('someKey')
    }
}

init()
