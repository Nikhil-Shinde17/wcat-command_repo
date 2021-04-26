let fs = require('fs');

//input
let input = process.argv.slice(2);

let options = [];
let filePath = [];

// to extract options and file path from the input 
for(let i=0;i<input.length;i++)
{
    if(input[i] == '-s' || input[i] == '-b' || input[i] == '-n')
    {
     options.push(input[i]);
    }
    else{
        filePath.push(input[i]);
    }
}

// check that all file path exists
for(let i=0;i<filePath.length;i++)
{
    let eon = fs.existsSync(filePath[i]);
    if(eon==false)
    {
        console.log("file path ",filePath[i]," doesn't exists. Kindly check path");
        return ;
    }
}

// to read content from file path
let totalContent = "";
for(let i=0;i<filePath.length;i++)
{
    let current = fs.readFileSync(filePath[i],"utf-8");
    //after every file's content -> next file content should come in next line.
    totalContent += current + "\r\n";
}
// console.log(totalContent);



// '\r' 
// It is the escape sequence for ‘Carriage Return’. 
// It moves the cursor to the beginning of the line. (same line)
// the “\r” was used to indicate “end of line” in files. This is in contrast to Unix 
// (of which Linux is one variant) computers which use just “\n” and Microsoft Windows 
// which uses both, “\r\n”. The differences in how the end of a line is notated has caused 
// endless amounts of bugs, work and frustrationm for all of the world’s programmers.


// -s option inplement -> remove empty line break
let isSoption = options.includes('-s');
console.log(isSoption);
if(isSoption == true)
{
    // split on the basis of linee break
     let contentArr = totalContent.split("\r\n");
    // console.log(contentArr);
// remove
     let tempArr = [];
       for(let i=0;i<contentArr.length;i++)
       {
           //identify and remove empty line break
           if(contentArr[i] !== "")
           {
               tempArr.push(contentArr[i]);
           }
       }
     //console.log(tempArr);
   totalContent = tempArr.join('\r\n');
}
//console.log(totalContent);



// -n implement -> to put a number in every line

let isN = options.includes('-n');
let isB = options.includes('-b');

let finalOption;
if(isN == true)
{
    if(isB == true)
    {
   // the option that come first -> that would be the final
   let indxB = options.indexOf("-b");
   let indxN = options.indexOf("-n");

   finalOption = (indxB < indxN) ? "-b" : "-n";

    }
    else{
        finalOption = '-n';
    }
}
else if(isB == true)
{
    finalOption = "-b";
}

if(finalOption == "-n")
{
    let count = 1;
    let contentArr = totalContent.split("\r\n");
    for(let i=0;i<contentArr.length;i++)
    {
           contentArr[i] = count  + ". " + contentArr[i];
           count++;
    }
    totalContent = contentArr.join("\r\n");
    // console.log(contentArr);
}

// OPTION -b -> non empty line numbering add



if(finalOption == "-b")
{
    let contentArr = totalContent.split("\r\n");
    console.log(totalContent);
    let count = 1;
    for(let i=0;i<contentArr.length;i++)
    {
        if(contentArr[i] != "")
        {
            let currC = count + ". " + contentArr[i];
            contentArr[i] = currC;
          count++;
        }
    }
    totalContent = contentArr.join("\r\n");
}
console.log(totalContent);
