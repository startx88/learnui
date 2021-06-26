import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { CategoryComponent } from './category/category.component';
import { LessionComponent } from './lession/lession.component';
import { LessionCategoryComponent } from './lession-category/lession-category.component';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { SharedModule } from 'src/app/shared/shared.module';

const courseRoute: Routes = [
  {
    path: '',
    component: CourseComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: AllCourseComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'lession', component: LessionComponent },
      { path: 'quiz', component: QuizComponent },
    ],
  },
];

@NgModule({
  declarations: [
    CourseComponent,
    AllCourseComponent,
    CategoryComponent,
    LessionComponent,
    LessionCategoryComponent,
    QuizComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(courseRoute)],
})
export class CourseModule {}