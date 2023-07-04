import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';

// Cargar las variables de entorno
const env = dotenv.config().parsed;

export default defineConfig(() => {
  // Devuelve la configuración de Vite
  return {
    plugins: [react()],
    define: {
      'process.env': env
    }
  };
});
