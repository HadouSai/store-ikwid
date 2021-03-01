import { State } from './../../ngrx/reducers/index.reducers';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { list, tabs } from '../../mock';
import { Subscription } from 'rxjs';
import { addTab } from 'src/app/ngrx/reducers/tabs/tabs.actions';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  tabsList = list;

  private sub1: Subscription;

  constructor(private store: Store<State>) {
    this.sub1 = this.store.select('tabState').subscribe((c) => console.log(c));
  }

  ngOnInit(): void {}

  closeTab(tab: tabs) {
    console.log(tab);
  }

  addTab(name: any) {
    console.log(name);

    const tab = {
      name,
      code: 2,
      path: 'jiji',
    };

    this.store.dispatch(addTab({ tabState: tab }));
  }
}
