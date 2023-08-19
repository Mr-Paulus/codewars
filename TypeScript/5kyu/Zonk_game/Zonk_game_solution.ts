export function getScore(dice: number[]): number { 

    function CheckAmount(array: number[], dice:number): number {
      return array.filter(dice => dice === 2).length;
    };
    
    function ThreePair(array:number[]): boolean {
      if (array.length == 6){
        if (array[0] == array[1] && array[2] == array [3] && array[4] == array[5]){
          return true;
        }
      };

      return false;
    };

    let SortedDice:number[] = dice.sort((n1,n2) => n1 - n2);
    let Score:number = 0;
    const Straight:number[] = [1,2,3,4,5,6];

    if (SortedDice == Straight){
      Score += 1000;
    }
    else if (ThreePair(SortedDice)){
      Score += 750;
    }
    else {
      //Add while loop to desolve the dice and add score
    };
    
    
    
    return Score;
};