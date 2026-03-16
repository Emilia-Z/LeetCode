function minSubArrayLen(target: number, nums: number[]): number {
    let i = 0;
    let sublength = Infinity;
    let sum = 0;

    for(let j = 0; j<nums.length; j++){
        sum += nums[j];
        
        while(sum>=target){
            sublength = Math.min(sublength, j-i+1);
            sum = sum - nums[i];
            i++;
            
        }
    }
    return sublength === Infinity? 0: min;
};