const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Skriv något: ", (word) => {
  console.log("Hej min vän! Du skrev: " + word);
  const revereseWord = word.split("").reverse().join("");
  console.log("Baklänges så blir det: " + revereseWord);

  rl.question("Vill du se const, jag menar konst? (ja/nej): ", (answer) => {
    if (answer.toLowerCase() === "ja") {
      console.log(`

             |       :     . |
             | '  :      '   |
             |  .  |   '  |  |
   .--._ _...:.._ _.--. ,  ' |
  (  ,  \`        \`  ,  )   . |
   '-/              \\-'  |   |
     |  o   /\\   o  |       :|
     \\     _\\/_     / :  '   |
     /'._   ^^   _.;___      |
   /\`    \`""""""\`      \`\\=   |
 /\`                     /=  .|
;             '--,-----'=    |
|                 \`\\  |    . |
\\                   \\___ :   |
/'.                     \`\\=  |
\\_/\`--......_            /=  |
            |\`-.        /= : |
            | : \`-.__ /\` .   |
      `);
    }

    rl.close();
  });
});
