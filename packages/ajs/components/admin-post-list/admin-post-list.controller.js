const AdminPostListController = [
  "$scope",
  "PostService",
  function AdminPostListCtrl($scope, PostService) {
    console.log("-----------------------------");
    $scope.posts = [];

    PostService.findAll()
      .then(function (data) {
        $scope.posts = data;
      });

    $scope.updatePublishState = function updatePublishState(
      post,
      shouldPublish
    ) {
      if (post != undefined && shouldPublish != undefined) {
        PostService.changePublishState(post._id, shouldPublish)
          .then(function (data) {
            var posts = $scope.posts;
            for (var postKey in posts) {
              if (posts[postKey]._id == post._id) {
                $scope.posts[postKey].is_published = shouldPublish;
                break;
              }
            }
          })
          .catch(function (status, data) {
            console.log(status);
            console.log(data);
          });
      }
    };

    $scope.deletePost = function deletePost(id) {
      if (id != undefined) {
        PostService.delete(id)
          .then(function (data) {
            var posts = $scope.posts;
            for (var postKey in posts) {
              if (posts[postKey]._id == id) {
                $scope.posts.splice(postKey, 1);
                break;
              }
            }
          })
          .catch(function (status, data) {
            console.log(status);
            console.log(data);
          });
      }
    };
  },
];

export default AdminPostListController;
