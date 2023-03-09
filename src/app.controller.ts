import { Controller, Get, Post, Put, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("list")
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("list")
  create(): string {
    return "list"
  }

  @Post("user_*")
  getUser(): string {
    return "getUser"
  }
  
  @Put("list/user")
  updateUser() {
    return { userId: 1 }
  }

  @Put("list/:id")
  update(): string {
    return "updateid"
  }

}
