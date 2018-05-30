import { Component, OnInit ,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-bar',
  templateUrl: './sidenav-bar.component.html',
  styleUrls: ['./sidenav-bar.component.css']
})
export class SidenavBarComponent implements OnInit {

  @Output() logout = new EventEmitter();
  @Output() toggleSidenavBar = new EventEmitter ();
  constructor() { }

  ngOnInit() {
  }

}
