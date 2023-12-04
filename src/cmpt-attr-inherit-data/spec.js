it("Component Attribute Inherit has $attrs data, not has attrXxx data", function (done) {
    // [inject] init


    var innComponent = myComponent.ref('inn');
    var innAttrs = innComponent.data.get('$attrs');
    expect(innAttrs.title).toBe('Hahaha');
    expect(innAttrs['data-t']).toBe('state:Hahaha');
    expect(innComponent.data.get('attrTitle')).toBeUndefined();

    var span = wrap.getElementsByTagName('span')[0];
    expect(span.innerHTML).toContain('Hahaha');
    expect(span.getAttribute('title')).toBe('Hahaha');
    expect(span.getAttribute('data-t')).toBe('state:Hahaha');

    myComponent.data.set('text', 'Wuwuwu');

    myComponent.nextTick(function () {
        expect(span.innerHTML).toContain('Wuwuwu');
        expect(span.getAttribute('title')).toBe('Wuwuwu');
        expect(span.getAttribute('data-t')).toBe('state:Wuwuwu');


        var innAttrs = innComponent.data.get('$attrs');
        expect(innAttrs.title).toBe('Wuwuwu');
        expect(innAttrs['data-t']).toBe('state:Wuwuwu');

        expect(innComponent.data.get('attrTitle')).toBeUndefined();

        myComponent.dispose();
        document.body.removeChild(wrap);
        done();
    });
});