import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    APP_ROUTES,
    provideAnimations()
  ]
}).catch(err => console.error(err));
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';