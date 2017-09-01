import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-testeur',
  templateUrl: './testeur.component.html',
  styleUrls: ['./testeur.component.css']
})
export class TesteurComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,
    private location: Location,) { }

  ngOnInit() {
    
  }

}
