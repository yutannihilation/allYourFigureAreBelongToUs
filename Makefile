.SUFFIXES: .md .Rmd .html
.PHONY: all generate knit build serve push clean

OPTION_SERVE :=  --port 1410 --host 0.0.0.0

CMD_GEN_RMD := ./generateRmd.r
CMD_GEN_CAT := ./generateCategory.r
CMD_KNIT     := ./knit.r
CMD_BUILD    := bundle exec jekyll build
CMD_SERVE    := bundle exec jekyll serve ${OPTION_SERVE}
CMD_GIT      := git

MD = $(patsubst _source/%.Rmd,_posts/%.md,$(wildcard _source/*.Rmd))

all: generate knit

generate: 
	while read pkg; do ${CMD_GEN_RMD} $${pkg}; ${CMD_GEN_CAT} $${pkg}; done < packages.txt

knit: $(MD) 

build:
	${CMD_BUILD}

serve:
	${CMD_SERVE}

$(MD): _posts/%.md: _source/%.Rmd 
	${CMD_KNIT} $^ $@

push:
	${CMD_GIT} add --all _source/ _posts/ figure/source/*
	${CMD_GIT} commit -m "update posts by make push"
	${CMD_GIT} push origin gh-pages

clean:
	rm -f _source/* _posts/*; rm -rf figure/source/*
