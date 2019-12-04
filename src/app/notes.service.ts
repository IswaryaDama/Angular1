import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import { Note } from './note';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

@Injectable(
)
export class NotesService {
  errMessage: string;
  constructor(private httpclient:HttpClient){

  }
  getNotes(): Observable<Note[]> {
   return this.httpclient.get<Note[]>('http://localhost:3000/notes');
  }

  addNote(note: Note): Observable<Note> {
   return this.httpclient.post<Note>('http://localhost:3000/notes',note);
  }

}
