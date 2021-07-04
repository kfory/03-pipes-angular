import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tarea'
})
export class TareaPipe implements PipeTransform {

  transform(value: string, mostrar:boolean = true): string {
    return (mostrar) ? '*'.repeat(value.length) : value
  }

}
