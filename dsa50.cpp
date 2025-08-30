// longest conservative 
#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

int longestConsecutive(vector<int>& nums) {
    unordered_set<int> s(nums.begin(), nums.end());
    int longest = 0;

    for (int num : s) {
        if (!s.count(num - 1)) {
            int current = num;
            int streak = 1;

            while (s.count(current + 1)) {
                current++;
                streak++;
            }
            longest = max(longest, streak);
        }
    }
    return longest;
}

int main() {
    vector<int> nums = {100, 4, 200, 1, 3, 2};
    cout << "Longest Consecutive Sequence: " << longestConsecutive(nums) << endl;
}
