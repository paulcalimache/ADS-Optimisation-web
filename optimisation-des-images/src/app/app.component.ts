import { Time } from '@angular/common';
import { ChangeDetectorRef, AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'optimisation-des-images';

  public HeroImg!: string;
  public isLoaded!: boolean;
  public time!: number;

  constructor(private cdRef: ChangeDetectorRef) {
    this.HeroImg = '../assets/photo_foret_tiny.webp';
    this.isLoaded = false;
    this.time = Date.now()
  }

  ngAfterViewInit() {
    this.HeroImg = '../assets/photo_foret.webp';
    this.isLoaded = true;
    console.log('Loading time : ', Date.now() - this.time, ' ms');
    this.cdRef.detectChanges()
  }
}
