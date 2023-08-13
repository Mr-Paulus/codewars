export function solution(str: string, ending: string): boolean {
    let lenstr:number = str.length;
    let lenending:number = ending.length;
    
    if(str == ending){
      return true;
    }
    else if(lenstr > lenending){
      if (str.slice(lenstr - lenending) == ending){
        return true;
      }
    }
    else if(lenstr < lenending){
      if (str.slice(lenending - lenstr) == str){
        return true;
      }
    }

    return false;
}

