import { PortfolioDataService } from './../portfolio-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  tmpUsrData: any;
  currentURL: any;

  constructor(private portfolioData: PortfolioDataService, private rtr: Router) { }

  ngOnInit() {
    this.grabData();
    this.currentURL = this.rtr.url;
  }

  grabData() {
    this.portfolioData.getHTTPData().subscribe(tmp => this.tmpUsrData = tmp);

  }

}
