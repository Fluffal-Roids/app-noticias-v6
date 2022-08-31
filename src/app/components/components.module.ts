import { ArticleComponent } from './article/article.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';



@NgModule({
  declarations: [
   ArticlesComponent,
   ArticleComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    ArticlesComponent
  ]
})
export class ComponentsModule { }
