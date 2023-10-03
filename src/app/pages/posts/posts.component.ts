import { HttpClient } from '@angular/common/http';
import { Message } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { iPost, Item } from './Ipost';

@Component({
  selector: 'bashir-apps-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor(public app: AppService, private http: HttpClient, private route: ActivatedRoute) { }
  data: iPost = { theme: "theme1" };
  msgs: Message[] = [];
  display: boolean = false;
  displayEditedPage: boolean = false;
  displaySettingPage: boolean = false;
  displayIcons: boolean = false;
  selectIcons: any[];
  selectEle: Item;
  boolStr(a: string) {
    return JSON.parse(a);
  }
  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      if (params.hasOwnProperty("path")) {
        this._getData(params.path).subscribe(
          res => {
            this.msgs = [];
            this.data = res;
            this.checkValidData();
          }, err => {
            this.msgs.push({
              severity: 'error',
              summary: 'Error',
              detail: 'File Not Exited'
            })
          }
        )
      } else {
        this.msgs.push({
          severity: 'error',
          summary: 'Error',
          detail: 'please enter path params to url'
        })
      }
    });
  }
  checkValidData() {
    if (!this.data.theme) this.data.theme = "theme1";
    if (!this.data.dir) this.data.dir = "ltr";
    if (!this.data.width) this.data.width = "min";
    if (this.data.header) {
      if (this.data.header.title)
        this.app.title.setTitle(this.data.header.title);
      if (!this.data.header.buttons) this.data.header.buttons = [];
      if (!this.data.header.style) this.data.header.style = "strock"
    }
    if (this.data.footer) {
      if (!this.data.footer.buttons) this.data.footer.buttons = [];
      if (!this.data.header.style) this.data.header.style = "fill"
    }
  }
  getTheme(i: string, b: number): string {
    if (i == null) i = "theme1";
    return `var(--${["blue", "green", "yellow", "cyan", "pink", "indigo", "teal", "orange", "bluegray", "purple"][parseInt(i.substring(5)) - 1]}-${b})`;
  }
  nav(a: string, i: number) {
    if (this.data.dev) {
      this.displayIcons = true;
      this.selectIcons = [a, i];
      return;
    }
    this.openTab(this.data[a].buttons[i].openIn, this.data[a].buttons[i].url)
  }
  openTab(a: string, url: string) {
    if (url == undefined || url == "") return;
    a == 'newTab' ? window.open(url) : this.app.router.navigateByUrl(url);
  }
  _getData(path: string) {
    if (path == null || path == undefined) return;
    path = path.replace(/[**]/g, "/")
    return this.http.get<iPost>(path)
  }
  getDataForDialog(url: string) {
    return this._getData(url)
  }
  getDataJson() {
    return JSON.stringify(this.data, null, 4);
  }
  update(value: string) {
    this.data = JSON.parse(value)
    this.displayEditedPage = false;
  }
  addButton(a: 'header' | 'footer') {
    this.data[a].buttons.push({
      icon: "cog",
      openIn: "this",
      url: ""
    })
  }
}
