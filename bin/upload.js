const Photos = require('googlephotos');



async function main() {
    if (process.argv.length < 5) {
        console.log('usage: node upload.js <access_token> albumId fileName filePath [description]')
        process.exit(1)
    }
    const accessToken = process.argv[2];
    const photos = new Photos(accessToken);

    console.log('accessToken',accessToken)

    const albumId = process.argv[3];
    const fileName = process.argv[4];
    const filePath = process.argv[5];
    const description = process.argv[6] || 'no desc';
    console.log('params:', albumId, fileName, filePath, description);


    const response = await photos.mediaItems.upload(albumId, fileName, filePath, description);

    console.log('response', response)
}

main().catch(console.log)