import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
// Services
import { UsersService } from './users.service';
// Entities
import { User } from './entities/user.entity';
// DTOs
import { CreateUserInput, UpdateUserInput } from './dto/inputs';
import { FindAllArgs } from './dto/args/getUsers.args';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  findAll(@Args() findAllArgs: FindAllArgs) {
    return this.usersService.findAll(findAllArgs);
  }

  @Query(() => User, { name: 'user' })
  findOne(
    @Args('id', { type: () => String, nullable: false })
    id: string,
  ) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User, { name: 'createUser' })
  createUser(
    @Args('createUserInput')
    createUserInput: CreateUserInput,
  ) {
    return this.usersService.createUser(createUserInput);
  }

  @Mutation(() => User, { name: 'updateUser' })
  updateUser(
    @Args('updateUserInput')
    updateUserInput: UpdateUserInput,
  ) {
    return this.usersService.updateUser(updateUserInput.id, updateUserInput);
  }
}
