const Photos = require('googlephotos');



async function main() {
    if (!process.argv[2]) {
        console.log('usage: node list_albums.js <access_token>')
        process.exit(1)
    }
    const accessToken = process.argv[2];
    const photos = new Photos(accessToken);

    const response = await photos.albums.list(50);
    console.log('response', response)
}

main().catch(console.log)