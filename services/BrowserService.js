const puppeteer = require('puppeteer');

class BrowserService {

    static getBrowser() {
        return puppeteer.launch({
                headless: false
            },
            {
                args: [
                    '--disable-gpu',
                    '--disable-dev-shm-usage',
                    '--disable-setuid-sandbox',
                    '--no-first-run',
                    '--no-sandbox',
                    '--no-zygote',
                    '--single-process', // <- this one doesn't works in Windows
                    "--proxy-server='direct://'",
                    '--proxy-bypass-list=*'
                ]
            }
        )
    }

    static closeBrowser(browser) {
        if (!browser) {
            return;
        }
        return browser.close();
    }
}

module.exports = BrowserService;
