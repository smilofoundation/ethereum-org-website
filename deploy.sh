#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'www.smilo.foundation' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:smilofoundation/smilo.foundation-website.git master:gh-pages

cd -
