import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minification-et-compression';

  public get List(): string[] {
    console.log("test : ", this.workList);
    return this.workList;
  }
  private workList: string[] = []

  public get Counter(): number {
    return this.counter;
  }
  private counter: number = 0;

  ngOnInit(): void {
    let texte1: string = "texte 1";
    let texte2: string = "texte 2";
    let texte3: string = "texte 3";
    let texte4: string = "texte 4";
    let texte5: string = "texte 5";
    let texte6: string = "texte 6";
    let texte7: string = "texte 7";
    let texte8: string = "texte 8";
    let texte9: string = "texte 9";
    
    this.workList.push(texte1, texte2, texte3, texte4, texte5, texte6, texte7, texte8, texte9);
  }

  public IncreaseCounter(): void {
    this.counter++;
  }
  public DecreaseCounter(): void {
    this.counter--;
  }
  public RandomizeCounter(): void {
    this.counter = Math.random();
  }
  public ResetCounter(): void {
    this.counter = 0;
  }
}
