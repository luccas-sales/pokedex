import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma.service';
import { SignInDTO, SignUpDTO } from './dtos/auth';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signup(data: SignUpDTO) {
    const userAlreadyExists = await this.prismaService.users.findUnique({
      where: { email: data.email },
    });

    if (userAlreadyExists) {
      throw new UnauthorizedException('Usuário já cadastrado');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.prismaService.users.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    const accessToken = await this.jwtService.sign({
      id: user.id,
      username: user.username,
      email: user.email,
    });

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      accessToken,
    };
  }

  async signin(data: SignInDTO) {
    const user = await this.prismaService.users.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    const passwordMatch = await bcrypt.compare(data.password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    const accessToken = await this.jwtService.sign({
      id: user.id,
      username: user.username,
      email: user.email,
    });

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      accessToken,
    };
  }
}
