package database

import "gorm.io/gorm"

type Note struct {
	gorm.Model
	Name    string
	Content string
}

type NoteRepository struct {
	db Database
}

func NewNoteRepository(db Database) (*NoteRepository, error) {
	const create string = `
  CREATE TABLE IF NOT EXISTS notes (
		id INTEGER NOT NULL PRIMARY KEY,
		createdAt DATETIME NOT NULL,
		updatedAt DATETIME NOT NULL,
		content TEXT
		title TEXT
  );`

	return &NoteRepository{db}, nil
}

func (n *NoteRepository) Create(note *Note) error {
	return nil
}
