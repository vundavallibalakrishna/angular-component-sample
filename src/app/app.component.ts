import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  newList: string[];
  deleted: string[];

  public onDeleted(newList: string[], deleted: string[]) {
    this.newList = newList;
    this.deleted = deleted;
  }
}
