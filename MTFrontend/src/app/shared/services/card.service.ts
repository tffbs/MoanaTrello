import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CardUpdateItem} from "../models/CardUpdateItem";
import {Observable} from "rxjs";
import {CardListItem} from "../models/CardListItem";
import {Card} from "../models/Card";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  url='http://localhost:5078/api';
  constructor(private readonly httpClient: HttpClient) { }

  add(title: string, description: string): void {

  }

  // getAll(): Observable<CardListItem> {
  //
  // }

  // getById(id: string): Observable<Card> {
  //
  // }
  update(card: CardUpdateItem): void {

  }

  delete(id: string): void {

  }
}
