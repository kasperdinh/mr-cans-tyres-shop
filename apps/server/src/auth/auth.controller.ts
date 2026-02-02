import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Request,
  UnauthorizedException,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorators/roles.decorator';
import { UserRole } from '@prisma/client';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  @ApiOperation({ summary: 'Login user and return JWT' })
  @ApiResponse({ status: 200, description: 'JWT Token generated' })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @Post('register')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Register a new user (Admin Only)' })
  @ApiResponse({ status: 201, description: 'User created' })
  @ApiResponse({ status: 403, description: 'Forbidden (Admin only)' })
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user profile' })
  getProfile(@Request() req: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
    return req.user;
  }
}
