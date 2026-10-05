# Prototipo Web Informativo

Este repositorio contiene el código fuente y la configuración de infraestructura para el despliegue de un portal web informativo. El sistema está diseñado bajo un enfoque de monolito ligero, priorizando el rendimiento, la eficiencia en el consumo de recursos y la estabilidad en entornos de producción.

## Resumen Técnico

La aplicación ha sido desarrollada utilizando un entorno basado en Python y Flask. Para asegurar un rendimiento óptimo, la arquitectura se sustenta en las siguientes tecnologías:

- **Servidor de Aplicaciones:** Gunicorn, configurado para gestionar peticiones concurrentes de manera eficiente mediante múltiples procesos de trabajo (*workers*).
- **Contenedorización:** Docker y Docker Compose, implementados para garantizar consistencia y facilitar el despliegue.
- **Persistencia de Datos:** PostgreSQL como motor principal de base de datos relacional.
- **Gestión de Sesiones y Caché:** Redis, utilizado para optimizar los tiempos de respuesta del servidor.

## Estado Actual del Proyecto

El proyecto se encuentra en una fase de prototipo funcional. La arquitectura ha sido depurada para eliminar servicios redundantes o de alto consumo (como configuraciones previas de microservicios complejas), garantizando así una huella de memoria mínima. La configuración actual permite levantar el servicio de forma inmediata y económica.

## Prerrequisitos del Sistema

Para ejecutar y administrar este proyecto, el entorno anfitrión debe contar con las siguientes herramientas instaladas:

- Docker Engine (versión 20.10 o superior)
- Docker Compose (versión 1.29 o superior)
- Git

## Configuración y Despliegue

La puesta en marcha del proyecto requiere la configuración previa de las variables de entorno. En el directorio raíz del repositorio, se incluye un archivo denominado `env.docker.example`. Este documento sirve como plantilla y debe ser copiado, renombrado a `.env`, y ajustado con las credenciales correspondientes a su infraestructura.

Para obtener instrucciones operativas precisas sobre cómo compilar, iniciar, detener los servicios y ejecutar el flujo de trabajo en Git, consulte el documento técnico adjunto: `GIT_INSTRUCCIONES.txt`.
