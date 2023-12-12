import {sql} from '@vercel/postgres';
import {NextResponse} from 'next/server';

export async function GET(request: Request) {
    try {
        const createRedirects =
            await sql`CREATE TABLE redirects (
                        id SERIAL PRIMARY KEY,
                        source VARCHAR(255) NOT NULL,
                        destination VARCHAR(255) NOT NULL,
                        permanent BOOLEAN NOT NULL
                        );`;
        const createGuestbook =
            await sql`CREATE TABLE guestbook (
                        id SERIAL PRIMARY KEY,
                        email VARCHAR(255) NOT NULL,
                        body TEXT NOT NULL,
                        created_by VARCHAR(255) NOT NULL,
                        created_at TIMESTAMP NOT NULL,
                        updated_at TIMESTAMP
                        );`;
        const createViews =
            await sql`CREATE TABLE views (
                         slug VARCHAR(255) PRIMARY KEY,
                             count INT NOT NULL
                        );`;
        return NextResponse.json({createViews}, {status: 200});
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}