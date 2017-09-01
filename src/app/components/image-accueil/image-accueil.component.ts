import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-image-accueil',
  templateUrl: './image-accueil.component.html',
  styleUrls: ['./image-accueil.component.css']
})
export class ImageAccueilComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private location: Location,) { }

  ngOnInit() {
  }

}
