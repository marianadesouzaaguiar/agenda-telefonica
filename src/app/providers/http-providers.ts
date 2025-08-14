import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export const httpProviders = importProvidersFrom(HttpClientModule);
