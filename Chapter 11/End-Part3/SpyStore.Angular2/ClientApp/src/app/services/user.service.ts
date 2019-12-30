import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

export interface User {
    Id?: number;
    FullName?: string;
    EmailAddress?: string;
    Password?: string;
}

@Injectable()
export class UserService {
    private _user: User = { Id: 0 };

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(environment.apiEndpoint + 'customer');
    }

    ensureAuthenticated(): Observable<User> {
        const observable = new Observable(subscriber => {
            if (this.IsAuthenticated) {
                subscriber.next(this.User);
            } else {
                return this.http.get<User[]>(environment.apiEndpoint + 'customer')
                    // for Demo purposes take first customer
                    .subscribe(users => {
                        this.User = users[0];
                        subscriber.next(this.User);
                    });
            }
        });

        return observable;
    }

    logout() {
        this.User = { Id: 0, FullName: '', EmailAddress: '' };
    }

    set User(user: User) {
        if (user) {
            this._user.Id = user.Id;
            this._user.FullName = user.FullName;
            this._user.EmailAddress = user.EmailAddress;
            this._user.Password = user.Password;
        }
    }

    get User(): User {
        return this._user;
    }

    get IsAuthenticated(): boolean {
        return this._user.Id > 0;
    }
}
