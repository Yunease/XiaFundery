---
name: "MintWord · 薄荷词汇"
slug: "mint-word"
type: "software"
status: "released"
featured: true
summary: "基于 SM-2 间隔重复算法的跨平台单词学习桌面应用，内置多语种词库与 AI 辅助。"
image: "/img/covers/MintWord.png"
tech: ["Tauri", "React", "TypeScript", "Rust", "SQLite", "Vite"]
startDate: "2026-05-28"
publishDate: "2026-05-28"
updatedDate: "2026-06-04"
members: ["Lumina"]
relatedProjects: []
relatedResearch: []
intro: "薄荷词汇（MintWord）用 Tauri v2 + React + Rust + SQLite 打造，覆盖英语考级与日语 JLPT 词库，并支持 Anki 导入与 AI 出题。"
links:
  github: "https://github.com/Yunease/MintWord"
---

## 项目定位

MintWord（薄荷词汇）是一款基于 **SM-2 间隔重复算法** 的跨平台词汇学习桌面应用，目标是在本地提供科学、可定制的背单词体验。

## 核心功能

- **间隔重复**：基于经典 SM-2 算法自动排布复习计划。
- **内置词库**：英语基于 ECDICT（CET-4 / CET-6 / 考研 / GRE / TOEFL / IELTS / 高考 / 中考），日语覆盖 JLPT N5–N1。
- **自定义与导入**：支持自定义词库、批量添加，以及 **CSV** 与 **Anki APKG** 导入（导入前可预览字段映射，并保留 Anki 学习进度）。
- **语音朗读**：Windows / macOS 系统 TTS 按词库语言自动选声线；可配置 OpenAI 兼容接口的 AI TTS。
- **学习辅助**：复习记录与热力图、掌握标记、听写模式、AI 出题（选择题）、AI 阅读理解、文库管理、快速预览、单词笔记。
- **体验细节**：4 套主题色（薄荷 / 海洋 / 暖阳 / 薰衣草）+ 深色模式，简体 / 繁体 / 英文三语界面，学习快捷键。

## 技术架构

| 层 | 技术 |
| --- | --- |
| 桌面框架 | Tauri v2 |
| 前端 | React 19 + TypeScript + Vite + Tailwind CSS v4 |
| 状态 / 路由 | TanStack React Query + React Router DOM v7 |
| 后端 | Rust |
| 数据库 | SQLite（rusqlite） |
| 音频 / AI | rodio 播放；reqwest 调用 OpenAI 兼容接口 |

## 许可

AGPL-3.0。
