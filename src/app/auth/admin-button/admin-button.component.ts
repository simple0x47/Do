import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-button',
  templateUrl: './admin-button.component.html',
  styleUrls: ['./admin-button.component.css']
})
export class AdminButtonComponent {
  constructor(private router: Router) { }

  public openAdminUI() {
    this.router.navigateByUrl('/admin');
  }
}
