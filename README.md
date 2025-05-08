# TypeScript

## 1. Introducción

Instalamos TypeScript de manera global

```bash
sudo npm install -g typescript
```

Verificamos su instalación y versión
```bash
tsc --version
```

Compilamos el archivo de typeScript a javaScript
```bash
tsc app
```

Creamos el archivo **tsconfig.json** y lo que más vamos acabar haciendo con este archivos es:
- Modificar el objetivo
- Modificar los archivos de salida
- Configurar que tan estrictos queremos que sea
```bash
tsc --init
```

Borramos app.js y volvemos a crearlo para que adquiera la configuración de **tsconfig.json**
```bash
tsc
```

TypeScript esta en modo observador, esto hace que cualquier cambio que haga en app.ts se vea reflejado en app.js

```bash
tsc --watch
tsc -w
```
## 2. Tipos de datos Básicos
- Inferir tipos y modo estricto
- Booleanos
- Numbers
- Strings
- Any
- Arrays
- Tuples
- Enum
- Void
- Never

## 3. Funciones y Objetos
- Funciones básicas
- Parámetros obligatorios de las funciones
- Parámetros opcionales de las funciones
- Parámetros por defecto