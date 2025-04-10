ARG bun_image=oven/bun:alpine

FROM $bun_image AS builder
WORKDIR /thinkix
COPY . .
RUN bun i --frozen-lockfile
# RUN bunx prisma generate
RUN bun run build

FROM $bun_image AS runner
WORKDIR /thinkix
ENV NODE_ENV=production

COPY --from=builder /thinkix/.next/standalone .
COPY --from=builder /thinkix/public ./public
COPY --from=builder /thinkix/.next/static ./.next/static

EXPOSE 3000
CMD ["bun", "server.js"]
