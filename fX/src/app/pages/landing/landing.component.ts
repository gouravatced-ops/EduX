import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  template: `
    <div style="padding:20px">
      <h1>Welcome to ERP Dashboard</h1>
      <p>Select a module from menu</p>

      <a href="/users">Go to Users</a>
    </div>
  `
})
export class LandingComponent {}
