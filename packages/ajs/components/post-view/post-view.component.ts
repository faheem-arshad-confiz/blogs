import { Component, Inject } from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";
import { LikeService, RouteParams, SCE } from "../../ajs-upgraded-providers";
import angular from "angular";
import { PostService } from "../../services/post/post.service";

@Component({
  selector: "post-view",
  templateUrl: "components/post-view/post-view.component.html",
})
export class PostViewComponent {
  post: any = {};
  id = null;
  isAlreadyLiked = false;

  constructor(
    @Inject(PostService) private postService: PostService,
    @Inject(RouteParams) private routeParams,
    @Inject(SCE) private $sce,
    @Inject(LikeService) private likeService
  ) {
    this.id = this.routeParams.id;
    console.log(this.likeService.isAlreadyLiked(this.id));
    this.isAlreadyLiked = this.likeService.isAlreadyLiked(this.id);
    this.postService.read(this.id).subscribe((data: any) => {
      data.content = $sce.trustAsHtml(data.content);
      this.post = data;
    });
  }

  //Like a post
  likePost() {
    if (!this.likeService.isAlreadyLiked(this.id)) {
      this.postService.like(this.id).subscribe((data) => {
        this.post.likes++;
        this.likeService.like(this.id);
        this.isAlreadyLiked = true;
      });
    }
  }

  // //Unlike a post
  unlikePost() {
    if (this.likeService.isAlreadyLiked(this.id)) {
      this.postService.unlike(this.id).subscribe((data) => {
        this.post.likes--;
        this.likeService.unlike(this.id);
        this.isAlreadyLiked = false;
      });
    }
  }
}

angular.module("app.components").directive(
  "postView",
  downgradeComponent({
    component: PostViewComponent,
  })
);
