import { Downloader } from 'ytdl-mp3';
import pkg from 'qusly-core';
const { Client } = pkg;
import express from "express"
import { unlink, unlinkSync } from "fs"

async function main() {
  const app = express()
  const port = 3000

  app.post('/upload/:id', async (req, res) => {
    let name
    let client
    try {
      const id = req.params.id

      const downloader = new Downloader({
        getTags: true,
        outputDir: "/home/dd/Documents/GitHub/Code-Playground",
      });
      name = await downloader.downloadSong(`https://www.youtube.com/watch?v=${id}`);
      console.log(name)

      client = new Client({ pool: 2 });

      await client.connect({
        protocol: "sftp",
        secure: true,
        port: 22
      });

      const nameSplit = name.split("/")
      const mp3 = nameSplit[nameSplit.length - 1]

      const folder = "/music/yt_download"

      const folderExists = await client.exists(folder)
      if (!folderExists) {
        await client.createFolder(folder)
      }
      const file = `${folder}/${mp3}`

      const exists = await client.exists(file)
      if (exists) {
        await client.removeFile(file)
      }
      await client.upload(name, file)

      res.send({ ok: true })
    } catch (error) {
      console.log(error)
      res.status(500).send({ ok: false, err: error, errstr: error.toString(), stack: error.stack })
    }
    finally {
      if (name) {
        unlinkSync(name)
      }
      if (client) {
        await client.disconnect();
      }
    }
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

}

main();
