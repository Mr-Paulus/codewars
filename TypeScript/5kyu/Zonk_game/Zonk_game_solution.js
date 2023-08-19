"use strict";
exports.__esModule = true;
exports.getScore = void 0;
function getScore(dice) {
    function CheckAmount(array, dice) {
        return array.filter(function (dice) { return dice === 2; }).length;
    }
    ;
    function ThreePair(array) {
        if (array.length == 6) {
            if (array[0] == array[1] && array[2] == array[3] && array[4] == array[5]) {
                return true;
            }
        }
        ;
        return false;
    }
    ;
    var SortedDice = dice.sort(function (n1, n2) { return n1 - n2; });
    var Score = 0;
    var Straight = [1, 2, 3, 4, 5, 6];
    if (SortedDice == Straight) {
        Score += 1000;
    }
    else if (ThreePair(SortedDice)) {
        Score += 750;
    }
    else {
        //Add while loop to desolve the dice and add score
    }
    ;
    return Score;
}
exports.getScore = getScore;
;
