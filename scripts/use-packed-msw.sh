#!/bin/bash
set -e

tarball_path=$1

echo "Using local tarbal $tarball_path"

# Upack the tarball
tar zxvf $tarball_path -C $PWD

echo "Successfully unpacked $tarball_path"
package_path="$PWD/package"

echo "Using unpacked package at $package_path"
ls -la $package_path

# Install unpacked tarball to all sub-repositories
echo "Installing local package in the workspace..."
yarn workspaces run add file:"$package_path" --no-lockfile

# Update the "mockServiceWorker.js" in all examples
yarn update
