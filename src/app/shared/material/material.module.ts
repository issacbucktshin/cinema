import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule, MatBadgeModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatCardModule, MatSortModule, MatPaginatorIntl, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatProgressSpinnerModule } from "@angular/material";
import { MatToolbarModule } from '@angular/material/toolbar';

/* Form Controls  */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatCheckboxModule } from '@angular/material';
import { MatRippleModule } from '@angular/material/core';


//define date and time format to material date picker
export const EuropeDateFormat = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MM YYYY',
        dateA11yLabel: 'L',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};


@NgModule({
    imports: [

    ],
    exports: [

        MatDialogModule,
        MatMenuModule,
        MatTooltipModule,

        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatBadgeModule,
        MatPaginatorModule,
        MatCardModule,
        MatSortModule,
        MatRippleModule,
        MatToolbarModule,
        MatProgressSpinnerModule
    ],
    declarations: [],
    providers: [
        { provide: MAT_DATE_FORMATS, useValue: EuropeDateFormat },
    ]
})
export class AppMaterialModule { }
