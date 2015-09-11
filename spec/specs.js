describe('changeBase', function(){
  it("should take a decimal base integer input and return it in a binary base format", function(){
    expect(changeBase(3, 2)).to.eql("11");
  });

  it("should take a decimal base integer input and return it in a hexadecimal base format", function(){
    expect(changeBase(10, 16)).to.eql("a");
  });

  it("should take a decimal base integer input and return it in a ternary base format", function(){
    expect(changeBase(4, 3)).to.eql("11");
  });
});
