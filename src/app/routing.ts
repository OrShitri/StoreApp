import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ProductAddComponent } from "./components/product-add/product-add.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const appRoutes: Routes = [
    {path: '', component: ProductListComponent},
    {path: 'details/:id', component:ProductDetailsComponent},
    {path: 'new', component: ProductAddComponent},
    {path: '**', component: PageNotFoundComponent}
]

export const router = RouterModule.forRoot(appRoutes);