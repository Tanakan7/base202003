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


## TODO

- [x] 画像コピー
    - [x] html, css, js上から操作
    - [x] staticファイルへのハッシュ付与
        - [x] css
            - どうせあまり変更しない想定のため、ハッシュ用変数手動で変更
        - [x] js
        - [x] html
            - あまり追加しない想定のため手動で付与
    - [x] 画像のパス管理
        - [x] js
        - [x] css
        - htmlは手動で

- [x] eslintのdefinePluginの変数宣言なしエラーを無視させる
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
