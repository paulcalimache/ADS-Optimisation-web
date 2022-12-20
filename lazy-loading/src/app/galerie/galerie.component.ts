import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  public test: string = "test";
  public test1: string = "test";
  public tes2: string = "test";
  public test3: string = "test";
  public test4: string = "test";
  public test5: string = "test";
  public test6: string = "test";
  public test7: string = "test";
  public test8: string = "test";
  public test9: string = "test";

  public bigTest: string[] = []

  constructor() { }

  ngOnInit(): void {
    this.bigTest.push(this.test);
  }

}
