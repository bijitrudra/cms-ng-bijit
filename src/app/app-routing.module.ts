import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyviewComponent } from './myview/myview.component';
import { WorkitemComponent } from './myview/workitem/workitem.component';
import { SearchComponent } from './search/search.component';
import { NewRequestComponent } from './new-request/new-request.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'myworkitem', pathMatch: 'full' },
    { path: 'myworkitem', component: MyviewComponent},
    { path: 'search', component: SearchComponent},
    { path: 'create', component: NewRequestComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}