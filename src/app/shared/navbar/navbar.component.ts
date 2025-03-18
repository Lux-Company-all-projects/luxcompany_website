import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  standalone: false,
})
export class NavbarComponent {
  menuOpen = false;
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

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang("fr");
    this.translateService.use("fr");
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

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
