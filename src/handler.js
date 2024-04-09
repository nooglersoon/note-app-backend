const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title, tags, body, id, createdAt, updatedAt,
  };

  // To add the new note to notes stack
  notes.push(newNote);

  // To check wheter the newNotes has been created
  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });
  response.code(500);
  return response;
};

const getNotesHandler = (request, h) => {
  const response = h.response({
    status: 'success',
    message: 'Daftar semua catatan',
    data: {
      notes,
    },
  });
  response.code(200);
  return response;
};

const getNoteByIdHandler = (request, h) => {
  const { id } = request.params;
  const note = notes.filter((n) => n.id === id)[0];

  if (note) {
    const response = h.response({
      status: 'success',
      message: `Catatan dengan id ${id}`,
      data: {
        note
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan tidak ditemukan',
  });

  response.code(404);
  return response;

}

module.exports = { addNoteHandler, getNotesHandler, getNoteByIdHandler };
