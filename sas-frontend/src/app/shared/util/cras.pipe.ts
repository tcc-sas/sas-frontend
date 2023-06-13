import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cras' })
export class CrasPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'UNIDADE_1':
        return 'Unidade 1';

      case 'UNIDADE_2':
        return 'Unidade 2';

      case 'UNIDADE_3':
        return 'Unidade 3';

      default:
        return 'Matriz';
    }
  }
}
