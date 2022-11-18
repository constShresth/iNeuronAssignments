contract assignment22{

    uint[] nums = [1,2,3];
    // uint[] nums = [1,2,3,4,5,6];
    // uint[] nums = [1];

    function remove(uint index) public {
        delete nums[index];
        for (uint i = index ; i<nums.length-1; i++) 
        {
        nums[i] = nums[i+1];
        }
        nums.pop();
    }

    function viewArray() public view returns(uint[] memory){
        return nums;
    }

}
