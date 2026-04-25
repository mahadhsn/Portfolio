An unbeatable Tic-Tac-Toe AI built in Java using the minimax algorithm. The AI plays perfectly — it will never lose. At best, you can force a draw.

## How minimax works

Minimax is a decision-making algorithm for two-player zero-sum games. The AI looks ahead at every possible move, recursively evaluates the resulting game states, and picks the move that maximizes its outcome while assuming the opponent also plays optimally.

For Tic-Tac-Toe, the game tree is small enough that the AI can search the entire space without pruning — every possible game from the current position gets evaluated. This guarantees optimal play.

## Why I built it

I wanted to understand adversarial search from first principles before using any libraries. Implementing minimax by hand forced me to think carefully about how to represent game state, what "optimal" means for each player, and how to handle terminal states (win, loss, draw).

It also reinforced something I keep coming back to: some of the most elegant solutions come from classic algorithms that have been around for decades.
