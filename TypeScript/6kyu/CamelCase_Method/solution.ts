export function camelCase(str: string): string {
    //Empty strings cannot be CamelCase
    if (str.length == 0){
        return str
    }''

    str = str[0].toUpperCase() + str.slice(1).toLowerCase();

    //remove spacing and make the next letter uppercase
    while(str.indexOf(' ') > 0){
        str = str.slice(0,str.indexOf(' ')) + str[str.indexOf(' ')+1].toUpperCase() + str.slice(str.indexOf(' ')+2);
    };

    return str
};