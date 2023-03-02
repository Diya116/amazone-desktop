#include <bits/stdc++.h>
using namespace std;
class arrayequal{
    public:
    int check(vector<int>A,vector<int>B)
    {
        if(A.size()!=B.size()) 
        return 0;

        sort(A.begin(),A.end(),greater<int>());
        
        sort(B.begin(),B.end(),greater<int>());
        for(auto i=0;i<A.size();i++)
        {
            if(A[i]!=B[i])
              return 0;
        }
        return 1;
    }
};
int main()
{ 
    int check;
    vector<int> A {1,4,5,7,8};
     vector<int>B {1,4,5,7,8};
    
    arrayequal first;
   check=first.check(A,B);
    if(check)
     cout<<"array are equal";
    else
    cout<<"array are not equal";
}
