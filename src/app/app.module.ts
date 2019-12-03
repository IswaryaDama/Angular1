import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { AppComponent  } from './app.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { NotesService } from './notes.service';


@NgModule({
  declarations: [ HeaderComponent, AppComponent ],
  imports: [ HttpClientModule, BrowserModule ,
             MatToolbarModule, MatExpansionModule, MatFormFieldModule,
             BrowserAnimationsModule, MatInputModule, FormsModule, MatCardModule ],
  providers: [ NotesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
