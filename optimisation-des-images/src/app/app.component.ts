import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked{
  title = 'optimisation-des-images';

  private heroImgBefore = '../assets/photo_foret_tiny.webp';
  private heroImgAfter = '../assets/photo_foret.webp';

  public HeroImg = this.heroImgBefore;
  public isLoaded = false;

  ngAfterViewChecked() {
    this.HeroImg = this.heroImgAfter;
    this.isLoaded = true;
  }
}
