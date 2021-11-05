import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



interface Imodedas {

  USD: {
    code: string,
    codein: string,
    name: String,
    high: number,
    low: number,
    varBid: number,
    pctChange: number,
    bid: number,
    ask: number,
    timestamp: string,
    create_date: Date
  },
  // USD: {
  //   ask: string,
  //   bid: string,
  //   code: string,
  //   codein: string,
  //   create_date: string,
  //   high: string,
  //   low: string,
  //   name: string,
  //   pctChange: string,
  //   timestamp: string,
  //   varBid: string
  // },
  USDT: {
    code: string,
    codein: string,
    name: String,
    high: number,
    low: number,
    varBid: number,
    pctChange: number,
    bid: number,
    ask: number,
    timestamp: string,
    create_date: Date
  },
  CAD: {
    code: string,
    codein: string,
    name: String,
    high: number,
    low: number,
    varBid: number,
    pctChange: number,
    bid: number,
    ask: number,
    timestamp: string,
    create_date: Date
  },
  GBP: {
    code: string,
    codein: string,
    name: String,
    high: number,
    low: number,
    varBid: number,
    pctChange: number,
    bid: number,
    ask: number,
    timestamp: string,
    create_date: Date
  },
  ARS: {
    code: string,
    codein: string,
    name: String,
    high: number,
    low: number,
    varBid: number,
    pctChange: number,
    bid: number,
    ask: number,
    timestamp: string,
    create_date: Date
  },
  BTC: {
    code: string,
    codein: string,
    name: String,
    high: number,
    low: number,
    varBid: number,
    pctChange: number,
    bid: number,
    ask: number,
    timestamp: string,
    create_date: Date
  },
  LTC: {
    code: string,
    codein: string,
    name: String,
    high: number,
    low: number,
    varBid: number,
    pctChange: number,
    bid: number,
    ask: number,
    timestamp: string,
    create_date: Date
  },
  EUR: {
    code: string,
    codein: string,
    name: String,
    high: number,
    low: number,
    varBid: number,
    pctChange: number,
    bid: number,
    ask: number,
    timestamp: string,
    create_date: Date
  },
  JPY: {
    code: string,
    codein: string,
    name: String,
    high: number,
    low: number,
    varBid: number,
    pctChange: number,
    bid: number,
    ask: number,
    timestamp: string,
    create_date: Date
  },
  CHF: {
    code: string,
    codein: string,
    name: String,
    high: number,
    low: number,
    varBid: number,
    pctChange: number,
    bid: number,
    ask: number,
    timestamp: string,
    create_date: Date
  },
  AUD: {
    code: string,
    codein: string,
    name: String,
    high: number,
    low: number,
    varBid: number,
    pctChange: number,
    bid: number,
    ask: number,
    timestamp: string,
    create_date: Date
  },
  CNY: {
    code: string,
    codein: string,
    name: String,
    high: number,
    low: number,
    varBid: number,
    pctChange: number,
    bid: number,
    ask: number,
    timestamp: string,
    create_date: Date
  },
  ILS: {
    code: string,
    codein: string,
    name: String,
    high: number,
    low: number,
    varBid: number,
    pctChange: number,
    bid: number,
    ask: number,
    timestamp: string,
    create_date: Date
  },
  ETH: {
    code: string,
    codein: string,
    name: String,
    high: number,
    low: number,
    varBid: number,
    pctChange: number,
    bid: number,
    ask: number,
    timestamp: string,
    create_date: Date
  },
  XRP: {
    code: string,
    codein: string,
    name: String,
    high: number,
    low: number,
    varBid: number,
    pctChange: number,
    bid: number,
    ask: number,
    timestamp: string,
    create_date: Date
  },
  DOGE: {
    code: string,
    codein: string,
    name: String,
    high: number,
    low: number,
    varBid: number,
    pctChange: number,
    bid: number,
    ask: number,
    timestamp: string,
    create_date: Date
  }
}



@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient) { }

  buscarMoedas() {
    return this.http.get<Imodedas>(`https://economia.awesomeapi.com.br/json/all`)
  }



}
