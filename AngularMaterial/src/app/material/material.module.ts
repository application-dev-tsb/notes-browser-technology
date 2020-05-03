import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

const MaterialComponents = [
  MatGridListModule,
  MatMenuModule,
  MatExpansionModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatTabsModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
