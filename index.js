// @ts-check

/** download txt file
 * @param {Blob} content - content of the file
 * @param {string} filename - name of the file
*/
function save(content, filename) {
  const anchor = document.createElement('a')
  anchor.href = URL.createObjectURL(content)
  anchor.download = filename
  anchor.click()
}

/** download txt file
 * @param {string} content - content of the file
 * @param {string} filename - name of the file
*/
export
function save_txt (content, filename) {
  save(new Blob([content]), filename)
}

class Error_csv extends Error {
  constructor() {
    super('invalid records or columns')
  }
}

/** download csv file
 * @template Record
 * @param {{
 *    columns?: string[],
 *    records: Record[][],
 *    filename: string,
 *    skip_validate?: boolean,
 * }} options
 */
export
function save_csv({
  columns,
  records,
  filename,
  skip_validate = false,
}) {
  if (!skip_validate) { // if: 不跳过校验
    const length = columns?.length ?? records[0]?.length
    if (length !== undefined) // if: 有数据
      for (const r of records)
        if (r.length !== length)
          throw new Error_csv()
  }

  /** Item
   * + CSV 中的字段们之间用逗号隔开
   * + 字段里如果有逗号，则须用双引号包起字段
   * + 如果字段内部有双引号（与“包起字段的双引号”冲突），须用在“出现在字段中的双引号”前，加一个双引号
   */
  const Item = raw => {
    if (typeof raw !== 'string')
      raw = String(raw)
    return '"' + raw.replaceAll('"', '""') + '"'
  }

  const list = []
  if (columns)
    list.push(columns.map(Item).join(','))
  list.push(...
    records.map(
      record => record.map(Item).join(',')
    )
  )
  save_txt(list.join('\n'), filename)
}
