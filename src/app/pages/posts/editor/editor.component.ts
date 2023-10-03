import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { iPost, Item } from '../Ipost';

@Component({
  selector: 'bashir-gui-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  @Input("data") post: Body[] = [];
  @Input("object") object: Observable<iPost>;
  @Output("openDialog") dialog: EventEmitter<Item> = new EventEmitter();
  display: boolean = false;
  sortField: string;
  selectEle: any;
  ngOnInit() {
    if (this.object)
      this.object.subscribe((res: any) => {
        this.post = res.body;
      })
  }
  openDialog(item: Item, openIn: string) {
    if (openIn == "dialog")
      this.dialog.emit(item);
    else if (openIn == "this") {
      this.app.router.navigateByUrl(`gui?path=${item.url}`);
    } else if (openIn == "newTab") {
      window.open(`gui?path=${item.url}`)
    }
  }
  constructor(private app: AppService, private sanitizer: DomSanitizer) { }
  link(link: string) {
    window.open(link);
  }
}
