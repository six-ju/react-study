let timerId = null;
const throttle = (func, delay) => {
    return function (...args) {
        if (timerId) {
            return;
        }
        func.apply(this, args);
        timerId = setTimeout(() => {
            timerId = null;
        }, delay);
    };
};
export { throttle };
