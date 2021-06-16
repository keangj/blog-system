cd /home/ubuntu/app/ &&
git pull &&
yarn install --production=false &&
yarn build &&
git apply migrate.patch;
yarn compile &&
yarn m:run &&
git reset --hard HEAD &&
docker build . -t jay/node-web-app &&
docker kill app &&
docker rm app &&
docker run --name app --network=host -p 3000:3000 -d jay/node-web-app &&
echo 'OK!'