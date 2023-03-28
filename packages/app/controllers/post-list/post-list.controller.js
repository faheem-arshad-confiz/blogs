const PostListController = [
  "$scope",
  "$sce",
  "PostService",
  function PostListCtrl($scope, $sce, PostService) {
    $scope.posts = [];
    PostService.findAllPublished()
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        for (var postKey in data) {
          console.log(postKey);
          data[postKey].content = $sce.trustAsHtml(data[postKey].content);
        }
        console.log(data);
        $scope.posts = data;
      })
      .catch((data, status) => {
        console.log(status);
        console.log(data);
      });
  },
];

export default PostListController;
