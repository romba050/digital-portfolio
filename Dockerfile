# Serves the committed build output (dist/) at /.
# Deployed via the infra repo's deploy.sh:  ./deploy.sh digital-portfolio
FROM nginx:alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/ /usr/share/nginx/html/
