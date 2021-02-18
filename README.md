# Tinder UI (技術テスト)

- Web フロントエンドエンジニアインターン by Eureka, Inc.

## Requirements

Tinder のカード UI のような UI を React で実装してください。

- スマホのブラウザ環境で動作すること
- カード数は任意とする
  カードにはユーザーの画像、ニックネーム、年齢を表示する（画像、データは任意）
- カード下の左にスキップボタン、右にいいね！ボタンを表示する
- スキップボタンをタップしたときはカードが左に流れるアニメーションが実行され、次のカードが表示される
- いいね！ボタンをタップしたときはカードが右に流れるアニメーションが実行され、次のカードが表示される
- すべてのカードを仕分けできたら empty 画面が表示される

## Advanced Requirements

- テストを書く
- スワイプでカードを仕分けできる
- カードの下部をタップすると詳細画面が表示される
- API サーバーと連携する

## Planning

① UI design

![Tinder-UI-Picture](./img/tinder-ui.png)

[figma で見てみる](https://www.figma.com/file/CviNRhuLA4WSgGwaXELWEZ/Untitled?node-id=0%3A1)

② Component

- Phone (写真とボタンを覆うコンポーネント)
- TinderCards (一枚一枚の写真を展開(map)するコンポーネント）
- Card (写真のコンポーネント)
- Botton (ボタンのコンポーネント)

③ 使用予定の Library

- [Material-UI](https://material-ui.com/) - Button の Icon
- [react-tinder-card](https://www.npmjs.com/package/react-tinder-card) - Swipe 機能

## 難しかったこと

ユーザーが Skip と Like のボタンを交互に押した時、アニメーションが上手くいかなかった。

![tinderUI-error](./img/tinderUI-error.mov)

### 考えられる問題

もしかしたどこか知らないところで、コンポーネントが unmount されて、<Transition Group>の exit animation がトリガーされてしまっているかもしれない。

### 解決するためにしたこと

useEffect()を使い, いつ TinderCards コンポーネントが mount、unmount されるかをテストしてみた。

```javascript
useEffect(() => {
	console.log('Mounted');
	return () => {
		console.log('Unmounted');
	};
});
```

### 問題の解決

useEffect()のおかげで Skip と Like ボタンを交互に押した時、setSwipeDirection()で swipeDirection の state が変わり、React が TinderCards コンポーネントを rerender をしているのがわかった。要は、以下の状況が起きていた。

1. 左のボタンを押した後、右のボタンを押す。

2. setSwipeDirection()が left->right へと state を変更されるので React が TinderCards コンポーネントを rerender する。

3. 元々あった TinderCards が unmount されるため<Transition Group>の exit animation がトリガーされる。この時、<CSSTransition>の className は left のままのため、左側に流れるアニメーションが実行されてしまう。

なので毎回、カードを取り除いた後、このように setSwipeDirection('')を実行し、swipeDirection をリセットする。　そうすることでまた state が変わり rerender が実行され<CSSTransition>の className は' 'になる。当然''という名前のアニメショーンは書いていない。結果、left->right と変更した時、同じように<Transition Group>の exit animation がトリガーされるが、<CSSTransition>の className は''のためアニメーションは実行されずに済むので上手くいく。

![tinderUI-error](./img/tinderUI-success.mov)
