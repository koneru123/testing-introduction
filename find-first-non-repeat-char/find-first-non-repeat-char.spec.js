describe('firstNonRepeatChar', function() {
  it('find first nonrepeating character in a string', function() {
    expect(firstNonRepeatChar('abacabad')).to.equal('c');
    expect(firstNonRepeatChar('abaabad')).to.equal('d');
    expect(firstNonRepeatChar('abaaba')).to.equal(null);
    expect(firstNonRepeatChar('abacabad')).to.not.equal('a');
  });
});