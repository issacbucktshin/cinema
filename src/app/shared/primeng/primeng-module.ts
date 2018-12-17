import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
    imports: [],
    exports: [
        CarouselModule,
        MessagesModule,
        MessageModule,
        SidebarModule
    ],
    declarations: [],
    providers: [

    ],
})
export class AppPrimeNgModule { }
