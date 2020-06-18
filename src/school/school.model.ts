export interface School {

    title: string;
    description: string;
    ratings: SchoolRating
}

export enum SchoolRating {
    GOOD = 'GOOD',
    MEDIOCRE = 'MEDIOCRE',
    TERRIBLE = 'TERRIBLE',
}