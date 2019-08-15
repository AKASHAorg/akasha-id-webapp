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

const hideProfile = () => {
    console.log('hiding profile')
    document.getElementById('pic').src = ''
    document.getElementById('did').innerText = ''
}

const displayProfile = async () => {
    hideLogin()
    document.getElementById('pic').src = await Masq.getProfileImage()
    document.getElementById('did').innerText = await Masq.getDID()
    const logout = document.createElement('button')
    logout.innerText = 'Logout'
    logout.id = 'logout'
    logout.addEventListener('click', async () => {
        await Masq._resetLogin()
        hideProfile()
        showLogin()
    }, false)
    document.getElementsByTagName('body')[0].appendChild(logout)
}

const showLogin = async () => {
    const link = await Masq.getLoginLink()
    console.log(link)
    const a = document.getElementById('link')
    a.href = link
    a.innerText = 'Login / register'
    document.getElementById('qr').src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(link)
    document.getElementById('logout').remove()
    // Display link to the user
}

const hideLogin = () => {
    const a = document.getElementById('link')
    a.innerText = ''
    a.href = ''
    document.getElementById('qr').src = ''
}

init = async () => {
    await Masq.init()
    if (Masq.isLoggedIn()) {
        status.innerText = Masq.state
        await displayProfile()
    } else {
        showLogin()
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
