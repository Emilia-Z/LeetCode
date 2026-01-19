function climbStairs(n: number): number {
        if(n == 1) return 1;
    if(n == 2) return 2;

    const dp: number[] = [] ;
    dp[1] = 1;
    dp[2] = 2;
    for(let i = 3; i<= n; i++){
        dp[n] = dp[n-1] + dp[n-2];
    }
    return dp[n];

};
