#!/bin/bash

set -e

RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
RESET='\033[0m'
DOMAIN=$1
if [ -z "$1" ]; then
    read -p "$(echo -e "${YELLOW}Enter your domain: ${RESET}")" DOMAIN
else
    DOMAIN=$1
fi
URIS=$(
    curl -sL https://$DOMAIN | \
    grep https://$DOMAIN | \
    grep -oP '(?<=href=")[^"]+' | \
    sed "s|https://$DOMAIN||" | \
    sort -u
)

JS_URIS=$(echo "$URIS" |awk '{print "  \"" $0 "\","}')

cat > variables.js <<EOL
export const BASE_URL = 'https://$DOMAIN';

export const paths = [
$JS_URIS
];
EOL
