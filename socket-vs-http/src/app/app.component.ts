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
  // startTime: number;

  public ite: number = 10;
  public message: string | undefined;
  public chatMsgList: string[] = [];

  public dataMsg: DataMsg = {
    id:1,
    arrayId: [],
    title: '',
    shortmsg: '',
    paragraphe: '',
  };

  private httpHeader = new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
  });

  constructor(private http: HttpClient, private socket: Socket) {
    // this.startTime = performance.now();
    // this.httpGet();
    // this.socketGet();
  };

  ngOnInit(): void {
  }

  getHttpDataMsg() {
    this.http.get<DataMsg[]>('http://localhost:3000', {headers: this.httpHeader}).subscribe(response => {
      this.dataMsg = response[0];
    })
  }
  getSocketDataMsg() {
    this.socket.emit('GET');
    this.socket.fromEvent<DataMsg[]>('MSG').subscribe(response => {
      this.dataMsg = response[0];
    });
  }

  httpGet() {
    for (let i = 0; i <= this.ite ; i++) {
      this.http.get<DataMsg[]>('http://localhost:3000', {headers: this.httpHeader}).subscribe(response => {
        if (i === this.ite) {
          let endTime = performance.now();
          this.dataMsg.title = i.toString();
          // console.log('Temps : ', (endTime - this.startTime))
        }
      });
    }
  };

  socketGet() {
    let count = 0;
    for (let i = 0; i <= this.ite ; i++) {
      this.socket.emit('GET');
    }
    this.socket.fromEvent<DataMsg[]>('MSG').subscribe(response => {
      count = count + 1;
      if (count === this.ite) {
        let endTime = performance.now();
        this.dataMsg.title = count.toString();
        // console.log('Temps : ', (endTime - this.startTime))g
        
      }
    });
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