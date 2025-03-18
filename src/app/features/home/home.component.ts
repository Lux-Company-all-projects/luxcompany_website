import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone : false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router : Router,private translateService: TranslateService){
    this.translateService.setDefaultLang("fr");
    this.translateService.use("fr");
  }
  go_to_game_page() : void {
    this.router.navigate(['/games'])
  }
  languageMenuOpen = false;
    currentLanguage = "FR";
  
    languages = [
      { code: "FR", name: "Français" },
      { code: "EN", name: "English" },
      { code: "MG", name: "Malagasy" },
    ];
  
    langMap: Record<string, string> = {
      FR: "fr",
      EN: "en",
      MG: "mg",
    };

    toggleLanguageMenu() {
      this.languageMenuOpen = !this.languageMenuOpen;
    }
  
    changeLanguage(langCode: string) {
      if (langCode in this.langMap) {
        this.translateService.use(this.langMap[langCode]);
        this.currentLanguage = langCode;
        this.languageMenuOpen = false;
      }
    }
}
