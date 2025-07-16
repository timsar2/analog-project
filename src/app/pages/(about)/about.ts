import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  http = inject(HttpClient);
  greeting = signal<string>('WelCome to Analog Framework!');


  async getData() {
    const tt =  await firstValueFrom(this.http.get<string>('/api/v1/hello'));
    // const tt1 = await this.http.get<string>('/api/route/v1/hello').toPromise();
    console.log('Data fetched from server:', tt);
    this.greeting.set(tt);
  }
}
