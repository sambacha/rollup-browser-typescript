
import { execSync } from 'child_process';

export function getBundleBanner(pkg) {
  const lastCommitHash = execSync('git rev-parse --short HEAD')
    .toString()
    .trim();
  const version = process.env.SHIPJS
    ? pkg.version
    : `${pkg.version} (UNRELEASED ${lastCommitHash})`;
  const authors = '© CommodityStream, Inc. and contributors';

  return `/*! ${pkg.name} ${version} | Apache-2.0 License | ${authors} | ${pkg.homepage} */`;
}