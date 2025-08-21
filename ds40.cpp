//  Character and bool string OR stack 
#include <iostream>
#include <stack>
using namespace std;

bool isBalanced(string expr) {
    stack<char> s;
    for(char ch : expr) {
        if(ch == '(' || ch == '{' || ch == '[')
            s.push(ch);
        else {
            if(s.empty()) return false;
            char top = s.top(); s.pop();
            if((ch == ')' && top != '(') || 
               (ch == '}' && top != '{') || 
               (ch == ']' && top != '[')) return false;
        }
    }
    return s.empty();
}

int main() {
    string input = "{[()]}";
    cout << (isBalanced(input) ? "Balanced" : "Not Balanced");
}

