cd /home/ubuntu/app/ &&
git pull &&
yarn install --production=false &&
git apply migrate.patch &&
yarn build &&
yarn m:run &&
git reset --hard HEAD &&
docker build . -t jay/node-web-app &&
docker kill app &&
docker rm app &&
docker run --name app --network=host -p 3000:3000 -d jay/node-web-app &&
echo 'OK!'