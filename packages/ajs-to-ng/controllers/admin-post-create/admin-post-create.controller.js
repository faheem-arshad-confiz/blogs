const AdminPostCreateController = [
  "$scope",
  "$location",
  "PostService",
  function AdminPostCreateCtrl($scope, $location, PostService) {
    $scope.save = function save(post, shouldPublish) {
      if (
        post != undefined &&
        post.title != undefined &&
        post.tags != undefined
      ) {
        var content = post.content;
        if (content != undefined) {
          if (shouldPublish != undefined && shouldPublish == true) {
            post.is_published = true;
          } else {
            post.is_published = false;
          }

          PostService.create(post)
            .then((res) => res.data)
            .then(function (data) {
              $location.path("/admin");
            })
            .catch(function (status, data) {
              console.log(status);
              console.log(data);
            });
        }
      }
    };
  },
];

export default AdminPostCreateController;
