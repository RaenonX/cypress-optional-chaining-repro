describe('Sandbox', () => {
  it('fails', () => {
    let something: string[] | undefined;

    expect(something?.length).to.equal(5);
  });
});
