import { Body, Controller, Get, HttpCode, Patch, Param, Post, Res, Delete, HttpStatus } from '@nestjs/common';
import path from 'path';

@Controller('courses')
export class CoursesController {
    @Get()
    findAll(@Res() response) {
        return response.status(200).json({message:'Listagem de cursos'});
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `Curso com ID ${id}`;
    }
    @HttpCode(204)
    @Post()
    create(@Body() body) {
        return body;
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        console.log(body);
        return `Update course with ID ${id}`;
    }
    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    remove(@Param('id') id: string) {   
        return `Delete course with ID ${id}`;
    }
}