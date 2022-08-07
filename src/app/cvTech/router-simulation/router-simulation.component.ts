import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-simulation',
  templateUrl: './router-simulation.component.html',
  styleUrls: ['./router-simulation.component.css']
})
export class RouterSimulationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToComponent(route: any) {
    const link = [route];
    this.router.navigate(link)

  }
}
