#!/bin/bash

echo '#####';
echo 'When the build process is complete, see the app on localhost:8081';
echo '#####';

cd tuttleFrontEnd;
npm install;
npm run build;
cd ../node-seed;
npm install;
npm run start;

