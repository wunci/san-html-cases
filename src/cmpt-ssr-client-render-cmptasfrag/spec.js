it("component client-render if as fragment", function (done) {
    var wr = document.getElementById('cmpt-ssr-client-render-cmptasfrag');
    expect(wr.getElementsByTagName('i').length).toBe(0);
    expect(wr.getElementsByTagName('u').length).toBe(1);
    expect(wr.getElementsByTagName('b').length).toBe(1);
    expect(wr.getElementsByTagName('span').length).toBe(2);
    // [inject] init

    expect(wr.getElementsByTagName('i').length).toBe(1);
    var iEl = wr.getElementsByTagName('i')[0];
    var uEl = wr.getElementsByTagName('u')[0];
    var spans = wr.getElementsByTagName('span');

    expect(spans.length).toBe(2);
    expect(iEl.innerHTML).toBe('erik');
    expect(uEl.innerHTML).toBe('erik');
    expect(spans[1].getAttribute('title')).toBe('erik');
    expect(spans[0].getAttribute('title')).toBe('erik');

    expect(iEl.nextSibling.nodeType).toBe(3);
    expect(iEl.previousSibling.nodeType).toBe(3);
    expect(spans[0].nextSibling.nodeType).toBe(8);
    expect(spans[1].previousSibling.nodeType).toBe(8);


    myComponent.data.set('name', 'errorrik');
    myComponent.nextTick(function () {

        expect(spans[0].getAttribute('title')).toBe('errorrik');
        expect(spans[1].firstChild.tagName).toBe('B');
        expect(iEl.innerHTML).toBe('errorrik');
        expect(uEl.innerHTML).toBe('errorrik');

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });
});