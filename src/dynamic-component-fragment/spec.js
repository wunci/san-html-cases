

it("dynamic component type fragment by s-is", function() {
    // [inject] init

    var span = wrap.getElementsByTagName('span')[0];
    expect(span.innerText).toBe('cxtom');
    console.log(span);
    myComponent.dispose();
    document.body.removeChild(wrap);
});

