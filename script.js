let inps = [...document.querySelectorAll('input')];
let needpiece = [0, 50, 100, 200, 300];
let nullObj = {};
let n;
addEventListener('load', listener);
addEventListener('click', listener);
addEventListener('keyup', listener);
let ps = [nullObj, two, three, four, five];
function listener() {
  n = Array(5)
    .fill(0)
    .map((v, i) => {
      if (star.value <= 0 || i + 1 <= star.value) return 0;
      return needpiece.slice(star.value, i + 1).reduce((a, b) => a + b);
    });
  ps.forEach((v, i) => {
    let num = piece.value - 0;
    if (isNaN(num)) num = 0;
    v.innerText = n[i] - num;
  });
  [nullObj, retwo, rethree, refour, refive].forEach((v, i) => {
    if ([piece.value, i, mpp.value, k.value].some((v) => v == '')) return;
    v.innerText = keisan(piece.value - 0, i, mpp.value - 0, k.value - 0);
  });
}
function keisan(piece, lv, mpp, kk) {
  if ([lv, mpp, kk].some((v) => isNaN(v))) return;
  if (isNaN(piece)) piece = 0;
  if (n[lv] == 0) return 0;
  let mgm = 0;
  let gag = 0;
  while (true) {
    mgm++;
    gag++;
    if (gag === mpp) {
      gag = 0;
      piece++;
      kk--;
    }
    if (kk <= 0) {
      kk = 25;
      if (mpp != 5) mpp++;
    }
    if (n[lv] <= piece) {
      var amari = n[lv] - piece;
      return mgm + (amari < -1 ? 1 : 0);
      break;
    }
  }
}
