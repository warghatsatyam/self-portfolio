# Claude Code: The Complete Manual

## Table of Contents
1. [Introduction](#introduction)
2. [Installation & Setup](#installation--setup)
3. [Core Features](#core-features)
4. [CLI Reference](#cli-reference)
5. [Interactive Mode](#interactive-mode)
6. [Slash Commands](#slash-commands)
7. [Memory Management](#memory-management)
8. [Common Workflows](#common-workflows)
9. [Configuration & Settings](#configuration--settings)
10. [Security & Privacy](#security--privacy)
11. [Advanced Features](#advanced-features)
12. [Best Practices](#best-practices)
13. [Troubleshooting](#troubleshooting)

---

## Introduction

Claude Code is Anthropic's agentic coding tool designed to help developers turn ideas into code faster. It works directly in your terminal, can edit files, run commands, create commits, and integrates seamlessly with your existing development workflow.

### Key Capabilities
- Build features from plain English descriptions
- Debug and fix code issues automatically
- Navigate and understand complex codebases
- Automate tedious development tasks
- Direct file editing and command execution
- Git integration for commits and PRs
- Highly composable and scriptable

### Why Claude Code?
- Works where developers already work (terminal)
- No context switching required
- Enterprise-ready with robust security
- Supports complex interactions and automation
- Integrates with external tools via Model Context Protocol (MCP)

---

## Installation & Setup

### Prerequisites
- Terminal or command prompt
- Node.js 18 or newer (recommended)
- A code project to work with

### Installation Methods

#### Method 1: NPM (Recommended)
```bash
npm install -g @anthropic-ai/claude-code
```

#### Method 2: Native Install (Beta)

**For macOS, Linux, WSL:**
```bash
curl -fsSL claude.ai/install.sh | bash
```

**For Windows PowerShell:**
```powershell
irm https://claude.ai/install.ps1 | iex
```

### First Time Setup
1. Navigate to your project:
   ```bash
   cd /path/to/your/project
   ```

2. Start Claude Code:
   ```bash
   claude
   ```

3. Authenticate with your Anthropic account (if required)

4. Grant necessary permissions when prompted

---

## Core Features

### 1. File Operations
- **Read**: View and analyze any file
- **Edit**: Make precise changes to existing files
- **Write**: Create new files when needed
- **Search**: Find patterns across codebases using regex
- **Navigate**: Explore directory structures

### 2. Command Execution
- Run shell commands directly
- View command output in real-time
- Support for background processes
- Automatic command safety checks

### 3. Git Integration
- Create descriptive commits automatically
- Generate pull requests with detailed descriptions
- View and analyze git history
- Branch management

### 4. Code Understanding
- Analyze project architecture
- Explain complex code sections
- Identify patterns and dependencies
- Suggest improvements

### 5. Debugging & Testing
- Identify and fix bugs
- Run test suites
- Analyze test failures
- Suggest test improvements

---

## CLI Reference

### Basic Commands

```bash
# Start interactive REPL
claude

# Start with initial prompt
claude "add a hello world function"

# Query and exit (SDK mode)
claude -p "what does this project do?"

# Continue most recent conversation
claude -c

# Resume specific session
claude -r "<session-id>" "continue where we left off"

# Update Claude Code
claude update

# Configure MCP servers
claude mcp
```

### Command Line Flags

| Flag | Description |
|------|-------------|
| `--add-dir` | Add additional working directories |
| `--allowedTools` | Specify allowed tools (comma-separated) |
| `--disallowedTools` | Specify disallowed tools |
| `-p, --print` | Print response without interactive mode |
| `--append-system-prompt` | Append to system prompt |
| `--output-format` | Set output format (text, json, stream-json) |
| `--input-format` | Set input format |
| `--verbose` | Enable detailed logging |
| `--max-turns` | Limit agentic turns (default: 10) |
| `--model` | Set session model |
| `--permission-mode` | Set permission mode (strict/relaxed) |
| `-r, --resume` | Resume specific session by ID |
| `-c, --continue` | Load most recent conversation |
| `--dangerously-skip-permissions` | Skip all permission prompts |

### Examples

```bash
# Complex pipeline
tail -f app.log | claude -p "alert me if you see errors"

# Multi-directory project
claude --add-dir frontend --add-dir backend

# Specific model usage
claude --model opus-4.1 "refactor this code"

# Limited tool access
claude --disallowedTools bash,write "explain this code"
```

---

## Interactive Mode

### Keyboard Shortcuts

#### General Controls
- `Ctrl+C`: Cancel current input or generation
- `Ctrl+D`: Exit Claude Code session
- `Ctrl+L`: Clear terminal screen
- `↑/↓`: Navigate command history
- `Tab`: Auto-complete commands
- `Esc Esc`: Edit previous message

#### Multiline Input
- `\` + `Enter`: Quick escape (universal)
- `Option+Enter`: macOS default
- `Shift+Enter`: After terminal setup
- `Ctrl+J`: Line feed character

### Vim Mode

Enable with `/vim` command.

#### Normal Mode Navigation
- `h/j/k/l`: Move left/down/up/right
- `w`: Next word
- `e`: End of word
- `b`: Previous word
- `0`: Beginning of line
- `$`: End of line
- `gg`: Beginning of input
- `G`: End of input

#### Normal Mode Editing
- `i`: Enter insert mode
- `a`: Append after cursor
- `o`: Open line below
- `x`: Delete character
- `dd`: Delete line
- `D`: Delete to end of line
- `cc`: Change line
- `.`: Repeat last change

---

## Slash Commands

Complete list of available slash commands:

| Command | Description |
|---------|-------------|
| `/add-dir` | Add additional working directories |
| `/agents` | Manage custom AI subagents |
| `/bug` | Report bugs to Anthropic |
| `/clear` | Clear conversation history |
| `/compact` | Compact conversation with optional focus |
| `/config` | View/modify configuration |
| `/cost` | Show token usage statistics |
| `/doctor` | Check Claude Code health |
| `/help` | Get usage help |
| `/init` | Initialize project with CLAUDE.md |
| `/login` | Switch Anthropic accounts |
| `/logout` | Sign out from account |
| `/mcp` | Manage MCP server connections |
| `/memory` | Edit CLAUDE.md memory files |
| `/model` | Select or change AI model |
| `/permissions` | View/update permissions |
| `/pr_comments` | View pull request comments |
| `/review` | Request code review |
| `/status` | View account and system status |
| `/terminal-setup` | Install Shift+Enter binding |
| `/vim` | Enter vim mode |

### Usage Examples

```bash
# Initialize project memory
/init

# Check token usage
/cost

# Switch to a different model
/model

# Edit project memory
/memory

# Request code review
/review
```

---

## Memory Management

### CLAUDE.md System

Claude Code uses a hierarchical memory system with four levels:

1. **Enterprise Policy** (system-wide)
2. **Project Memory** (team-shared)
3. **User Memory** (personal across projects)
4. **Local Project Memory** (deprecated)

### Memory File Locations

```
Enterprise: /etc/claude/CLAUDE.md
Project:    .claude/CLAUDE.md
User:       ~/.claude/CLAUDE.md
Local:      ./CLAUDE.md
```

### Best Practices for CLAUDE.md

```markdown
# Project Overview
Brief description of the project and its purpose

## Architecture
- Key components and their relationships
- Technology stack
- Design patterns used

## Development Guidelines
- Code style preferences
- Testing requirements
- Commit message format

## Important Context
- Business rules
- Edge cases to consider
- Performance requirements

## Common Tasks
- Build commands
- Test commands
- Deployment process
```

### Memory Shortcuts

```bash
# Quick add to memory
# Remember to use snake_case for Python files

# Edit memory file
/memory

# Initialize new project memory
/init
```

### Memory Imports

Use `@path/to/import` syntax in CLAUDE.md to import other memory files:

```markdown
# Main project memory
@../shared/company-standards.md
@./domain-specific-rules.md
```

---

## Common Workflows

### 1. Understanding a New Codebase

```bash
claude
> what does this project do?
> show me the main entry points
> explain the data flow
> what are the key dependencies?
```

### 2. Feature Implementation

```bash
claude
> implement a user authentication system with JWT
> add input validation
> write tests for the auth module
> commit the changes with a descriptive message
```

### 3. Debugging

```bash
claude
> why is this test failing?
> fix the TypeError in user.js line 42
> run the tests again
> explain what was wrong
```

### 4. Code Review

```bash
claude
> review the changes in my last commit
> suggest improvements for performance
> check for security issues
> /review
```

### 5. Refactoring

```bash
claude
> refactor this function to be more readable
> extract common logic into utility functions
> update the tests to match
> ensure all tests still pass
```

### 6. Extended Thinking

For complex tasks, trigger deep analysis:

```bash
claude
> think through the best architecture for a real-time chat system
> think harder about the scaling implications
```

### 7. Image-Based Development

Drag and drop or paste images:

```bash
claude
> [paste screenshot] implement this UI design
> [paste diagram] create the database schema from this ERD
```

### 8. Parallel Development

Using Git worktrees:

```bash
# Terminal 1
git worktree add ../feature-a
cd ../feature-a
claude
> implement feature A

# Terminal 2
git worktree add ../feature-b
cd ../feature-b
claude
> implement feature B
```

---

## Configuration & Settings

### Configuration Files

Claude Code uses hierarchical configuration:

```
~/.claude/settings.json          # User settings
.claude/settings.json            # Project settings (shared)
.claude/settings.local.json      # Project settings (personal)
/etc/claude/settings.json        # Enterprise settings
```

### Configuration Structure

```json
{
  "model": "opus-4.1",
  "permissionMode": "relaxed",
  "tools": {
    "allowed": ["read", "write", "bash"],
    "disallowed": []
  },
  "notifications": {
    "enabled": true,
    "sound": false
  },
  "telemetry": {
    "enabled": false
  }
}
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `ANTHROPIC_API_KEY` | API authentication key |
| `CLAUDE_CODE_USE_BEDROCK` | Enable AWS Bedrock |
| `CLAUDE_CODE_USE_VERTEX` | Enable Google Vertex AI |
| `DISABLE_TELEMETRY` | Opt out of usage tracking |
| `CLAUDE_CODE_MODEL` | Default model selection |

### Configuration Commands

```bash
# View current configuration
claude config

# Set global configuration
claude config -g set model opus-4.1

# Set project configuration
claude config set permissionMode relaxed

# Add allowed tool
claude config add tools.allowed bash

# Remove disallowed tool
claude config remove tools.disallowed write
```

---

## Security & Privacy

### Security Model

Claude Code implements multiple layers of security:

1. **Permission System**
   - Read-only by default
   - Explicit approval for writes
   - Scoped to working directory

2. **Command Safety**
   - Context-aware threat detection
   - Input sanitization
   - Command blocklist

3. **Network Security**
   - Approval required for web requests
   - Isolated context for web fetching
   - No automatic external connections

### Privacy Features

- Limited data retention
- No training on user code
- Encrypted credential storage
- Clear data handling policies

### Best Practices

1. **Review Before Approval**
   ```bash
   # Always review commands before approving
   > Claude wants to run: rm -rf /
   > Approve? [y/N]
   ```

2. **Use Virtual Environments**
   ```bash
   # For untrusted code
   docker run -it --rm -v $(pwd):/app node:latest
   claude
   ```

3. **Limit Permissions**
   ```bash
   claude --disallowedTools bash,write
   ```

4. **Regular Audits**
   ```bash
   claude config
   /permissions
   ```

---

## Advanced Features

### 1. Custom Agents

Create specialized subagents for specific tasks:

```bash
/agents
> create code-reviewer
> set instructions "Focus on performance and security"
> save
```

### 2. Model Context Protocol (MCP)

Connect external data sources:

```bash
claude mcp
> add github
> authenticate
> query "show my recent PRs"
```

### 3. Scripting & Automation

```bash
# Automated testing pipeline
echo "run tests" | claude -p "fix any failures" && \
claude -p "commit the fixes"

# Continuous monitoring
watch -n 60 'claude -p "check for security updates"'
```

### 4. Custom Slash Commands

Create project-specific commands in `.claude/commands.json`:

```json
{
  "deploy": {
    "description": "Deploy to production",
    "script": "npm run build && npm run deploy"
  }
}
```

### 5. Tool Composition

Chain tools for complex workflows:

```bash
claude
> find all TODO comments | create github issues for each
> run tests | fix failures | commit when green
```

---

## Best Practices

### 1. Effective Prompting

**Do:**
- Be specific and clear
- Provide context when needed
- Break complex tasks into steps
- Use examples when helpful

**Don't:**
- Be vague or ambiguous
- Assume Claude knows project specifics
- Ask for multiple unrelated tasks at once

### 2. Project Organization

```
project/
├── .claude/
│   ├── CLAUDE.md          # Project memory
│   ├── settings.json      # Project settings
│   └── commands.json      # Custom commands
├── src/
├── tests/
└── README.md
```

### 3. Workflow Optimization

1. **Start with understanding:**
   ```bash
   > explain the project structure
   ```

2. **Plan before implementing:**
   ```bash
   > outline the steps to implement X
   ```

3. **Test incrementally:**
   ```bash
   > run tests after each change
   ```

4. **Document as you go:**
   ```bash
   > update CLAUDE.md with new patterns
   ```

### 4. Performance Tips

- Use `/compact` to reduce token usage
- Clear history with `/clear` when switching contexts
- Use specific file references with `@file`
- Batch related requests together

### 5. Collaboration

- Share `.claude/CLAUDE.md` with team
- Keep `.claude/settings.local.json` personal
- Document team conventions in CLAUDE.md
- Use consistent commit message formats

---

## Troubleshooting

### Common Issues and Solutions

#### 1. Installation Problems

**Issue:** npm install fails
```bash
# Solution: Use Node.js 18+
nvm use 18
npm install -g @anthropic-ai/claude-code
```

**Issue:** Command not found
```bash
# Solution: Add to PATH
export PATH="$PATH:$(npm root -g)/bin"
```

#### 2. Permission Errors

**Issue:** Cannot edit files
```bash
# Solution: Check permissions
/permissions
claude config set permissionMode relaxed
```

**Issue:** Command blocked
```bash
# Solution: Review and approve
claude --dangerously-skip-permissions  # Use with caution
```

#### 3. Performance Issues

**Issue:** Slow responses
```bash
# Solution: Reduce context
/compact
/clear
```

**Issue:** Token limit reached
```bash
# Solution: Check usage
/cost
# Consider upgrading plan
```

#### 4. Connection Problems

**Issue:** Authentication failed
```bash
# Solution: Re-login
/logout
/login
```

**Issue:** API errors
```bash
# Solution: Check status
/status
/doctor
```

### Getting Help

1. **Built-in Help:**
   ```bash
   /help
   claude --help
   ```

2. **Documentation:**
   - Official docs: https://docs.anthropic.com/claude-code
   - API reference: https://docs.anthropic.com/api

3. **Community Support:**
   - GitHub Issues: https://github.com/anthropics/claude-code/issues
   - Discord: Anthropic's official Discord server

4. **Bug Reporting:**
   ```bash
   /bug
   # Automatically sends conversation context
   ```

---

## Appendix

### A. Quick Reference Card

```
Essential Commands:
claude              # Start interactive mode
claude -c           # Continue last session
claude -p "query"   # Quick query and exit
/help              # Get help
/clear             # Clear history
/memory            # Edit CLAUDE.md
/cost              # Check usage
Ctrl+C             # Cancel
Ctrl+D             # Exit

File Operations:
> read file.js
> edit line 42 in file.js
> create new-file.py
> find "pattern" in src/

Git Operations:
> commit changes
> create PR
> show git status
> create branch feature-x

Shortcuts:
# comment          # Add to memory
@ file.js          # Reference file
↑/↓               # History
Tab               # Autocomplete
```

### B. Model Comparison

| Model | Best For | Speed | Context |
|-------|----------|-------|---------|
| Opus 4.1 | Complex tasks, large codebases | Medium | 200K |
| Sonnet 3.5 | General coding, quick responses | Fast | 200K |
| Haiku 3.5 | Simple tasks, rapid iteration | Very Fast | 200K |

### C. Tool Capabilities

| Tool | Description | Permission |
|------|-------------|------------|
| Read | View files and directories | Default |
| Write | Create and modify files | Requires approval |
| Edit | Make precise file changes | Requires approval |
| Bash | Execute shell commands | Requires approval |
| Search | Find patterns in code | Default |
| Web | Fetch web content | Requires approval |

---

## Conclusion

Claude Code represents a paradigm shift in AI-assisted development, bringing powerful code generation and manipulation capabilities directly to your terminal. By following this manual and best practices, you can significantly enhance your development workflow and productivity.

Remember: Claude Code is a tool to augment your capabilities, not replace your judgment. Always review generated code and maintain security best practices.

Happy coding with Claude Code!
