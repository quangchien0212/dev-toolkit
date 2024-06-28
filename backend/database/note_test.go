package database

import "testing"

func TestNoteRepository(t *testing.T) {
	if err := InitDB("test.db"); err != nil {
		t.Fatalf("Creating database failed %s", err.Error())
	}

	if db == nil {
		t.Fatalf("Db does not exist")
	}

	if _, err := NewNoteRepository(db); err != nil {
		t.Fatalf("Creating database failed %s", err.Error())
	}
}
