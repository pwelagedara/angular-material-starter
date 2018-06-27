import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const appRoutes = [
  {path: '', pathMatch: 'full', redirectTo: 'first'},
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: 'third', component: ThirdComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    DashboardComponentComponent,
    TableComponentComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
