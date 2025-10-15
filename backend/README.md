# Task Backend

## Setup

1. Clone repo
2. Run `npm install`
3. Configure `.env` with your MySQL credentials
4. Run `npm start`

## Endpoints

- `/api/v1/auth/register` → Register user
- `/api/v1/auth/login` → Login user
- `/api/v1/tasks` → CRUD tasks (JWT required)
- Swagger: `/api-docs`

## Notes

- JWT token expires in 1 day
- Role-based access: `user` / `admin`
- Tasks linked to user via `userId`
