class AnimateTimer {
    canAnimate = true;

    checkAnimate(cb, time) {
        if(this.canAnimate) {
            this.canAnimate = false;
            setTimeout(() => {
                this.canAnimate = true;
            }, time);
            cb();
        }
    }   
}

export default new AnimateTimer();