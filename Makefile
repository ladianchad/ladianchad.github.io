.PHONY: clean build

all: clean build

clean:
	rm -rf build/*

build:
	TEXINPUTS="./package:.:" xelatex -synctex=1 -interaction=nonstopmode -file-line-error -output-directory=build main.tex
