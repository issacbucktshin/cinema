import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { SidebarModule } from 'primeng/sidebar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
    imports: [],
    exports: [
        ConfirmDialogModule,
        CarouselModule,
        MessagesModule,
        MessageModule,
        SidebarModule,
        OverlayPanelModule
    ],
    declarations: [],
    providers: [
        ConfirmationService
    ],
})
export class AppPrimeNgModule { }
