// Framework works test
// Useing the Mocha Framework: http://visionmedia.github.io/mocha/

var should = require('../')
  , assert = require('assert');


describe('Array', function(){
  describe('mocha#works', function(){
    it('should return true to verify mocha is installed and working', function(){
    // This verifies that 'mocha' is working and installed.
      assert.equal(true, true);
    })
  })
})

var n = 30;
while (n--) {
  describe('Array', function(){
    var arr;

    beforeEach(function(){
      arr = [1,2,3];
    })

    describe('#indexOf()', function(){
      it('should return -1 when the value is not present', function(){
        assert(-1 == arr.indexOf(5), 'Not equal');
      })

      it('should return the correct index when the value is present', function(){
        assert(0 == arr.indexOf(1));
        assert(1 == arr.indexOf(2));
      })
    })
  })
}