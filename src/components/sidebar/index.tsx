import FolderIcon from '../../assets/icons/folder.svg'

const files = [
  {
    id: crypto.randomUUID(),
    name: 'File 1',
  },
  {
    id: crypto.randomUUID(),

    name: 'File 2',
  },
  {
    id: crypto.randomUUID(),

    name: 'File 3',
  },
]

export function Sidebar() {
  return (
    <aside id="sidebar-wrapper">
      <div id="">
        <img src={FolderIcon} alt="The icon of a folder" />
        <h3>Explorer</h3>
      </div>

      <ul>
        {files.map((file) => (
          <li key={file.id}>{file.name}</li>
        ))}
      </ul>
    </aside>
  )
}
