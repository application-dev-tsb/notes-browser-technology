import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TosComponent } from './tos/tos.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TypodemoComponent} from './typodemo/typodemo.component';
import { ButtondemoComponent } from './buttondemo/buttondemo.component';
import { IcondemoComponent } from './icondemo/icondemo.component';
import { BadgedemoComponent } from './badgedemo/badgedemo.component';
import { ToolbardemoComponent } from './toolbardemo/toolbardemo.component';
import { ListdemoComponent } from './listdemo/listdemo.component';
import { ExpansionpaneldemoComponent } from './expansionpaneldemo/expansionpaneldemo.component';
import { CardsdemoComponent } from './cardsdemo/cardsdemo.component';
import { TabdemoComponent} from './tabdemo/tabdemo.component';
import { StepperdemoComponent } from './stepperdemo/stepperdemo.component';
import { SnackbardemoComponent } from './snackbardemo/snackbardemo.component';
import {DialogdemoComponent} from './dialogdemo/dialogdemo.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'dialog', component: DialogdemoComponent },
  { path: 'snackbar', component: SnackbardemoComponent },
  { path: 'stepper', component: StepperdemoComponent },
  { path: 'tabs', component: TabdemoComponent },
  { path: 'cards', component: CardsdemoComponent },
  { path: 'list', component: ListdemoComponent },
  { path: 'expansion', component: ExpansionpaneldemoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'nav', component: NavigationComponent },
  { path: 'form', component: FormComponent },
  { path: 'terms', component: TosComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'button', component: ButtondemoComponent },
  { path: 'badge', component: BadgedemoComponent },
  { path: 'icon', component: IcondemoComponent },
  { path: 'toolbar', component: ToolbardemoComponent },
  { path: 'typo', component: TypodemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
