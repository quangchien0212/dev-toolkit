package database

import (
	"testing"
)

func TestCreateSQLiteDB(t *testing.T) {
	err := InitDB("test.db")

	if err != nil {
		t.Fatalf("Init database failed %s", err.Error())
	}
}
