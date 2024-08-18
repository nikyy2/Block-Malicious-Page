(() => {
    let blocked_domains = [
        "pornhub.com",
        "xvideos.com",
        "xnxx.com",
        "redtube.com",
        "youporn.com",
        "tube8.com",
        "xhamster.com",
        "spankbang.com",
        "porn.com",
        "keezmovies.com",
        "eporner.com",
        "sunporno.com",
        "fapdu.com",
        "beeg.com",
        "grabify.link",
        "blasze.com",
        "yip.su",
        "iplogger.org",
        "2no.co",
        "iplogger.com",
        "iplis.ru",
        "ipgrabber.ru",
        "ipgraber.ru",
        "gyazo.nl",
        "yourstalker.co",
        "gyazos.com",
        "webresolver.nl",
        "ps3cfw.com",
        "bmwforum.co"
    ];
    chrome.storage.local.get(['disabled', 'bypassed', 'total'], res => {
        if (!res.disabled && blocked_domains.find(domain => location.href.includes(domain))) {
            chrome.storage.local.set({"total": (res['total'] || 0) + 1});
            
            if(!res.bypassed) {
                location = chrome.runtime.getURL("warn/warn.html") + "?" + location.href;
            } else {
                chrome.storage.local.set({"bypassed": false});
            }
        }
    });
})();
