it("html entity support is limited", function () {
    // [inject] init

    var compare = document.createElement('u');
    compare.innerHTML = MyComponent.prototype.template;
    document.body.appendChild(compare);

    expect(myComponent.el.offsetWidth).toBe(compare.offsetWidth);

    myComponent.dispose();
    document.body.removeChild(wrap);
    document.body.removeChild(compare);
});
