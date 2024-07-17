const express = require("express");
const { showAllSongs, getSongById, createSong, deleteSong, updateSong } = require("../query/songquery");

const songController = express.Router();

songController.get("/", async (req, res) => {
    const allSongs = await showAllSongs();
    if (allSongs[0]) {
        res.status(200).json(allSongs);
    } else {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

songController.get("/:id", async (req, res) => {
    const { id } = req.params;
    const songById = await getSongById(id);
    if (songById) { 
        res.status(200).json(songById);
    } else {
        res.status(404).json({ error: "Song not found" });
    }
});

songController.post("/", async (req, res) => {
    const newSong = await createSong(req.body);
    res.status(201).json(newSong); 
});

songController.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    if (deletedSong) { 
        res.status(200).json({ message: "Successfully deleted song" });
    } else {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

songController.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);

    if (updatedSong) { 
        res.status(200).json(updatedSong);
    } else {
        res.status(404).json({ error: "Invalid ID" });
    }
});

module.exports = songController; 