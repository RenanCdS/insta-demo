import { Component, OnInit } from '@angular/core';
import { FollowerPhoto } from 'src/app/core/_models/follower-photo';
import { UserService } from 'src/app/core/_services/user.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {

  followersPhotos: FollowerPhoto[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getFollowersPhotos().subscribe((followersPhotos) => {
      this.followersPhotos = followersPhotos;
    });
  }

}
