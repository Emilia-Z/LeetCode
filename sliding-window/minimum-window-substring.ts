function minWindow(s: string, t: string): string {
    let need = new Map<string, number>();
    let window = new Map<string, number>();
    for(const ch of t){
        need.set(ch, (need.get(ch) || 0) + 1);
    }
    let left = 0;
    let right = 0;
    let valid = 0;

    let start = 0;
    let minLen = Infinity;

    while(right < s.length){
        const c = s[right];
        right++;
        if(need.has(c)){
            window.set(c, (window.get(c) || 0 ) +1);
            if(window.get(c)===need.get(c)){
                valid++;
            }
        }
        
        while(valid===need.size){
            if(right-left < minLen){
                start = left;
                minLen = right-left;
            }

            const d = s[left];
            left++;

            if(need.has(d)){
                if(window.get(d)===need.get(d)){
                    valid--;
                }
                window.set(d, window.get(d)-1);
            }
        }
    }
    return minLen === Infinity? "":s.substring(start, start+minLen);
};