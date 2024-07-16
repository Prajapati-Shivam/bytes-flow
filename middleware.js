import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/my-creation']);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/api/user'],
};
const ratelimit = new Ratelimit({
  redis: kv,
  namespace: 'ratelimit',
  max: 3,
  duration: 60,
});

export async function middleware({ request }) {
  const key = request.headers.get('authorization');
  const { allow, remaining, reset } = await ratelimit.check(key);
  if (!allow) {
    return new Response('Rate limit exceeded', { status: 429 });
  }
  return;
}
