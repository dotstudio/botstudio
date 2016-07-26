##dotstudio内のbotを作る部活

## 概要

* とりあえずgitter bot
* Node.js v6.0.0 以上を想定
* gitterのAPIは https://developer.gitter.im/docs/welcome を参照

## インストール

```
$ git clone git@github.com:dotstudio/botstudio.git
$ cd botstudio
$ npm i
```

* 7/26 今の所依存モジュールはnode-gitterのみ

## Gitterトークンの取得

https://developer.gitter.im/apps で取得できます。

![](https://i.gyazo.com/95b149da19616c30f3dc208ad0f30b20.png)

## BOTの起動

```
$ TOKEN=xxxxxxx node app
```

## コマンドの作り方 v1

ぴんぽんの例 

![](https://i.gyazo.com/d1d2b5fba4a5aa42c36ce63a3fdf72d4.png)

### 1. `scriptsフォルダ`内に`コマンド名.js`を作成

```scripts/ping.js
'use strict'

module.exports = (core) => {
    core.gitter.rooms.join(core.ROOM_NAME)
    .then((room) => {
        //コマンドが送られてきたら処理を書くところ
        room.send('pong! :facepunch:'); // pongを書く
    });
}
```

### 2. `app.js`で読み込み箇所を記載

//TODO 自動読み込みしたい

```app.js

const COMMANDS = {
    ping: require('./scripts/ping') //読み込み
};

```

### 3. プルリク or 権限がある人はプッシュしてください

https://gitter.im/dotstudio/botstudio で教えてください！