describe('sumNestedArray', function() {
  it('sum each of the nested array element', function() {
    expect(sumNestedArray([[12, 12], [6, 6]])).to.have.lengthOf(2);
    expect(sumNestedArray([[12, 12], [6, 6]])).to.have.ordered.members([24, 12]);
    expect(sumNestedArray([[12, 12], [6, 6]])).but.not.ordered.members([12, 24]);
    expect(sumNestedArray([[12, 12], [6, 6]])).to.not.have.lengthOf(1);
  });
});