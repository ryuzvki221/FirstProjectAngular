import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GestionEtudiantService } from './services/gestion-etudiant.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddstudentmodalComponent } from './addstudentmodal/addstudentmodal.component';

@NgModule({
  declarations: [AppComponent, LoginComponent,HomeComponent, HeaderComponent, FooterComponent, AddstudentmodalComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [GestionEtudiantService],
  bootstrap: [AppComponent],
})
export class AppModule {}
