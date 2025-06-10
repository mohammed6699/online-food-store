import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { FoodPage } from './components/food-page/food-page';
import { CartComponent } from './components/cart-component/cart-component';
import { CheckOutComponenet } from './components/check-out-componenet/check-out-componenet';

export const routes: Routes = [
    //default route
    
    {path:'', component:Home},
    {path:'home', component:Home},
    {path:'checkout', component:CheckOutComponenet},
    // search route
    {path:'search/:searchTerm', component:Home, title:'home search'},
    {path:'tag/:tag', component:Home},
    {path:'food/:id', component:FoodPage, title:'Food page'},
    {path:'cart-page', component:CartComponent},
    {path:'tag/:tag', component:Home},
    
];
