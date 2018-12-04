import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  items = [
    { name: 'Github', url: 'https://github.com/ssebs/'},
    {name: 'Website', url : 'https://ssebs.com/'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
