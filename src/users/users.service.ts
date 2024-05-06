import { Injectable, NotFoundException } from '@nestjs/common';
// Entities
import { User } from './entities/user.entity';
// DTOs
import { CreateUserInput, UpdateUserInput } from './dto/inputs';
import { FindAllArgs } from './dto/args/getUsers.args';

@Injectable()
export class UsersService {
  // LIST OF USERS
  private users: User[] = [
    {
      id: '1',
      firstName: 'Angel',
      lastName: 'Zapata',
      email: 'correo@correo.com',
      password: 'password',
      role: 'ADMIN',
      status: true,
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      id: '2',
      firstName: 'Alexis',
      lastName: 'Villalba',
      email: 'correo2@correo.com',
      password: 'password',
      role: 'MANAGER',
      status: true,
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      id: '3',
      firstName: 'Julio',
      lastName: 'Rojas',
      email: 'correo3@correo.com',
      password: 'password',
      role: 'USER',
      status: true,
      createdAt: new Date(),
      updatedAt: null,
    },
  ];

  findAll(findAllArgs: FindAllArgs) {
    const { role, status, createdAt } = findAllArgs;
    let users = this.users;
    if (role !== undefined) {
      users = users.filter((user) => user.role === role);
    }
    if (status !== undefined) {
      users = users.filter((user) => user.status === status);
    }
    if (createdAt !== undefined) {
      users = users.filter(
        (user) =>
          new Date(user.createdAt).getTime() >= new Date(createdAt).getTime(),
      );
    }

    return users;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} has not been found`);
    }
    return user;
  }

  createUser(createUserInput: CreateUserInput) {
    const newUser = {
      id: String(Math.max(...this.users.map((user) => parseInt(user.id))) + 1),
      ...createUserInput,
      status: true,
      createdAt: new Date(),
      updatedAt: null,
    };

    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: string, updateUserInput: UpdateUserInput) {
    const user = this.findOne(id);

    const updatedUser = {
      ...user,
      ...updateUserInput,
      updatedAt: new Date(),
    };

    this.users = this.users.map((user) =>
      user.id === id ? updatedUser : user,
    );
    return updatedUser;
  }
}
