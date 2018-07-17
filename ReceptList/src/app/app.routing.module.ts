import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReceptsComponent } from './recepts/recepts.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {ReceptItemComponent} from './recepts/recept-list/recept-item/recept-item.component'
import {ReceptDetailComponent} from './recepts/recept-detail/recept-detail.component'
import { BaseComponent } from './recepts/base/base.component';
import { ReceptEditComponent } from './recepts/recept-detail/recept-edit/recept-edit.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'
import { ShoppingItemComponent } from './shopping-list/shopping-item/shopping-item.component';



const appRouter: Routes = [
    { path: 'recepts', component: ReceptsComponent,
 children:[
     {path:'', component:BaseComponent},
     {path:':id',component:ReceptDetailComponent},
     {path:':id/edit',component:ShoppingEditComponent}

 ]
},
    { path: 'shopping-list', component: ShoppingListComponent,
    children:[
        {path:'edit-item',component:ShoppingItemComponent}
    ]
},
    { path: '', redirectTo: '/recepts', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouter)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule {}