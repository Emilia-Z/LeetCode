function removeElement(nums: number[], val: number): number {
    let slow = 0;
    for(let fast = 0; fast<nums.length; fast++){
        if(nums[fast] != val){
            nums[slow] = nums[fast];
            slow += 1;
        }
    }
    let numLength = slow;
    return slow;
};