import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http"; //32.c
import { FormsModule } from "@angular/forms"; //39a
// Modulo Root
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';  //32.a
import { AuthGuardService } from './auth-guard.service'; //32.b
import { AuthComponent } from './auth/auth.component'; //35

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
  32.d  => imports[2]
  32.e  => providers[0] y providers[1]
  35    => declarations[1]
  39    => imports[3]
*/