import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { AppComponent } from '../app.component';

const config = {
  providers: [
    provideServerRendering() // This is the ONLY provider needed for SSR
  ]
};

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;