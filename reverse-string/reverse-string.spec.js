describe('reverseString', function() {
  it('reverses a string', function() {
    expect(reverseString('never')).to.equal('reven');
    expect(reverseString('priya')).to.equal('ayirp');
    expect(reverseString('priya')).to.not.equal('yirp');
  });
});