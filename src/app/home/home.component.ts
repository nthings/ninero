import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BanamexScrapperService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private banamexScrapper: BanamexScrapperService) { }
  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

  scrape(): void {
    this.banamexScrapper.scrape();
  }

}
