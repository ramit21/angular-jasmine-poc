'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

   var scope;
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller("View1Ctrl", {
            $scope: scope
        });
    }));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl',{$scope: scope});
      expect(view1Ctrl).toBeDefined();
    }));

    it("value of var", function() {
        expect(scope.var).toBe(100);
     });

  });
});