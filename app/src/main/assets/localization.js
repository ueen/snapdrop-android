let langCode = window.navigator.language.substring(0, 2); //because sometimes may be en-US 
const lang = new Languages(langCode);

class Languages {
    constructor(code) {
        this.init()
        let lang = this.arrLang[code] || this.arrLang['en']
        this.about = lang['about']
        this.theme = lang['theme']
        this.notification = lang['notification']
        this.install = lang['install']
        this.open = lang['open']
        this.desktop_instructions = lang['desktop_instructions']
        this.mobile_instructions = lang['mobile_instructions']
    }

    init() {
        this.arrLang = {
            en: {
                'about': 'About Snapdrop',
                'theme': 'Switch Darkmode/Lightmode',
                'notification': 'Enable Notifications',
                'install': 'Install Snapdrop',
                'open': 'Open Snapdrop on other devices to send files',
                'desktop_instructions': 'Click to send files or right click to send a messag',
                'mobile_instructions': 'Tap to send files or long tap to send a message'
            },
            de: {
                'about': 'Über Snapdrop',
                'theme': 'Ändere Dunkel/Hellmodus',
                'notification': 'Aktiviere Benachrichtigungen',
                'install': 'Installiere Snapdrop',
                'open': 'Öffne Snapdrop auf anderen Geräten um Datein zu senden',
                'desktop_instructions': 'Klick um Datein zu senden oder Rechtsklick um eine Nachricht zu senden',
                'mobile_instructions': 'Tippe um Datein zu senden oder halte etwas länger um eine Nachricht zu senden'
            }
        }
    }

}