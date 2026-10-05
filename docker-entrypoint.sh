#!/bin/bash
# Script de inicio para contenedor Docker
# Ejecuta migraciones y luego inicia la aplicación

set -e

echo "========================================="
echo "🐳 INICIANDO CONTENEDOR UCE"
echo "========================================="

# Ejecutar migraciones de base de datos
echo "📦 Ejecutando migraciones..."
python migrate_analytics.py 2>/dev/null || echo "⚠️  Migraciones ya ejecutadas o error (continuando...)"

# Inicializar datos si es necesario
echo "👥 Verificando usuarios iniciales..."
python init_data.py 2>/dev/null || echo "ℹ️  Datos ya inicializados"

echo "========================================="
echo "🚀 INICIANDO APLICACIÓN FLASK"
echo "========================================="

# Ejecutar la aplicación
# Si se pasaron argumentos (por ejemplo, desde command en docker-compose), los ejecuta
if [ $# -gt 0 ]; then
  exec "$@"
else
  # Fallback a Gunicorn si no hay argumentos
  exec gunicorn --bind 0.0.0.0:5000 --workers 4 --threads 2 "run:app"
fi
