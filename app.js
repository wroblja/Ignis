angular
    .module('homeNews', [])
    .controller('HomeCtrl', ['$scope', function($scope){
        $scope.posts = [
            {
                title: 'Pierwszy ciekawy artykuł', 
                data: '22.12.2015', 
                text: 'Treść pierwszrego ciekawego artykułu'
            },
            
            {
                title: 'Drugi ciekawy artykuł', 
                data: '23.12.2015', 
                text: 'Treść drugiego ciekawego artykułu'
            }
        ];
        
        $scope.addPost = function(){
            
            if(!$scope.title || $scope.title === '') { return; }
            $scope.posts.push({title: $scope.title, data: $scope.data, text: $scope.text});
            $scope.title = '';
            $scope.data = '';
            $scope.text = '';
        }
        
    }]);