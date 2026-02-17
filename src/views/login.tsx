import React, { useState, useEffect, useRef } from "react";
import { useToastError } from "../components/ToastError";
import { Eye, EyeOff, Lock, User, ArrowRight } from "lucide-react";
import logororaima from "../assets/Logo_Parque_Roraima.png";

type FormData = {
  username: string;
  password: string;
};

type Credential = {
  user: string;
  pass: string;
};

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const { success, error, warning } = useToastError();

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const username = formData.username.trim();
    const password = formData.password.trim();

    if (!username || !password) {
      warning(
        "Por favor, completa todos los campos antes de continuar.",
        "Campos requeridos",
      );
      return;
    }

    if (!isValidEmail(username)) {
      warning(
        "El formato del correo electrónico no es válido. Por favor, verifícalo.",
        "Email inválido",
      );
      return;
    }

    const validCredentials: Credential[] = [
      { user: "admin@example.com", pass: "Admin123" },
      { user: "usuario@test.com", pass: "Test123" },
      { user: "test@test.com", pass: "Test123" },
      { user: "demo@demo.com", pass: "Demo123" },
    ];

    const isValid = validCredentials.some(
      (cred) => cred.user === username && cred.pass === password,
    );

    if (isValid) {
      success(
        `¡Bienvenido de nuevo! Has iniciado sesión correctamente.`,
        "Acceso concedido",
      );
      setTimeout(() => {
        onLogin();
      }, 1000);
    } else {
      error(
        "Las credenciales proporcionadas no son válidas. Verifica tu correo y contraseña.",
        "Error de autenticación",
      );
      setTimeout(() => {
        const passwordField = document.getElementById(
          "password",
        ) as HTMLInputElement;
        if (passwordField) {
          passwordField.focus();
          passwordField.select();
        }
      }, 100);
    }
  };

  const togglePassword = (): void => setShowPassword(!showPassword);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((err) => console.log("Autoplay bloqueado:", err));
    }
  };

  useEffect(() => {
    const timer = setTimeout(playVideo, 100);
    const handleInteraction = () => playVideo();
    document.addEventListener("click", handleInteraction, { once: true });

    console.log(`🔐 LOGIN SYSTEM READY`);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleInteraction);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#EDE8D0]">
      {/* Video/Fondo - Usamos absolute e inset-0 para que no empuje el contenido */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <source src="/fondov1.mp4" type="video/mp4" />
        </video>
        {/* Overlay: Asegúrate de que este div sea el que da el tono oscuro/claro */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Contenedor del Login con Centrado Forzado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-112.5 px-4">
        <div className="bg-white/90 backdrop-blur-xl p-8 md:p-10 rounded-[30px] shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <img
                src={logororaima}
                alt="Logo"
                className="w-70 h-40 object-contain"
              />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
              Iniciar Sesión
            </h1>
            <p className="text-gray-600">Ingresa a tu cuenta personal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Inputs (username) */}
            <div className="relative group">
              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#8BAF3B] transition-colors"
                size={20}
              />
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full py-4 pl-12 pr-4 bg-gray-100 border border-transparent rounded-2xl focus:bg-white focus:border-[#8BAF3B] focus:ring-4 focus:ring-[#8BAF3B]/10 outline-none transition-all"
                placeholder="Correo Electrónico"
                required
              />
            </div>

            {/* Inputs (password) */}
            <div className="relative group">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#8BAF3B] transition-colors"
                size={20}
              />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full py-4 pl-12 pr-12 bg-gray-100 border border-transparent rounded-2xl focus:bg-white focus:border-[#8BAF3B] focus:ring-4 focus:ring-[#8BAF3B]/10 outline-none transition-all"
                placeholder="Contraseña"
                required
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#8BAF3B] hover:bg-[#7a9a34] text-white rounded-2xl font-bold shadow-lg shadow-[#8BAF3B]/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              Ingresar <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-8 text-center border-t border-gray-100 pt-6">
            <p className="text-xs text-gray-400 font-medium">
              © 2026 Parque Roraima - Proyecto de grado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
