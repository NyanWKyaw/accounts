#!/usr/bin/env bash

set -euo pipefail

scriptDir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
sdkDir="$( cd "${scriptDir}"/.. && pwd )"
parentDir="$( cd "${sdkDir}"/.. && pwd )"

#make -n --directory="${parentDir}/accounts" build_image


cd "${parentDir}/accounts"
make build_image