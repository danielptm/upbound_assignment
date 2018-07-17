#!/bin/bash

echo '#####';
echo 'When the build process is complete, see the app on localhost:8081';
echo '#####';
npm install;
cd tuttleFrontEnd;
npm run build;
cd ../node-seed;
npm run start;

