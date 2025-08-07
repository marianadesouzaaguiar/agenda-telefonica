import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

// Importação de componentes standalone
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormContatoComponent } from './components/form-contato/form-contato.component';

// AppRouting como standalone também
import { routes as AppRoutes } from './app.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    MatToolbarModule,
    AppComponent,
    LoginComponent,
    FormContatoComponent,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
