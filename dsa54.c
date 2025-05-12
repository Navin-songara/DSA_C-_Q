#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX 100

int graph[MAX][MAX];
bool visited[MAX], recStack[MAX];
int n;

bool isCyclicUtil(int v) {
    if (!visited[v]) {
        visited[v] = true;
        recStack[v] = true;

        for (int i = 0; i < n; i++) {
            if (graph[v][i]) {
                if (!visited[i] && isCyclicUtil(i))
                    return true;
                else if (recStack[i])
                    return true;
            }
        }
    }
    recStack[v] = false;
    return false;
}

bool isCyclic() {
    for (int i = 0; i < n; i++)
        if (isCyclicUtil(i))
            return true;
    return false;
}

int main() {
    n = 4;
    graph[0][1] = 1;
    graph[1][2] = 1;
    graph[2][0] = 1;
    graph[2][3] = 1;

    if (isCyclic())
        printf("Graph contains cycle\n");
    else
        printf("No cycle\n");
    return 0;
}
