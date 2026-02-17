import React, { useEffect, useState, createContext, useContext } from 'react';
import './ToastError.css';

// Tipos
type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastConfig {
  id: number;
  type: ToastType;
  message: string;
  title?: string;
  duration: number;
}

interface ToastErrorContextType {
  success: (message: string, title?: string) => void;
  error: (message: string, title?: string) => void;
  warning: (message: string, title?: string) => void;
  info: (message: string, title?: string) => void;
}

// Crear contexto
export const ToastErrorContext = createContext<ToastErrorContextType>({
  success: () => console.warn('ToastErrorContext not initialized'),
  error: () => console.warn('ToastErrorContext not initialized'),
  warning: () => console.warn('ToastErrorContext not initialized'),
  info: () => console.warn('ToastErrorContext not initialized')
});

// Hook personalizado
export const useToastError = () => {
  const context = useContext(ToastErrorContext);
  if (!context) {
    console.error('❌ useToastError debe usarse dentro de ToastErrorProvider');
    throw new Error('useToastError debe usarse dentro de ToastErrorProvider');
  }
  return context;
};

// Componente Toast individual
const ToastItem: React.FC<{
  id: number;
  type: ToastType;
  message: string;
  title?: string;
  duration: number;
  onClose: (id: number) => void;
}> = ({ id, type, message, title = '', duration, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    console.log(`🎯 Toast ${id} creado - Tipo: ${type}`);
    
    // Mostrar con animación
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      console.log(`🎯 Toast ${id} mostrado`);
    }, 10);
    
    // Configurar progress bar
    const startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);
    }, 50);
    
    // Cierre automático
    const timeoutId = setTimeout(() => {
      console.log(`🎯 Toast ${id} auto-cerrado`);
      handleClose();
    }, duration);
    
    return () => {
      clearInterval(progressInterval);
      clearTimeout(timeoutId);
      clearTimeout(showTimer);
    };
  }, [duration, id, type]);

  const handleClose = () => {
    console.log(`🎯 Toast ${id} cerrado manualmente`);
    setIsVisible(false);
    setTimeout(() => onClose(id), 300);
  };

  // Iconos
  const icons: Record<ToastType, string> = {
    success: 'fas fa-check-circle',
    error: 'fas fa-exclamation-circle',
    warning: 'fas fa-exclamation-triangle',
    info: 'fas fa-info-circle'
  };

  return (
    <div className={`toast ${type} ${isVisible ? 'show' : 'hiding'}`}>
      <div className="toast-icon">
        <i className={icons[type]}></i>
      </div>
      
      <div className="toast-content">
        <div className="toast-title">{title || type.toUpperCase()}</div>
        <div className="toast-message">{message}</div>
      </div>
      
      <button 
        className="toast-close" 
        onClick={handleClose} 
        title="Cerrar"
        aria-label="Cerrar notificación"
      >
        <i className="fas fa-times"></i>
      </button>
      
      <div 
        className="toast-progress" 
        style={{ 
          transform: `scaleX(${progress / 100})`,
          transition: 'transform linear'
        }} 
      />
    </div>
  );
};

// Provider principal
export const ToastErrorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastConfig[]>([]);

  console.log('🔄 ToastErrorProvider renderizado. Toasts actuales:', toasts.length);

  const show = (type: ToastType, message: string, title?: string, duration: number = 5000) => {
    const id = Date.now();
    const newToast: ToastConfig = {
      id,
      type,
      message,
      title,
      duration: type === 'success' ? 3000 : type === 'error' ? 5000 : 4000
    };
    
    console.log(`➕ Nuevo toast: ${type} - "${message}" - ID: ${id}`);
    
    setToasts(prev => [...prev, newToast]);
    return id;
  };

  const toastFunctions: ToastErrorContextType = {
    success: (message: string, title?: string) => {
      console.log('✅ success() llamado');
      return show('success', message, title, 3000);
    },
    error: (message: string, title?: string) => {
      console.log('❌ error() llamado');
      return show('error', message, title, 5000);
    },
    warning: (message: string, title?: string) => {
      console.log('⚠️ warning() llamado');
      return show('warning', message, title, 4000);
    },
    info: (message: string, title?: string) => {
      console.log('ℹ️ info() llamado');
      return show('info', message, title, 4000);
    }
  };

  const removeToast = (id: number) => {
    console.log(`➖ Removiendo toast ID: ${id}`);
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ToastErrorContext.Provider value={toastFunctions}>
      {children}
      
      {/* Contenedor de toasts - VERIFICAR SI SE RENDERIZA */}
      <div id="toast-container" className="toast-container" style={{ 
        position: 'fixed', 
        top: '20px', 
        right: '20px', 
        zIndex: 9999,
      }}>
        {toasts.length === 0 ? (
          <div style={{ display: 'none' }}>No hay toasts</div>
        ) : (
          toasts.map(toast => (
            <ToastItem
              key={toast.id}
              id={toast.id}
              type={toast.type}
              message={toast.message}
              title={toast.title}
              duration={toast.duration}
              onClose={removeToast}
            />
          ))
        )}
      </div>
    </ToastErrorContext.Provider>
  );
};

// Objeto global para compatibilidad
export const ToastError = {
  success: (message: string, title?: string) => {
    console.log('🌐 ToastError.success() llamado (global)');
    const event = new CustomEvent('toast-error-global', {
      detail: { type: 'success', message, title }
    });
    window.dispatchEvent(event);
  },
  error: (message: string, title?: string) => {
    console.log('🌐 ToastError.error() llamado (global)');
    const event = new CustomEvent('toast-error-global', {
      detail: { type: 'error', message, title }
    });
    window.dispatchEvent(event);
  },
  warning: (message: string, title?: string) => {
    console.log('🌐 ToastError.warning() llamado (global)');
    const event = new CustomEvent('toast-error-global', {
      detail: { type: 'warning', message, title }
    });
    window.dispatchEvent(event);
  },
  info: (message: string, title?: string) => {
    console.log('🌐 ToastError.info() llamado (global)');
    const event = new CustomEvent('toast-error-global', {
      detail: { type: 'info', message, title }
    });
    window.dispatchEvent(event);
  }
};