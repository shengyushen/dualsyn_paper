del *.aux *.lo? *.toc *.ind *.inx *.gls *.glo *.idx *.ilg *.out *.bak *.bbl *.brf *.blg *.dvi data\*.aux
xelatex thesis -c-style-errors --quiet
rem makeindex -s nomencl.ist -o thesis.nls thesis.nlo
bibtex thesis
bibtex thesis
xelatex thesis -c-style-errors --quiet
xelatex thesis -c-style-errors --quiet
acrobat thesis.pdf
