import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public currentTheme: string = 'dark';

  links = [
    {
      url: 'https://www.linkedin.com/in/evaldo-cardoso-15a620125/',
      icon: 'linkedin',
      label: 'Linkedin',
    },
    {
      url: 'https://github.com/Evaldoes',
      icon: 'github',
      label: 'Github',
    },
    {
      url: 'https://gitlab.com/Evaldoes',
      icon: 'linkedin',
      label: 'Gitlab',
    },
  ]

  constructor(
    private themeService: NbThemeService
  ) {
    this.getCurrentTheme();
  }

  ngOnInit(): void {
  }


  getCurrentTheme() {
    this.themeService.onThemeChange()
      .subscribe((theme: any) =>   {
        this.currentTheme = theme.name;
        // console.log(`Theme changed to ${theme.name}`);
      });
  }

  changeTheme() {
    if (this.currentTheme == 'dark'){
      this.themeService.changeTheme('corporate');
    }else{
      this.themeService.changeTheme('dark');
    }
  }



}
