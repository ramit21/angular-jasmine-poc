'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

   var scope, controller, httpBackend;

    beforeEach(inject(function($rootScope, $controller, $httpBackend) {
        scope = $rootScope.$new();
        controller = $controller;
        /*$controller("View1Ctrl", {
            $scope: scope
        });*/
        httpBackend = $httpBackend;
    }));

  describe('view1 controller', function(){

    it('controller defined', inject(function($controller) {
      //Controller injected directly
      var view1Ctrl = $controller('View1Ctrl',{$scope: scope});
      expect(view1Ctrl).toBeDefined();
    }));

    it("value of Scope variable", function() {
        var view1Ctrl = controller('View1Ctrl',{$scope: scope});
        expect(scope.var).toBe(100);
     });

    xit("http success", function() {
    });

  });
});