// StockBlock Contract Test

describe("StockBlock", function() {
  before(function(done) {
    this.timeout(0);
    var contractsConfig = {
      "StockBlock": {
        args: [3]
      }
    };
    EmbarkSpec.deployAll(contractsConfig, done);
  });

  it("should set initial price", function(done) {
    StockBlock.absoluteInitial(function(err, result) {
      assert.equal(result.toNumber(), 3);
      done();
    });
  });

  it("should set photo and hash", function(done) {
    StockBlock.setPrice(function() {
      StockBlock.setHash('s', function() {
        StockBlock.getPrice(0, function(err, result) {
          assert.equal(result, 3);
        });
        StockBlock.getHash(0, function(err, result) {
          assert.equal(result, 's');
          done();
        });
      });
    });
  });

  it("should increase price", function(done) {
    StockBlock.increasePrice(0, function() {
      StockBlock.getPrice(0, function(err, result) {
        assert.equal(result, 3);
        done();
      });
      done();
    });
  });

});
