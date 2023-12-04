it("Component Attribute Inherit multi level", function (done) {
    // [inject] init

    var span = wrap.getElementsByTagName('span')[0];
    expect(span.innerHTML).toContain('Hahaha');
    expect(span.className).toContain('out-cls');
    expect(span.getAttribute('title')).toBe('Hahaha');
    expect(span.getAttribute('data-t')).toBe('state:Hahaha');
    expect(span.getAttribute('data-c')).toBe('cover');

    myComponent.data.set('text', 'Wuwuwu');

    myComponent.nextTick(function () {
        expect(span.innerHTML).toContain('Wuwuwu');
        expect(span.getAttribute('title')).toBe('Wuwuwu');
        expect(span.getAttribute('data-t')).toBe('state:Wuwuwu');
        expect(span.getAttribute('data-c')).toBe('cover')

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });
});