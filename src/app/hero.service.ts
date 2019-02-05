import { Injectable } from '@angular/core';
import { observable, of, Observable, from } from 'rxjs'

import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService: Heroes obtenidos');
    return of(HEROES);
  }
}
