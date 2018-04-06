import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs/observable/merge';
import { filter, map, mergeMap } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, I18nService } from '@app/core';
import { AppInfo } from '@app/shared/constants/defines';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = AppInfo.title ;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title,
              private translateService: TranslateService,
              private i18nService: I18nService) { }


  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  // ngOnInit() {
  //   // Setup logger
  //   if (environment.production) {
  //     Logger.enableProductionMode();
  //   }

  //   log.debug('init');


  //   // Setup translations
  //   this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

  //   const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

  //   // Change page title on navigation or language change, based on route data
  //   merge(this.translateService.onLangChange, onNavigationEnd)
  //     .pipe(
  //       map(() => {
  //         let route = this.activatedRoute;
  //         while (route.firstChild) {
  //           route = route.firstChild;
  //         }
  //         return route;
  //       }),
  //       filter(route => route.outlet === 'primary'),
  //       mergeMap(route => route.data)
  //     )
  //     .subscribe(event => {
  //       const title = event['title'];
  //       if (title) {
  //         this.titleService.setTitle(this.translateService.instant(title));
  //       }
  //     });
  // }

}
