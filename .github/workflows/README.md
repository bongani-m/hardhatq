# GitHub Actions Workflows

## Workflows

### Release (`cd-release.yaml`)
Triggers on a `v*` tag or manual dispatch. Builds `hardhatq` for macOS (arm64, amd64) and Linux (amd64, arm64), attaches the executables to a GitHub release, and publishes `ghcr.io/bongani-m/hardhatq` tagged with that version. A stable tag is also published as `latest`. Tags containing `-alpha`, `-beta`, or `-rc` are prereleases and do not move `latest`.

### Build and Test (`build.yml`)
Triggers on push/PR to main and develop. Runs tests with race detection, generates coverage, runs gofmt and go vet checks, and verifies the binary builds.

### CodeQL Analysis (`codeql.yml`)
Triggers on push/PR to main and weekly. Runs security and quality analysis.

### Dependabot (`dependabot.yml`)
Weekly checks for Go module and GitHub Actions updates.

## Local Testing

```bash
cd src/amqp-go
go test -race ./...
go build ./cmd/amqp-server
```

## Troubleshooting

### Release workflow not triggering
1. Push a tag that looks like `v0.1.0`, or run the workflow manually with that version
2. Verify `cd-release.yaml` is on the default branch
3. Check the Actions tab for errors

### Build failures
1. Check Go version (requires 1.25.1+)
2. Run locally: `go test ./... && go build ./cmd/amqp-server`
