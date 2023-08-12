import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurentComments } from '../type/curentComments';
import { Games } from '../type/game';
import { UserServiceService } from '../user/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient, private userService: UserServiceService) { }

  getInfo() {
    return this.http.get<Games[]>('http://localhost:3030/data/games')
  }

  getPost(gameId: any) {
    return this.http.get<Games>(`http://localhost:3030/data/games/${gameId}`)
  }

  create(imageUrl: string, title: string, category: string, maxLevel:number, summary:string) {
    return this.http.post('http://localhost:3030/data/games',{imageUrl, title, category, maxLevel, summary})
  }

  delete(gameId: string) {
    return this.http.delete(`http://localhost:3030/data/games/${gameId}`)
  }

  edit(gameId: string, imageUrl: string, title: string, category: string, maxLevel: number, summary: string) {
    return  this.http.put(`http://localhost:3030/data/games/${gameId}`, {imageUrl, title, category, maxLevel, summary})
  }


  deleteCommentById(gameId: string) {
    return this.http.delete(`http://localhost:3030/data/comments/${gameId}`)
  }

  addComment(comment: string, id: string, userEmail: string) {
    return this.http.post(`http://localhost:3030/data/comments`, {comment, id, userEmail})
  }

  getCommntsById(postid: string) {
    return this.http.get<CurentComments[]>('http://localhost:3030/data/comments')
  }
}
