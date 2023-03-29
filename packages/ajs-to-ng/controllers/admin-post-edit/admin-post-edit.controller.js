const AdminPostEditController = [
  "$scope",
  "$routeParams",
  "$location",
  "$sce",
  "PostService",
  function AdminPostEditCtrl(
    $scope,
    $routeParams,
    $location,
    $sce,
    PostService
  ) {
    $scope.post = {};
    var id = $routeParams.id;

    PostService.read(id)
      .then((res) => res.data)
      .then(function (data) {
        $scope.post = data;
      })
      .catch(function (status, data) {
        $location.path("/admin");
      });

    $scope.save = function save(post, shouldPublish) {
      if (post !== undefined && post.title !== undefined && post.title != "") {
        var content = post.content;
        if (content !== undefined && content != "") {
          post.content = content;

          if (shouldPublish != undefined && shouldPublish == true) {
            post.is_published = true;
          } else {
            post.is_published = false;
          }

          // string comma separated to array
          if (Object.prototype.toString.call(post.tags) !== "[object Array]") {
            post.tags = post.tags.split(",");
          }

          PostService.update(post)
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

export default AdminPostEditController;
