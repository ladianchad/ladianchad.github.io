.PHONY: clean cv

all: clean build

clean:
	rm -rf build/*

cv:
	TEXINPUTS="./package:.:" xelatex -synctex=1 -interaction=nonstopmode -file-line-error -output-directory=build cv/index.tex

