### Written in JavaScript. Use Node.js to run.

## Challenge A verification
Step 1 : Run `Challenge_1.js` to generate the objects file

`node Challenge_1.js`

![Proof](images/challengeA.png)

## Challenge B verification
Step 2 : Run `Challenge_2.js` to print objects in the console

`node Challenge_2.js`

![Proof](images/challengeB.png)

## Challenge C verification
Run and deploy into Docker container (Docker should be installed.)

* Start Docker => `sudo systemctl start docker`

* Build image => `docker build -t challenge-c .`
![Proof](images/dockerBuild.png)

* Run image => `docker run -v $(pwd)/output:/app/output challenge-c`
* Read output => `cat ./output/output.txt`
![Proof](images/dockerRun.png)