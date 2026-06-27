# 13king-site

大阪公立大学前エリアにあるシーシャBAR「13king」のランディングページです。

黒基調と大理石のような質感をベースに、Instagram映えする写真、VIP感、入りやすさが伝わる構成にしています。

## サイト内容

- ヒーローセクション
- 店舗の雰囲気紹介
- 高級感を補強するMoodセクション
- カラオケ、ダーツ、シーシャ、VIPルームの紹介
- オーナーメッセージ
- 流れる写真ギャラリー
- ドリンクメニュー
- 料金案内
- Googleマップ埋め込み
- Instagram DMへの導線

## 技術構成

フレームワークは使わず、静的なHTML/CSS/JavaScriptで構成しています。

- `index.html`: LP本体
- `styles.css`: デザイン、レスポンシブ、アニメーション
- `script.js`: ヘッダーのスクロール状態、画像フォールバック
- `assets/images/`: 店舗写真、オーナー画像など
- `ai-dlc/`: AI-DLCに沿った要件、設計、実装、検証ログ

## 画像ファイル

写真は `assets/images/` に置きます。

主に使う画像:

- `hero.jpg`: ファーストビューのメイン写真
- `vip-room.jpg`: VIPルーム写真
- `drinks.jpg`: ドリンク、カウンター写真
- `shisha.jpg`: シーシャ写真
- `darts.jpg`: ダーツ写真
- `owner.jpg`: AI生成したオーナー画像

詳細は [assets/images/README.md](assets/images/README.md) を確認してください。

## ローカルで確認する方法

`index.html` をブラウザで開くと確認できます。

または、簡易サーバーを使う場合:

```bash
python3 -m http.server 8000
```

その後、ブラウザで以下を開きます。

```text
http://localhost:8000
```

## GitHub Pagesで公開する方法

このサイトは `index.html` がリポジトリ直下にあるため、GitHub Pagesでは `main` ブランチの `/(root)` から公開できます。

1. GitHubで `13king-site` リポジトリを開く
2. 上部メニューの `Settings` を開く
3. 左メニューの `Pages` を開く
4. `Build and deployment` の `Source` で `Deploy from a branch` を選ぶ
5. `Branch` で `main` を選ぶ
6. フォルダは `/(root)` を選ぶ
7. `Save` を押す
8. 数分待つ
9. `Pages` 画面に表示されるURLから公開ページを確認する

公開URLは通常、以下の形になります。

```text
https://<GitHubユーザー名>.github.io/13king-site/
```

反映には数分かかることがあります。

## 更新するとき

ファイルを編集したあと、GitHubにpushするとGitHub Pages側にも反映されます。

```bash
git add .
git commit -m "Update site"
git push
```

## 注意

お酒・シーシャは20歳以上の方のみ利用できるため、LP内にも年齢確認に関する注意書きを入れています。

