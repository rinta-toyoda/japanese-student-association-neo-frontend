#!/bin/bash

# Development script for Japanese Student Association Frontend Neo

echo "🚀 Starting Japanese Student Association website..."
echo "📍 Project: japanese-student-assocation-frontend-neo"
echo "🌐 Framework: Next.js 15 with Turbopack"
echo ""

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start development server
echo "🔥 Starting development server..."
npm run dev

echo ""
echo "✅ Development server is running!"
echo "🌐 Visit: http://localhost:3000"
echo "📝 Edit files in src/ to see changes"