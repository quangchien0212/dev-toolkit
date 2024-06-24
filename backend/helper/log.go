package helper

import (
	"fmt"
)

func SLog(msg string) string {
	c := SColored(msg)
	fmt.Println(c)
	return c
}