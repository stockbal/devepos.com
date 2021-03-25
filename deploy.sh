#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'devepos.com' > CNAME

git init -b gh-pages
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/stockbal/stockbal.github.io.git
git push -f origin gh-pages

cd -