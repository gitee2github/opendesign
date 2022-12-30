FROM gplane/pnpm as Builder

RUN pnpm -v

RUN mkdir -p /home/opendesign/web
WORKDIR /home/opendesign/web
COPY . /home/opendesign/web

# RUN rm -rf /home/opendesign/web/packages/portal/.vitepress/public/resources/*
RUN mkdir -p /home/opendesign/web/packages/portal/.vitepress/public/resources
RUN git clone  https://gitee.com/openeuler/opendesign-resources.git /home/opendesign/resources && \
    cp -r /home/opendesign/resources/packages/* /home/opendesign/web/packages/portal/.vitepress/public/resources && \
    rm -rf /home/opendesign/resources

RUN mkdir -p /home/opendesign/web/packages/portal/.vitepress/public/templates
RUN git clone https://gitee.com/openeuler/opendesign-templates.git /home/opendesign/templates && \
    cd /home/opendesign/templates/packages/vitepress-ts-demo && \
    pnpm install && \
    pnpm build && \
    cp -r /home/opendesign/templates/packages/vitepress-ts-demo/app/.vitepress/dist/*  /home/opendesign/web/packages/portal/.vitepress/public/templates && \
    rm -rf /home/opendesign/templates

RUN pnpm install
RUN pnpm build:p

FROM nginx:1.20.0

COPY --from=Builder /home/opendesign/web/packages/portal/.vitepress/dist /usr/share/nginx/html/
RUN chmod -R 755 /usr/share/nginx/html
COPY ./deploy/nginx/nginx.conf /etc/nginx/nginx.conf

ENV RUN_USER nginx
ENV RUN_GROUP nginx
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]