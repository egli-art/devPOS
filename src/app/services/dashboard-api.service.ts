import { Injectable } from '@angular/core';


class APIService {
}

@Injectable({
  providedIn: 'root',
})
export class DashboardApiService {
  constructor(private apiService: APIService) {
  }
}

/////there will appear calls that we do from API Service////
