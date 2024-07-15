const express = require("express")

const { showAllSongs, getSongById, createSong,deleteSong,updateSong} = require("../query/songquery")


const songController = express.Router()

songController.get("/", async (req, res) =>{
    const allSongs = await showAllSongs()
    if(allSongs.length !== 0){
        res.status(200).json(allSongs)
    }else{
        res.status(500).json({error: "Internal Server Error"})

    }
})

songController.get("/:id" , async (req,res) => {
    const { id } = req.params
    const songById = await getSongById(id)
    if(allSongs.length !== 0){
        res.status(200).json(songById)
    }else{
        res.status(500).json({error: "Internal Server Error"})
    }
})

songController.post("/",  async (req,res) =>{
    const newSong = await createSong(req.body)
    res.json(newSong)
})

songController.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deletedSong = await deleteSong(id)
    if(deletedSong.id){
        res.status(200).json({ message : "Successful deleted song"})
    }else {
        req.status(500).json({ error : "Internal Server Error"})
    }
})

songController.put("/:id", async (req, res) => {
    const { id } = req.params
    const updatedSong = await updateSong(id, req.body)

    if(updatedSong.id){
        res.status(200).json(updatedSong)
    }else {
        res.status(500).json({ error: "Invalid ID"})
    }
})
module.exports = {
    songController
}