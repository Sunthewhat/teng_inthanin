FROM oven/bun as base

WORKDIR /mnt

COPY . .

RUN bun install

RUN bunx --bun vite build

FROM thistine/simple-http-server as runner

WORKDIR /mnt

COPY --from=base /mnt/dist ./static

ENTRYPOINT [ "/app/serviceapifrontend" ]

EXPOSE 4000
