# team-workflow-github

チームのGitHub（`821nhm-design/codex`）をClaudeとつなぐプラグインです。

## できること

| スキル | 使い方の例 | GitHubへの変更 |
| --- | --- | --- |
| task-intake | 「この依頼をIssueにして」 | 了承後にIssueを作成 |
| progress-report | 「今週の進捗まとめて」 | なし（読むだけ） |
| review-request | 「このブランチをレビューに出して」 | 了承後に下書きPRを作成 |

どのスキルも、作成の前に必ず下書きを見せて確認を取ります。マージ・削除・公開・決済設定の変更は行いません。

## セットアップ

1. GitHubで **Fine-grained personal access token** を作成します。
   - Repository access: `821nhm-design/codex` のみ
   - Permissions: Issues（Read and write）、Pull requests（Read and write）、Contents（Read-only）、Metadata（Read-only）
2. トークンを環境変数 `GITHUB_PERSONAL_ACCESS_TOKEN` に設定します。トークンはファイルやチャットに貼らないでください。
3. このフォルダをプラグインとして読み込みます。GitHubのMCPサーバー（`https://api.githubcopilot.com/mcp/`）に接続されます。

## 構成

```
team-workflow-github/
├── .claude-plugin/plugin.json
├── .mcp.json
├── skills/
│   ├── task-intake/SKILL.md
│   ├── progress-report/SKILL.md
│   └── review-request/SKILL.md
└── README.md
```

## 今後の追加候補

- Issueラベル（サイト制作／楽曲制作／デジタル商品／海外販売）の一括作成
- 毎朝の進捗レポートを定期実行
