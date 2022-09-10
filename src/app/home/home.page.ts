import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public searchString = '';

  public dataField: any = [];

  public displayField: any = [];

  public nextCounter = 0;
  public currentPage = 0;
  public pages = 0;

  constructor(private data: DataService) {}

  async onEnter() {
    try {
      const data: any = await this.data.getuserinfo(this.searchString);
      this.dataField = data.data.items;
      const numberPages = this.dataField.length/6;
      this.pages = Math.ceil(numberPages);
      this.currentPage = 1;
      this.getData(this.currentPage);
      console.log(this.dataField);
    } catch (error) {
      console.log(error);
    }
  }




  public nextPage(){
    this.currentPage++;
    this.getData(this.currentPage);
  }

  public prevPage(){
    this.currentPage--;
    this.getData(this.currentPage);
  }

  valueChange($event) {
    this.searchString = ($event.target.value);
    // this.filterConfig.filterObject.searchString = _.toLower($event.target.value);
  }


  public async clearText(){
    this.searchString = '';
    this.dataField = [];
    this.displayField = [];
    this.pages = 0;
    this.currentPage = 0;
  //   this.showData = true;
  //   this.noData = false;
  //   this.learnFlag = false;
  //   if (this.showCloud) {
  //   return this.showWordCloud();
  // } else {
  //   this.initTableService();
  // }
}


  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  private getData(pageNum){
    if(pageNum === this.pages){
      this.displayField = this.dataField.slice((pageNum-1)*6, this.dataField.length);
    }else{
      this.displayField = this.dataField.slice((pageNum-1)*6 , 6*pageNum);
    }
  }

}
