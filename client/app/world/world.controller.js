'use strict';

angular.module('fullstackApp')
    .controller('WorldCtrl', function($scope, $ionicScrollDelegate, $timeout, $ionicModal, $ionicLoading, $ionicSlideBoxDelegate, authHttp, $location, resources) {
        $scope.data = {
            showDelete: false,
            showReorder: false
        }
        $ionicLoading.show({
            // template: "正在加载...",
            noBackdrop: true,
            hideOnStateChange: true
        });
        //轮播图请求
        resources.banns(function (params){
            $scope.banns = params;
        });
        $scope.$on('banns.update', function(){
            resources.banns(function (params){
                $scope.banns = params;
            });
            $scope.$apply();
        });
        // 列表数据请求
        resources.worlds(function (params){
            $scope.items = params;
            $timeout(function (){
                $ionicLoading.hide();
            }, 500);
        });
        $scope.$on('worlds.update', function (){
            resources.worlds(function (params){
                $scope.items = params;
            });
        });

        // 编辑
        $scope.edit = '编辑';
        $scope.toggleHtml = function() {
            if ($scope.edit == '编辑') {
                $scope.edit = '完成';
            } else {
                $scope.edit = '编辑';
            };
        }

        // 排序item
        $scope.moveItem = function(item, fromIndex, toIndex) {
            $scope.items.splice(fromIndex, 1);
            $scope.items.splice(toIndex, 0, item);
        }

        // 删除item
        $scope.onItemDelete = function(item) {
            $timeout(function() {
                $scope.items.splice($scope.items.indexOf(item), 1);
            }, 220);
        }

        // 下拉刷新
        $scope.doRefresh = function() {
            $timeout(function() {
                $scope.items.push({
                    id: Math.floor(Math.random() * 1000) + 4,
                    city: '台湾',
                    time: '今天, 台风',
                    img_rout: '../../assets/images/2.jpg'
                });
                $scope.items.push({
                    id: Math.floor(Math.random() * 1000) + 4,
                    city: '香港',
                    time: '今天, 暴雨',
                    img_rout: '../../assets/images/2.jpg'
                });
                $scope.items.push({
                    id: Math.floor(Math.random() * 1000) + 4,
                    city: '钓鱼岛',
                    time: '今天, 雨夹雪',
                    img_rout: '../../assets/images/2.jpg'
                });
                $scope.items.push({
                    id: Math.floor(Math.random() * 1000) + 4,
                    city: '东莞',
                    time: '今天, 阴天',
                    img_rout: '../../assets/images/2.jpg'
                });
                $scope.items.push({
                    id: Math.floor(Math.random() * 1000) + 4,
                    city: '深圳',
                    time: '今天, 洪涝',
                    img_rout: '../../assets/images/2.jpg'
                });

                // stop refresh
                $scope.$broadcast('scroll.refreshComplete');
            }, 500);
        }

        // 滚动加载
        $scope.loadMore = function() {
            $timeout(function() {
                $scope.items.push({
                    id: Math.floor(Math.random() * 1000) + 4,
                    city: '台湾',
                    time: '16:23',
                    img_rout: '../../assets/images/2.jpg'
                });
                $scope.items.push({
                    id: Math.floor(Math.random() * 1000) + 4,
                    city: '台湾',
                    time: '16:23',
                    img_rout: '../../assets/images/2.jpg'
                });
                $scope.items.push({
                    id: Math.floor(Math.random() * 1000) + 4,
                    city: '台湾',
                    time: '16:23',
                    img_rout: '../../assets/images/2.jpg'
                });
                $scope.items.push({
                    id: Math.floor(Math.random() * 1000) + 4,
                    city: '台湾',
                    time: '16:23',
                    img_rout: '../../assets/images/2.jpg'
                });
                $scope.items.push({
                    id: Math.floor(Math.random() * 1000) + 4,
                    city: '台湾',
                    time: '16:23',
                    img_rout: '../../assets/images/2.jpg'
                });

                // stop
                $scope.$broadcast("scroll.infiniteScrollComplete");
            }, 500);
        }

        //  打开模态对话框 start
        $ionicModal.fromTemplateUrl('components/modal/modal.html', {
            scope: $scope,
            animate: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            var users = [{
                "first_name": "Francis",
                "last_name": "Hill"
            }, {
                "first_name": "Lessie",
                "last_name": "Caldwell"
            }, {
                "first_name": "Alyson",
                "last_name": "Woodward"
            }, {
                "first_name": "Malone",
                "last_name": "Becker"
            }, {
                "first_name": "Terrell",
                "last_name": "Stein"
            }, {
                "first_name": "Laurie",
                "last_name": "Ayers"
            }, {
                "first_name": "Rowland",
                "last_name": "Rosario"
            }, {
                "first_name": "Laurel",
                "last_name": "Hobbs"
            }, {
                "first_name": "Kristie",
                "last_name": "Barker"
            }, {
                "first_name": "Riley",
                "last_name": "Ortiz"
            }, {
                "first_name": "Morin",
                "last_name": "Terry"
            }, {
                "first_name": "Ida",
                "last_name": "Haney"
            }, {
                "first_name": "Boyd",
                "last_name": "Davis"
            }, {
                "first_name": "Milagros",
                "last_name": "Blair"
            }, {
                "first_name": "Marissa",
                "last_name": "Howell"
            }, {
                "first_name": "Whitehead",
                "last_name": "Sosa"
            }, {
                "first_name": "Potts",
                "last_name": "Byers"
            }, {
                "first_name": "Tara",
                "last_name": "Adams"
            }, {
                "first_name": "Velasquez",
                "last_name": "Carver"
            }, {
                "first_name": "Dale",
                "last_name": "Flowers"
            }, {
                "first_name": "Baldwin",
                "last_name": "Donovan"
            }, {
                "first_name": "Lynch",
                "last_name": "Gibson"
            }, {
                "first_name": "Deana",
                "last_name": "Norris"
            }, {
                "first_name": "Harrison",
                "last_name": "Decker"
            }, {
                "first_name": "Anne",
                "last_name": "Harris"
            }, {
                "first_name": "Nanette",
                "last_name": "Harmon"
            }, {
                "first_name": "Byers",
                "last_name": "Maldonado"
            }];
            //Sort user list by first letter of name
            var tmp = {};
            for (i = 0; i < users.length; i++) {
                var letter = users[i].first_name.toUpperCase().charAt(0);
                if (tmp[letter] === undefined) {
                    tmp[letter] = [];
                }
                tmp[letter].push(users[i]);
            }
            $scope.sorted_users = angular.fromJson(tmp);
            //Create alphabet object
            $scope.alphabet = iterateAlphabet();

            function iterateAlphabet() {
                var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#";
                var numbers = new Array();
                for (var i = 0; i < str.length; i++) {
                    var nextChar = str.charAt(i);
                    numbers.push(nextChar);
                }
                return numbers;
            }
            //Click letter event
            $scope.gotoList = function(id) {
                $location.hash(id);
                $ionicScrollDelegate.$getByHandle('modalScroll').anchorScroll(true);
            }
            $scope.groups = [];
            for (var i = 0; i < 10; i++) {
                $scope.groups[i] = {
                    name: i,
                    items: []
                };
                for (var j = 0; j < 3; j++) {
                    $scope.groups[i].items.push(i + '-' + j);
                }
            }
        });
        // open
        $scope.openModal = function() {
            $scope.modal.show();
        }
        // close
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        // remove
        $scope.removeModal = function() {
            $scope.modal.remove();
        }
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        $scope.scrollFixed = function (){
            // var scrollPosTop = $ionicScrollDelegate.$getByHandle('modalScroll').getScrollPosition().top;
            $location.url('/');
        }
        // slide
        $scope.pager = function(index) {
            $ionicSlideBoxDelegate.slide(index);
        };

    });
