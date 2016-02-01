// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 4.0.0)
    var X = 0;
    var Y = 0;
    var moveCount = 0;
    
    do {
        // Move the piece 2 right 1 down
        if(X < A && Y < B && A > B) {
            X = X + 2;
            Y = Y + 1;
            // Move recorded
            moveCount++;   
        }
        
        // 2 down 1 right
        if (X < A && Y < B && A < B) {
            X = X + 1;
            Y = Y + 2;
            //Moved
            moveCount++;
        }
        
        // 2 down 1 left
        if (X > A && Y < B && A < B) {
            X = X + 2;
            Y = Y - 1;
            //Moved
            moveCount++;
        }

        // 2 left 1 up
        if (X > A && Y < B && A > B) {
            X = X - 2;
            Y = Y - 1;
            //Moved
            moveCount++;
        }
        
        // Break at excessive move count
        if (moveCount === 100000001) {
            return -2;
        }
    
    // Satisfy the condition of landing on requested coordinates    
    } while (A == X && B == Y);
    
    // return min required moves
    return moveCount;
}