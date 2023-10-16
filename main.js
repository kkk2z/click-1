// スコアを格納する変数
let score = 0;

// ボタン要素とスコア表示要素を取得
const clickBtn = document.getElementById('clickBtn');
const scoreDisplay = document.getElementById('score');

// ボタンがクリックされたときの処理
clickBtn.addEventListener('click', function () {
  // スコアを1増やす
  score++;
  // スコア表示を更新
  scoreDisplay.textContent = score;
});
