import * as angular from 'angular'

angular
    .module("app.services")
    .factory('LikeService', function ($window) {
        var postLiked = [];

        if ($window.sessionStorage && $window.sessionStorage.postLiked) {
            postLiked.push($window.sessionStorage.postLiked);
        }


        return {
            isAlreadyLiked: function (id) {
                if (id != null) {
                    for (var i in postLiked) {
                        if (postLiked[i] == id) {
                            return true;
                        }
                    }

                    return false;
                }

                return false;
            },

            like: function (id) {
                if (!this.isAlreadyLiked(id)) {
                    postLiked.push(id);
                    $window.sessionStorage.postLiked = postLiked;
                }
            },

            unlike: function (id) {
                if (this.isAlreadyLiked(id)) {
                    for (var i in postLiked) {
                        if (postLiked[i] == id) {
                            postLiked.splice(i, 1);
                            $window.sessionStorage.postLiked = postLiked;

                            break;
                        }
                    }
                }
            }
        }
    });