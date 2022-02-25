import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent {
  @Input() items: string[];
  @Input() onDelete: (newList: string[], deleted: string[]) => void;

  public deleteItem(index: number) {
    const deleted: string[] = this.items.splice(index, 1);
    this.onDelete(this.items, deleted);
  }

  public deleteAll() {
    const deleted: string[] = this.items.splice(0, this.items.length);
    this.onDelete(this.items, deleted);
  }
}
