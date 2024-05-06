import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsEnum, IsOptional } from 'class-validator';
import { UserRole } from '../inputs/create-user.input';

@ArgsType()
export class FindAllArgs {
  @Field(() => String, { description: 'Role of the user', nullable: true })
  @IsOptional()
  @IsEnum(UserRole)
  role: string;

  @Field(() => Boolean, { description: 'Status of the user', nullable: true })
  @IsOptional()
  @IsBoolean()
  status: boolean;

  @Field(() => String, {
    description: 'Creation date of the user',
    nullable: true,
  })
  @IsOptional()
  @IsDate()
  createdAt: Date;
}
