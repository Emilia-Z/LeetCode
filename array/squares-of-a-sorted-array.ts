function sortedSquares(nums: number[]): number[] {
    
    for(let i = 0; i<nums.length; i++){
        nums[i] = nums[i]*nums[i];
    }
    let a = 0;
    let b = nums.length - 1;
    let result = new Array(nums.length);
    let point=nums.length-1;
    while(a<=b){
        
        if(nums[a]>nums[b]){
            result[point]=nums[a];
            a++;
            
        }
        else{
            result[point]=nums[b];
            b--;
        }
        point--;
    }
    return result;
    
};