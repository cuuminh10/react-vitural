export interface IEmployee {
    employeeId: number;
    name: string;
    isActive: boolean
    birthday: any
}

export interface ILink {
    id?: number;
    link: string;
    shortLink: string;
}

export interface IUser {
    email: string;
    password: string;
}


export interface IEmployeeList extends IEmployee {
    dateCreated: any
}