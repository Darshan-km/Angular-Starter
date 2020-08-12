import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';

import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppigListComponent } from './Shopping/shoppig-list/shoppig-list.component';
import { ShoppigListEditComponent } from './Shopping/shoppig-list-edit/shoppig-list-edit.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';



@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    ShoppingComponent,
    ShoppigListComponent,
    ShoppigListEditComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
