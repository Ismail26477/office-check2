"use client"

import { useState } from "react"
import { DashboardNav } from "@/src/components/dashboard/DashboardNav"
import { OverviewSection } from "@/src/components/dashboard/OverviewSection"
import { AttendanceSection } from "@/src/components/dashboard/AttendanceSection"
import { TasksSection } from "@/src/components/dashboard/TasksSection"
import { EditorSheetManager } from "@/src/components/editor/EditorSheetManager"
import { useAuth } from "@/contexts/AuthContext"

export default function EmployeeDashboard() {
  const [activeTab, setActiveTab] = useState<"attendance" | "tasks" | "overview" | "editor-sheets">("overview")
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <DashboardNav activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="container max-w-7xl mx-auto px-4 py-8">
        {activeTab === "overview" && <OverviewSection />}
        {activeTab === "attendance" && <AttendanceSection />}
        {activeTab === "tasks" && <TasksSection />}
        {activeTab === "editor-sheets" && <EditorSheetManager />}
      </main>
    </div>
  )
}
