function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: Record<string, string> = {
        ')': '(',
        '}':'{',
        ']':'[',
    };

    for(const ch of s){
       if(ch in map){
            if(stack.length && stack[stack.length-1]=== map[ch]){
                stack.pop();
            }else{
                return false;
            }
       }else{
        stack.push(ch);
       }
       
    }
    return stack.length === 0;
};