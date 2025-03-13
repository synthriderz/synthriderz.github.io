# Create Filetree

Use this tool to create a filetree in markdown:
md-file-tree: https://github.com/michalbe/md-file-tree
(alternatively: https://github.com/mistermicheels/markdown-notes-tree)

## Usage

### WSL (recommended)

note: it will take 2–5min to generate the file tree when lots of custom songs are present

````bash
cd "/mnt/c/Program Files (x86)/Steam/steamapps/common/SynthRiders"
npx md-file-tree --emoji >> filetree_streamvr.md
````

### PowerShell

note:

- it will take 2–5min to generate the file tree when lots of custom songs are present
- file may be saved in the wrong encoding, use notepad++ to convert it to UTF-8

```powershell

cd "C:\Program Files (x86)\Steam\steamapps\common\SynthRiders"
npm install -g md-file-tree
md-file-tree --emoji >> filetree_streamvr.md
```

## create all README.md files for the filetree

clean up the `filetree_streamvr.md` file and create all `README.md` files:

```bash
grep -oP '(?<=\()\S+\.md(?=\))' filetree_streamvr.md | while read -r file; do
    mkdir -p "$(dirname "$file")"
    touch "$file"
done
```
