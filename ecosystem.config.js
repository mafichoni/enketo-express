module.exports = {
  apps: [
    {
      name: 'enketo-express',
      script: 'app.js',
      instances: 'max', // or a specific number like 4, 'max' uses all CPU cores
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
