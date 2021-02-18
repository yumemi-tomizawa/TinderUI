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
