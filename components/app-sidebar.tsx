"use client"

import * as React from "react"
import {
  AudioWaveform,
  Blocks,
  BookText,
  Calendar,
  Command,
  FileText,
  Home,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavMain } from "@/components/nav-main"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ModeToggle } from "./mode-toggle"

// This is sample data.
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: Command,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "FileHub",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Buscar",
      url: "#",
      icon: Search,
    },
    {
      title: "Mis Documentos",
      url: "#",
      icon: FileText,
      isActive: false,
    }
  ],
  favorites: [
    {
      name: "Estrategia de Marketing para el Año 2024",
      url: "#",
      emoji: "📊",
    },
    {
      name: "Resumen del Informe Financiero del Primer Trimestre",
      url: "#",
      emoji: "💼",
    },
    {
      name: "Planos y Descripción del Proyecto de Arquitectura 2023",
      url: "#",
      emoji: "🏗️",
    },
    {
      name: "Guía del Empleado: Normas y Políticas de la Empresa",
      url: "#",
      emoji: "📚",
    },
    {
      name: "Receta para Preparar Pastel de Chocolate",
      url: "#",
      emoji: "🍰",
    },
    {
      name: "Lanzamiento del Nuevo Producto: Resumen Ejecutivo",
      url: "#",
      emoji: "🚀",
    },
    {
      name: "Estudio sobre Energías Renovables para el Futuro Sostenible",
      url: "#",
      emoji: "♻️",
    },
    {
      name: "Resumen de Ventas Anuales 2023",
      url: "#",
      emoji: "📈",
    },
    {
      name: "Reseñas de peliculas 2024",
      url: "#",
      emoji: "🎬",
    },
    {
      name: "Habitos diarios",
      url: "#",
      emoji: "✅",
    },
    {
      name: "Estrategia de Marketing para el Año 2024",
      url: "#",
      emoji: "📊",
    },
    {
      name: "Resumen del Informe Financiero del Primer Trimestre",
      url: "#",
      emoji: "💼",
    },
    {
      name: "Planos y Descripción del Proyecto de Arquitectura 2023",
      url: "#",
      emoji: "🏗️",
    },
    {
      name: "Guía del Empleado: Normas y Políticas de la Empresa",
      url: "#",
      emoji: "📚",
    },
    {
      name: "Receta para Preparar Pastel de Chocolate",
      url: "#",
      emoji: "🍰",
    },
    {
      name: "Lanzamiento del Nuevo Producto: Resumen Ejecutivo",
      url: "#",
      emoji: "🚀",
    },
    {
      name: "Estudio sobre Energías Renovables para el Futuro Sostenible",
      url: "#",
      emoji: "♻️",
    },
    {
      name: "Resumen de Ventas Anuales 2023",
      url: "#",
      emoji: "📈",
    },
    {
      name: "Reseñas de peliculas 2024",
      url: "#",
      emoji: "🎬",
    },
    {
      name: "Habitos diarios",
      url: "#",
      emoji: "✅",
    },
    {
      name: "Estrategia de Marketing para el Año 2024",
      url: "#",
      emoji: "📊",
    },
    {
      name: "Resumen del Informe Financiero del Primer Trimestre",
      url: "#",
      emoji: "💼",
    },
    {
      name: "Planos y Descripción del Proyecto de Arquitectura 2023",
      url: "#",
      emoji: "🏗️",
    },
    {
      name: "Guía del Empleado: Normas y Políticas de la Empresa",
      url: "#",
      emoji: "📚",
    },
    {
      name: "Receta para Preparar Pastel de Chocolate",
      url: "#",
      emoji: "🍰",
    },
    {
      name: "Lanzamiento del Nuevo Producto: Resumen Ejecutivo",
      url: "#",
      emoji: "🚀",
    },
    {
      name: "Estudio sobre Energías Renovables para el Futuro Sostenible",
      url: "#",
      emoji: "♻️",
    },
    {
      name: "Resumen de Ventas Anuales 2023",
      url: "#",
      emoji: "📈",
    },
    {
      name: "Reseñas de peliculas 2024",
      url: "#",
      emoji: "🎬",
    },
    {
      name: "Habitos diarios",
      url: "#",
      emoji: "✅",
    },
    {
      name: "Estrategia de Marketing para el Año 2024",
      url: "#",
      emoji: "📊",
    },
    {
      name: "Resumen del Informe Financiero del Primer Trimestre",
      url: "#",
      emoji: "💼",
    },
    {
      name: "Planos y Descripción del Proyecto de Arquitectura 2023",
      url: "#",
      emoji: "🏗️",
    },
    {
      name: "Guía del Empleado: Normas y Políticas de la Empresa",
      url: "#",
      emoji: "📚",
    },
    {
      name: "Receta para Preparar Pastel de Chocolate",
      url: "#",
      emoji: "🍰",
    },
    {
      name: "Lanzamiento del Nuevo Producto: Resumen Ejecutivo",
      url: "#",
      emoji: "🚀",
    },
    {
      name: "Estudio sobre Energías Renovables para el Futuro Sostenible",
      url: "#",
      emoji: "♻️",
    },
    {
      name: "Resumen de Ventas Anuales 2023",
      url: "#",
      emoji: "📈",
    },
    {
      name: "Reseñas de peliculas 2024",
      url: "#",
      emoji: "🎬",
    },
    {
      name: "Habitos diarios",
      url: "#",
      emoji: "✅",
    },
    {
      name: "Estrategia de Marketing para el Año 2024",
      url: "#",
      emoji: "📊",
    },
    {
      name: "Resumen del Informe Financiero del Primer Trimestre",
      url: "#",
      emoji: "💼",
    },
    {
      name: "Planos y Descripción del Proyecto de Arquitectura 2023",
      url: "#",
      emoji: "🏗️",
    },
    {
      name: "Guía del Empleado: Normas y Políticas de la Empresa",
      url: "#",
      emoji: "📚",
    },
    {
      name: "Receta para Preparar Pastel de Chocolate",
      url: "#",
      emoji: "🍰",
    },
    {
      name: "Lanzamiento del Nuevo Producto: Resumen Ejecutivo",
      url: "#",
      emoji: "🚀",
    },
    {
      name: "Estudio sobre Energías Renovables para el Futuro Sostenible",
      url: "#",
      emoji: "♻️",
    },
    {
      name: "Resumen de Ventas Anuales 2023",
      url: "#",
      emoji: "📈",
    },
    {
      name: "Reseñas de peliculas 2024",
      url: "#",
      emoji: "🎬",
    },
    {
      name: "Habitos diarios",
      url: "#",
      emoji: "✅",
    },
  ],
  today: [
    {
      name: "Estrategia de Marketing para el Año 2024",
      url: "#",
      emoji: "📊",
    },
    {
      name: "Resumen del Informe Financiero del Primer Trimestre",
      url: "#",
      emoji: "💼",
    },
    {
      name: "Planos y Descripción del Proyecto de Arquitectura 2023",
      url: "#",
      emoji: "🏗️",
    },
    {
      name: "Guía del Empleado: Normas y Políticas de la Empresa",
      url: "#",
      emoji: "📚",
    },
    {
      name: "Receta para Preparar Pastel de Chocolate",
      url: "#",
      emoji: "🍰",
    },
    {
      name: "Lanzamiento del Nuevo Producto: Resumen Ejecutivo",
      url: "#",
      emoji: "🚀",
    },
    {
      name: "Estudio sobre Energías Renovables para el Futuro Sostenible",
      url: "#",
      emoji: "♻️",
    },
    {
      name: "Resumen de Ventas Anuales 2023",
      url: "#",
      emoji: "📈",
    },
    {
      name: "Reseñas de peliculas 2024",
      url: "#",
      emoji: "🎬",
    },
    {
      name: "Habitos diarios",
      url: "#",
      emoji: "✅",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <SidebarTrigger />
        {/* <TeamSwitcher teams={data.teams} /> */}
        {/* <ModeToggle/> */}
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
