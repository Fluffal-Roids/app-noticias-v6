/* eslint-disable @typescript-eslint/member-ordering */
import { Article } from './../../interfaces/index';
import { StorageService } from './../../services/storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  get articles(): Article[]{
    return this.storageService.getLocalArticles;
  }

  constructor(private storageService: StorageService) {}

}
