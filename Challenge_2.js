const fs = require("fs");
const { getType } = require("./utils");

// read file
fs.readFile("output.txt", "utf8", (err, data) => {
  if (err) {
    console.error("error reading file:", err);
    return;
  }

  // split data by commas
  const objects = data.split(",");

  objects.forEach((object) => {
    // strip spaces from alphanumeric objects
    if (/^[a-zA-Z0-9]+$/.test(object.trim())) {
      object = object.trim();
    }

    // print to console
    console.log(`"${object}" => Type: ${getType(object)}`);
  });
});
