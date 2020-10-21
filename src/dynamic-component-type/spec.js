

it("dynamic component type by s-is", function() {
    // [inject] init

    var span = wrap.getElementsByTagName('span')[0];
    expect(span.innerText).toBe('erikbaidu');
    expect(span.title).toBe('erik');

    var i = wrap.getElementsByTagName('i')[0];
    expect(i.innerText).toBe('baidu');

    myComponent.dispose();
    document.body.removeChild(wrap);
});

