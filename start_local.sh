echo "Once the server is up, click this link: http://localhost:8080/"
rm -rf .jekyll-cache .jekyll-metadata Gemfile.lock
docker run --volume="$PWD:/srv/jekyll" -it -p 8080:4000 jekyll/jekyll jekyll serve --watch --force_polling --incremental
