it("component client-render", function (done) {
    var wr = document.getElementById('cmpt-ssr-client-render');
    expect(wr.getElementsByTagName('i').length).toBe(0);
    expect(wr.getElementsByTagName('u').length).toBe(1);
    // [inject] init

    expect(wr.getElementsByTagName('i').length).toBe(1);
    var iEl = wr.getElementsByTagName('i')[0];
    var uEl = wr.getElementsByTagName('u')[0];
    var spans = wr.getElementsByTagName('span');

    expect(iEl.innerHTML).toBe('erik');
    expect(uEl.innerHTML).toBe('erik');
    expect(spans[1].getAttribute('title')).toBe('erik');
    expect(spans[0].getAttribute('title')).toBe('erik');


    myComponent.data.set('name', 'errorrik');
    myComponent.nextTick(function () {
        expect(iEl.innerHTML).toBe('errorrik');
        expect(uEl.innerHTML).toBe('errorrik');
        expect(spans[1].getAttribute('title')).toBe('errorrik');
        expect(spans[0].getAttribute('title')).toBe('errorrik');

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });
});