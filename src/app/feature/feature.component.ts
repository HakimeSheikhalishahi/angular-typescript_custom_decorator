import { Component, OnInit } from '@angular/core';
import { Confirmable } from '../shared/decorators/confirmable.decorator';
import { Data } from '../shared/model/data';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  data: Data[] = [
    { id: 200, title: 'Banana' },
    { id: 201, title: 'Grapes' },
    { id: 202, title: 'Mulberry' },
    { id: 203, title: 'Star fruit' },
    { id: 204, title: 'Water chestnut' },
    { id: 205, title: 'Kiwi fruit' },
    { id: 206, title: 'Grapefruit' },
    { id: 207, title: 'Apricot' }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  @Confirmable({ title: 'Are you sure!' })
  deleteItem(id: number): void {
    this.data = this.data.filter(val => val.id != id);
  }
  identify(index: number, item: Data) {
    return item.id;
  }
}
