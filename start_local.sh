docker run --volume="$PWD:/srv/jekyll" -it -p 8080:4000 jekyll/jekyll jekyll serve --watch --force_polling --incremental
