#!/bin/bash
set -e

REPO="https://github.com/vatistasdimitris01/STRM.git"
INSTALL_DIR="$HOME/.strm"

echo "STRM — installing..."

if [ -d "$INSTALL_DIR" ]; then
  echo "Updating STRM..."
  cd "$INSTALL_DIR" && git pull --quiet
else
  echo "Cloning to $INSTALL_DIR..."
  git clone --quiet "$REPO" "$INSTALL_DIR"
fi

cd "$INSTALL_DIR"
npm install --silent 2>/dev/null

# Create symlink
mkdir -p "$HOME/.local/bin"
cat > "$HOME/.local/bin/strm" << 'EOF'
#!/bin/bash
exec npx tsx "$HOME/.strm/src/cli.tsx" "$@"
EOF
chmod +x "$HOME/.local/bin/strm"

# Add to PATH if needed
SHELL_RC=""
if [ -f "$HOME/.zshrc" ]; then SHELL_RC="$HOME/.zshrc"
elif [ -f "$HOME/.bashrc" ]; then SHELL_RC="$HOME/.bashrc"
fi

if [ -n "$SHELL_RC" ]; then
  if ! grep -q '$HOME/.local/bin' "$SHELL_RC" 2>/dev/null; then
    echo 'export PATH="$HOME/.local/bin:$PATH"' >> "$SHELL_RC"
    export PATH="$HOME/.local/bin:$PATH"
  fi
fi

echo ""
echo "✓ STRM installed!"
echo "  Run: strm"
echo "  Or:  ~/.local/bin/strm"
