# age_next_layout
 
 ### Follow the rules when you git
  1. feat: 新功能 (feature)
  2. fix: 修補bug
  3. doc: 文件 (documentation)
  4. style: 樣式 (不影響程式碼運行之異動)
  5. refactor: 重構 (未新增功能或修補bug之程式碼異動)
  6. test: 增加測試
  7. chore: 構建過程或輔助工具之異動


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
# or
yarn dev
```

## context

### `ad.js`

管理全站gpt廣告欄位、處理換頁重新加載廣告

|key|description|default|type|
|:---|---|---|---|
|isTransitioning|是否正在切換router<br>(廣告欄位接到false重新初始化)|false|boolean|
|adlist|站內所需廣告<br>格式:<br>'adid': { sizes: [], slot: '' }| |object|
