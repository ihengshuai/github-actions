set -e

remote=$(git config remote.origin.url)

echo $remote
echo pwd
cd ..
mkdir gh-pages-branch
ls
cd gh-pages-branch
git init
git remote add --fetch origin "$remote"
git checkout -b gh-pages

echo $BUNDLE_DIST

cp -a ./github-actions/$BUNDLE_DIST/* .
git config --global user.email "wsm_1105@163.com"
git config --global user.name "ihengshuai"
git add . -A
git commit -m 'update page'
git push -f origin -q gh-pages
cd ..
rm -rf gh-pages-branch
echo deploy successfully