import {NextResponse} from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const apiKey = process.env.TMDB_API_KEY
  const readToken = process.env.TMDB_READ_ACCESS_TOKEN

  if (!apiKey || !readToken) {
    return NextResponse.json({error: 'Credentials not configured'}, {status: 500})
  }

  return NextResponse.json({
    tmdbApiKey: apiKey,
    tmdbReadAccessToken: readToken,
  })
}
