#!/usr/bin/env sh

set -e

echo $ACCESS_TOKEN

remote=$(git config remote.origin.url)

echo $remote

mkdir gh-pages-branch
cd gh-pages-branch
git init
githubUrl="https://ihengshuai:${ACCESS_TOKEN}@github.com/ihengshuai/github-actions.git"
git remote add --fetch origin "$remote"
git checkout -b gh-pages

echo $BUNDLE_DIST

cp -a ../$BUNDLE_DIST/* .
git config --global user.email "wsm_1105@163.com"
git config --global user.name "ihengshuai"
git add . -A
git commit -m 'update page'
# git push -f origin -q gh-pages
git push -f $githubUrl -q gh-pages
cd ..
rm -rf gh-pages-branch
echo deploy successfully