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

    it("http success", function() {
      var httpResponse = { "statusText": "OK" };
      httpBackend.expectGET("http://localhost:8000/").respond(200, httpResponse);
      var view1Ctrl = controller('View1Ctrl',{$scope: scope});
      httpBackend.flush();
      expect(scope.httpStatus).toBe(200);
    });

    it("http failure", function() {
      httpBackend.expectGET("http://localhost:8000/").respond(400);
      var view1Ctrl = controller('View1Ctrl',{$scope: scope});
      httpBackend.flush();
      expect(scope.httpStatus).toBeUndefined();
    });

    it("mock with spy-on", function() {
        var view1Ctrl = controller('View1Ctrl',{$scope: scope});
        spyOn(scope ,'square');
        scope.buttonClick(6);
        expect(scope.square).toHaveBeenCalled();
        expect(scope.squareVal).toBeUndefined();
     });

    it("spy-on with actual call", function() {
        var view1Ctrl = controller('View1Ctrl',{$scope: scope});
        spyOn(scope ,'square').and.callThrough();
        scope.buttonClick(6);
        expect(scope.square).toHaveBeenCalled();
        expect(scope.squareVal).toBe(36);
     });

  });
});