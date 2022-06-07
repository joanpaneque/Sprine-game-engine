export var waiting = false

export function wait(secs) {
    waiting = true
    setTimeout(function(){
        waiting = false
    },secs * 1000)
}