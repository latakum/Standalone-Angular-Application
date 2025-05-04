import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users : any[] = [];
constructor(private appservice: AppService){}

ngOnInit(): void {
  this.appservice.getUsers().subscribe(
    (res:any) => this.users = res)
}
}
