# BLOCK FRONTIER

Minecraftの画像・音源・名称・コードを使用せずに制作した、オリジナルのブラウザ向け3Dボクセル・サンドボックスゲームです。

## 遊び方

### PC
- WASD / 矢印: 移動
- マウス: 視点
- 左クリック: ブロックを壊す
- 右クリック: ブロックを置く
- Space: ジャンプ
- 1〜6: ブロック選択
- Shift: 少し速く移動

### iPhone / iPad
- 左スティック: 移動
- 3D画面をドラッグ: 視点
- 右側ボタン: 壊す / 置く / ジャンプ
- 下部ホットバー: ブロック選択

## 保存
ブロック配置、破壊、プレイヤー位置、選択ブロックは localStorage に自動保存されます。

## GitHub Pages
このフォルダの中身をそのままリポジトリ直下へアップロードしてください。公開起点は `index.html` です。

Settings → Pages → Deploy from a branch → `main` / `(root)` を選択すると公開できます。

## 技術
- HTML / CSS / Vanilla JavaScript
- WebGL（外部3Dライブラリなし）
- Web Audio API
- localStorage
- PWA (manifest + Service Worker)

## ライセンス / 権利
このアプリ本体は独自実装です。Minecraft/Mojang/Microsoftの素材・ロゴ・ゲームコードは含みません。
