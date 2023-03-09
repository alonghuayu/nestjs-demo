import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Get('list')
    findAll(@Req() request: Request): string {
        console.log(request)
        return 'This action returns all cats'
    }
}
