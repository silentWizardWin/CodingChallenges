Developed in JavaScript. Use Node.js to run.

## Challenge A verification
Step 1 : Run `Challenge_1.js` to generate the objects file

`node Challenge_1.js`

## Challenge B verification
Step 2 : Run `Challenge_2.js` to print objects in the console

`node Challenge_1.js`

## Challenge C verification
Run and deploy into Docker container (Docker should be installed.)

* Build image => `docker build -t challenge-c .`
* Run image => `docker run -v $(pwd)/output:/app/output challenge-c`
* Read output => `cat ./output/output.txt`