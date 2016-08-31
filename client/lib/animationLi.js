/**
 * Created by iw-poblenou2 on 26/8/16.
 */
ANIMATION_END = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';

debouncer = function (fn) {
    var stack = [];
    var threshold = 200;
    var lastCall = new Date().getTime();
    var callFunctions = Array.prototype.forEach.bind(stack, function (fn) { fn(); }); // can't wait for `x => x()`
    var timeoutHandle;
    return function () {
        var now = new Date().getTime()
        var deltaT = now - lastCall;
        lastCall = now;
        // make sure each function is called with the correct `this` and arguments
        stack.push(fn.bind.apply(fn, [this].concat(Array.prototype.slice.call(arguments))));
        clearTimeout(timeoutHandle);
        timeoutHandle = setTimeout(callFunctions, threshold);
    };
};

animating = false;
puede = true;

animateEnter = function  () {

    if (animating) { return; }
    animating = true;
    $('.item').addClass('animate-enter');
    $('.list').removeClass('hidden');
    $('.item').one(ANIMATION_END, debouncer(function (e) {
        $(this).removeClass('animate-enter');
        animating = false;
        puede= false;
    }));


};

animateLeave = function () {

    $('.list').addClass('hidden');
    animating = false;
    puede = true;
    // if (animating) { return; }
    // animating = true;
    // $('.item').addClass('animate-leave');
    // $('.item').one(ANIMATION_END, debouncer(function (e) {
    //     $('.list').addClass('hidden');
    //     $(this).removeClass('animate-leave');
    //     animating = false;
    //     puede = true;
    // }));
}


