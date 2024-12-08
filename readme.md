## Conexión de frontend con microfront por medio de _module federation_.

Seguir los pasos encontrados en el siguiente repo hasta el encabezado (__Activación de la federación de módulos para proyectos angular__): [Github](https://github.com/jimyhdolores/demo-microfrontend-multirepo-angular-modulefederation)

Luego configurar en _tsconfig.app.json_ en el atributo `files` la ruta del módulo que se va a exponer, por ejemplo:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": []
  },
  "files": [
    "src/main.ts",
    "src/app/pages/products/products.module.ts",
  ],
  "include": [
    "src/**/*.d.ts"
  ]
}
```

Hay que tener en cuenta que esta ruta es la misma que exponemos en el _webpack.config.js_

```javascript
module.exports = withModuleFederationPlugin({
  name: 'test-mf',
  exposes: {
    './ProductsModule': './src/app/pages/products/products.module.ts',
  },
  shared: {
    ...shareAll({ 
      singleton: true, 
      strictVersion: true, 
      requiredVersion: 'auto' 
    }),
  },
});
```

# Eso es todo. 🤙