import { Injectable } from '@nestjs/common';
import { School, SchoolRating }  from './school.model'


@Injectable()
export class SchoolService {
    private school: School[] = [];

    getALLSchools(): School[] {
        return this.school;
    }

    createSchool(title: string, description: string): School {
        const school: School = {
        
            title,
            description,
            ratings: SchoolRating.MEDIOCRE,
        };

        this.school.push(school);
        return school;

    }
}
