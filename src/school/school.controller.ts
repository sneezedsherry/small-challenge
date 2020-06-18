import { Controller, Get, Post, Body } from '@nestjs/common';
import { SchoolService } from './school.service';
import { School } from './school.model';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('school')
export class SchoolController {
    constructor(private schoolService: SchoolService) {}
    
    @Get()
    getALLSchools(): School[] {
        return this.schoolService.getALLSchools();
    }

    @Post()
    createSchool(
        @Body('schoolname') title: string,
        @Body('description') description: string,
    ) : School {
        return this.schoolService.createSchool(title, description);
    }
}
