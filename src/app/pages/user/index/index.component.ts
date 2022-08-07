import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  toggle:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }

  closeMenu(){
    this.toggle = false;
    console.log(this.toggle);
  }

  calculateClasses() {
    console.log(this.toggle);

    // return {
    //     'cus-icon': this.toggle
    // };
}

}
