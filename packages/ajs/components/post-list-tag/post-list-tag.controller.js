const PostListTagController = [
  "$scope",
  "$routeParams",
  "$sce",
  "PostService",
  function PostListTagCtrl($scope, $routeParams, $sce, PostService) {
    $scope.posts = [];
    var tagName = $routeParams.tagName;

    PostService.findByTag(tagName)
      .then(function (data) {
        for (var postKey in data) {
          data[postKey].content = $sce.trustAsHtml(data[postKey].content);
        }
        $scope.posts = data;
      })
      .catch(function (status, data) {
        console.log(status);
        console.log(data);
      });
  },
];

export default PostListTagController;
