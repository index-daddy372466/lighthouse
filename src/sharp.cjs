const sharp = require('sharp');
const arg = process.argv[process.argv.length-2]
const dest = process.argv[process.argv.length-1]
const file = require('path').resolve(__dirname,'assets/media/backgrounds/'+arg)
let filetypes = ['JPEG', 'PNG', 'WebP', 'GIF', 'AVIF' ].map(x=>x.toLowerCase());

// convert from avif to png
function convertImage(file,dest=''){
  dest = dest.toLowerCase();
  // capture extension
  let lastPeriod = file.lastIndexOf('.');
  let ext = file.slice(lastPeriod+1,file.length).toLowerCase();
  let output = file.split`/`[file.split`/`.length - 1].split`.`[0]
  console.log(output)

  if(ext !== dest && (filetypes.includes(ext) && filetypes.includes(dest))){
    sharp(file)
    .resize(200,175)
    .toFile(require('path').resolve(__dirname,'assets/media/backgrounds/'+output+"."+dest), (err, info) => {
      return err ? console.error(err) : console.log(info);
     })
  } else {
    console.log("No destination extension!")
  }
}
// test
convertImage(file,dest)
