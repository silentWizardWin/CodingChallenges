const fs = require("fs");
const {
  getRandomInt,
  getRandomAlphaString,
  getRandomRealNumber,
  getRandomInteger,
  getRandomAlphanumericString,
} = require("./utils");

// Timer start
console.time('executionTime');

const OUTPUT_FILE = "output.txt";
const FILE_SIZE = 1 * 1024 * 1024; // file size = 1MB

const generateRandomObjects = () => {
  let data = "";
  while (Buffer.byteLength(data, "utf8") < FILE_SIZE) {
    data += `${getRandomAlphaString(
      getRandomInt(5, 15)
    )},${getRandomRealNumber()},${getRandomInteger()},${getRandomAlphanumericString(
      getRandomInt(5, 15)
    )},`;
  }
  return data.slice(0, FILE_SIZE);
};

// generate 10 files
for (let i = 1; i <= 10; i++) {
  fs.writeFileSync(`output${i}.txt`, generateRandomObjects(), "utf8");
  console.log(`${i} MB completed.`);
}

// merge 10 files
let mergedData = "";
for (let i = 1; i <= 10; i++) {
  const filePath = `output${i}.txt`;
  const data = fs.readFileSync(filePath, "utf8");
  mergedData += data + "\n";

  // delete after reading
  fs.unlinkSync(filePath);
}

// write merged data into one file
fs.writeFileSync(OUTPUT_FILE, mergedData, "utf8");

// Timer end
console.timeEnd('executionTime');
