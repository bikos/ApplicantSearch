import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public message: any;
  public countupOptions: any = {
    duration: 3,
    scrollSpyDelay: 2,
    reanimateOnClick: false
  };
  private id: string;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

  }

  async ionViewWillEnter() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    const data = await this.data.getUserByLogin(this.id);
    this.message = data.data;
    this.message.github_repo_url = 'https://www.github.com/'+this.id+'?tab=repositories';
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
