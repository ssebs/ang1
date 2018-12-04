import { PortfolioDataService } from './../portfolio-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  tmpUsrData: Object;

  constructor(private portfolioData: PortfolioDataService) { }

  ngOnInit() {
    this.grabData();
  }

  grabData() {
    this.portfolioData.getHTTPData().subscribe(tmp => this.tmpUsrData = tmp);

  }

}
