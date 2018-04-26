class AnimateTimer {
    canAnimate = true;

    checkAnimate(cb) {
        if(this.canAnimate) {
            this.canAnimate = false;
            setTimeout(() => {
                this.canAnimate = true;
            }, 750);
            cb();
        }
    }   
}

export default new AnimateTimer();