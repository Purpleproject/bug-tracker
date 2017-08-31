import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-developpeur',
  templateUrl: './developpeur.component.html',
  styleUrls: ['./developpeur.component.css']
})
export class DeveloppeurComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
  }

}
