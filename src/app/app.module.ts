import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { TaskmanagerComponent } from './taskmanager/taskmanager.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FilterPipe} from './viewtask/filter.pipe';



const appRoute : Routes = [
  { path:'addtask', component:AddtaskComponent},
  { path:'viewtask', component:ViewtaskComponent},
  { path:'updatetask/:id', component:UpdatetaskComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    UpdatetaskComponent,
    ViewtaskComponent,
    TaskmanagerComponent,
    FilterPipe 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,    
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
