function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    
    while(left < right){
        let middle = Math.floor((left + right)/2);
        if(nums[middle]>target){
            right = middle;
        }
        else if(nums[middle]<target){
            left = middle + 1;
        }
        else return middle;
    }
    if (nums[left]>=target){return left;}
    else{ return right+1;}

    
};