// word break
#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

bool wordBreak(string s, vector<string>& wordDict) {
    unordered_set<string> dict(wordDict.begin(), wordDict.end());
    vector<bool> dp(s.length() + 1, false);
    dp[0] = true;

    for (int i = 1; i <= s.length(); i++) {
        for (int j = 0; j < i; j++) {
            if (dp[j] && dict.count(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length()];
}

int main() {
    string s = "leetcode";
    vector<string> dict = {"leet", "code"};
    cout << (wordBreak(s, dict) ? "Can be segmented" : "Cannot be segmented") << endl;
}

