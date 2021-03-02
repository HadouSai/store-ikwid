import { State } from './../../ngrx/reducers/index.reducers';
import { _TabStateKey } from './../../ngrx/reducers/tabs/tabs.interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { list, tabs } from '../../mock';
import { Subscription } from 'rxjs';
import { addTab } from 'src/app/ngrx/reducers/tabs/tabs.actions';
import { Router } from '@angular/router';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  tabsList = list;

  private sub1: Subscription;

  constructor(private store: Store<State>, private router: Router) {
    this.sub1 = this.store.select(_TabStateKey).subscribe((c) => console.log(c));
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

  navigateToAuth() {
    this.router.navigate(['/auth']);
  }
}
