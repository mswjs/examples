MATCH=$(grep "msw" $1/**/*.js)

if [ ! -z "$MATCH" ]
then
  echo "Mock Service Worker is included in the production build. Please resolve that."
  exit 1
fi

echo "Mock Servivce Worker is NOT included in the production build."
