import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  getData(): string {
    return 'This is data from the service!';
  }
}
