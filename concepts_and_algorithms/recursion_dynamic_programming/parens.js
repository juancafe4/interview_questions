function parens(n) {
  if (!n) return "";
  parensUtil(n, 0, 0, "");
}

function parensUtil(n, open, close, str) {
  if (n === close) {
    console.log(str);
    return;
  }

  if (open < n) {
    parensUtil(n, open + 1, close, str + "(");
  }

  if (close < open) {
    parensUtil(n, open, close + 1, str + ")");
  }
}

parens(3);