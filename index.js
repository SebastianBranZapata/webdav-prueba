import sfccwebdav from 'sfcc-webdav';

(
    async () => {
        const fileName = "test.xml";
        try {
            await sfccwebdav.fileUpload(fileName, `/Impex/src/${fileName}`);
        } catch (e) {
            console.log(e);
        }
    } 
) ();