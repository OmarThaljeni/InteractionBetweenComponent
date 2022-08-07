import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  color: string = "";
  bgColor: string = "";

  counter = 0;
  @HostListener('window:keydown.control', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.counter++;
  }
  resetCounter() {
    this.counter = 0;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCvs() {
    const link = [''];
    this.router.navigate(link);
  }

}
