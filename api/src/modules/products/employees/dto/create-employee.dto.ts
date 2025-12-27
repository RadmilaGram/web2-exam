// import { ApiProperty } from '@nestjs/swagger';

// export class CreateEmployeeDto {
//   @ApiProperty({
//     example: '1234567890123',
//     description: 'Персональный номер сотрудника (IDNP)',
//   })
//   idnp: string;

//   @ApiProperty({
//     example: 'Ivan',
//     description: 'Имя сотрудника',
//   })
//   name: string;

//   @ApiProperty({
//     example: 'Gram',
//     description: 'Фамилия сотрудника',
//   })
//   surname: string;

//   @ApiProperty({
//     example: 10000,
//     description: 'Зарплата сотрудника',
//   })
//   salary: number;
// }

import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({
    example: '1234567890123',
    description: 'Персональный номер сотрудника (IDNP)',
  })
  idnp: string;

  @ApiProperty({
    example: 'Ivan',
    description: 'Имя сотрудника',
  })
  name: string;

  @ApiProperty({
    example: 'Gram',
    description: 'Фамилия сотрудника',
  })
  surname: string;

  @ApiProperty({
    example: 10000,
    description: 'Зарплата сотрудника',
  })
  salary: number;
}
