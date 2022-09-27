# hello

>sdfa....

## 测试...

```sh
#!/usr/bin/env sh

set -e

mkdir gh-pages-branch
cd gh-pages-branch

git init
githubUrl="https://${OWNER}:${ACCESS_TOKEN}@github.com/${REPOSITORY}"
git checkout -b gh-pages

echo $BUNDLE_DIST

cp -a ../$BUNDLE_DIST/* .
git config --global user.email "wsm_1105@163.com"
git config --global user.name $OWNER
git add . -A
git commit -m 'update page'
# git push -f origin -q gh-pages
git push -f $githubUrl -q gh-pages
cd ..
rm -rf gh-pages-branch
echo deploy successfully
```

![](https://qooapp-images-cors-beta.s3.ap-southeast-1.amazonaws.com/file/2022/9/27/ace74d0b60cc4e38b172ba6ea56821ae.gif)