import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { TabComponent } from './components/tab/tab.component';
import { TabItemComponent } from './components/tab/tab-item/tab-item.component';
import { TabContentComponent } from './components/tab/tab-content/tab-content.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ContainerComponent } from './components/container/container.component';
import { RowComponent } from './components/row/row.component';
import { ColComponent } from './components/col/col.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { CardComponent } from './components/card/card.component';
import { PanelComponent } from './components/panel/panel.component';
import { AddClassDirective } from './directives/add-class.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { LogoComponent } from './components/logo/logo.component';
import { RouterModule } from '@angular/router';
import { CourseItemComponent } from './components/course/course-item/course-item.component';

@NgModule({
  declarations: [
    AlertComponent,
    ModalComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    TabComponent,
    TabItemComponent,
    TabContentComponent,
    CollapseComponent,
    AccordionComponent,
    ContainerComponent,
    RowComponent,
    ColComponent,
    FormGroupComponent,
    CardComponent,
    PanelComponent,
    AddClassDirective,
    LoaderComponent,
    LogoComponent,
    CourseItemComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AlertComponent,
    ModalComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    TabComponent,
    TabItemComponent,
    TabContentComponent,
    CollapseComponent,
    AccordionComponent,
    ContainerComponent,
    RowComponent,
    ColComponent,
    FormGroupComponent,
    CardComponent,
    PanelComponent,
    LogoComponent,
    LoaderComponent,
    CourseItemComponent,
    AddClassDirective,
  ],
})
export class SharedModule {}
