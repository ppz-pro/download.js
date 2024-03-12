export
function export_txt(content: string, filename: string)

interface Opts_csv {
  columns: string[]
  records: any[][]
  filename: string
  skip_validate?: boolean
}

export
function export_csv(opts: Opts_csv)
