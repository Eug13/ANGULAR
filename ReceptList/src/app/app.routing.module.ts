import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReceptsComponent } from './recepts/recepts.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';



const appRouter: Routes = [
    { path: 'recepts', component: ReceptsComponent },
    { path: 'recepts/:id', component: ReceptsComponent },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: '', redirectTo: '/recepts', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouter)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule {}