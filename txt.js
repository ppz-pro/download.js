/** download txt file
 * @param {string} content - content of the file
 * @param {string} filename - name of the file
*/
export
const save_txt = (content, filename) => {
  const anchor = document.createElement('a')
  anchor.href = URL.createObjectURL(
    new Blob([content])
  )
  anchor.download = filename
  anchor.click()
}
