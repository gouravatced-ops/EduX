import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  loading = false;
  errorMessage = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.loading = true;

    this.userService.getUsers().subscribe({
      next: (res) => {
        console.log('USERS RESPONSE:', res);
        this.users = res;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load users';
        this.loading = false;
      }
    });
  }
}
