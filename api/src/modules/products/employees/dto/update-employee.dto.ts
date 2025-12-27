// import { ApiProperty } from '@nestjs/swagger';
// //
// export class UpdateEmployeeDto {
//   @ApiProperty({
//     example: '1234567890123',
//     description: 'Персональный номер сотрудника (IDNP)',
//     required: false,
//   })
//   idnp?: string;

//   @ApiProperty({
//     example: 'Ivan Ivanov modificat',
//     description: 'Новое имя сотрудника',
//     required: false,
//   })
//   name?: string;

//   @ApiProperty({ required: false })
//   surname?: string;

//   @ApiProperty({
//     example: 12000,
//     description: 'Новая зарплата сотрудника',
//     required: false,
//   })
//   salary?: number;
// }

import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmployeeDto {
  @ApiProperty({
    example: '1234567890123',
    description: 'Персональный номер сотрудника (IDNP)',
    required: false,
  })
  idnp?: string;

  @ApiProperty({
    example: 'Ivan',
    description: 'Новое имя сотрудника',
    required: false,
  })
  name?: string;

  @ApiProperty({
    example: 'Gram',
    description: 'Новая фамилия сотрудника',
    required: false,
  })
  surname?: string;

  @ApiProperty({
    example: 12000,
    description: 'Новая зарплата сотрудника',
    required: false,
  })
  salary?: number;
}
