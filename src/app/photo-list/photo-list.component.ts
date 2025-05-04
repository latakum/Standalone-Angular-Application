import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppService } from '../app.service';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
photos:any[] =[];

constructor(private appSerice : AppService){}

ngOnInit(){
this.appSerice.getPhotos().subscribe((res:any) => this.photos = res);

}
}
