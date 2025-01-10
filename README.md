### prisma install

```bash
npm i --save prisma
npx prisma init

# schema 작성
# neon connection string 가져오기.
# .env DATABASE_URL 작성

# generate, migrate
npx prisma migrate dev
# migration init!
```
..
- schema.prismadp driverAdapters 추가
- `npx prisma generate` 실행
- `src/types/declaration.d.ts` 에서 global.prisma cnrk
- prisma 추가
