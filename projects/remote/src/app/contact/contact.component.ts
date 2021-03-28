import { Component, OnInit } from '@angular/core';
import { SessionLibService } from 'session-lib';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public session: SessionLibService) { }

  ngOnInit(): void {

  }

}
