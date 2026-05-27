const BASE_URL = 'http://localhost:3000'

type ApiRequestProps = RequestInit & {
    body?: unknown;
};