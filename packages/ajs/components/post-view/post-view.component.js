import angular from "angular";
import PostViewController from "./post-view.controller";

angular
  .module("app.components")
  .component("postView", {
    templateUrl: "components/post-view/post-view.html",
    controller: PostViewController,
  });
