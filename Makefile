.SUFFIXES: .md .Rmd .html
.PHONY: all generate knit build clean

CMD_GENERATE := ./generateRmd.r
CMD_KNIT     := ./knit.r
CMD_BUILD    := bundle exec jekyll build

MD = $(patsubst _source/%.Rmd,_posts/%.md,$(wildcard _source/*.Rmd))

all: generate knit

generate: 
	while read pkg; do ${CMD_GENERATE} $${pkg}; done < packages.txt

knit: $(MD) 

build:
	${CMD_BUILD}

$(MD): _posts/%.md: _source/%.Rmd 
	${CMD_KNIT} $^ $@

clean:
	rm -f _source/* _posts/*; rm -rf figure/source/*
