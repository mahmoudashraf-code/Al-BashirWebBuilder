import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'bashie-apps-web-builder',
  templateUrl: './web-builder.component.html',
  styleUrls: ['./web-builder.component.scss']
})
export class WebBuilderComponent implements OnInit {
  url: string = "";
  constructor(public app: AppService) { }

  ngOnInit(): void {
    
  }
  list(a: string = ""): boolean {
    return (this.app.router.url == `/Al-bashirWebBuilder${a}`)
  }
  generate(url: string) {
    this.url = `${window.location.origin}/gui?path=${url.replace(/[//]/g, "**")}`;
  }
  open(){
    window.open(this.url)
  }
  copyToClipboard() {
    navigator.clipboard.writeText(this.url).then(() => {
      // You can add a toast notification here if needed
      console.log('URL copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy URL: ', err);
    });
  }
}
