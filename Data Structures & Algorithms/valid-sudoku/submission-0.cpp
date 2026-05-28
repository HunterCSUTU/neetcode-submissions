class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        vector<unordered_set<char>> row(9);
        vector<unordered_set<char>> col(9);
        vector<unordered_set<char>> sub(9);

        for (int r=0; r <= 8; r++) {
            for (int c = 0; c <= 8; c++) {
                if (board[r][c] == '.') continue;
                if (!(board[r][c] >= '1' && board[r][c] <= '9')) return false;


                if (row[r].find(board[r][c]) != row[r].end()) return false;
                row[r].insert(board[r][c]);
                
                if (col[c].find(board[r][c]) != col[c].end()) return false;
                col[c].insert(board[r][c]);

                int subGridNum = (r/3)*3 + (c/3);
                if (sub[subGridNum].find(board[r][c]) != sub[subGridNum].end()) return false;
                sub[subGridNum].insert(board[r][c]);
            }
        }

        return true;
    }
};
