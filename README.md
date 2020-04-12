## インストール

※ eslint-gnaviのバージョン固定によってインストールできないときは `--ignore-engines`オプションをつけてください

```sh
yarn install --ignore-engines
```

## コマンド

### 開発

※ 自動リロードの対象は<App />以下
(HTMLは手動リロード)

```sh
yarn dev
```

### ビルド

#### 通常ビルド

```sh
yarn build
```

#### テスト環境

- APIのURLをテスト環境(test-)に向ける

```sh
yarn build:stage
```

#### 本番環境用ビルド

```sh
yarn build:prod
```

## Tree

```
├── README.md
├── config            // webpack設定
│   ├── conf.base.js  // 基本設定
│   ├── conf.dev.js   // ローカル開発時の設定
│   ├── conf.prod.js  // ビルド時の設定
│   ├── conf.path.js  // ビルドコマンド別のパス設定
│   └── mock // 移動or削除予定
│       └── sampleApi.json
├── dist  // 納品ファイル群
├── package.json
└── src
    ├── components
    │   ├── コンポーネントA
    │   └── コンポーネントB
    ├── utils
    ├── common
    ├── css
    ├── img
    ├── index.html
    ├── index.jsx
    ├── App.jsx
    └── index.scss
```

## 実装方針

- React + StyledComponentでのコンポーネント単位で実装
  - JSX記述があれば`.jsx`。その他は`.js`
- Sassは極力使わない


## TODO

- [ ] readme記載
- [ ] jsonサーバー（実装のときでOK


## memo

- webpackへの強依存は避ける
- ビルド時のCSSは.cssファイルでわける。HTMLやJSの中に含めない(キャッシュ狙いのため)
- 各種ファイルのパス管理を実装しているけど、基本的にCDNに配置することはないはず
- ないと思うけどcssでimageのパス切り替えしたいときは下記のどれか
  - cssRewritePluginで出力後のファイル内のパスを書き換え
  - conf.base.jsでビルドモード別に使うindex.scssを変更して、各種別の変数をセットしておく
- 基本はstyled-componentで。sassは極力使わない。style-lintも入れない。
- コミット時のlintはあとで。複数人開発になってきたら入れる。
