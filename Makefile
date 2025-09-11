.PHONY: clean cv sop

all: clean

cv:
	
	cd cv && TEXINPUTS="../package:.:" xelatex -synctex=1 -interaction=nonstopmode -file-line-error -output-directory=build index.tex

sop:
	cd sop && TEXINPUTS="../package:.:" xelatex -synctex=1 -interaction=nonstopmode -file-line-error -output-directory=build index.tex