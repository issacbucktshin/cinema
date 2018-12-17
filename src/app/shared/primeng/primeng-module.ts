import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { SidebarModule } from 'primeng/sidebar';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
    imports: [],
    exports: [
        CarouselModule,
        MessagesModule,
        MessageModule,
        SidebarModule,
        OverlayPanelModule
    ],
    declarations: [],
    providers: [

    ],
})
export class AppPrimeNgModule { }
