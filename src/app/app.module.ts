import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { TaskmanagerComponent } from './taskmanager/taskmanager.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EdittaskComponent } from './edittask/edittask.component';
import { DelettaskComponent } from './delettask/delettask.component';



const appRoute : Routes = [
  { path:'addtask', component:AddtaskComponent},
  { path:'viewtask', component:ViewtaskComponent},
  { path:'edittask', component:EdittaskComponent},
  { path:'deletetask', component:DelettaskComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    UpdatetaskComponent,
    ViewtaskComponent,
    TaskmanagerComponent,
    EdittaskComponent,
    DelettaskComponent
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
