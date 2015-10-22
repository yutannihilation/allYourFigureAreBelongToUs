FROM yutannihilation/r-jekyll:latest

# Jekyll
RUN install2.r \
  choroplethr \
  cowplot \
  gapmap \
  GGally \
  ggdendro \
  ggenealogy \
  ggExtra \
  ggfortify \
  ggmcmc \
  ggparallel \
  ggRandomForests \
  ggtern \
  ggthemes \
  granovaGG \
  gtable \
  mapDK \
  MCMC.OTU \
  PairedData \
  popgraph \
  sjPlot \
  waffle \
  xkcd

RUN installGithub.r \
  cttobin/ggthemr 

RUN git clone https://github.com/yutannihilation/allYourFigureAreBelongToUs.git
WORKDIR allYourFigureAreBelongToUs
RUN gem install github-pages
RUN make clean 
CMD make generate && make && make push
