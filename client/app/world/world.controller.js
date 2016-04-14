'use strict';

angular.module('fullstackApp')
    .controller('WorldCtrl', function($scope, $rootScope, $ionicScrollDelegate, $timeout, $ionicModal, $ionicLoading, $ionicSlideBoxDelegate, authHttp, $location, resources, my) {
        $scope.data = {
            showDelete: false,
            showReorder: false
        }
        $ionicLoading.show({
            // template: "正在加载...",
            noBackdrop: true,
            hideOnStateChange: true
        });
        $scope.$on('banns.update', function(){
            resources.banns(function (params){
                $scope.banns = params;
            });
            $scope.$apply();
        });
        my.banns().then(function (data){
            $scope.banns = data;
        }, function (error){
            alert(error);
        })
        // 列表数据请求
        resources.worlds(function (params){
            angular.forEach(params, function(data, i){
                params[i].time = timeFormat(data.time);
            });
            $scope.items = params;
            $timeout(function (){
                $ionicLoading.hide();
            }, 500);
        });
        $scope.$on('worlds.update', function (){
            resources.worlds(function (params){
                angular.forEach(params, function(data, i){
                    params[i].time = timeFormat(data.time);
                });
                $scope.items = params;
            });
        });

        // 下拉刷新
        $scope.hasNextPage = resources.hasNextPage();
        $scope.loadError = false;

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
            authHttp.get('/api/world-modals', {params: { _id: item._id }}).success(function(response){
                if (response) {
                    $rootScope.$broadcast('worlds.update');
                }
            }).
            error(function(response){
                console.log(response);
            });

            // $timeout(function() {
            //     $scope.items.splice($scope.items.indexOf(item), 1);
            // }, 220);
        }

        // 下拉刷新
        $scope.doRefresh = function() {
            resources.refresh(function (params){
                angular.forEach(params, function(data, i){
                    params[i].time = timeFormat(data.time);
                });
                $scope.items = params;
                $scope.hasNextPage = true;
                $scope.loadError = false;
                $scope.$broadcast('scroll.refreshComplete');
            });
            
        }

        // 滚动加载
        $scope.loadMore = function() {
            resources.loadMore(function(params){
                $scope.hasNextPage = false;
                $scope.loadError = false;
                $timeout(function(){
                    $scope.hasNextPage = resources.hasNextPage();
                }, 100);
                angular.forEach(params, function(data, i){
                    params[i].time = timeFormat(data.time);
                });
                $scope.items = $scope.items.concat(params);
                // stop
                $scope.$broadcast("scroll.infiniteScrollComplete");
            })
            
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
        function timeFormat(time){
            var date = new Date(time),
                curDate = new Date(),
                year = date.getFullYear(),
                month = date.getMonth() + 10,
                day = date.getDate(),
                hour = date.getHours(),
                minute = date.getMinutes(),
                curYear = curDate.getFullYear(),
                curHour = curDate.getHours(),
                timeStr;

            if(year < curYear){
                timeStr = year +'年'+ month +'月'+ day +'日 '+ hour +':'+ minute;
            }else{
                var pastTime = curDate - date, pastH = pastTime/3600000;
                if(pastH > curHour){
                    timeStr = month +'月'+ day +'日 '+ hour +':'+ minute;
                }else if(pastH >= 1){
                    timeStr = '今天 ' + hour +':'+ minute +'分';
                }else{
                    var pastM = curDate.getMinutes() - minute;
                    if(pastM > 1){
                        timeStr = pastM +'分钟前';
                    }else{
                        timeStr = '刚刚';
                    }
                }
            }
            return timeStr;
        }
        Date.prototype.format = function(format){
            var o = {
                "M+" : this.getMonth()+1, //month
                "d+" : this.getDate(), //day
                "h+" : this.getHours(), //hour
                "m+" : this.getMinutes(), //minute
                "s+" : this.getSeconds(), //second
                "q+" : Math.floor((this.getMonth()+3)/3), //quarter
                "S" : this.getMilliseconds() //millisecond
            };
            if(/(y+)/.test(format)) format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4 - RegExp.$1.length));
            for(var k in o){
                if(new RegExp("("+ k +")").test(format))
                format = format.replace(RegExp.$1,RegExp.$1.length==1 ? o[k] :("00"+ o[k]).substr((""+ o[k]).length));
            }
            return format;
        };

        $scope.pushData = function (item){
            $scope.closeModal();
            authHttp.post('/api/world-modals',{params: { city: item.first_name + '-' + item.last_name, time: new Date().format("yyyy-MM-dd hh:mm:ss") }}).success(function(response){
                if (response) {
                    $rootScope.$broadcast('worlds.update');
                }
            }).
            error(function(response){
                console.log(response);
            });
        }
        // slide
        $scope.pager = function(index) {
            $ionicSlideBoxDelegate.slide(index);
        };

    });
