import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SocketIoConfig, Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'socket-vs-http';

  public message: string | undefined;

  private httpHeader = new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
  });

  constructor(private http: HttpClient, private socket: Socket) {
  };

  ngOnInit(): void {
  }

  httpGet() {
    let perfoCount = [];
    for (let i = 0; i <= 50 ; i++) {
      let startTime = performance.now();
      this.http.get<DataMsg[]>('http://localhost:3000', {headers: this.httpHeader}).subscribe(response => {
      });
      let endTime = performance.now();
      perfoCount.push(endTime - startTime);
      // console.log("http elapsed time : " + (endTime - startTime));
    }
    console.log("Moyenne http get: ", this.moyenne(perfoCount));
    console.log("SOMME http get: ", this.somme(perfoCount));
  };

  socketGet() {
    let perfoCount: number[] = [];
    for (let i = 0; i <= 50 ; i++) {
      let startTime = performance.now();
      this.socket.emit('GET');
      this.socket.fromEvent<DataMsg[]>('MSG').subscribe(response => {
      });
      let endTime = performance.now();
      perfoCount.push(endTime - startTime);
      // console.log("socket elapsed time : " + (endTime - startTime));
    }
    console.log("Moyenne socket get: ", this.moyenne(perfoCount));
    console.log("SOMME socket get: ", this.somme(perfoCount));
  };

  moyenne(t: number[]): number {
    return this.somme(t) / t.length;
  }

  somme(t: number[]): number {
    let somme: number = 0;
    t.forEach(n => {
      somme = somme + n;
    });
    return somme;
  }
}

export interface DataMsg {
  id: Number,
  arrayId: Number[],
  title: string,
  shortmsg: string,
  paragraphe: string,
}