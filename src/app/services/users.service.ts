import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { firstValueFrom } from "rxjs";
import { CreateUser } from "../models/user-create";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.baseUrl;
    }

    public getUserById = (id: string): any => {
        return firstValueFrom(this.http.get(this.baseUrl + "/api/Users/" + id));
    }

    public getAllUsers = (): any => {
        return firstValueFrom(this.http.get(this.baseUrl + "/api/Users/all"));
    }

    public createUser = (user: CreateUser): any => {
        return firstValueFrom(this.http.post(this.baseUrl + "/api/Users/create", user));
    }

    public updateUser = (user: User): any => {
        return firstValueFrom(this.http.post(this.baseUrl + "/api/Users/update", user));
    }

    public enableDisableUser = (id: string, enabled: boolean): any => {
        return firstValueFrom(this.http.post(this.baseUrl + `/api/Users/${id}/enableDisableUser?enabled=${enabled}`, {}));
    }

    public deleteUser = (id: string): any => {
        return firstValueFrom(this.http.post(this.baseUrl + `/api/Users/delete?id=${id}`, {}));
    }
}