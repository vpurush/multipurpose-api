#!/bin/sh
echo 'Node version is below. Expected 12.x'
node --version

cd /code
npm ci

/bin/sh