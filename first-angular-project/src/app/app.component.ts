import { NgModel , NgForm} from '@angular/forms';
import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { reduce } from 'rxjs';
@Component({
  selector: 'app-root',
  /*
  template: `
    <h1>Home Page</h1>
  `,
  styles: [`
  h1 { color: pink; }
  `],
  */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-project';

  changeTitle():void{
    this.title="new Title";
  }
}
