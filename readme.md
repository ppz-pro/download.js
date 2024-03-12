# @ppzp/export

下载文件

``` bash
npm install @ppzp/export
```

``` js
import { export_txt, export_csv } from '@ppzp/export'

// 下载 .txt 文件
export_txt('文件内容', '文件名.txt')

// 下载 .csv 文件
export_csv({
  filename: `文件名.csv`,
  columns: [`header1`, `header2'`, `header3"`, `header4,`, `,"""'\``], // 可选
  records: [
    [1,2,3,4,5],
    [`value1`, `value2'`, `value3"`, `value4,`, `,"""'\``],
  ],
})
```

## TODO
PPz's CSV org
+ [x] CSV download
+ [ ] CSV 简解
+ [ ] CSV editor - PWA
