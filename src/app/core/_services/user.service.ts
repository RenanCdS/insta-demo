import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FollowerPhoto } from '../_models/follower-photo';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    urlBase = environment.api.url;

    constructor(private http: HttpClient) {}

    getFollowersPhotos(): Observable<FollowerPhoto[]> {
        return this.http.get<FollowerPhoto[]>(this.urlBase + 'followers');
    }
}