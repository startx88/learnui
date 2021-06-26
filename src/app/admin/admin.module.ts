import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseComponent } from './course/course.component';
import { PageComponent } from './page/page.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { AdminRouterModule } from './admin.router.module';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    CourseComponent,
    PageComponent,
    UserComponent,
    ProfileComponent,
    SettingComponent,
  ],
  imports: [CommonModule, AdminRouterModule],
})
export class AdminModule {}
