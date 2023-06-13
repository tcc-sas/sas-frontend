import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'role' })
export class RolePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'ROLE_ADMIN':
        return 'Administrador';

      default:
        return 'Usuário';
    }
  }
}
