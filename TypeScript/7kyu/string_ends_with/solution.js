"use strict";
exports.__esModule = true;
exports.solution = void 0;
function solution(str, ending) {
    var lenstr = str.length;
    var lenending = ending.length;
    if (str == ending) {
        return true;
    }
    else if (lenstr > lenending) {
        if (str.slice(lenstr - lenending) == ending) {
            return true;
        }
    }
    else {
        if (str.slice(lenending - lenstr) == str) {
            return true;
        }
    }
    return false;
}
exports.solution = solution;
