# AWS CLI Beginner Cheat Sheet

Quick reference for everyday AWS CLI commands. Verified against AWS CLI v2.35.22.

> Tip: run `aws <service> <command> help` for full documentation on any command.

## S3

| Command | Description | Example |
|---------|-------------|---------|
| `aws s3 ls` | List all S3 buckets in your account | `aws s3 ls` |
| `aws s3 ls s3://<bucket>/` | List top-level objects and prefixes in a bucket (add `--recursive` for everything) | `aws s3 ls s3://my-bucket/ --recursive` |
| `aws s3 cp <file> s3://<bucket>/` | Upload a file to S3 | `aws s3 cp data.csv s3://my-bucket/data.csv` |
| `aws s3 cp s3://<bucket>/<key> <dest>` | Download a file from S3 | `aws s3 cp s3://my-bucket/data.csv ./data.csv` |
| `aws s3 sync <dir> s3://<bucket>/` | Copy new/changed files to S3 (does not delete removed files unless you pass `--delete`) | `aws s3 sync ./documents/ s3://my-bucket/backup/` |
| `aws s3 rm s3://<bucket>/<key>` | Delete an object from S3 | `aws s3 rm s3://my-bucket/old-file.txt` |

## EC2

| Command | Description | Example |
|---------|-------------|---------|
| `aws ec2 describe-instances` | List EC2 instances in a region, including their state (running/stopped) | `aws ec2 describe-instances --region us-east-1` |
| `aws ec2 start-instances` | Start a stopped EC2 instance | `aws ec2 start-instances --instance-ids i-1234567890abcdef0 --region us-east-1` |
| `aws ec2 stop-instances` | Stop a running EC2 instance | `aws ec2 stop-instances --instance-ids i-1234567890abcdef0 --region us-east-1` |
| `aws ec2 describe-instance-status` | Show reachability status checks (only running instances by default; add `--include-all-instances` for all) | `aws ec2 describe-instance-status --instance-ids i-1234567890abcdef0 --include-all-instances --region us-east-1` |

## Identity & IAM

| Command | Description | Example |
|---------|-------------|---------|
| `aws sts get-caller-identity` | Display the account ID, ARN, and unique ID of the current credentials ("who am I?") | `aws sts get-caller-identity` |
| `aws iam list-users` | List all IAM users in the AWS account | `aws iam list-users` |
| `aws iam list-attached-user-policies` | Show managed policies attached to a specific IAM user | `aws iam list-attached-user-policies --user-name alice` |
