import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//import { writeFile } from 'fs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'locale-app'
  selectedLang: any
  currentDate: any
  langOptions:any[]

  constructor(
    private translateService: TranslateService,
    ) {
    const translateJson = JSON.stringify(({
      "TITLE": {
          "translate_page_title": "Page translation",
          "text_exemple_title": "Text Exemple"
      },
      "CONTENT": {
          "text_exemple_content": "A small demonstration text to serve as a test for the application of internationalization of a web page."
      },
      "DATE": {
          "date_format": "medium"
      }
      
  }))
    window.localStorage.setItem('langTest', translateJson)
    console.log("navigator.language", navigator.language)
    const VALID_LANGS = ['pt-BR', 'en'];

/*     VALID_LANGS.includes(navigator.language) ? 
    this.selectedLang = translateService.setDefaultLang(navigator.language) :  */
    this.selectedLang = translateService.setDefaultLang('en')

    this.selectedLang = translateService.getDefaultLang()

    this.langOptions = [
      {value: 'ar-SA', label: 'عربى'},
      {value:'en', label: 'English (US)'},
      {value: 'ja', label: '日本'},
      {value: 'pt-BR', label: 'Português (Brasil)'},
    ];
  }

    ngOnInit() {
    let translateObj = window.localStorage.getItem('langTest')
/*     writeFile('.src/app/translate/translate.json', translateObj, function (err: any) {
      if (err) {
        throw console.error(err);
      }
    }) */


    console.log("=>", translateObj)
    setInterval(() => {
      this.currentDate = new Date()  
    })
  }

  selectLanguage(e:any) {
    this.selectedLang = e.target.value;
    this.translateService.setDefaultLang(this.selectedLang)
  }
}
