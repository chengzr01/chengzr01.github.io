npm run build
cp -r ./build/* ./docs
git add .
git commit -m 'deploy'
git push git@github.com:chengzr01/chengzr01.github.io.git master