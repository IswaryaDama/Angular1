import { Component,OnInit } from '@angular/core';
import { Note } from './note';
import { NotesService } from './notes.service';
import { error } from 'util';
import { HttpErrorResponse } from '@angular/common/http/src/response';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  errMessage: string;  
  note : Note;
  noteList : Note[];
  constructor(private noteservice:NotesService){
    this.note = new Note();
    this.noteList =[];
  }
  ngOnInit(){
    
   this.noteservice.getNotes().subscribe(notedata=>{
    
    this.noteList = notedata;
   },
  (err)=>{
   
      this.errMessage = err.message;
  
  })
  }
  addNote()
    { 
      if((this.note.title) && (this.note.text))     
    {
    this.noteList.push(this.note);
     
    this.noteservice.addNote(this.note).subscribe(data=>{
    
    },
  err=>{
    this.noteList.pop();
    this.errMessage = err.message;
    console.error(this.errMessage);
  
  })

   this.note=new Note();
}
  else{
    
      this.errMessage = 'Title and Text both are required fields';
      
   }
  }

}
