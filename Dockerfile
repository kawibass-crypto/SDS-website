FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY *.html /usr/share/nginx/html/
COPY i18n.js hero-scene.json /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
COPY projects /usr/share/nginx/html/projects
COPY wp-content /usr/share/nginx/html/wp-content

