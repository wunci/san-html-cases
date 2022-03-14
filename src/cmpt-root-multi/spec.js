it("render root multi component", function (done) {
    // [inject] init

    var span = wrap.getElementsByTagName('div')[0];
    expect(span.innerHTML).toBe('111');

    myComponent.dispose();
    document.body.removeChild(wrap);
    done();
});
