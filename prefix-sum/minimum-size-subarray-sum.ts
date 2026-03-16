function minSubArrayLen(target: number, nums: number[]): number {
    let i = 0;
    let sublength = 0;
    let sum = 0;
    let min = Infinity;
    for(let j = 0; j<nums.length; j++){
        sum += nums[j];
        sublength += 1;
        while(sum>=target){
            if(sublength<min){
                min = sublength;
            }
            sum = sum - nums[i];
            i++;
            sublength -= 1;
        }
    }
    return min < Infinity? min : 0;
};