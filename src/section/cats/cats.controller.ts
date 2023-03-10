import { Body, Controller, Get, Param, ParamData, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
    @Get('list')
    findAll(@Req() request: Request): string {
        return 'This action returns all cats'
    }

    @Get('async')
    async findAsync(): Promise<any[]> {
        return [{ id: 1, }];
    }

    @Get(':id')
    findById(@Param() params): string {
        return `This action returns id ${params.id} cats`
    }

    @Post('add')
    async create(@Body() createCatDto: CreateCatDto) {
        return `This action adds a new cat which name is ${createCatDto.name}, age is ${createCatDto.age}, breed is ${createCatDto.breed}`;
    }
}
