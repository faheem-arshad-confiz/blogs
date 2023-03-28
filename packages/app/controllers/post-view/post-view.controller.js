const PostViewController = [
  "$scope",
  "$routeParams",
  "$location",
  "$sce",
  "PostService",
  "LikeService",
  function PostViewCtrl(
    $scope,
    $routeParams,
    $location,
    $sce,
    PostService,
    LikeService
  ) {
    $scope.post = {};
    var id = $routeParams.id;

    $scope.isAlreadyLiked = LikeService.isAlreadyLiked(id);

    PostService.read(id)
      .then((res) => res.data)
      .then(function (data) {
        data.content = $sce.trustAsHtml(data.content);
        $scope.post = data;
      })
      .catch(function (data, status) {
        console.log(status);
        console.log(data);
      });

    //Like a post
    $scope.likePost = function likePost() {
      if (!LikeService.isAlreadyLiked(id)) {
        PostService.like(id)
          .then((res) => res.data)
          .then(function (data) {
            $scope.post.likes++;
            LikeService.like(id);
            $scope.isAlreadyLiked = true;
          })
          .catch(function (data, status) {
            console.log(status);
            console.log(data);
          });
      }
    };

    //Unlike a post
    $scope.unlikePost = function unlikePost() {
      if (LikeService.isAlreadyLiked(id)) {
        PostService.unlike(id)
          .then((res) => res.data)
          .then(function (data) {
            $scope.post.likes--;
            LikeService.unlike(id);
            $scope.isAlreadyLiked = false;
          })
          .catch(function (data, status) {
            console.log(status);
            console.log(data);
          });
      }
    };
  },
];

export default PostViewController;
