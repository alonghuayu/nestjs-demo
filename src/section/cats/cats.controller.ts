import { Body, Controller, Get, Header, HttpCode, Param, ParamData, Post, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { Cat } from 'src/interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    // @Get('list')
    // findAll(@Req() request: Request): string {
    //     return 'This action returns all cats'
    // }

    // @Get('async')
    // async findAsync(): Promise<any[]> {
    //     return [{ id: 1, }];
    // }
    // @Get('docs')
    // @Redirect('https://docs.nestjs.com', 302)
    // getDocs(@Query('version') version) {
    //     if (version && version === '5') {
    //         return { url: 'https://docs.nestjs.com/v5/' };
    //     }
    // }

    // @Get(':id')
    // findById(@Param() params): string {
    //     return `This action returns id ${params.id} cats`
    // }

    // @Post('add')
    // @Header('Cache-Control', 'none')
    // async create(@Body() createCatDto: CreateCatDto) {
    //     return `This action adds a new cat which name is ${createCatDto.name}, age is ${createCatDto.age}, breed is ${createCatDto.breed}`;
    // }

    @Post('add')
    async created(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get('list')
    async findAllList(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}
