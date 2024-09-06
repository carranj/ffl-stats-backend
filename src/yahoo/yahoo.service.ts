
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class YahooService {
  constructor(private readonly httpService: HttpService) {}

  getFantasyData(): Observable<AxiosResponse<any>> {
    const yahooAPIUrl = 'https://fantasysports.yahooapis.com/fantasy/v2/league/31229/players';
    return this.httpService.get(yahooAPIUrl, {
      headers: {
        Authorization: 'Bearer your_yahoo_api_token',
      },
    });
  }
}
