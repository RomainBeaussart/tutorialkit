/// <reference path="../.astro/types.d.ts" />
/// <reference types="@tutorialkit/astro/types" />
/// <reference types="astro/client" />


type User = {
    name: string;
    email: string;
    password: string;
    id: string;
}

const user: User = {
    name: 'John Doe',
    email: 'john.doe@exemple.com',
    password: 'password',
    id: '123456789'
}

user.