const Photos = require('googlephotos');



async function main() {
    if (!process.argv[2]) {
        console.log('usage: node create_albu.js <access_token> <name>')
        process.exit(1)
    }
    const accessToken = process.argv[2];
    const photos = new Photos(accessToken);
    const albumTitle = process.argv[3];

    const response = await photos.albums.create(albumTitle);
    console.log('response', response)
}

main().catch(console.log)