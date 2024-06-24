package helper

import "github.com/paudley/colorout"

func SColored(msg string) string {
	c := colorout.SdumpColored(msg)

	return c
}