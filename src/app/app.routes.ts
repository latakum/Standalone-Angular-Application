import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

export const routes: Routes = [
    {path: '',redirectTo:'users',pathMatch:'full'},
    {path:'users', component:UserListComponent},
    {path:'photos', component:PhotoListComponent}
];
