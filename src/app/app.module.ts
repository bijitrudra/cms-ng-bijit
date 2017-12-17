import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyviewComponent } from './myview/myview.component';
import { WorkitemComponent } from './myview/workitem/workitem.component';
import { QueueComponent } from './myview/queue/queue.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { SearchComponent } from './search/search.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { SearchlistComponent } from './search/searchlist/searchlist.component';
import { ServerService } from './service/server.service';

@NgModule({
  declarations: [
    AppComponent,
    MyviewComponent,
    WorkitemComponent,
    QueueComponent,
    TasklistComponent,
    SearchComponent,
    NewRequestComponent,
    SearchlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
