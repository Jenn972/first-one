# Telegram Agents AI Project

## Core Features
- Three predefined agents:
  1. Auto Responder Agent
  2. Message Filter Agent
  3. Custom AI Agent
- Native token system for training custom agents
- Built on official Telegram client fork

## Key Functionalities
- Auto-responding to messages
- Message filtering and routing
- Custom AI training capabilities
- Automated message handling
- Integration with Telegram's official API

## Technical Goals
- Maintain compatibility with official Telegram client
- Ensure secure token implementation
- Optimize AI agent performance
- Keep UI/UX consistent with Telegram's design

## Style Guidelines
- Use Telegram's color scheme where possible
- Maintain professional and clean design
- Focus on simplicity and ease of use
- Clear documentation for agent configuration

## Important Links
- Telegram API Documentation: https://core.telegram.org/api
- Bot API Documentation: https://core.telegram.org/bots/api

## Development Notes
- Always test agent behavior thoroughly
- Maintain clear separation between agent types
- Document all AI training parameters
- Keep security as a top priority

## Build and Deployment Notes
- When building on Windows, you may need administrator privileges to handle .next directory operations
- Run command prompt as administrator if you encounter EPERM errors during build
- Run command prompt as administrator if you encounter EPERM errors during build
- ESLint warning about Next.js plugin can be safely ignored during build if using custom ESLint configuration
- Vercel deployment automatically handles Next.js configuration and environment setup
- If production deployment fails, try development deployment first:
  1. `vercel link --yes` to link project
  2. `vercel deploy --yes` for development deployment
  3. Once confirmed working, use `vercel deploy --prod --yes` for production
- ESLint configuration requires careful version management:
  - Use ESLint 8.x for compatibility with Next.js 15
  - Force install dependencies if peer dependency conflicts occur
