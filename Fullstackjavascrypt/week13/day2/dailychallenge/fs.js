const fs = require("fs");

const calculatePosition = () => {
  const file = fs.readFileSync("leftandright.txt", "utf-8");
  let position = 0;
  let minonereached = false;
  for (let i = 0; i < file.length; i++) {
    if (position === -1 && !minonereached) {
      console.log(`reached position -1 at character number${i}`);
      minonereached = true;
    }
    position += file[i] === ">" ? 1 : -1;
    // console.log(position);
  }
  console.log(`Position in the end: ${position}`);
};

calculatePosition();