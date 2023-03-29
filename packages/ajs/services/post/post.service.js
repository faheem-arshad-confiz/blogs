import * as angular from 'angular';

var options = {};
options.api = {};
options.api.base_url = "http://localhost:3001";

angular
    .module("app.services")
    .factory('PostService',
        [
            "$http",
            function ($http) {
                return {
                    findAllPublished: function () {
                        return $http.get(options.api.base_url + '/post');
                    },

                    findByTag: function (tag) {
                        return $http.get(options.api.base_url + '/tag/' + tag);
                    },

                    read: function (id) {
                        return $http.get(options.api.base_url + '/post/' + id);
                    },

                    findAll: function () {
                        return $http.get(options.api.base_url + '/post/all');
                    },

                    changePublishState: function (id, newPublishState) {
                        return $http.put(options.api.base_url + '/post', { 'post': { _id: id, is_published: newPublishState } });
                    },

                    delete: function (id) {
                        return $http.delete(options.api.base_url + '/post/' + id);
                    },

                    create: function (post) {
                        return $http.post(options.api.base_url + '/post', { 'post': post });
                    },

                    update: function (post) {
                        return $http.put(options.api.base_url + '/post', { 'post': post });
                    },

                    like: function (id) {
                        return $http.post(options.api.base_url + '/post/like', { 'id': id });
                    },

                    unlike: function (id) {
                        return $http.post(options.api.base_url + '/post/unlike', { 'id': id });
                    }
                };
            }
        ]
    );