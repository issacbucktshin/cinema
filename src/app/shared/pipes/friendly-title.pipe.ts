import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friendlyTitle'
})
export class FriendlyTitlePipe implements PipeTransform {

  transform(title: string): string {
    let friendlyTitle = title.replace(/[^\w\s]/gi, '')
    return friendlyTitle.charAt(0).toUpperCase() + friendlyTitle.slice(1);
  }
}
