#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const https = require('https');

// .env.local에서 SLACK_WEBHOOK_URL 로드
const projectRoot = path.resolve(__dirname, '..', '..');
const envPath = path.join(projectRoot, '.env.local');
let webhookUrl = process.env.SLACK_WEBHOOK_URL || '';

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const match = envContent.match(/^SLACK_WEBHOOK_URL=(.+)$/m);
  if (match) webhookUrl = match[1].trim();
}

if (!webhookUrl) process.exit(0);

// stdin에서 이벤트 데이터 읽기
let input = '';
process.stdin.on('data', c => input += c);
process.stdin.on('end', () => {
  const d = JSON.parse(input);
  const event = d.hook_event_name || 'unknown';
  const cwd = d.cwd || 'unknown';
  const reason = d.reason || '';

  let text;
  if (event === 'Notification') {
    text = `:raised_hand: *Claude Code 권한 요청*\n프로젝트: \`${cwd}\``;
  } else if (event === 'Stop') {
    text = `:white_check_mark: *Claude Code 작업 완료*\n프로젝트: \`${cwd}\`` + (reason ? `\n사유: ${reason}` : '');
  } else {
    text = `:bell: Claude Code 이벤트: ${event}\n프로젝트: \`${cwd}\``;
  }

  const payload = JSON.stringify({ text });
  const url = new URL(webhookUrl);

  const req = https.request({
    hostname: url.hostname,
    path: url.pathname,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload),
    },
  }, () => process.exit(0));

  req.on('error', () => process.exit(0));
  req.write(payload);
  req.end();
});
