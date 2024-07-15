const db = require("../db/dbConfig");

const showAllSongs = async () => {
    try {
        const allSongs = await db.any('SELECT * FROM songs');
        return allSongs;
    } catch (error) {
        return error;
    }
};

const getSongById = async (id) => {
    try {
        const songById = await db.one("SELECT * FROM songs WHERE id = $1", [id]);
        return songById;
    } catch (error) {
        return error;
    }
};

const createSong = async (song) => {
    const { songname, album, is_favorite } = song;
    try {
        const newSong = await db.one(
            "INSERT INTO songs (songname, album, is_favorite) VALUES ($1, $2, $3) RETURNING *",
            [songname, album, is_favorite]
        );
        return newSong;
    } catch (error) {
        return error;
    }
};

const deleteSong = async (id) => {
    try {
        const removedSong = await db.one(
            "DELETE FROM songs WHERE id = $1 RETURNING *",
            [id]
        );
        return removedSong;
    } catch (error) {
        return error;
    }
};

const updateSong = async (song, id) => {
    const { songname, album, is_favorite } = song;
    try {
        const updatedSong = await db.one(
            "UPDATE songs SET songname = $1, album = $2, is_favorite = $3 WHERE id = $4 RETURNING *",
            [songname, album, is_favorite, id]
        );
        return updatedSong;
    } catch (error) {
        return error;
    }
};


module.exports = {
    showAllSongs,
    getSongById,
    createSong,
    deleteSong,
    updateSong
}